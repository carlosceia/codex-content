---
title: Internationalization
slug: internationalization
icon: done
order: 210
apiDocs:
  - name: C8yTranslateModule
    import: '@c8y/ngx-components'
---
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD029 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

The goal of internationalization is to ensure that the user interface is accessible
and understandable to users across different languages and cultural contexts.

This component enables developers to achieve it without requiring major code changes.

## Text translation

Text translation requires the following steps:
- Marking texts to be translated and pushing them through the translation in the source code 
- Extracting marked texts to `locales.pot` file and creating/updating `.po` files with texts and translations

### Marking texts to be translated and pushing them through the translation within the source code

In order to have a text translated in the runtime,
the text must be both marked for translation
(to get it extracted into `locales.pot` file, which is the base for `.po` files where translations are provided)
and pushed through the translation within the source code.

There are various ways to achieve this: some do both things, some only one:
- `gettext(...)` - only marks a static string for translation, but does not actually translate it
- `translate` pipe - translates given input string; if used on a static string, it'll also mark it for translation
- `translate` directive - marks the element's content for translation and also translates it
- `TranslateService` - provides methods to translate strings, but the strings must be marked for translation, e.g. with `gettext(...)`

The following examples demonstrate how to use the above items in practice:
- Marking texts with `gettext` for later translation
- Using `translate` pipe and directive
- Handling interpolated placeholders with `ngNonBindable` directive
- Invoking `TranslateService.instant` for immediate translation

#### `gettext` example

`gettext` function is used to mark a static string literal for translation (`gettext('Label')`).
It **must not be** a string variable (e.g. `gettext(label)`), **nor** a dynamic template literal (e.g. `` gettext(`Show all ${{ '{' }}condition ? 'alarms' : 'events'{{ '}' }}`) ``)

<codex-tutorial-example [module]="'TextTranslationGettextModule'"
[sources]="['packages/tutorial/src/translations/text-translation/gettext-translation/text-translation-gettext.component.ts']">
</codex-tutorial-example>

#### Pipe example

The `translate` pipe translates given input into current language.

<codex-tutorial-example>
  <div class="container-fluid p-24">This word will be translated: {{ 'Device' | translate }}.</div>
</codex-tutorial-example>

If applied on a static string literal, it's enough to both get it extracted for translation and to have it translated in the runtime.
Otherwise, the text needs to be marked for translation in another way, e.g. with `gettext(...)`.

Text extraction from `translate` pipe does not work on complex template expressions like `{{ '{' }}{{ '{' }} selectedAlarm.status !== ACKNOWLEDGED_STATUS ? ('Acknowledge' | translate) : ('Reactivate' | translate) {{ '}' }}{{ '}' }}`.
In such cases, it's recommended to define the labels in JavaScript code and use them later in HTML (see sample code under [`gettext` example](#gettext-example)).

#### Directive example

The `translate` directive translates given element content into current language.

<codex-tutorial-example>
  <div class="container-fluid p-24">This word will be translated: <span translate>Device</span>.</div>
</codex-tutorial-example>

#### `ngNonBindable` example

If translated element content includes interpolated placeholders,
you need to apply `ngNonBindable` directive to prevent the default Angular behavior
and let the translation module handle the placeholders.

<codex-tutorial-example [module]="'TextTranslationNgnonbindableModule'"
[sources]="['packages/tutorial/src/translations/text-translation/ngNonBindable-translation/text-translation-ngnonbindable.component.ts']">
</codex-tutorial-example>

#### Service example

If you need to translate a text immediately inside JavaScript code, rather than in a template, you can use `TranslateService` methods, e.g. `instant`.
Note, that invoking this method translates the text, but the text needs to be explicitly marked for translation with `gettext(...)`.

<codex-tutorial-example [module]="'TextTranslationByServiceModule'"
[sources]="['packages/tutorial/src/translations/text-translation/service-translation/text-translation-by-service.component.ts']">
</codex-tutorial-example>

### Extracting texts and providing their translations

#### Changing the default translation in the existing language

If you don't like the default translation in the existing language, you can overwrite it with your own.
Let's say you want to change the German translation of "Devices" from "Geräte" to "Maschinen":

1. Create a new `de.po` file under `./src/locales`.
2. Add basic headers and the new entry:

```yaml
msgid ""
msgstr ""
"Project-Id-Version: c8yui.core\n"
"Content-Type: text/plain; charset=UTF-8\n"
"Content-Transfer-Encoding: 8bit\n"
"Plural-Forms: nplurals=2; plural=(n != 1);\n"
"Language: de\n"

msgid "Devices"
msgstr "Maschinen"
```

3. Add `import './locales/de.po';` in `./src/i18n.ts`.
4. Save changes and restart ng server to verify that the new translation is displayed in the application.
5. Note that `msgid` must match the original source text. The easiest way to check the existing source texts is to run `ng extract-i18n` and then look up the right `msgid` in a `.po` file, for example `./locales/de.po`.

#### Adding new translations to the existing language

Let's say you developed a custom functionality which involved new texts that need to be translated.

1. Execute the following command to extract any custom texts to `./locales/locales.pot`:

```bash
ng extract-i18n
```

2. Then, the generated `locales.pot` can be used to create or update `.po` files under `./src/locales`.
You can use a program like `Poedit` or `gettext` CLI tool (`msgmerge`) to achieve this.
If you create a new `.po` file, remember to import it in `./src/i18n.ts`.
3. Once `.po` files are updated, you can run the application to verify that the new translations are used.
4. If you later modify or add more texts for translation, repeat steps 1-3.

#### Adding a new language

Let's say you want to start providing translations in a new language, for example, Italian.
If your application is based on one of the standard applications (like Administration),
you will need to provide translations for both the default texts and your custom ones.

1. Download the latest `locales.pot` from https://unpkg.com/@c8y/ngx-components@latest/locales/locales.pot (if you need an older snapshot, replace `latest` with specific version >= 1004.0.6).
2. Execute `ng extract-i18n` to extract custom texts to `./locales/locales.pot`.
3. Merge the two `.pot` files into one, for example: `msgcat -o ./locales/merged.pot ~/Downloads/locales.pot ./locales/locales.pot`.
4. Use the merged `.pot` file to create or update `.po` file for the new language under `./src/locales` (using for example `Poedit` or `gettext` tools).
5. Make sure the `.po` file is imported in the `./src/i18n.ts` file (for example, `import './locales/it.po';`).
6. Make sure the new language is declared in `./cumulocity.config.ts` under `runTime` options:

```ts
export default {
  runTime: {
    // other run time options...
    languages: {
      // other language declarations...
      it: {
        name: 'Italian',
        nativeName: 'Italiano'
      }
    }
  },
  buildTime: {
    // build time options...
  }
};
```

7. Save changes and restart ng server to verify that the new language is available in the application.

## Date translation

These examples showcase different approaches to translating dates using Angular or C8Y pipes.

### Date translation using c8y pipe

The `c8yDate` pipe is employed to specifically translate dates using Cumulocity (c8y) formatting.

<codex-tutorial-example [module]="'C8yDateTranslationModule'"
[sources]="['packages/tutorial/src/translations/date-translation/c8y-translation/c8y-date-translation.component.ts']">
</codex-tutorial-example>

### Date translation using Angular pipe

This example demonstrates a general date translation, where a current date can be translated into the respective
language.

<codex-tutorial-example [module]="'DateTranslationModule'"
[sources]="['packages/tutorial/src/translations/date-translation/ng-translation/date-translation.component.ts']">
</codex-tutorial-example>

## Dynamic form translation

Internationalization (i18n) is built-in in the `DynamicFormsModule`. Thus, it requires no further configuration
except marking the strings for the translation.

<codex-tutorial-example [module]="'DynamicFormTranslationModule'"
[sources]="['packages/tutorial/src/translations/dynamic-form-translation/dynamic-form-translation.component.ts']">
</codex-tutorial-example>
