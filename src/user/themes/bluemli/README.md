# Bluemli Theme

## Features

* Lightweight and minimal for optimal performance
* Spectre CSS Framework
* Fully responsive with full-page mobile navigation
* SCSS based CSS source files for easy customization
* Built-in support for on-page navigation
* Multiple page template types
* Fontawesome icon support

### Supported Page Templates

* Default view template `default.md`
* Error view template `error.md`
* Home view template `home.md`
* Modular cards view templates: `cards.md`
  * Card Modular view template `card.md`

## Default Options

Bluemli comes with a few default options that can be set site-wide.  These options are:

```yaml
enabled: true                 # Enable the theme
production-mode: true         # In production mode, only minified CSS is used. When disabled, nested CSS with sourcemaps are enabled
grid-size: grid-lg            # The max-width of the theme, options include: `grid-xl`, `grid-lg`, and `grid-md`
header-fixed: true            # Cause the header to be fixed at the top of the browser
header-animated: true         # Allows the fixed header to resize to a smaller header when scrolled
header-dark: false            # Inverts the text/logo to work better on dark backgrounds
header-transparent: false     # Allows the fixed header to be transparent over the page
sticky-footer: true           # Causes the footer to be sticky at the bottom of the page
blog-page: '/blog'            # The route to the blog listing page, useful for a blog style layout with sidebar
custom_logo:                  # A custom logo rather than the default (see below)  
custom_logo_mobile:           # A custom logo to use for mobile navigation
```

To make modifications, you can copy the `user/themes/bluemli/bluemli.yaml` file to `user/config/themes/` folder and modify, or you can use the admin plugin.

> NOTE: Do not modify the `user/themes/bluemli/bluemli.yaml` file directly or your changes will be lost with any updates

## Custom Logos

To add a custom logo, you should put the log into the `user/themes/bluemli/images/logo` folder.  Standard image formats are support (`.png`,`.jpg`, `.gif`, `.svg`, etc.).  Then reference the logo via the YAML like so:

```yaml
custom_logo:
    - name: 'my-logo.png'
custom_logo_mobile:
    - name: 'my-mobile-logo.png'    
```

## Page Overrides

Bluemli has the ability to allow pages to override some of the default options by letting the user set `body_classes` for any page.  The theme will merge the combination of the defaults with any `body_classes` set. For example:

```yaml
body_classes: "header-dark header-transparent"
```

On a particular page will ensure that page has those options enabled (assuming they are false by default).

