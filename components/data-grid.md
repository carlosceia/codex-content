---
title: Data grid
slug: data-grid
icon: done
order: 130
apiDocs:
  - name: DataGridModule
    import: '@c8y/ngx-components'
  - name: DATA_GRID_CONFIGURATION_STRATEGY
    import: '@c8y/ngx-components'
  - name: DATA_GRID_CONFIGURATION_CONTEXT
    import: '@c8y/ngx-components'
  - name: DATA_GRID_CONFIGURATION_CONTEXT_PROVIDER
    import: '@c8y/ngx-components'
  - name: DataGridConfigurationStrategy
    import: '@c8y/ngx-components'
  - name: GridConfigContext
    import: '@c8y/ngx-components'
  - name: AbstractConfigurationStrategy
    import: '@c8y/ngx-components'
  - name: UserPreferencesConfigurationStrategy
    import: '@c8y/ngx-components'
---

This module provides a set of components and classes to implement a data grid.

It is useful for loading, displaying, filtering, and sorting data in a grid.

> To view fully functional examples of the `data grid`, please see our `Tutorial Application`.

## Client-side data grid

This grid demonstrates how to:

- Define the list of columns to be displayed
- Pass static set of data
- Filter and sort data on client side [\*](#accessibility)
- Use event handlers for: items selection, individual actions, bulk actions, config changes

<codex-tutorial-example class="codex-tutorial-example--wide" module="ClientGridExampleModule" [sources]="['./packages/tutorial/src/grids/client-grid-example/client-grid-example.component.ts', './packages/tutorial/src/grids/client-grid-example/client-grid-example.component.html', './packages/tutorial/src/grids/client-grid-example/data.ts']"></codex-tutorial-example>

## Server-side data grid

This tab demonstrates how to:

- Set custom titles and labels
- Define columns with inline objects
- Define two custom columns with classes (e.g., for Type and Last Updated)
- Use custom components for header cell, data cell and filtering form [\*](#accessibility)
- The two custom columns (for Type and Last Updated) illustrate two different ways of defining filter chips: one employs a schema-based approach via Formly schema, and the other uses a customized approach through the generateChips function.
- Build inventory query and load data with <code>serverSideDataCallback</code>
- Set up event handlers for: items selection, individual actions, bulk actions, config changes
- Set up a view for empty list

<codex-tutorial-example class="codex-tutorial-example--wide" module="ServerGridExampleModule" [sources]="['./packages/tutorial/src/grids/server-grid-example/server-grid-example.component.ts', './packages/tutorial/src/grids/server-grid-example/server-grid-example.component.html', './packages/tutorial/src/grids/server-grid-example/server-grid-example.service.ts', './packages/tutorial/src/grids/server-grid-example/type-data-grid-column/type.data-grid-column.ts', './packages/tutorial/src/grids/server-grid-example/last-updated-data-grid-column/last-updated.data-grid-column.ts']"></codex-tutorial-example>

## Device grid

Device grid is a wrapper component around the data grid component that comes with a preset and configurable set of columns and lets you browse devices on the platform.

The following example demonstrates how to:

- Display a filterable and sortable list of devices [\*](#accessibility)
- Load grid configuration from presets (columns, stored filtering and sorting)
- Implement event handlers for columns config changes, device query string changes
- Implement custom validators for filters (based on [Formly documentation](https://formly.dev/docs/guide/validation/#3-declaring-validation-function-and-message-within-field-definition))

<codex-tutorial-example class="codex-tutorial-example--wide" module="DeviceGridExampleModule" [sources]="['./packages/tutorial/src/grids/device-grid-example/device-grid-example.component.ts', './packages/tutorial/src/grids/device-grid-example/device-grid-example.component.html', './packages/tutorial/src/grids/device-grid-example/device-grid-example-configuration-strategy.ts']"></codex-tutorial-example>

> ### Filtering and sorting
>
> The Filter and sorting functionalities are not available in mobile devices.

## Labels & Visual settings

You can set:

- The title displayed at the top of the grid (`title`)
- The labels for load more button (`loadMoreItemsLabel`, `loadingItemsLabel` - when loading is in progress)

<b>Example</b>

```html
<c8y-data-grid
  [title]="'My objects'"
  [loadMoreItemsLabel]="'Load more objects'"
  [loadingItemsLabel]="'Loading objects…'"
></c8y-data-grid>
```

The component allows to control some visual settings via the "displayOptions" property:

```ts
displayOptions: DisplayOptions = {
  bordered: true,
  striped: true,
  filter: true,
  gridHeader: true,
  hover: true
};
```

Further visual settings can be set in individual columns with the following properties which can be checked within the API tab:

- `dataType`
- `gridTrackSize`
- `headerCSSClassName`
- `cellCSSClassName`

You can customize the header and cell rendering with your own components (see [Columns](#Columns) for more information).

## Empty state

You can define what to display when there are no items to be displayed in the grid by passing an element with `c8y-empty-state` class or use the `c8y-ui-empty-state` component as in the below example:

<codex-tutorial-example class="codex-tutorial-example--wide" module="EmptyGridExampleModule" [sources]="['./packages/tutorial/src/grids/empty-grid-example/empty-grid-example.component.html']"></codex-tutorial-example>

## Columns

You can define columns by passing a list of objects compliant with the `Column` interface. The most basic definition contains:

- `name`: The name of the column
- `header`: The header text for the column
- `path`: The path in item's object from where the value is taken

There are default renderers for header, cell and filtering form, but they can be overridden by custom components for fine-grained control over how these elements are presented.

Let's cosnider the following template:

```html
<c8y-data-grid [columns]="columns"></c8y-data-grid>
```

and the following columns list:

```ts
columns: Column[] = [
  {
    name: 'id',
    header: 'ID',
    path: 'id',
    filterable: true,
    sortable: true
  },
  {
    name: 'name',
    header: 'Name',
    path: 'name',
    filterable: true,
    sortable: true
  },
  new TypeDataGridColumn()
];
```

The first two columns use default renderers but the third one is customized. `TypeDataGridColumn` needs to implement the `Column` interface and set the renderers:

Then each of the renderer components is responsible for rendering a particular part of the grid.

The `TypeHeaderCellRendererComponent` renders the header cell of the column. The `TypeCellRendererComponent` renders the data cell of the column.

The example for the "TypeCellRendererComponent" also shows how to use a custom service to process the current item before displaying it in the template.

The `TypeFilteringFormRendererComponent` renders the filtering form for the column where filtering options can be selected and applied or reset:

<codex-tutorial-example class="codex-tutorial-example--wide" module="ServerGridExampleModule" [sources]="['./packages/tutorial/src/grids/server-grid-example/type-data-grid-column/type.data-grid-column.ts', './packages/tutorial/src/grids/server-grid-example/type-data-grid-column/type.header-cell-renderer.component.ts', './packages/tutorial/src/grids/server-grid-example//type-data-grid-column/type.cell-renderer.component.ts', './packages/tutorial/src/grids/server-grid-example/type-data-grid-column/type.filtering-form-renderer.component.ts']"></codex-tutorial-example>

In the following section, we show you how to use `externalFilterQuery` to build a query to fetch data from the server.

## Rows

Rows can be provided to the data grid via `rows` input. However, this is usually only useful for predefined set of data which is then processed on the client side. If you want to know more about this way of providing data, see the example in our tutorial application.

Another way of providing data to the data grid is to use `serverSideDataCallback` input. The function provided to this input will be invoked whenever the grid needs to load data, that is, on initial load, on next page load, on column filtering or sorting settings change. This function takes a `DataSourceModifier` object and return a `ServerSideDataResult` object. The modifier represents the current state of the grid, that means, filtering/sorting settings in columns, search text from the search input, selected items and pagination. Based on this state, you can perform any logic you need to determine what data must be displayed and then return it, along with additional statistics needed for accurate handling of the paging:

- `size`: The number of all items that can be displayed in a grid when no filters are applied
- `filteredSize`: The number of items that match current filters

Let's consider the following example:

```ts
/**
 * This method loads data when data grid requests it (for example, on initial load or on column settings change).
 * It gets the object with current data grid setup and is supposed to return:
 * full response, list of items, paging object, the number of items in the filtered subset, the number of all items.
 */
async onDataSourceModifier(
  dataSourceModifier: DataSourceModifier
): Promise<ServerSideDataResult> {
  let serverSideDataResult: ServerSideDataResult;

  const { res, data, paging } = await this.service.getData(
    dataSourceModifier.columns,
    dataSourceModifier.pagination
  );
  const filteredSize: number = await this.service.getCount(
    dataSourceModifier.columns,
    dataSourceModifier.pagination
  );
  const size: number = await this.service.getTotal();

  serverSideDataResult = { res, data, paging, filteredSize, size };

  return serverSideDataResult;
}
```

As you can see, we're using the state from `dataSourceModifier` to execute the queries and return the result. The actual implementation of these three queries might vary depending on your use case (what endpoint is used, what kind of columns you defined, and so on). In the following example we build and execute inventory queries based on columns with standard and custom filtering/sorting settings and pagination:

```ts
/** Returns data for current columns and pagination setup. */
async getData(columns: Column[], pagination: Pagination) {
  // build filters based on columns and pagination
  const filters = this.getFilters(columns, pagination);
  // execute inventory query for the list of managed objects
  return this.inventoryService.list(filters);
}

/** Returns the number of items matching current columns and pagination setup. */
async getCount(columns: Column[], pagination: Pagination) {
  const filters = {
    // build filters based on columns and pagination
    ...this.getFilters(columns, pagination),
    // but we only need the number of items, not the items themselves
    pageSize: 1,
    currentPage: 1
  };
  return (await this.inventoryService.list(filters)).paging.totalPages;
}

/** Returns the total number of items (with no filters). */
async getTotal(): Promise<number> {
  const filters = {
    pageSize: 1,
    withTotalPages: true
  };
  return (await this.inventoryService.list(filters)).paging.totalPages;
}
```

Additionally, two of the functions above use `getFilters` method to build a query based on the columns and pagination setup:

```ts
/** Returns filters for given columns and pagination setup. */
private getFilters(columns: Column[], pagination: Pagination) {
  return {
    query: this.getQueryString(columns),
    pageSize: pagination.pageSize,
    currentPage: pagination.currentPage,
    withChildren: false,
    withTotalPages: true
  };
}

/** Returns a query string based on columns setup. */
private getQueryString(columns: Column[]): string {
  const fullQuery = this.getQueryObj(columns);
  return this.queriesUtil.buildQuery(fullQuery);
}

/** Returns a query object based on columns setup. */
private getQueryObj(columns: Column[]): any {
  return transform(columns, (query, column) => this.addColumnQuery(query, column), {
    __filter: {},
    __orderby: []
  });
}

/** Extends given query with a part based on the setup of given column. */
private addColumnQuery(query: any, column: Column): void {
  // when a column is marked as filterable
  if (column.filterable) {
    // in the case of default filtering form, `filterPredicate` will contain the string entered by a user
    if (column.filterPredicate) {
      // so we use it as the expected value, * allow to search for it anywhere in the property
      query.__filter[column.path] = `*${column.filterPredicate}*`;
    }

    // in the case of custom filtering form, we're storing the query in `externalFilterQuery.query`
    if (column.externalFilterQuery) {
      query = this.queriesUtil.addAndFilter(query, column.externalFilterQuery.query);
    }
  }

  // when a column is sortable and has a specified sorting order
  if (column.sortable && column.sortOrder) {
    // add sorting condition for the configured column `path`
    query.__orderby.push({
      [column.path]: column.sortOrder === 'asc' ? 1 : -1
    });
  }

  return query;
}
```

You can see the result from the example above:

<codex-tutorial-example class="codex-tutorial-example--wide" module="ServerGridExampleModule" [sources]="['./packages/tutorial/src/grids/server-grid-example/server-grid-example.component.ts', './packages/tutorial/src/grids/server-grid-example/server-grid-example.service.ts']"></codex-tutorial-example>

## Row actions

The component supports actions to be invoked on individual rows or bulk actions to be invoked on multiple rows previously selected by user. You can either use predefined actions or define your own:

<codex-tutorial-example class="codex-tutorial-example--wide" module="ClientGridExampleModule" [sources]="['./packages/tutorial/src/grids/client-grid-example/client-grid-example.component.ts']"></codex-tutorial-example>

### Hook into row action controls

In some cases plugins may need to add an action control to an existing data grid (e.g. **All devices**, **Subassets**, **Subtenants**, etc.) or override the logic of an existing action control for all or only a given subset ot the items in the grid. `hookDataGridActionControls` makes this possible by letting you provide `ActionControlHook` in which you can use:

- `matchesGrid` to provide a function which determines to which data grid(s) the action control(s) will be added to. It receives an `ActivatedRoute` argument and optionally a `GridConfigContext` argument (only for grids that have a config context defined) to let you implement your logic. In case you need more data, you can provide an `ActionControlFactory` where you can inject the data and services you need.
- `actionControls` to provide a single control or an array of action controls which will be added to the grid. For every action control you can:
  - provide a `showIf` function which determines for which items the action will be displayed. If multiple controls of the same type resolve `true`, the one with higher `priority` will be displayed. You cannot have more than one action of the same type. Action controls with a `showIf` function generally have priority over controls without `showIf` function. This lets you override default actions in a grid.
  - define a `priority` to set the order in which controls will be displayed. Actions with higher `priority` value will appear earlier in the list. Actions with no priority defined default to `0`. Actions with the same priority will appear in the order they are resolved from the injectors where actions passed via the `actionControls` input will appear first.
  - provide a `callback` function where you implement your action logic. The `callback` function receives a `reload` callback as its second argument which allows you to refresh the grid after your action.

<codex-tutorial-example class="codex-tutorial-example--wide" module="ServerGridExampleModule" [sources]="['./packages/tutorial/src/grids/server-grid-example/server-grid-action-controls.module.ts', './packages/tutorial/src/grids/server-grid-example/server-grid-action-controls.factory.ts', './packages/tutorial/src/grids/server-grid-example/server-grid-example.component.ts']"></codex-tutorial-example>

## Infinite scroll / "Load more" button

The component takes `infiniteScroll` input which can have one of the following values:

- `auto`: Attempts to load more data automatically as user scrolls down (default)
- `show`: Shows a load more button for the user to decide
- `none`: Doesn't perform any load more action
- `hidden`: Loads more data automatically but with no visible button for the user

## Event emitters

The component exposes several event emitter outputs:

- `itemsSelect`
- `onChildDevices`
- `onConfigChange`
- `onFilter`
- `rowClick`
- `rowMouseLeave`
- `rowMouseOver`

to which you can bind via template, for example:

```html
<c8y-data-grid
  (rowClick)="onRowClick($event)"
  (itemsSelect)="onItemsSelect($event)"
  (onConfigChange)="onConfigChange($event)"
></c8y-data-grid>
```

You can find more details about them in the outputs reference in the API tab.

## Expandable rows

The `expandableRows` input controls the availability of the expandable rows column. It can be one of three values:

- `NONE` - no expandable rows (default value)
- `SYNC` - additional column with expand button is displayed and expandable rows are expanding synchronously when button is clicked
- `ASYNC` - additional column with expand button is displayed and expandable rows are expanding asynchronously when button is clicked

In the example below we utilize the `c8yExpandableRow` directive to specify the expanded content and set `expandableRows` to `SYNC`. Row is expanded immediately when clicked.
You can customize the rendering of the expanded content by replacing `c8y-sync-expandable-row-example` with your desired component or template:

<codex-tutorial-example class="codex-tutorial-example--wide" module="SyncExpandableRowsGridExampleModule" [sources]="['./packages/tutorial/src/grids/sync-expandable-rows-grid-example/sync-expandable-rows-grid-example.component.html', './packages/tutorial/src/grids/sync-expandable-rows-grid-example/sync-expandable-rows-example.component.ts']"></codex-tutorial-example>

In the next example we set `expandableRows` to `ASYNC`. Row is expanded only when success callback `asyncRenderSuccess` function provided to `c8y-async-expandable-row-example` is called.
You can also handle errors by calling fail callback function `asyncRenderFail` and abort expanding row.
In real life scenario it can be used to wait until initial data is received from the server before expanding the row. In our case it is simulated by timeout of 2 seconds.

<codex-tutorial-example class="codex-tutorial-example--wide" module="AsyncExpandableRowsGridExampleModule" [sources]="['./packages/tutorial/src/grids/async-expandable-rows-grid-example/async-expandable-rows-grid-example.component.html', './packages/tutorial/src/grids/async-expandable-rows-grid-example/async-expandable-rows-example.component.ts']"></codex-tutorial-example>

## Accessibility

> ### Filter and sorting
>
> The Filter and sorting functionalities are not available in mobile devices.

## Filter Chips

Filter Chips in the data-grid allow users to apply filters and display them as chips. These chips provide a clear and concise way of visualizing applied filters and allow users to easily remove them.

In the **server-side grid example**, two custom columns demonstrate the two different ways of defining filter chips:

- Schema-based chips through Formly Schema (used in the **Last Updated** column).
- Customized chips via the `generateChips` function (used in the **Type** column).

Filter Chips are automatically or manually created based on the filters applied to the columns. Each chip has:

- Display value - the label shown to users.
- Value - the filter that will be used by the data-grid to filter the data.
- Remove function - a callback that is executed when the user clicks on the remove icon of the chip. It returns a partial chip object that describes the new state of the filter after the chip has been removed.

Here is an example of a filter object:

```ts
{
  filterable: true,
  name: 'name',
  filteringConfig: {
    fields: [
      {
        key: 'names',
        type: 'array',
        defaultValue: [''],
        fieldArray: {
        type: 'string'
        }
      }
    ]
  },
  externalFilterQuery: {
    names: ['Test']
  }
}
```

And here is the corresponding chip object:

```ts
{
  columnName: 'name',
  displayValue: 'Test',
  value: 'Test',
  externalFilterQuery: { names: ['Test']},
  filteringConfig: {
    // Column's filtering config
  },
  path: ['names', 0],
  remove(): Partial<FilterChip> {
    // Code to remove the filter
  }
}
```

### Customization

#### 1. Schema-based Chips

When using Formly, Filter Chips can be generated for standard field types, which are preconfigured in the data-grid to handle chip display without additional setup. These field types include:

- **Boolean fields**: (`switch`, `boolean`, `checkbox`) represented by `BooleanFilterMapper`
- **Radio and Enum fields**: (`radio`, `enum`) represented by `RadioFilterMapper`
- **Typeahead fields**: (`typeahead`) represented by `TypeaheadFilterMapper`
- **Date and Date-time fields**: (`date-time`, `date`) represented by `DateFilterMapper`
- **Select fields**: (`select`) represented by `SelectFilterMapper`
- **String fields**: (`string`, `input`) represented by `StringFilterMapper`

Each of these mappers converts the field data into a chip, displaying a `displayValue` label and a `value` for the applied filter.

If custom Formly fields are required, users can extend the schema by defining a custom field and using the `hookFilterMapper` function, which provides a way to add new field mappings for chips. The following example shows how to add a custom mapper module:

```ts
import { NgModule } from '@angular/core';
import { FilterMapperModule, hookFilterMapper } from '@c8y/ngx-components';
import { CustomInputFilterMapper } from './custom-input-filter.mapper';

@NgModule({
  imports: [FilterMapperModule],
  providers: [hookFilterMapper(CustomInputFilterMapper)]
})
export class CustomFilterMapperModule {}
```

In this example, `CustomInputFilterMapper` extends the field options by mapping a custom Formly field type, custom-input, into a `FilterChip`.

> In the **Last Updated** column in the **server-side grid example**, filter chips are generated automatically using a Formly schema. The data-grid takes care of rendering chips based on the user's filter input.

#### 2. Customized Chips via the generateChips function

If the column defined is not a formly form generated one, you have the option to define in the filtering config a generateChips function, which is a custom function that takes a model object as input and returns an array of chip objects.

Here is an example of a custom chips generation function:

```ts
generateChips(model): PartialFilterChipGenerationType[] {
  if (model.selectedNodes) {
    return model.selectedNodes.map(mo => ({
      displayValue: mo.name,
      value: mo,
      remove(): PartialFilterChipRemovalType {
        const { externalFilterQuery, columnName, value } = this;
        const nodes = externalFilterQuery.selectedNodes.filter(
          node => node.id !== value.id
        );

        return {
          externalFilterQuery: { selectedNodes: nodes },
          columnName
        };
      }
    }));
  }
}
```

> In the **Type** column in the **server-side grid example**, chips are manually generated via the `generateChips` function. This allows more control over how chips are created and displayed. For instance, chips can represent different types of filters like **Group**, **Device**, or **Smart Rule**.

### Manual Chips Input

If no schema or custom chips generation function is provided, the user can put already generated chips in the externalFilterQuery. This option is demonstrated in the server grid example in the tutorial app.

```ts
externalFilterQuery: {
  model: this.model,
  query: this.service.getTypeQuery(this.model),
  chips: this.service.generateChips(this.model)
}
```
