---
title: Data points export selector
slug: data-points-export-selector
icon: done
order: 150
apiDocs:
  - name: DatapointsExportSelectorComponent
    import: '@c8y/ngx-components'
---

The **Export** feature allows you to save **Data points** information to external files such as **CSV** or **Excel**.

**Export** is a standalone feature that works in conjunction with other features that allow you to select **data points**.
As input it requires a configuration object of type **ExportConfig**.
In the example below, the export is based on a selected data point.

## Data points exports selector

<codex-tutorial-example iframeHeight="600" class="codex-tutorial-example--wide" module="DatapointsExportSelectorExampleModule"
[sources]="['packages/tutorial/src/selector/data-points-export-selector-example/datapoints-export-selector.component.ts']">
</codex-tutorial-example>
