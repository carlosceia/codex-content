---
title: Dynamic widget component
slug: dynamic-widget-component
icon: done
---

This hook adds widgets to the UI.

It uses `hookComponent` under the hood, with the only difference being that `hookWidget` is typed specifically for widgets.
Example component which uses `hookWidget`:

<codex-tutorial-example module="LazyWidgetModule" [sources]="[
'./packages/ngx-components/core/dynamic-component/dynamic-component.model.ts',
'./packages/tutorial/src/lazy-widget/lazy-widget-view/lazy-widget-view.component.ts',
'./packages/tutorial/src/lazy-widget/index.ts']"></codex-tutorial-example>

For more info about `hookComponent`, refer to:
[hookComponent](#/develop/hooks/component-hook).
