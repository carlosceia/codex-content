---
title: Alarm event selection
slug: alarm-event-selection
icon: done
order: 10
apiDocs:
  - name: DatapointSelectionListComponent
    import: '@c8y/ngx-components'
---

The Alarm Event Selector component allows users to select alarm events based on certain criteria.

## Alarm Event Selector

<codex-tutorial-example iframeHeight="600" class="codex-tutorial-example--wide" module="AlarmEventSlectorExampleModule"
[sources]="['packages/tutorial/src/selector/alarm-event-selector-example/alarm-event-selector.component.ts']">
</codex-tutorial-example>

### Properties

The **config** property is an object that can be provided to configure the behavior of the component.

The **timelineType** property is a string that determines the type of timeline to be used. It can be either 'ALARM' or 'EVENT'.

- **ALARM**: This will set up the component to work with alarms. The alarms can be managed using the component.
- **EVENT**: This will set up the component to work with events. The events can be managed using the component.
