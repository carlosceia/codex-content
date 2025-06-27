---
title: Map
slug: map
icon: wrench
order: 260
apiDocs:
  - name: MapModule
    import: '@c8y/ngx-components/maps'
---

<!-- markdownlint-disable MD024 -->
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

Maps are used to display the location of assets.

Cumulocity is using [leaflet](https://leafletjs.com/) as a library to support interactive maps and
[OpenStreetMaps](https://www.openstreetmap.org/about) for map tiling.

## Default map

To render a simple map use the `c8y-map` component.

The default map takes `[assets]` as input, assets which are then rendered as "markers" when their
`c8y_Position.lat` and `c8y_Position.lng` are available. To align the behavior of the map, use the
`[config]` input options.

Check and test the available input options on the interactive example below.

<codex-tutorial-example class="codex-tutorial-example--wide" module="SimpleMapExampleModule" [sources]="['./packages/tutorial/src/maps/simple-map/simple-map-example.component.ts', './packages/tutorial/src/maps/simple-map/simple-map-example.component.html']"></codex-tutorial-example>

> ### Note
>
> The realtime option only works if you assign a real `ManagedObject`. For performance reasons, you
> can only activate realtime if you have no more than one marker on the map.

## Marker popovers

By default the `c8y-map` only provides an additional feature to set a popover. You only have to add
the `c8yMapPopup` directive inside the `c8y-map`. The `c8yMapPopup` delivers the current `assets` as
context, so that you can add more information to the popover, if needed.

<codex-tutorial-example class="codex-tutorial-example--wide" [module]="'MapPopupExampleModule'" [sources]="['packages/tutorial/src/maps/map-popup/map-popup-example.component.html', 'packages/tutorial/src/maps/map-popup/map-popup-example.component.ts']">
</codex-tutorial-example>

## Cluster maps

This option is useful if you want to display a huge amount of position assets in a map. It is used
by default on the map widget in Cumulocity IoT.

By default the cluster map will show all `ManagedObjects` on the platform that have a `c8y_Position`
fragment. `c8y-cluster-map` automatically starts clustering areas, avoiding over-fetching. The
content of the map is reloaded on each user interaction.

Additionally, the `c8y-map-status` component can be used to display information about the cluster
map status (for example, show feedback that map information is loading).

Check and test the available input options on the interactive example below:

<codex-tutorial-example class="codex-tutorial-example--wide" [module]="'ClusterMapExampleModule'" [sources]="['packages/tutorial/src/maps/cluster-map']">
</codex-tutorial-example>

## Cluster maps with custom root node

You can also scope the `c8y-cluster-map` to a certain root element by setting the `[rootNode]`.

<codex-tutorial-example class="codex-tutorial-example--wide" [module]="'ClusterMapRootNodeExampleModule'" [sources]="['packages/tutorial/src/maps/cluster-map-root-node']">
</codex-tutorial-example>

> ### Note
>
> Only the direct children of the `rootNode` are displayed and it will not cascade.
