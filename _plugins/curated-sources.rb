require 'uri'

module GovernanceSources
  def self.origin(value)
    uri = URI.parse(value.to_s.strip)
    return unless uri.is_a?(URI::HTTP) && uri.host && !uri.host.empty? && uri.userinfo.nil?

    uri.host = uri.host.downcase
    uri.path = '/'
    uri.query = nil
    uri.fragment = nil
    uri
  rescue URI::InvalidURIError
    nil
  end

  def self.collect(posts)
    groups = {}
    english_only = posts.select do |post|
      post.write? && (post.data['lang'].nil? || post.data['lang'] == 'en')
    end
    english_only.sort_by(&:date).reverse_each do |post|
      source = origin(post.data['source_url'])
      next unless source

      domain = source.host.delete_prefix('www.')
      group = groups[domain] ||= { 'domain' => domain, 'url' => source.to_s, 'posts' => [] }
      group['url'] = source.to_s if source.scheme == 'https'
      next if group['posts'].any? { |entry| entry['url'] == post.url }

      group['posts'] << { 'title' => post.data['title'], 'url' => post.url }
    end
    groups.values.sort_by { |group| group['domain'] }
  end
end

Jekyll::Hooks.register :site, :pre_render do |site|
  site.data['curated_sources'] = GovernanceSources.collect(site.posts.docs)
end