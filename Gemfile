source 'https://rubygems.org'

require 'json'
require 'open-uri'

ghp_vers = JSON.parse(::URI.open('https://pages.github.com/versions.json').read)

ruby "~> #{ghp_vers['ruby']}"

group :jekyll_plugins do
  gem 'github-pages', "~> #{ghp_vers['github-pages']}"
end
