---
title: For of directive
slug: for-of-directive
icon: done
apiDocs:
  - name: ForOfDirective
    import: '@c8y/ngx-components'
---

<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

A directive to iterate over `IResultList` data from @c8y/client. The directive is basically designed like the normal `*ngFor` directive but can handle the pagination aspects of the Inventory API. It is therefore only helpful if used in combination with this API, but can also be used like a normal for directive.

The following example shows the usage of the `c8yFor` with a simple array. Note that the `IResultList` commonly returns results wrapped in the `data` object.

<codex-tutorial-example>
  <div *ngIf="{ data: ['a','b','c','d','e','f','g','h'] } as exampleArray">
    <div *c8yFor="let example of exampleArray">
      {{example}}
    </div>
  </div>
</codex-tutorial-example>

Despite this example is not real-life one, it shows the idea behind `c8yFor` and what kind of input has to be provided to this directive. `c8yFor` shows its full potential when used in combination with the Inventory API, allowing to use pagination to ensure loading many data sets in a scalable manner. To use it with the Inventory API the total pages must be included in each request. Therefore `withTotalPages` query must be always included in the query parameter. Using the `InventoryService` a request in an Angular component for all devices would look the following:

```ts
constructor(private inventoryService: InventoryService) {}

ngOnInit(): void {
  this.loadDevices();
}

async loadDevices(): void {
  this.devices = await this.inventoryService.list({
    pageSize: 10,
    withTotalPages: true,
    fragmentType: 'c8y_IsDevice',
    currentPage: 1
  });
}
```

> **Important**: If `withTotalPages` is not set to true, the pagination of `c8yFor` will not work and you might only see the first 10 entries.

## Paging

The `c8yFor` directive gets really powerful if used with paging. Depending on the `c8yForLoadMore` configuration, it allows to load multiple pages:

- `auto`: Tries to automatically load more data (default maximum 10 iterations; can be changed with
  maxIterations settings).
- `show`: Shows a load more button for the user to decide
- `none`: Doesn't perform any load more action.
- `hidden`: Loads more data automatically but with no visible button for the user.

The `auto` setting automatically loads if the user can see more data. This is very useful if the data have to be filtered or if a list with many pages is displayed. The automatic loading is triggered as soon as the user scrolls to the end of the list. Try scrolling down in the following list of devices:

<codex-tutorial-example [open]="true" module="ForOfModule" [sources]="['./packages/tutorial/src/for-of-directive/for-of-example.component.ts', './packages/tutorial/src/for-of-directive/for-of-example.component.html']"></codex-tutorial-example>

The example shows multiple features of the `c8yFor` combined. You can switch between the different load-more-modes or add a filter to the data. To filter the data any rxjs operator pipe can be applied to the `c8yForPipe` input, to filter the
data displayed currently as well as the data loaded by subsequent requests.

In the example you can apply the filter pipe and or raise the `pageSize` of the request to see the different behavior of the `c8yFor`. It is important to know, that the `auto` setting always tries to fill the visible space and only shows the button if the `maxIterations` number is reached. These features in combination with an applied filter and the `c8yForNotFound` can give a way to design a simple client-side search on the Inventory API. The following example shows simplified a custom not found template:

<codex-tutorial-example>
  <div *ngIf="{ data: [] } as exampleArray">
    <div *c8yFor="let example of exampleArray; notFound: notFound">
      {{example}}
    </div>
  </div>
  <ng-template #notFound>
    Items not found
  </ng-template>
</codex-tutorial-example>

As the `forOf` directive like the `ngFor` does not have any strict template, you can basically render whatever needed into this list. The following example show the `forOf` used in combination with a [list-group](#/components/list-group/overview):

<codex-tutorial-example module="ListCheckModule" [sources]="['./packages/tutorial/src/list/list/list-check']"></codex-tutorial-example>

## Realtime

This directive can also handle realtime data. To use it, provide `c8yForRealtime` for real-time data
source (usually it is instance of [RealtimeService](#/develop/services/RealtimeService/overview)) and `c8yForRealtimeOptions` for configuration:

<codex-tutorial-example  [open]="true" [sources]="['packages/ngx-components/core/common/forOf.model.ts']"></codex-tutorial-example>


## Virtual scroll - default strategy

The group list can be used with `c8yFor` directive with virtual scroll enabled. The virtual scrolling functionality improves the performance, as only the visible elements are rendered to the DOM. The following example shows an default strategy used for virtual scrolling:

<codex-tutorial-example
    module="ListVirtualScrollTimelineModule"
    [sources]="[
      './packages/tutorial/src/list/list-virtual-scroll/list-virtual-scroll-timeline/list-virtual-scroll-timeline.component.ts',
      './packages/tutorial/src/list/list-virtual-scroll/list-virtual-scroll-timeline/list-virtual-scroll-timeline.component.html'
      ]"
></codex-tutorial-example>

You only have to set the `c8yForEnableVirtualScroll` to true to enable virtual scrolling. You have to inform the `c8yFor` about the element size by setting `c8yVirtualScrollElementSize` to the assumed size of each element.

```
  *c8yFor="
      let device of devices;
      let i = index;
      enableVirtualScroll: true;
      virtualScrollElementSize: 68
    "
```

You are not able to use dynamic hights of elements. Virtual scrolling needs you define a fixed pixel size of each element.

## Virtual scroll - container strategy

It displays items inside scrollable container, and rendering is based on this container scroll position. You can use the range selector above to increase size of data, or to check how performance is affected.

<codex-tutorial-example module="ListVirtualScrollCheckModule" [sources]="['./packages/tutorial/src/list/list-virtual-scroll/list-virtual-scroll-check']"></codex-tutorial-example>

```
  *c8yFor="
      let device of devicesContainerStrategy;
      loadMore: 'show';
      enableVirtualScroll: true;
      virtualScrollElementSize: 40;
      virtualScrollStrategy: 'fixed';
      virtualScrollContainerHeight: 400
    "
```

To use virtual scroll in a container, you must provide the `virtualScrollStrategy` as `fixed.`
