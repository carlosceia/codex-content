---
title: Device connection status
slug: device-connection-status
icon: done
order: 160
apiDocs:
  - name: DeviceStatusComponent
    import: '@c8y/ngx-components'
---
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

The device connection status component communicates the status of send and push connections between device and platform.

The connection status is symbolized by a pair of opposing white arrows, each representing the send and
push statuses.

Background color is used to highlight the present condition and a tooltip is displayed on hover
describing the current send and push statuses.

<codex-tutorial-example
    class="c8y-codex-override"
    iframeHeight="420"
    [module]="'DeviceConnectionStatusExampleModule'"
    [sources]="[
        './packages/tutorial/src/device-connection-status/device-connection-status-example.component.ts',
        './packages/tutorial/src/device-connection-status/device-connection-status-example.component.html'
      ]"
></codex-tutorial-example>


The upper arrow embodies the send connection, signifying the flow of data from the device to the
platform. The send connection status is represented by distinct background colors:

- **Available** - the data is sent within the designated interval, showing a green background.
- **Unavailable** - the data is not transmitted within the designated interval, showing a red background.
- **Unknown or Not monitored** - the interval is not configured, showing a muted grey background.

The lower arrow embodies the push connection, reflecting the communication from
the platform to the device. The push connection status is also conveyed via colors:

- **Active** - the connection is established, showing a green background.
- **Inactive** - the connection is not established, showing a muted grey background.
- **Not monitored** - the connection is not supported, showing a muted grey background.

The device may be in "Maintenance" mode, indicated by the wrench icon. This is a special connection
status indicating that the device is currently being maintained and cannot be monitored.

The default size works well for displaying items in record lists. Use the `size` input to
specify a different size if needing more flexibility to adapt the display for different contexts.

Tooltips provide connection status info on the arrows. However, below a size of 32px, a single
tooltip is used rather than separate ones.
