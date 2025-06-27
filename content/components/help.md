---
title: Help
slug: help
icon: done
order: 200
apiDocs:
  - name: HelpComponent
    import: '@c8y/ngx-components'
---
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

Having a comprehensive documentation system, it's only natural to offer contextual, appropriate, and
adaptive support.

Aligned with our commitment to providing effective assistance, we offer two options:

- **Contextual help** Provides information regarding the current page's purpose and functionality.
- **Inline help** Offers information about specific input fields or other components.

## Contextual help

The contextual help component offers a straightforward method to incorporate concise information
regarding the current page's purpose and functionality. It empowers users to swiftly access more
detailed explanations on the [documentation website](https://cumulocity.com/docs).

To integrate contextual help into a specific page, follow these steps:

1. Ensure that the necessary content is available on the documentation website.
2. Add the `c8y-help` component, specifying the source for the particular page while excluding the
   domain (for example, `src="/docs/cockpit/managing-assets/#managing-assets"`).

Upon completion of these steps, an outlined circle button with a question mark appears in the action
bar. Clicking it provides access to a collapsible container with help information and a link to
the specific page on the documentation website.

<codex-tutorial-example class="c8y-codex-override"
  [module]="'HelpExampleModule'"
  [sources]="['./packages/tutorial/src/help/help-example.component.html']"
></codex-tutorial-example>

## Inline help

For instant assistance within the user interface, incorporate the inline help using a button
with the `btn-help` class and a [popover](#/components/popover/overview). It is essential to ensure
that the button includes the attribute `aria-label="Help content"` for accessibility purposes.

<codex-tutorial-example class="c87-codex-override">
  <div class="contaner-fluid p-24">
    <div class="row">
      <div class="col-md-6">
      <!-- important -->
        <div class="form-group">
          <label for="softwareDeviceTypeFilter">
            Device type filter
            <button
              type="button"
              placement="right"
              popover="If the filter is set, the software will show up for installation only for
               devices of that type. If no filter is set, it will be available for all
               devices."
              triggers="focus"
              class="btn-help"
              aria-label="Help content"
            ></button>
          </label>
          <input
            id="softwareDeviceTypeFilter"
            name="softwareDeviceTypeFilter"
            class="form-control" placeholder="e.g. c8y_Linux" />
        </div>
      <!-- /important -->
      </div>
    </div>
  </div>
</codex-tutorial-example>
