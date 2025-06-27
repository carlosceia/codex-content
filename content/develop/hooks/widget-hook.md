---
title: Widget config
slug: widget-config
icon: done
---

The hook is used to extend an existing configuration of a widget. It should be the default hook to be used if a configuration should be provided for a widget.

<codex-tutorial-example module="widgetConfigHookProviders" [sources]="['packages/tutorial/src/hooks/widget-config/widget-config.providers.ts']"></codex-tutorial-example>

Use the `WidgetConfigService` to load and store widget configurations.
