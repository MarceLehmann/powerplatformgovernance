require 'json'
require 'yaml'
require 'date'
require 'time'
require 'uri'
require 'digest'
require 'cgi'
require 'fileutils'

module CurationPublisher
  TAGS = %w[governance security compliance dlp environments alm ownership coe dataverse power-apps power-automate copilot-studio].freeze
  TRACKING = /\A(?:utm_.+|fbclid|gclid|msclkid)\z/i
  SOURCE_TYPES = %w[article youtube podcast].freeze
  YOUTUBE_ID = /\A[A-Za-z0-9_-]{11}\z/

  def self.text(value, maximum, optional: false)
    raise ArgumentError, 'Expected plain text' unless value.is_a?(String)
    cleaned = value.gsub(/\s+/, ' ').strip
    raise ArgumentError, 'Text outside allowed length' if cleaned.length > maximum || (!optional && cleaned.empty?)
    cleaned
  end

  def self.bulleted_text(value, maximum)
    raise ArgumentError, 'Expected plain text' unless value.is_a?(String)
    lines = value.split("\n").map { |line| line.gsub(/\s+/, ' ').strip }.reject(&:empty?)
    raise ArgumentError, 'Expected 1-4 takeaway lines' unless lines.length.between?(1, 4)
    raise ArgumentError, 'Invalid takeaway line' unless lines.all? { |line| line.start_with?('- ') && line.length > 2 }
    cleaned = lines.join("\n")
    raise ArgumentError, 'Text outside allowed length' if cleaned.length > maximum
    cleaned
  end

  def self.url(value)
    parsed = URI.parse(text(value, 2048))
    host = parsed.host.to_s.downcase
    unless parsed.is_a?(URI::HTTPS) && parsed.userinfo.nil? && parsed.port == 443 &&
           host.match?(/\A[a-z0-9](?:[a-z0-9.-]*[a-z0-9])?\.[a-z]{2,}\z/) &&
           !host.match?(/\.(?:local|localhost|internal|test|invalid|example|onion)\z/)
      raise ArgumentError, 'Expected a public HTTPS URL without credentials'
    end
    parsed.host = host
    parsed.fragment = nil
    parsed.path = '/' if parsed.path.empty?
    parsed.to_s
  rescue URI::InvalidURIError
    raise ArgumentError, 'Invalid URL'
  end

  def self.key(value)
    parsed = URI.parse(url(value))
    parsed.host = parsed.host.delete_prefix('www.')
    parsed.path = parsed.path.sub(%r{/$}, '') unless parsed.path == '/'
    query = URI.decode_www_form(parsed.query.to_s).reject { |name, _| name.match?(TRACKING) }.sort
    parsed.query = query.empty? ? nil : URI.encode_www_form(query)
    parsed.to_s
  end

  def self.source_date(value)
    return nil if value.nil? || value == ''
    raise ArgumentError, 'Date must be YYYY-MM-DD' unless value.is_a?(String) && value.match?(/\A\d{4}-\d{2}-\d{2}\z/)
    parsed = Date.iso8601(value)
    raise ArgumentError, 'Future source date' if parsed > Date.today + 1
    parsed.iso8601
  end

  def self.slug(title)
    cleaned = title.downcase.gsub(/[^a-z0-9]+/, '-').gsub(/-{2,}/, '-').gsub(/\A-|-\z/, '')
    return cleaned if cleaned.length <= 70
    cleaned[0, 70].sub(/-[^-]*\z/, '')
  end

  def self.body_text(value)
    CGI.escapeHTML(value).gsub('{', '&#123;').gsub('}', '&#125;').gsub(/([\\`*_\[\]#])/) { |character| "\\#{character}" }
  end

  def self.card_text(value, maximum)
    cleaned = text(value, maximum)
    raise ArgumentError, 'Card text must be plain English copy' unless cleaned.match?(/\A[A-Za-z0-9 .,'!?:&\/-]+\z/)
    cleaned
  end

  def self.card(article, identifier)
    {
      'id' => identifier,
      'topic' => card_text(article['card_topic'], 24),
      'quote' => card_text(article['card_quote'], 140),
      'take' => card_text(article['card_take'], 90),
      'state' => card_text(article['card_state'], 24),
    }
  end

  def self.credit(data)
    return nil unless data.is_a?(Hash) && data['publish_credit'] == true
    name = text(data.fetch('name', ''), 100, optional: true)
    linkedin = text(data.fetch('linkedin', ''), 2048, optional: true)
    unless linkedin.empty?
      linkedin = url(linkedin)
      parsed = URI.parse(linkedin)
      unless %w[linkedin.com www.linkedin.com].include?(parsed.host) && parsed.path.match?(%r{\A/in/[^/]+/?\z}) && parsed.query.nil?
        raise ArgumentError, 'Expected a personal LinkedIn profile'
      end
    end
    return nil if name.empty? && linkedin.empty?
    { 'publish_credit' => true }.tap do |result|
      result['name'] = name unless name.empty?
      result['linkedin'] = linkedin unless linkedin.empty?
    end
  end

  def self.render(article, credit_data, now)
    raise ArgumentError, 'Article is not publishable' unless article['publishable'] == true
    source_url = url(article['source_url'])
    parsed = URI.parse(source_url)
    tags = article['tags']
    unless tags.is_a?(Array) && tags.length.between?(1, 5) && tags.uniq == tags && (tags - TAGS).empty?
      raise ArgumentError, 'Invalid governance tags'
    end
    language = text(article['source_language'], 10)
    raise ArgumentError, 'Invalid source language' unless language.match?(/\A[a-z]{2,3}(?:-[A-Z]{2})?\z/)
    source = {
      'source_url' => source_url, 'source_site_url' => "https://#{parsed.host}/",
      'source_title' => text(article['source_title'], 300), 'source_name' => text(article['source_name'], 150),
      'source_language' => language, 'source_language_name' => { 'en' => 'English', 'de' => 'Deutsch' }.fetch(language, language),
    }
    author = text(article.fetch('source_author', ''), 150, optional: true)
    source['source_author'] = author unless author.empty?
    %w[source_published_at source_updated_at].each do |field|
      value = source_date(article[field])
      source[field] = value if value
    end
    source_type = text(article.fetch('source_type', 'article'), 20, optional: true)
    source_type = 'article' if source_type.empty?
    raise ArgumentError, 'Invalid source type' unless SOURCE_TYPES.include?(source_type)
    source['source_type'] = source_type
    if source_type == 'youtube'
      video_id = text(article.fetch('source_video_id', ''), 20)
      raise ArgumentError, 'Invalid YouTube video ID' unless video_id.match?(YOUTUBE_ID)
      source['source_video_id'] = video_id
    end
    identifier = Digest::SHA256.hexdigest(key(source_url))[0, 24]
    public_credit = credit(credit_data)
    card_data = card(article, identifier)
    image = { 'path' => "/assets/img/curated/#{identifier}.png" }
    # A human-readable slug for the URL/filename, not the raw hash - readers and search engines
    # both do better with /posts/power-platform-solution-checker-4a815e50/ than the bare hash.
    # Derived from the English title so both language versions share the same permalink shape
    # (matching how they already share the same identifier), with a short hash suffix so two
    # similarly-titled articles can never collide.
    url_slug = "#{slug(text(article.fetch('en').fetch('title'), 110))}-#{identifier[0, 8]}"
    files = %w[en de].map do |locale|
      version = article.fetch(locale)
      title = text(version['title'], 110)
      description = text(version['description'], 200)
      summary = text(version['tldr'], 600)
      takeaway = bulleted_text(version['takeaway'], 900)
      alternate = locale == 'en' ? 'de' : 'en'
      alt_prefix = locale == 'de' ? 'Governance-Karte' : 'Governance card'
      frontmatter = {
        'title' => title, 'description' => description, 'date' => now.utc.iso8601,
        'author' => 'governance_editorial', 'lang' => locale, 'toc' => false, 'tags' => tags,
        'content_type' => 'curated_summary', 'curation_id' => identifier,
        'image' => image.merge('alt' => "#{alt_prefix}: #{card_data['quote']}"),
        'permalink' => "/#{locale}/posts/#{url_slug}/", 'translation_url' => "/#{alternate}/posts/#{url_slug}/",
      }.merge(source)
      frontmatter['submitted_by'] = public_credit if public_credit
      frontmatter['publisher_disclosure'] = locale == 'de' ? 'Beide Publikationen werden von Marcel Lehmann herausgegeben.' : 'Both publications are edited by Marcel Lehmann.' if parsed.host.delete_prefix('www.') == 'powerplatformtip.com'
      heading = locale == 'de' ? 'Bedeutung für Governance' : 'Governance takeaway'
      video_embed = source_type == 'youtube' ? "\n{% include source-video-embed.html %}\n" : ''
      content = "#{YAML.dump(frontmatter)}---\n\n## TL;DR\n\n#{body_text(summary)}\n\n{% include curated-attribution.html %}\n#{video_embed}\n## #{heading}\n\n#{body_text(takeaway)}\n"
      ["#{now.utc.strftime('%Y-%m-%d')}-#{url_slug}-#{locale}.md", content]
    end
    { 'files' => files, 'card' => card_data }
  end

  def self.publish(event, root, now: Time.now)
    raise ArgumentError, 'Wrong event' unless event['action'] == 'curated-publication'
    payload = event.fetch('client_payload')
    raise ArgumentError, 'Invalid request ID' unless payload['request_id'].is_a?(String) && payload['request_id'].match?(/\A[0-9a-f-]{36}\z/)
    articles = payload['articles']
    raise ArgumentError, 'Invalid batch size' unless articles.is_a?(Array) && articles.length.between?(1, 30)
    existing = Dir.glob(File.join(root, '_posts', '*.md')).filter_map do |path|
      raw = File.read(path, encoding: 'UTF-8')
      next unless raw.start_with?("---\n", "---\r\n")
      metadata = YAML.safe_load(raw.split(/^---\s*$\r?/, 3)[1], permitted_classes: [Date, Time], aliases: false)
      key(metadata['source_url']) if metadata.is_a?(Hash) && metadata['source_url']
    end
    pending = []
    pending_cards = []
    articles.each do |article|
      begin
        result = render(article, payload.fetch('credit', {}), now)
      rescue ArgumentError => e
        warn "Skipped one article in the batch, rest continue: #{e.message} (#{article['source_url'].inspect})"
        next
      end
      identity = key(article['source_url'])
      next if existing.include?(identity)
      pending.concat(result['files'])
      pending_cards << result['card']
      existing << identity
    end
    FileUtils.mkdir_p(File.join(root, '_posts'))
    pending.each { |name, content| File.write(File.join(root, '_posts', name), content, mode: 'wx', encoding: 'UTF-8') }
    unless pending_cards.empty?
      FileUtils.mkdir_p(File.join(root, 'tools'))
      File.write(File.join(root, 'tools', 'pending-cards.json'), JSON.generate(pending_cards), encoding: 'UTF-8')
    end
    pending.map(&:first)
  end
end

if $PROGRAM_NAME == __FILE__
  event = JSON.parse(File.read(ENV.fetch('GITHUB_EVENT_PATH'), encoding: 'UTF-8'))
  paths = CurationPublisher.publish(event, File.expand_path('..', __dir__))
  puts "Validated publication: #{paths.length} new language files."
end