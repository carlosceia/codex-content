---
title: Select
slug: select
icon: done
order: 20
apiDocs:
  - name: SelectComponent
    import: '@c8y/ngx-components'
  - name: SelectedItemsDirective
    import: '@c8y/ngx-components'
  - name: SelectItemDirective
    import: '@c8y/ngx-components'
  - name: SelectLegacyComponent
    import: '@c8y/ngx-components'
  - name: TypeaheadComponent
    import: '@c8y/ngx-components'
---

<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

The Select component displays a list of options with a filter field.

It enhances user interaction by providing a searchable list of options and supporting multiple
selections, making the selection process efficient and user-friendly.

## Select

A simple select can be implemented with the `c8y-select` component. Set the `[items]` input to the
options you want the user to select:

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="row">
      <div class="col-sm-6">
        <c8y-select
        [items]="['Austria','Bulgaria','Germany','Madagascar','Poland','Portugal','UK','USA']"
        [placeholder]="'Select options'"
        ></c8y-select>
      </div>
    </div>
  </div>
</codex-tutorial-example>

The `[items]` input accepts a simple string array, or a array of `SelectableItem`:

```ts
export type SelectableItem = {
  label: string;
  value: string;
};
```

> ### Note
>
> If a simple string array is used `value` and `label` are the same.

The `c8y-select` component works best when used in combination with a `[(ngModel)]`.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="row">
      <div class="col-sm-6">
      <!-- important -->
        <c8y-select
        [items]="['Austria','Bulgaria','Germany','Madagascar','Poland','Portugal','UK','USA']"
        [(ngModel)]="formModelForSelect"
        [placeholder]="'Select options'">
        </c8y-select>
      <!-- /important -->
      </div>
      <div class="col-sm-6">
        <pre>{{formModelForSelect | json}}</pre>
      </div>
    </div>
  </div>
</codex-tutorial-example>

You can preselect items by setting the selected item. If this is the case, the user cannot deselect
any item.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="row">
      <div class="col-sm-6">
      <!-- important -->
        <c8y-select
        [items]="['Austria','Bulgaria','Germany','Madagascar','Poland','Portugal','UK','USA']"
        [selected]="'Austria'"
        [placeholder]="'Select options'">
        </c8y-select>
        <!-- /important -->
      </div>
    </div>
  </div>
</codex-tutorial-example>

You can however allow the user to deselect items by setting `[canDeselect]` to true.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="row">
      <div class="col-sm-6">
      <!-- important -->
        <c8y-select
        [items]="['Austria','Bulgaria','Germany','Madagascar','Poland','Portugal','UK','USA']"
        [selected]="'Austria'"
        [placeholder]="'Select options'"
        [canDeselect]="true">
        </c8y-select>
        <!-- /important -->
      </div>
      <div class="col-sm-6">
        <!-- important -->
        <c8y-select
        [items]="['Austria','Bulgaria','Germany','Madagascar','Poland','Portugal','UK','USA']"
        [selected]="'Austria'"
        [placeholder]="'Select options'"
        [canDeselect]="true"
        [multi]="true">
        </c8y-select>
        <!-- /important -->
      </div>
    </div>
  </div>
</codex-tutorial-example>

You can disable the whole `c8y-select` component by using the `[disabled]` property.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="row">
      <div class="col-sm-6">
        <!-- important -->
        <c8y-select
        [items]="['Austria','Bulgaria','Germany','Madagascar','Poland','Portugal','UK','USA']"
        [placeholder]="'Select options'"
        [disabled]="true"
        ></c8y-select>
        <!-- /important -->
      </div>
    </div>
  </div>
</codex-tutorial-example>

A multi select can be used if the user needs to select multiple values. Simply set `[multi]="true"`.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="row">
      <div class="col-sm-6">
      <!-- important -->
        <div class="form-group">
          <label>No values selected</label>
          <c8y-select
            [items]="['Austria','Bulgaria','Germany','Madagascar','Poland','Portugal','UK','USA']"
            [multi]="true"
            [placeholder]="'Select options'"
          ></c8y-select>
        </div>
        <!-- /important -->
      </div>
      <div class="col-sm-6">
        <!-- important -->
        <div class="form-group">
          <label>With preselected values</label>
          <c8y-select
            [items]="['Austria','Bulgaria','Germany','Madagascar','Poland','Portugal','UK','USA']"
            [selected]="['Germany', 'Austria']"
            [multi]="true"
            [placeholder]="'Select options'"
          ></c8y-select>
        </div>
        <!-- /important -->
      </div>
    </div>
  </div>
</codex-tutorial-example>

You can use content projection to use html inside the selectable items. Use the `c8ySelectItem`
directive to define the value and label set on those items.

> ### Note
>
> Such items are always rendered into the body of a `c8y-li`. Check the [list-group](#/components/list-group/overview) documentation to understand your options.


You can also define how a selected item looks like. You only need to use the directive
`*c8ySelectedItems="let selectedItem"`. The following examples render the selected items as icons.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="row">
      <div class="col-sm-6">
      <!-- important -->
        <c8y-select>
          <i [c8yIcon]="'rocket'" class="text-16" *c8ySelectItem="'rocket'; label: 'Rocket'"></i>
          <i [c8yIcon]="'car'" class="text-16" *c8ySelectItem="'car'; label: 'Car'"></i>
        </c8y-select>
        <!-- /important -->
      </div>
      <div class="col-sm-6">
        <!-- important -->
        <c8y-select [multi]="true" placeholder="Enter 'Car' or 'Rocket'…" #select>
          <span
              class="tag tag--info chip"
              *c8ySelectedItems="let selectedItem"
            >
              <button
                class="btn btn-xs btn-clean text-10 m-r-4"
                title="{{ selectedItem.label | translate }}"
                type="button"
                (click)="$event.preventDefault(); $event.stopPropagation(); select.deselect(selectedItem)"
              >
                <i c8yIcon="times"></i>
              </button>
              <i [c8yIcon]="selectedItem.value">
            </span>
          <i [c8yIcon]="'rocket'" class="text-16" *c8ySelectItem="'rocket'; label: 'Rocket'"></i>
          <i [c8yIcon]="'car'" class="text-16" *c8ySelectItem="'car'; label: 'Car'"></i>
        </c8y-select>
        <!-- /important -->
      </div>
    </div>
  </div>
</codex-tutorial-example>

You can also use content projection to do complex selects containing any selectable item or even
forms.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="row">
      <div class="col-sm-8">
        <!-- important -->
        <c8y-select [placeholder]="'Select a filter'" [multi]="true" #selectWithProjection [insideClick]="true">
          <span
            class="tag tag--info chip"
            *c8ySelectedItems="let selectedItem"
          >
            <button
              class="btn btn-xs btn-clean text-10 m-r-4"
              title="{{ selectedItem.label | translate }}"
              type="button"
              (click)="$event.preventDefault(); $event.stopPropagation(); selectWithProjection.deselect(selectedItem)"
            >
              <i c8yIcon="times"></i>
            </button>
            {{ selectedItem.label }}: {{ selectedItem.value }}
          </span>
          <div>
            <div class="p-16 input-group">
            <input type="text" class="form-control" [(ngModel)]="exampleFilter" placeholder="What do you want to filter for?" />
            <span class="input-group-btn">
              <button
                class="btn btn-primary"
                type="button"
                (click)="selectWithProjection.select({ value: exampleFilter, label: 'Filter for' }); selectWithProjection.close()">
                Apply
              </button>
            </span>
            </div>
          </div>
        </c8y-select>
        <!-- /important -->
      </div>
    </div>
  </div>
</codex-tutorial-example>

## Native select

You can use the native select. To ensure a consistent appearance across different web browsers, you can override the default styling by adding the class `form-control` to the `select` element and wrapping it within a `c8y-select-wrapper`.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="row">
      <div class="col-sm-6">
        <!-- important -->
        <div class="c8y-select-wrapper">
          <select id="selectExample" class="form-control">
            <option>Pick one option…</option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
            <option>Option 5</option>
          </select>
        </div>
        <!-- /important -->
      </div>
    </div>
  </div>
</codex-tutorial-example>

## Legacy select

You can still use the legacy `c8y-select-legacy` component but it should be avoided. It should only be used for migration.

<codex-tutorial-example style="min-height: 400px">
<c8y-select-legacy
  [items]="[{name: 'Option one'}, {name: 'Option two'}, {name: 'Option three'},{name: 'Option four'}, {name: 'Option five'}, {name: 'Option six'}]"
  [selected]="selected"
  [placeholder]="'Select options'"
  (onChange)="someFunction($event)">
</c8y-select-legacy>
</codex-tutorial-example>

> ### Deprecated
>
> This component is deprecated and will be removed in upcoming versions.

## Typeahead

The `c8y-typeahead` is a very generic select component that you can extend to your needs. It accepts
any `c8y-li` and can be used to build "select like" components which react on typing:

<codex-tutorial-example style="min-height: 200px">
<c8y-typeahead
  placeholder="Type to search for deviceTypes"
  name="deviceType"
  container="body"
  [(ngModel)]="selectedOption"
>
  <c8y-li (click)="selectedOption = { id: 1, name: 'IoT' }">
    IoT
  </c8y-li>
  <c8y-li (click)="selectedOption = { id: 2, name: 'Cumulocity' }">
    Cumulocity
  </c8y-li>
</c8y-typeahead>
</codex-tutorial-example>

You can use the typeahead in combination with a `*c8yFor` to build complex pre-filtered list that
request suggestions from the backend.

<codex-tutorial-example iframeHeight="400" module="TypeaheadExampleModule"
[sources]=['./packages/tutorial/src/typeahead/typeahead-example.component.html','./packages/tutorial/src/typeahead/typeahead-example.component.ts']></codex-tutorial-example>

With `c8y-typeahead` you can either select an item from the list by clicking on the dropdown or
filter the list by typing into the input box.

The data is requested from the backend by the
[c8yFor](#/develop/directives/for-of-directive/overview) directive, which takes care of further data
loading and the filtering. The rendering is done by a
[list-item](#/components/list-group/overview#simple-list-group) which is rendered into the internal
list-group. When the `c8yFor` does not find any other items, `notFoundTemplate` is rendered instead.

This component allows to also select new items, this is useful in cases where you want to allow the
user to either search for an existing item or create a new one.
