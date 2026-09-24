require 'tmpdir'
require 'jekyll'
require 'nokogiri'
require_relative 'publish-curation'

def check(condition, message)
  raise message unless condition
end

def rejects
  yield
rescue ArgumentError, KeyError
  return
else
  raise 'Expected validation failure'
end

article = {
  'publishable' => true, 'source_url' => 'https://www.powerplatformtip.com/article/powerplatformtip/powerplatformtip-56-empowering-tools-in-coe/',
  'source_title' => '#PowerPlatformTip 56', 'source_name' => 'PowerPlatformTip', 'source_author' => 'Marcel Lehmann',
  'source_language' => 'en', 'source_published_at' => '2023-05-30', 'tags' => %w[governance ownership],
  'en' => { 'title' => 'CoE ownership reviews', 'description' => 'CoE tools support ownership reviews.', 'tldr' => 'CoE tools support reviews of permissions and orphaned resources.', 'takeaway' => "- Admins/CoE: include resource ownership in offboarding checks.\n- Security/Compliance: review orphaned resources on a fixed schedule." },
  'de' => { 'title' => 'CoE: Verantwortlichkeiten prüfen', 'description' => 'CoE-Werkzeuge unterstützen die Prüfung.', 'tldr' => 'CoE-Werkzeuge helfen bei der Prüfung von Berechtigungen und verwaisten Ressourcen.', 'takeaway' => "- Admins/CoE: Ressourcenverantwortung in Offboarding-Checks aufnehmen.\n- Security/Compliance: verwaiste Ressourcen nach festem Plan prüfen." },
}
event = { 'action' => 'curated-publication', 'client_payload' => { 'request_id' => '00000000-0000-4000-8000-000000000001', 'articles' => [article], 'credit' => { 'name' => 'PRIVATE TEST NAME', 'publish_credit' => false } } }
Dir.mktmpdir do |root|
  files = CurationPublisher.publish(event, root, now: Time.utc(2026, 9, 18))
  check(files.length == 2, 'Expected both language versions')
  files.each do |name|
    content = File.read(File.join(root, '_posts', name))
    check(!content.include?('PRIVATE TEST NAME'), 'Private credit leaked')
    check(content.include?('translation_url:'), 'Missing alternate language')
    check(content.include?('source_url:'), 'Missing original source')
  end
  repository = File.expand_path('..', __dir__)
  FileUtils.cp_r(File.join(repository, '_includes'), root)
  FileUtils.mkdir_p(File.join(root, '_data'))
  FileUtils.cp(File.join(repository, '_data', 'authors.yml'), File.join(root, '_data'))
  FileUtils.cp_r(File.join(repository, '_data', 'locales'), File.join(root, '_data'))
  configuration = Jekyll.configuration('config' => File.join(repository, '_config.yml'), 'source' => root, 'destination' => File.join(root, '_site'), 'quiet' => true)
  Jekyll::Site.new(configuration).process
  %w[en de].each do |locale|
    rendered = Dir.glob(File.join(root, '_site', locale, 'posts', '*', 'index.html')).first
    check(!rendered.nil?, "Missing rendered #{locale} page")
    document = Nokogiri::HTML5(File.read(rendered))
    check(document.css('head link[rel="alternate"][hreflang]').map { |link| link['hreflang'] }.sort == %w[de en], 'Missing reciprocal hreflang')
    check(document.at_css('a.original-link')['href'] == article['source_url'], 'Original link changed')
    check(document.css('.contributor-credit').empty?, 'Unapproved contributor rendered')
    check(document.css('.curated-attribution a[href=""]').empty?, 'Empty author link')
    check(document.at_css('html')['lang'] == locale, 'Incorrect document language')
    check(document.css('li').length >= 2, 'Takeaway did not render as a bulleted list')
  end
  check(CurationPublisher.publish(event, root).empty?, 'Repeated URL published twice')
  article['source_url'] = article['source_url'].sub('www.', '').sub(%r{/$}, '') + '?utm_source=test'
  check(CurationPublisher.publish(event, root).empty?, 'Tracking URL was not deduplicated')
end
rejects { CurationPublisher.url('http://127.0.0.1/') }
rejects { CurationPublisher.url('https://localhost/') }
rejects { CurationPublisher.url('https://user:password@powerplatformtip.com/') }
rejects { CurationPublisher.credit({ 'publish_credit' => true, 'linkedin' => 'https://linkedin.com.evil.org/in/person' }) }
rejects { CurationPublisher.render(article.merge('tags' => ['invented-tag']), {}, Time.now) }
rejects { CurationPublisher.render(article.merge('en' => article['en'].merge('tldr' => 'x' * 601)), {}, Time.now) }
rejects { CurationPublisher.render(article.merge('en' => article['en'].merge('takeaway' => 'No bullet prefix on this line.')), {}, Time.now) }
rejects { CurationPublisher.render(article.merge('en' => article['en'].merge('takeaway' => (1..5).map { |n| "- Group #{n}: too many lines." }.join("\n"))), {}, Time.now) }
check(CurationPublisher.credit({ 'publish_credit' => 'true', 'name' => 'private' }).nil?, 'String consent accepted')
check(!CurationPublisher.body_text('{% include secret %}<script>[click](https://evil.org)').include?('{%'), 'Liquid injection')
check(!CurationPublisher.body_text('<script>').include?('<script>'), 'HTML injection')
puts 'Publisher checks passed: rendered languages and hreflang, attribution, URL deduplication, consent, limits and escaping.'