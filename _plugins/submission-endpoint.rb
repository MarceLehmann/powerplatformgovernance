require 'uri'

module GovernanceSubmission
  def self.public_endpoint?(endpoint, direct_webhook: false)
    return true if endpoint.empty?

    uri = URI.parse(endpoint)
    return false unless uri.is_a?(URI::HTTPS) && uri.host && uri.port == 443 && !uri.userinfo && !uri.fragment

    flow_host = uri.host.match?(/(?:\A|\.)(?:logic\.azure\.com|api\.powerplatform\.com|flow\.microsoft\.com)\z/i)
    return !uri.query unless flow_host
    return false unless direct_webhook == true && uri.path.match?(%r{/workflows/[a-f0-9]{32}/triggers/manual/paths/invoke\z}i)

    query = URI.decode_www_form(uri.query.to_s)
    query.map(&:first).sort == %w[api-version sig sp sv] && query.to_h.fetch('sig', '').length >= 20
  rescue URI::InvalidURIError
    false
  end
end

Jekyll::Hooks.register :site, :post_read do |site|
  settings = site.data['submission'] ||= {}
  endpoint = ENV.fetch('GOVERNANCE_SUBMISSION_ENDPOINT', settings['endpoint'].to_s).strip
  unless GovernanceSubmission.public_endpoint?(endpoint, direct_webhook: settings['direct_webhook'])
    raise 'Invalid submission endpoint. Signed Power Automate callbacks require explicit direct_webhook approval.'
  end
  settings['endpoint'] = endpoint
end