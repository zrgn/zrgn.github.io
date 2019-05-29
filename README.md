# Getting Started

* Make sure you have Ruby, Node.js, and NPM installed.  You  need to install
  `nodejs-grunt-cli`.
* `gem install bundler`
* `bundle install`
* `npm install`

## What is This Node.JS Stuff?

It's a way for us to manage our asset dependencies (namely, our CSS framework
and JavaScript framework).  If you're just developing content for the site, you
don't need to worry about it.

For the asset libraries, we're using [Bower](https://bower.io/) which is invoked
via [Grunt](https://gruntjs.com/).  If you need to update the libraries, you'll
make a change to the `bower.json` file and change the version number.  Then run
`grunt`.  The default Grunt task will wipe the old dependencies and install the
new ones under `assets/vendor` and `bower_components`.  The `assets/vendor`
files can be used directly.  The files under `bower_components` are primarily
for pre-processing and **should not** be pulled in directly.  For example, the
`zargon.scss` file includes a bunch of the Bulma Sass so we can use their mixins
and variables if we want.  You'll notice in `_config.yaml` that we're telling
Jekyll to place `bower_components/bulma` on the Sass load path.

## This Seems Overly Complicated!

Yes.  But apparently this is how The Internet has decided to do web development
now.  We could do this via a Rakefile but the only Rake integration I could find
bolted a Rails-style asset pipeline onto Jekyll which is just as complicated (if
not more so).

# Writing Content

Create a file with a `.md` suffix.  At the top add

```
---
title: My Title
layout: standard-page
---
```

That meta-data will tell Jekyll the title of your page and the page layout to
use.  Then just write your content using Markdown syntax.

# Previewing the Site

Run `bundle exec jekyll serve --livereload`.  Jekyll will render the site (into
the `_site` directory) and start a webserver on localhost's port 4000.  You can
point a browser there and get a preview of the site.  As a bonus the
`--livereload` argument will watch the directory for changes.  On any change,
the site will be re-rendered and Jekyll will notify your browser to refresh
itself.
