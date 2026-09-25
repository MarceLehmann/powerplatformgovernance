require 'nokogiri'
require 'json'
require 'jekyll'
require 'yaml'
require 'date'
require_relative '../_plugins/curated-sources'
require_relative '../_plugins/submission-endpoint'

site_dir = ARGV.fetch(0, '_site')
required_pages = %w[index.html submit/index.html about/index.html tags/index.html archives/index.html sources/index.html]
required_pages.each do |path|
  raise "Missing page: #{path}" unless File.file?(File.join(site_dir, path))
end

css = File.read(File.join(site_dir, 'assets/css/jekyll-theme-chirpy.css'))
%w[.d-flex .row .col- #sidebar #panel-wrapper].each do |selector|
  raise "Missing production CSS: #{selector}" unless css.include?(selector)
end

pages = required_pages + Dir.glob(File.join(site_dir, '**/posts/*/index.html')).map { |path| path.delete_prefix("#{site_dir}/") }
pages.each do |path|
  document = Nokogiri::HTML(File.read(File.join(site_dir, path)))
  title = document.at_css('title')&.text.to_s.strip
  raise "Empty page title: #{path}" if title.empty? || title.start_with?('|')
  ids = document.css('[id]').map { |node| node['id'] }
  raise "Duplicate IDs: #{path}" unless ids.uniq == ids
  canonical = document.at_css('link[rel="canonical"]')
  raise "Missing canonical: #{path}" unless canonical && canonical['href'].start_with?('https://powerplatformgovernance.com/')
  raise "Missing description: #{path}" unless document.at_css('meta[name="description"]')
  schema = document.css('script[type="application/ld+json"]')
  raise "Missing structured data: #{path}" if schema.empty?
  schema.each { |node| JSON.parse(node.text) }
  raise "Starter placeholder: #{path}" if document.to_html.match?(/twitter_username|example@domain\.com|Add Markdown syntax content/)
  raise "Missing Sources navigation: #{path}" unless document.at_css('#sidebar nav a[href="/sources/"]')
  raise "Categories still in navigation: #{path}" if document.at_css('#sidebar nav a[href="/categories/"]')
  if document.at_css('[data-curated-entry]')
    original = document.at_css('a.original-link')
    raise "Missing direct original link: #{path}" unless original && !original['href'].to_s.empty?
    raise "Source must be external: #{path}" if original['href'].start_with?('https://powerplatformgovernance.com/')
    raise "Missing TL;DR: #{path}" unless document.css('h2').any? { |node| node.text.include?('TL;DR') }
    contributor = document.at_css('.contributor-credit')
    if contributor
      raise "Invalid LinkedIn credit: #{path}" unless contributor['href'].match?(%r{\Ahttps://(?:www\.)?linkedin\.com/in/[^\s]+\z})
      raise "Contributor link must be marked ugc: #{path}" unless contributor['rel'].to_s.split.include?('ugc')
    end
  end
  video = document.at_css('.source-video-embed iframe')
  if video
    raise "Video embed must use the privacy-enhanced domain: #{path}" unless video['src'].to_s.start_with?('https://www.youtube-nocookie.com/embed/')
    raise "Video embed missing an accessible title: #{path}" if video['title'].to_s.strip.empty?
    raise "Video embed must lazy-load: #{path}" unless video['loading'] == 'lazy'
  end
end

home = Nokogiri::HTML(File.read(File.join(site_dir, 'index.html')))
raise 'Missing home section: #sidebar' unless home.at_css('#sidebar')
has_posts = pages.size > required_pages.size
if has_posts
  raise 'Missing home section: #access-lastmod' unless home.at_css('#access-lastmod')
  raise 'Missing home section: #panel-wrapper .post-tag' unless home.at_css('#panel-wrapper .post-tag')
end

submit = Nokogiri::HTML(File.read(File.join(site_dir, 'submit/index.html')))
raise 'Expected one submission form' unless submit.css('form').size == 1
required_fields = submit.css('form [required]').map { |node| node['name'] }
raise 'Only the content URL should be required' unless required_fields == ['content_url']
raise 'LinkedIn field missing' unless submit.at_css('input[name="submitter_linkedin"][type="url"]')
consent = submit.at_css('input[name="publish_credit"]')
raise 'Public credit must be opt-in' unless consent && !consent.key?('checked') && !consent.key?('required')
raise 'Unnecessary email collection' if submit.at_css('input[type="email"]')
if submit.at_css('form')['action'].to_s.strip.empty?
  raise 'Unconfigured submission must be disabled' unless submit.at_css('button[type="submit"][disabled]')
end
raise 'False submission confirmation' if submit.text.include?('Your suggestion has been received')
raise 'Missing JSON submission handler' unless submit.at_css('script[src="/assets/js/submission.js"][defer]')
raise 'Missing submission honeypot' unless submit.at_css('input[name="website"][tabindex="-1"]')
['', 'https://intake.example.org/submissions'].each do |endpoint|
  raise 'Public proxy rejected' unless GovernanceSubmission.public_endpoint?(endpoint)
end
['http://intake.example.org/', 'https://intake.example.org/?sig=example', 'https://user:example@intake.example.org/', 'https://tenant.logic.azure.com/workflows/example', 'https://env.api.powerplatform.com/automate/flows/example'].each do |endpoint|
  raise 'Unsafe submission endpoint accepted' if GovernanceSubmission.public_endpoint?(endpoint)
end
direct_endpoint = 'https://env.environment.api.powerplatform.com/powerautomate/automations/direct/cu/26/workflows/0123456789abcdef0123456789abcdef/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=nonsecret-test-value-only'
raise 'Direct callback accepted without approval' if GovernanceSubmission.public_endpoint?(direct_endpoint)
raise 'Approved direct callback rejected' unless GovernanceSubmission.public_endpoint?(direct_endpoint, direct_webhook: true)
raise 'Duplicate signature accepted' if GovernanceSubmission.public_endpoint?(direct_endpoint + '&sig=duplicate', direct_webhook: true)
raise 'Rendered endpoint is invalid' unless GovernanceSubmission.public_endpoint?(submit.at_css('form')['action'].to_s, direct_webhook: submit.at_css('form')['data-direct-webhook'] == 'true')

sources = Nokogiri::HTML(File.read(File.join(site_dir, 'sources/index.html')))
domains = sources.css('[data-source-domain]').map { |node| node['data-source-domain'] }
raise 'Duplicate source domains' unless domains.uniq == domains

test_post = Struct.new(:data, :url, :date, :publishable) do
  def write?
    publishable
  end
end
samples = [
  ['https://WWW.PowerPlatformTip.com/article/one?ref=test#top', '/one/', true],
  ['http://powerplatformtip.com/article/two', '/two/', true],
  ['https://blog.example.org/article', '/three/', true],
  ['https://hidden.example.org/article', '/hidden/', false],
  ['javascript:alert(1)', '/invalid/', true],
  ['https://user:password@example.org/article', '/credentials/', true],
  ['not a URL', '/malformed/', true],
  [nil, '/original/', true]
].map do |url, path, publishable|
  test_post.new({ 'source_url' => url, 'title' => 'Example' }, path, Time.utc(2026, 9, 18), publishable)
end
groups = GovernanceSources.collect(samples)
raise 'Source URL normalization failed' unless groups.map { |group| group['domain'] } == %w[blog.example.org powerplatformtip.com]
raise 'Source grouping failed' unless groups.last['posts'].size == 2
raise 'HTTPS source origin lost' unless groups.last['url'] == 'https://www.powerplatformtip.com/'

attribution = Liquid::Template.parse(File.read('_includes/curated-attribution.html'))
[true, false, nil, 'false', 'true'].each do |permission|
  rendered = attribution.render!('page' => {
    'source_url' => 'https://example.org/article', 'source_site_url' => 'https://example.org/', 'source_name' => 'Example',
    'submitted_by' => {
      'name' => 'Contributor <test>',
      'linkedin' => 'https://www.linkedin.com/in/example/',
      'publish_credit' => permission,
    },
  })
  credit = Nokogiri::HTML.fragment(rendered).at_css('.contributor-credit')
  raise 'Credit leaked without explicit permission' unless !credit.nil? == (permission == true)
  raise 'Credit name must be escaped' if credit && credit.at_css('test')
end

Dir.glob('_posts/*.md').each do |path|
  frontmatter = File.read(path).match(/\A---\s*\n(.*?)\n---/m)
  next unless frontmatter

  data = YAML.safe_load(frontmatter[1], permitted_classes: [Date, Time])
  credit = data['submitted_by']
  next unless credit

  raise "Unapproved personal data in public source: #{path}" unless credit['publish_credit'] == true
  raise "Non-public contributor fields in source: #{path}" unless (credit.keys - %w[name linkedin publish_credit]).empty?
end

raise 'Internal architecture published' unless Dir.glob(File.join(site_dir, '*architektur*')).empty?
raise 'Internal README published' if File.exist?(File.join(site_dir, 'README_CUSTOM.md'))
raise 'Missing sitemap' unless File.file?(File.join(site_dir, 'sitemap.xml'))
raise 'Missing robots.txt' unless File.file?(File.join(site_dir, 'robots.txt'))
puts "Site checks passed: #{pages.size} pages, production CSS, form, metadata and private-document exclusions."