# How to Contribute

The "rules" of Zargon are not set in stone.  We want them to be sourced by our community.  To add / remove / modify rules, please submit them via a new Issue or PR.

You can use these handy links to help get you started

-   [Add a rule](/issues/new?template=add_rule.md)
-   [Change a rule](/issues/new?template=change_rule.md)
-   [Remove a rule](/issues/new?template=remove_rule.md)

If you are comfortable with development, you can also send a [pull request](http://help.github.com/pull-requests/) with the change.  We recommend creating an new issue with your pull request so that discussion on the change can happen.

# Setting up a developer environment

The site is run using [Jekyll](https://jekyllrb.com/) and is pretty easy to figure out.  To start local development you'll need to install Jekyll, bundler and install your dependencies

1.  ```bash
    gem install jekyll bundler
    ```
2.  ```bash
    bundler install
    ```
3.  ```bash
    bundle exec jekyll serve
    ```

This will serve up the page at `localhost:4000` and any changes to the files you make will be shown "live" at that site.

## Modifying / adding Javascript and CSS

Javascript and CSS libraries are managed via [Bower](https://bower.io/) and [Grunt](https://gruntjs.com/).  You will need to have `npm` available and have `bower` and `grunt-cli` installed globally.

1.  Add new assets using `bower install \[asset\] --save`
2.  Update the assets by running `npm run build`

## Folder structure

### \_data

This folder contains the data that drives the site

-   `rules.json` - This file defines the orders of the rules.  To add a new section, add the file to `_data/all_rules/sectionname.json` and add `sectionname` to the `orders` entry
-   `all_rules` - This folder contains all of the rules.
    -   `games.json` - Rules surrounding playing games
    -   `membership.json` - Rules around membership in Zargon

To add a new rule set, create a file in `_data/all_rules/sectionname.json` with the following format

```javascript
{
    "title": "A New Rule Set",
    "rules": [
        { "text": "This will be the first rule" },
        { "text": "This will be the second rule" }
    ]
}
```

### \_includes

This folder contains template files used in other pages

-   `footer.html` - The footer
-   `navbar.html` - The global navbar.  Not currently used.
-   `rules.html` - The rules section
-   `style.html` - The global style sheet

### \_layouts

This folder contains the layouts used in other pages

-   `page.html` - The general page layout

### assets

The static assets used in the site.  **Note**: This should not be manually added to but instead generated using `grunt`