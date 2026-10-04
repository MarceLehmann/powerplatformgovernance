require 'tmpdir'
require 'jekyll'
require 'nokogiri'
require 'stringio'
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

# Three plain-text question/answer pairs per language (8-35 words per answer), as the publisher expects them.
FAQ_PAIRS = {
  'en' => [
    ['How do CoE tools help find orphaned resources in the Power Platform?',
     'CoE tools list apps, flows and other resources with their owners, so resources whose owner has left show up in one place. Admins can then reassign or retire them.'],
    ['Which permissions should an ownership review in the CoE cover?',
     'An ownership review compares who can edit and share a solution with who is responsible for it today. Permissions left over after a role change or departure are the main finding.'],
    ['Why should resource ownership be part of offboarding checks?',
     'When a person leaves, the apps and flows they own keep running but nobody is accountable for changes, licences or failures. Add resource ownership to offboarding checks.']
  ],
  'de' => [
    ['Wie finden CoE-Werkzeuge verwaiste Ressourcen in der Power Platform?',
     'CoE-Werkzeuge listen Apps, Flows und weitere Ressourcen mit ihren Verantwortlichen auf, sodass Ressourcen ausgeschiedener Besitzer an einer Stelle sichtbar werden. Administratoren können sie neu zuweisen oder stilllegen.'],
    ['Welche Berechtigungen gehören in eine Prüfung der Verantwortlichkeiten im CoE?',
     'Die Prüfung vergleicht, wer eine Lösung bearbeiten und teilen darf, mit der heute zuständigen Person. Berechtigungen, die nach einem Rollenwechsel oder Austritt bleiben, sind der wichtigste Befund.'],
    ['Warum gehört die Ressourcenverantwortung in die Offboarding-Checks?',
     'Wenn eine Person ausscheidet, laufen ihre Apps und Flows weiter, aber niemand verantwortet Änderungen, Lizenzen oder Fehler. Ressourcenverantwortung gehört deshalb in die Offboarding-Checks.']
  ]
}.freeze
def faq_for(locale, variant: nil)
  FAQ_PAIRS.fetch(locale).map do |question, answer|
    { 'question' => variant ? question.sub('?', " (#{variant})?") : question, 'answer' => answer }
  end
end

def words(count)
  Array.new(count, 'word').join(' ')
end

def replace_first(faq, changes)
  faq.each_with_index.map { |item, index| index.zero? ? item.merge(changes) : item }
end

article = {
  'publishable' => true, 'source_url' => 'https://www.powerplatformtip.com/article/powerplatformtip/powerplatformtip-56-empowering-tools-in-coe/',
  'source_title' => '#PowerPlatformTip 56', 'source_name' => 'PowerPlatformTip', 'source_author' => 'Marcel Lehmann',
  'source_language' => 'en', 'source_published_at' => '2023-05-30', 'tags' => %w[governance ownership],
  'card_topic' => 'Ownership', 'card_quote' => 'Ownership is a chain. Check the links before one breaks.',
  'card_take' => 'The owner leaves. The solution stays.', 'card_state' => 'Owned',
  'en' => { 'title' => 'CoE ownership reviews', 'description' => 'CoE tools support ownership reviews.', 'tldr' => 'CoE tools support reviews of permissions and orphaned resources.', 'takeaway' => "- Admins/CoE: include resource ownership in offboarding checks.\n- Security/Compliance: review orphaned resources on a fixed schedule.", 'faq' => faq_for('en') },
  'de' => { 'title' => 'CoE: Verantwortlichkeiten prüfen', 'description' => 'CoE-Werkzeuge unterstützen die Prüfung.', 'tldr' => 'CoE-Werkzeuge helfen bei der Prüfung von Berechtigungen und verwaisten Ressourcen.', 'takeaway' => "- Admins/CoE: Ressourcenverantwortung in Offboarding-Checks aufnehmen.\n- Security/Compliance: verwaiste Ressourcen nach festem Plan prüfen.", 'faq' => faq_for('de') },
}
event = { 'action' => 'curated-publication', 'client_payload' => { 'request_id' => '00000000-0000-4000-8000-000000000001', 'articles' => [article], 'credit' => { 'name' => 'PRIVATE TEST NAME', 'publish_credit' => false } } }
Dir.mktmpdir do |root|
  files = CurationPublisher.publish(event, root, now: Time.utc(2026, 9, 18))
  check(files.length == 2, 'Expected both language versions')
  identifier = Digest::SHA256.hexdigest(CurationPublisher.key(article['source_url']))[0, 24]
  files.each do |name|
    content = File.read(File.join(root, '_posts', name))
    check(!content.include?('PRIVATE TEST NAME'), 'Private credit leaked')
    check(content.include?('translation_url:'), 'Missing alternate language')
    check(content.include?('source_url:'), 'Missing original source')
    check(content.include?("/assets/img/curated/#{identifier}.png"), 'Missing card image path')
    # The URL/filename must be a readable slug from the title, not the bare hash - the hash still
    # backs the image path and curation_id (checked above/below), just not what readers see.
    check(name.include?('coe-ownership-reviews'), "Filename is not a readable slug: #{name}")
    check(!name.include?(identifier), 'Filename must not be the raw hash')
    check(content.match?(%r{permalink: "/[a-z]{2}/posts/coe-ownership-reviews-[0-9a-f]{8}/"}), 'Permalink is not a readable slug')
    front = YAML.safe_load(content.split(/^---\s*$/, 3)[1], permitted_classes: [Date, Time])
    check(front['faq'].is_a?(Array) && front['faq'].length == 3, 'Front matter must carry exactly 3 FAQ items')
    check(front['faq'].all? { |item| item.keys.sort == %w[answer question] }, 'FAQ items must only have question and answer')
    check(front['faq'].map { |item| item['question'] } == FAQ_PAIRS.fetch(front['lang']).map(&:first), 'FAQ questions changed on the way into the front matter')
    check(!content.include?('## FAQ') && !content.include?('Häufige Fragen'), 'FAQ block belongs to the layout, not the Markdown body')
  end
  manifest = JSON.parse(File.read(File.join(root, 'tools', 'pending-cards.json')))
  check(manifest.length == 1 && manifest.first['id'] == identifier && manifest.first['quote'] == article['card_quote'], 'Bad pending-cards.json entry')
  repository = File.expand_path('..', __dir__)
  FileUtils.cp_r(File.join(repository, '_includes'), root)
  FileUtils.cp_r(File.join(repository, '_layouts'), root)
  FileUtils.mkdir_p(File.join(root, '_data'))
  FileUtils.cp(File.join(repository, '_data', 'authors.yml'), File.join(root, '_data'))
  FileUtils.cp_r(File.join(repository, '_data', 'locales'), File.join(root, '_data'))
  configuration = Jekyll.configuration('config' => File.join(repository, '_config.yml'), 'source' => root, 'destination' => File.join(root, '_site'), 'quiet' => true)
  Jekyll::Site.new(configuration).process
  %w[en de].each do |locale|
    rendered = Dir.glob(File.join(root, '_site', locale, 'posts', '*', 'index.html')).first
    check(!rendered.nil?, "Missing rendered #{locale} page")
    document = Nokogiri::HTML5(File.read(rendered))
    check(document.css('head link[rel="alternate"][hreflang]').map { |link| link['hreflang'] }.sort == %w[de en x-default], 'Missing reciprocal hreflang')
    check(document.at_css('a.original-link')['href'] == article['source_url'], 'Original link changed')
    check(document.css('.contributor-credit').empty?, 'Unapproved contributor rendered')
    check(document.css('.curated-attribution a[href=""]').empty?, 'Empty author link')
    check(document.at_css('html')['lang'] == locale, 'Incorrect document language')
    check(document.css('li').length >= 2, 'Takeaway did not render as a bulleted list')
    blocks = document.css('section.post-faq')
    check(blocks.length == 1, 'Expected exactly one visible FAQ block')
    questions = blocks.first.css('h3').map { |node| node.text.strip }
    answers = blocks.first.css('p').map { |node| node.text.strip }
    check(questions.length == 3 && answers.length == 3, 'Expected 3 visible questions and 3 answers')
    check(blocks.first.css('h2').map { |node| node.text.strip } == [locale == 'de' ? 'Häufige Fragen' : 'Frequently asked questions'], 'Wrong FAQ heading')
    faq_documents = document.css('script[type="application/ld+json"]').map { |node| JSON.parse(node.text) }.select { |data| data['@type'] == 'FAQPage' }
    check(faq_documents.length == 1, 'Expected exactly one FAQPage block')
    entities = faq_documents.first['mainEntity']
    check(faq_documents.first['inLanguage'] == locale, 'FAQPage language differs from the page language')
    check(entities.length == 3, 'FAQPage must carry exactly 3 questions')
    check(entities.map { |entity| entity['name'] } == questions, 'FAQPage questions differ from the visible questions')
    check(entities.map { |entity| entity['acceptedAnswer']['text'] } == answers, 'FAQPage answers differ from the visible answers')
    check(questions == FAQ_PAIRS.fetch(locale).map(&:first), 'Visible questions differ from the payload')
  end
  check(CurationPublisher.publish(event, root).empty?, 'Repeated URL published twice')
  article['source_url'] = article['source_url'].sub('www.', '').sub(%r{/$}, '') + '?utm_source=test'
  check(CurationPublisher.publish(event, root).empty?, 'Tracking URL was not deduplicated')
end

Dir.mktmpdir do |root|
  broken = article.merge('source_url' => 'https://www.powerplatformtip.com/article/broken-one/', 'en' => article['en'].merge('takeaway' => 'No bullet prefix, this one is malformed.'))
  good = article.merge('source_url' => 'https://www.powerplatformtip.com/article/good-one/')
  batch_event = { 'action' => 'curated-publication', 'client_payload' => { 'request_id' => '00000000-0000-4000-8000-000000000002', 'articles' => [broken, good], 'credit' => {} } }
  files = CurationPublisher.publish(batch_event, root, now: Time.utc(2026, 9, 18))
  check(files.length == 2, 'One malformed article in a batch must not block the rest')
end

Dir.mktmpdir do |root|
  video = article.merge('source_url' => 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', 'source_type' => 'youtube', 'source_video_id' => 'dQw4w9WgXcQ')
  event = { 'action' => 'curated-publication', 'client_payload' => { 'request_id' => '00000000-0000-4000-8000-000000000003', 'articles' => [video], 'credit' => {} } }
  files = CurationPublisher.publish(event, root, now: Time.utc(2026, 9, 18))
  check(files.length == 2, 'Expected both language versions for a video source')
  files.each do |name|
    content = File.read(File.join(root, '_posts', name))
    check(content.include?('source_type: youtube'), 'Missing source_type in front matter')
    check(content.include?('source_video_id: dQw4w9WgXcQ'), 'Missing source_video_id in front matter')
    check(content.include?('{% include source-video-embed.html %}'), 'Missing video embed include')
  end
  repository = File.expand_path('..', __dir__)
  FileUtils.cp_r(File.join(repository, '_includes'), root)
  FileUtils.mkdir_p(File.join(root, '_data'))
  FileUtils.cp(File.join(repository, '_data', 'authors.yml'), File.join(root, '_data'))
  FileUtils.cp_r(File.join(repository, '_data', 'locales'), File.join(root, '_data'))
  configuration = Jekyll.configuration('config' => File.join(repository, '_config.yml'), 'source' => root, 'destination' => File.join(root, '_site'), 'quiet' => true)
  Jekyll::Site.new(configuration).process
  rendered = Dir.glob(File.join(root, '_site', 'en', 'posts', '*', 'index.html')).first
  document = Nokogiri::HTML5(File.read(rendered))
  iframe = document.at_css('.source-video-embed iframe')
  check(!iframe.nil?, 'Video iframe did not render')
  check(iframe['src'] == 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ', 'Wrong or non-privacy-enhanced embed URL')
  check(iframe['loading'] == 'lazy', 'Video iframe must lazy-load')
  check(!iframe['title'].to_s.strip.empty?, 'Video iframe missing accessible title')
end
rejects { CurationPublisher.render(article.merge('source_type' => 'podcast-episode'), {}, Time.now) }
rejects { CurationPublisher.render(article.merge('source_url' => 'https://www.youtube.com/watch?v=short', 'source_type' => 'youtube', 'source_video_id' => 'short'), {}, Time.now) }
Dir.mktmpdir do |root|
  no_video_id = article.merge('source_url' => 'https://www.youtube.com/watch?v=missingid', 'source_type' => 'youtube')
  event = { 'action' => 'curated-publication', 'client_payload' => { 'request_id' => '00000000-0000-4000-8000-000000000004', 'articles' => [no_video_id], 'credit' => {} } }
  check(CurationPublisher.publish(event, root, now: Time.utc(2026, 9, 18)).empty?, 'YouTube source without a video ID must be skipped, not published')
end
rejects { CurationPublisher.url('http://127.0.0.1/') }
rejects { CurationPublisher.url('https://localhost/') }
rejects { CurationPublisher.url('https://user:password@powerplatformtip.com/') }
rejects { CurationPublisher.credit({ 'publish_credit' => true, 'linkedin' => 'https://linkedin.com.evil.org/in/person' }) }
rejects { CurationPublisher.render(article.merge('tags' => ['invented-tag']), {}, Time.now) }
rejects { CurationPublisher.render(article.merge('en' => article['en'].merge('tldr' => 'x' * 601)), {}, Time.now) }
rejects { CurationPublisher.render(article.merge('en' => article['en'].merge('takeaway' => 'No bullet prefix on this line.')), {}, Time.now) }
rejects { CurationPublisher.render(article.merge('en' => article['en'].merge('takeaway' => (1..5).map { |n| "- Group #{n}: too many lines." }.join("\n"))), {}, Time.now) }
rejects { CurationPublisher.render(article.merge('card_quote' => 'Smart “quotes” break the renderer'), {}, Time.now) }
rejects { CurationPublisher.render(article.merge('card_topic' => 'A topic label that is much too long for a chip'), {}, Time.now) }
def with_faq(source, locale, faq)
  source.merge(locale => source[locale].merge('faq' => faq))
end

good_en = faq_for('en')
check(CurationPublisher.faq_items(good_en).length == 3, 'Valid FAQ rejected')
check(CurationPublisher.faq_items(replace_first(good_en, 'answer' => words(8))).length == 3, '8-word answer must be accepted')
check(CurationPublisher.faq_items(replace_first(good_en, 'answer' => words(35))).length == 3, '35-word answer must be accepted')
rejects { CurationPublisher.render(with_faq(article, 'en', good_en.first(2)), {}, Time.now) }
rejects { CurationPublisher.render(with_faq(article, 'en', good_en + [{ 'question' => 'Is a fourth question allowed here at all?', 'answer' => words(20) }]), {}, Time.now) }
rejects { CurationPublisher.render(with_faq(article, 'de', good_en.first(2)), {}, Time.now) }
rejects { CurationPublisher.render(with_faq(article, 'en', replace_first(good_en, 'answer' => words(7))), {}, Time.now) }
rejects { CurationPublisher.render(with_faq(article, 'en', replace_first(good_en, 'answer' => words(36))), {}, Time.now) }
rejects { CurationPublisher.render(with_faq(article, 'en', replace_first(good_en, 'answer' => Array.new(30, 'abcdefghijklmnopqrstuvwxyz').join(' '))), {}, Time.now) }
rejects { CurationPublisher.render(with_faq(article, 'en', replace_first(good_en, 'question' => 'Is this question without a question mark')), {}, Time.now) }
rejects { CurationPublisher.render(with_faq(article, 'en', replace_first(good_en, 'question' => 'Short one now?')), {}, Time.now) }
rejects { CurationPublisher.render(with_faq(article, 'en', replace_first(good_en, 'question' => "#{'Very long question ' * 8}?")), {}, Time.now) }
rejects { CurationPublisher.render(with_faq(article, 'en', replace_first(good_en, 'answer' => "#{words(20)} <b>bold</b>")), {}, Time.now) }
%w[< > { } ` * _ [ ] #].each do |character|
  rejects { CurationPublisher.faq_items(replace_first(good_en, 'answer' => "#{words(20)} #{character}")) }
  rejects { CurationPublisher.faq_items(replace_first(good_en, 'question' => "Does the character #{character} belong in a question?")) }
end
rejects { CurationPublisher.faq_items(replace_first(good_en, 'answer' => "#{words(12)}\n#{words(12)}")) }
rejects { CurationPublisher.faq_items(good_en.each_with_index.map { |item, index| index == 1 ? item.merge('question' => good_en[0]['question'].upcase) : item }) }
rejects { CurationPublisher.faq_items(replace_first(good_en, 'note' => 'extra key')) }
rejects { CurationPublisher.faq_items(good_en.map { |item| item.reject { |key, _| key == 'answer' } }) }
rejects { CurationPublisher.faq_items(['not a hash'] * 3) }
rejects { CurationPublisher.faq_items('not a list') }
rejects { CurationPublisher.faq_items(nil) }
rejects { CurationPublisher.render(article.merge('en' => article['en'].reject { |key, _| key == 'faq' }), {}, Time.now) }
rejects { CurationPublisher.render(article.merge('de' => article['de'].reject { |key, _| key == 'faq' }), {}, Time.now) }
rejects { CurationPublisher.faq_items(good_en, Set.new([CurationPublisher.faq_key(good_en[2]['question'])])) }
check(CurationPublisher.faq_items(good_en, Set.new(['somethingelse'])).length == 3, 'Unrelated known question must not block a FAQ')

# A question that already exists on another post of the same language is not published a second time;
# the same article with distinct questions is.
Dir.mktmpdir do |root|
  run = lambda do |name, articles|
    payload = { 'action' => 'curated-publication', 'client_payload' => { 'request_id' => '00000000-0000-4000-8000-0000000000aa', 'articles' => articles, 'credit' => {} } }
    original = $stderr
    $stderr = StringIO.new
    begin
      [CurationPublisher.publish(payload, root, now: Time.utc(2026, 9, 18)), $stderr.string]
    ensure
      $stderr = original
    end
  end
  first = article.merge('source_url' => 'https://www.powerplatformtip.com/article/faq-first/')
  second = article.merge('source_url' => 'https://www.powerplatformtip.com/article/faq-second/')
  third = with_faq(with_faq(article.merge('source_url' => 'https://www.powerplatformtip.com/article/faq-third/'), 'en', faq_for('en', variant: 'third')), 'de', faq_for('de', variant: 'dritter')).merge('source_url' => 'https://www.powerplatformtip.com/article/faq-third/')
  files, = run.call('first', [first])
  check(files.length == 2, 'First article with FAQ must be published')
  files, warnings = run.call('second', [second])
  check(files.empty?, 'Article repeating the questions of an existing post must be skipped')
  check(warnings.include?('Duplicate FAQ question'), 'Skip reason for repeated questions must be reported')
  files, = run.call('third', [third])
  check(files.length == 2, 'Article with distinct questions must be published')
  files, = run.call('again', [first])
  check(files.empty?, 'Already published article must stay skipped')
end
Dir.mktmpdir do |root|
  one = article.merge('source_url' => 'https://www.powerplatformtip.com/article/faq-batch-one/')
  two = article.merge('source_url' => 'https://www.powerplatformtip.com/article/faq-batch-two/')
  batch = { 'action' => 'curated-publication', 'client_payload' => { 'request_id' => '00000000-0000-4000-8000-0000000000bb', 'articles' => [one, two], 'credit' => {} } }
  original = $stderr
  $stderr = StringIO.new
  begin
    files = CurationPublisher.publish(batch, root, now: Time.utc(2026, 9, 18))
  ensure
    $stderr = original
  end
  check(files.length == 2, 'Two articles in one batch must not share questions')
end
check(CurationPublisher.credit({ 'publish_credit' => 'true', 'name' => 'private' }).nil?, 'String consent accepted')
check(!CurationPublisher.body_text('{% include secret %}<script>[click](https://evil.org)').include?('{%'), 'Liquid injection')
check(!CurationPublisher.body_text('<script>').include?('<script>'), 'HTML injection')
puts 'Publisher checks passed: rendered languages and hreflang, attribution, URL deduplication, consent, limits, escaping and FAQ rules.'