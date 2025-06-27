---
title: ApiService
slug: ApiService
icon: done
order: 10
apiDocs:
  - name: ApiService
    import: '@c8y/ngx-components/api'
---
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

You can use the `ApiService` to react on requests performed against the API using the `FetchClient`
of the `@c8y/client` library by the current application on the local client.

The `hookRequest` and `hookResponse` methods can be used to react on requests being made and their
responses, for example, a device was deleted so we have to refresh the device list.

The `addInterceptor`, `removeInterceptor` and `hasInterceptor` methods can be used to intercept
requests. They can be used, for example, to adjust request parameters before a request is sent or to
manipulate the response.

<codex-tutorial-example [open]="true" [hideToggleButton]="true"
[sources]="['./packages/tutorial/src/client-interceptor/index.ts', 'packages/tutorial/src/client-interceptor/client-interceptor.service.ts']"></codex-tutorial-example>
