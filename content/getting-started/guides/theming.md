---
title: 'Configuration and branding'
icon: done
slug: theming
order: 40
---
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD024 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

All applications created with the Web SDK are fully customizable through a custom build.

While we recommend you to leverage branding and configuration options without building the
application, this chapter outlines the "no-build option" first before detailing how to
customize a built application.

## Application options

The easiest option for theming are application options. They apply to any Web SDK application and
use inheritance to allow unified applying same configurations to all your applications. One example
configuration is `hideNavigator`, which is a simple flag that configures if the navigator is
shown on application start or not. You can configure this in three ways:

1. as a URL parameter
2. as a dynamic public option
3. as a static private option

The URL parameter (1) is the highest privileged option and wins over the public (2) and private (3)
option. It is also very simple to use: Simply add a URL parameter to your application. So to hide
the navigator you would simply use the URL
`apps/<<your-app-name>>/index.html?hideNavigator=true#/route` (note that the URL parameter needs to
be set before the #-hash navigation).

The dynamic public options (2) are options requested by each Web SDK based application on startup.
The default fetch URL for this options are stored in the `dynamicOptionsUrl` which is by default set
to `"/apps/public/public-options/options.json"`. As you can see by the context-path, the default
setting points to an application deployed to your tenant. You can create this application on your
own: Simply create a zip file called `public-options.zip` and add a `options.json` to it:

```json
{
  "hideNavigator": true
}
```

If you upload this application to your tenant and subscribe it to at least one of your subtenants,
all Web SDK based applications will hide the navigator by default.

> **Info**
>
> If you are an enterprise customer, the easiest way to manipulate this options is to use the
> branding manager in administration. It provides an form to set most of the settings without any
> manual generating of a JSON file and uploading applications.

The static private options (3) are options that can only be defined by a custom application. They
are the lowest level of option and can be overwritten by any of the upper options (1 and 2). They
are also private, meaning they only apply to the current application they are applied to. You can
define those options in the `cumulocity.config.ts` file by adding them to the `runTime` or `buildTime` entries:

```ts
[...]

export default {
  runTime: {
    [...]
    "hideNavigator": true
  },
  buildTime: {
    [...]
  }
}
[...]
```

It is good practice to use URL options (1) to verify an option behavior, to use dynamic options (2)
to set the option platform wide and use the private static option (3) to set the default for your
custom application.

> ### Note
>
> Since `runTime` and `buildTime` are defined in the TypeScript file, both entries support TypeScript autocomplete.
> This means you no longer have to consult the documentation to discover all available options.

## Styling with application options

A branding always has to be applied to all of your applications. Therefore it is recommended to use
dynamic public options for branding your application. You only have to set the right
[design tokens](#/ui-guidelines/foundations/design-tokens/overview) in the `brandingCssVars`
application option. Those are CSS variables that get applied to all default stylesheets of
Cumulocity and shows your custom branding for any Web SDK application. Your `options.json` then
might look like this:

```json
{
  "brandingCssVars": {
    "--brand-primary": "#B10F2E",
    "--brand-complementary": "#DE7C5A",
    "--brand-dark": "#280000",
    "--brand-light": "#DE7C5A",
    "--palette-status-realtime": "#f0f"
  }
}
```

You can for sure still add other options, for example, the `hideNavigator` or add an own CSS file:

```json
{
  "brandingCssVars": {
    "--brand-primary": "#B10F2E",
    [...]
  },
  "hideNavigator": true,
  "extraCssUrls": "./custom.css"
}
```

And in the CSS file you simply add your own styles:

```css
h1 {
  color: #00f;
}
```

Using this is simple:

1. Zip the files (ensure that they are in the root of the zip without any wrapping folder).
2. Name the zip file `public-options.zip`.
3. Upload it as a web application in **Administration** > **Ecosystem** > **Applications**
4. Subscribe your applications to one of your tenants under **Tenants** > **Subtenants**

Once done, you can simply always update the existing application with new variables in the detail
view of the application. The following code shows all the possible application options existing:

<codex-tutorial-example [sources]="['packages/options/src/ApplicationOptions.d.ts']" [open]="true"></codex-tutorial-example>

## Accessing options in your angular application

You can use the [OptionsService](#/develop/services/OptionsService/overview) to access any option
in the application itself. You can also define new variables and use them in your application. The
services only needs to be injected and you can request any property with
`options.get('<<identifier>>')`.

## Styling by extending @c8y/style

For styling the application global CSS created with [LESS](http://lesscss.org/) is used. The
original LESS source is distributed via the npm package
[@c8y/style](https://www.npmjs.com/package/@c8y/style). By extending these styles it is possible to
change any detail of the application but the vast majority of developers want to change: colors,
logos and fonts and these can be very easily achieved by replacing a few variables.

To override variables, `Custom CSS Properties`—also known as `CSS Variables`—can be utilized, offering configurability at runtime or during the build process.

1. Ensure that your project is based on the Angular CLI (whether upgraded or created from scratch).
2. Make sure you have installed the `@c8y/style` package. If not, you can install the base styles from npm using the following command.

```less
@import '~@c8y/style/main.less';
```

The example is based on this file structure:

```bash
my-application
|   ...
│   angular.json
│   package.json
|   ...
└───src
    │   styles.less
    │   favicon.ico
    │   ...
    └─── assets
         │   logo.jpg
         │   ...
```

1. If the `styles.less` file already exists, add the line `@import '~@c8y/style/main.less'` at the top of the file. If it does not exist, create it and add the mentioned line.

2. The `styles` entry in your `angular.json` under your project entry needs to be aligned. Remove the mentions of `@c8y/style/main.less` here and ensure the `styles.less` file of your project is referenced here.

## Example customizations

At this point, we can modify the desired variables to suit our needs. To implement these changes, follow the examples below and add the specified code to your `styles.less` file.

Let us change, for example, the most important color of your branding, which is the main color, called
**brand-primary**.

This is done by setting the respective CSS variables to a new color.

```less
:root {
  --brand-primary: red;
}
```

User interface elements like buttons, active navigation nodes or even active tabs as well as also
hover-states of buttons are red now.

What about changing the main logo that is located at the top of the login dialog? Look at the following example:

```less
:root {
  --brand-logo-img: url('/apps/<applicationContextPath>/assets/logo.jpg');
  --brand-logo-img-height: 48%;
}
```

You can also explore our `tutorial` application, which features an example of applied branding. For instructions on how to create the tutorial application, refer to the [getting-started guide](#/getting-started/quickstart/overview).

## Styling the Shell Application with a Plugin

To alter the styles of the shell application from the plugin level, you can do the following:

  1. Create an `assets` folder in the `src/` directory.
  2. Add an `assets.ts` file there with the following content: `import './example.css'`.
  3. Add an `example.css` file there with the styles you want to apply to the `shell` application.
  4. Add the `src/assets` folder in the `angular.json > <yourProjectName> > architect > build > assets entry`.

The example is based on this file structure:

```bash
my-application
|   ...
│   angular.json
│   package.json
|   ...
└───src
    │   ...
    └─── assets
         │   assets.ts
         |   example.css
         │   ...
```

> ### Note
> It's important to know that adding global styles in the `angular.json` styles entry won't work for the `shell` application; it will only style `custom applications`.
