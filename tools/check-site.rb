require 'nokogiri'
require 'json'

site_dir = ARGV.fetch(0, '_site')
required_pages = %w[index.html submit/index.html about/index.html tags/index.html archives/index.html]
required_pages.each do |path|
  raise "Missing page: #{path}" unless File.file?(File.join(site_dir, path))
end

css = File.read(File.join(site_dir, 'assets/css/jekyll-theme-chirpy.css'))
%w[.d-flex .row .col- #sidebar #panel-wrapper].each do |selector|
  raise "Missing production CSS: #{selector}" unless css.include?(selector)
end

pages = required_pages + Dir.glob(File.join(site_dir, 'posts/*/index.html')).map { |path| path.delete_prefix("#{site_dir}/") }
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
end

home = Nokogiri::HTML(File.read(File.join(site_dir, 'index.html')))
['#sidebar', '#access-lastmod', '#panel-wrapper .post-tag'].each do |selector|
  raise "Missing home section: #{selector}" unless home.at_css(selector)
end

submit = Nokogiri::HTML(File.read(File.join(site_dir, 'submit/index.html')))
raise 'Expected one submission form' unless submit.css('form').size == 1
if submit.at_css('form')['action'].to_s.strip.empty?
  raise 'Unconfigured submission must be disabled' unless submit.at_css('button[type="submit"][disabled]')
end
raise 'False submission confirmation' if submit.text.include?('Your suggestion has been received')
raise 'Internal architecture published' unless Dir.glob(File.join(site_dir, '*architektur*')).empty?
raise 'Internal README published' if File.exist?(File.join(site_dir, 'README_CUSTOM.md'))
raise 'Missing sitemap' unless File.file?(File.join(site_dir, 'sitemap.xml'))
raise 'Missing robots.txt' unless File.file?(File.join(site_dir, 'robots.txt'))
puts "Site checks passed: #{pages.size} pages, production CSS, form, metadata and private-document exclusions."