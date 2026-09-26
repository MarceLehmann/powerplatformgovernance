# One-time migration: renames existing curated_summary posts from their raw hash-based
# filename/permalink (…-curated-<hash>-en.md, /en/posts/<hash>/) to a readable slug derived
# from the English title (…-<slug>-<hash8>-en.md, /en/posts/<slug>-<hash8>/), matching what
# tools/publish-curation.rb now generates for new articles. curation_id and the card image
# path are untouched - they stay hash-based, since that's an internal key, not a reader-facing
# URL. Both language files in a pair get the same slug (derived from the English title only),
# so they still cross-reference correctly via translation_url.
#
# Usage: ruby tools/migrate-curated-slugs.rb            # renames for real, via `git mv`
#        ruby tools/migrate-curated-slugs.rb --dry-run  # prints the planned renames only

require 'yaml'
require 'fileutils'
require_relative 'publish-curation'

dry_run = ARGV.include?('--dry-run')
root = File.expand_path('..', __dir__)
posts_dir = File.join(root, '_posts')

pairs = Dir.glob(File.join(posts_dir, '*-curated-*.md')).group_by do |path|
  File.basename(path).match(/-curated-([0-9a-f]{24})-(?:en|de)\.md\z/)&.captures&.first
end
pairs.delete(nil)

renamed = 0
pairs.each do |hash_id, paths|
  raise "Expected exactly an en/de pair for #{hash_id}, got #{paths.length}" unless paths.length == 2
  by_locale = paths.each_with_object({}) do |path, memo|
    raw = File.read(path, encoding: 'UTF-8')
    match = raw.match(/\A---\r?\n(.*?)\r?\n---\r?\n(.*)\z/m)
    front = YAML.safe_load(match[1], permitted_classes: [Date, Time], aliases: false)
    memo[front.fetch('lang')] = { path: path, front: front, body: match[2] }
  end
  raise "Missing en/de half for #{hash_id}" unless by_locale['en'] && by_locale['de']

  slug_base = CurationPublisher.slug(by_locale['en'][:front].fetch('title'))
  url_slug = "#{slug_base}-#{hash_id[0, 8]}"

  %w[en de].each do |locale|
    entry = by_locale[locale]
    old_name = File.basename(entry[:path])
    date_prefix = old_name[/\A\d{4}-\d{2}-\d{2}/]
    new_name = "#{date_prefix}-#{url_slug}-#{locale}.md"
    next if old_name == new_name

    alternate = locale == 'en' ? 'de' : 'en'
    entry[:front]['permalink'] = "/#{locale}/posts/#{url_slug}/"
    entry[:front]['translation_url'] = "/#{alternate}/posts/#{url_slug}/"
    new_content = "#{YAML.dump(entry[:front])}---#{entry[:body]}"
    new_path = File.join(posts_dir, new_name)

    if dry_run
      puts "[dry-run] #{old_name} -> #{new_name}"
    else
      File.write(entry[:path], new_content, encoding: 'UTF-8')
      system('git', 'mv', entry[:path], new_path, chdir: root, exception: true)
      puts "renamed: #{old_name} -> #{new_name}"
    end
    renamed += 1
  end
end

puts "\n#{dry_run ? 'Would rename' : 'Renamed'} #{renamed} file(s) across #{pairs.length} pair(s)."
