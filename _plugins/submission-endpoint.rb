require 'uri'

module GovernanceSubmission
  def self.public_endpoint?(endpoint)
    return true if endpoint.empty?

    uri = URI.parse(endpoint)
    uri.is_a?(URI::HTTPS) && uri.host && uri.port == 443 && !uri.userinfo && !uri.query && !uri.fragment &&
      !uri.host.match?(/(?:\A|\.)(?:logic\.azure\.com|api\.powerplatform\.com|flow\.microsoft\.com)\z/i)
  rescue URI::InvalidURIError
    false
  end
end

Jekyll::Hooks.register :site, :post_read do |site|
  endpoint = site.data.dig('submission', 'endpoint').to_s.strip
  unless GovernanceSubmission.public_endpoint?(endpoint)
    raise 'Submission endpoint must be a public HTTPS proxy without query credentials, not a Power Automate callback.'
  end
end