---
title: Operation result
slug: operation-result
icon: done
order: 280
apiDocs:
  - name: OperationResultComponent
    import: '@c8y/ngx-components'
---

<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

The OperationResultComponent is used to display the outcome of an action triggered by the user,
indicating `success`, `warning`, or `error` to the user.

The `type` atribute sets the icon, and the color, use the `text` attribute to dynamically
show appropriate feedback based on the result of the operation.

Additionally, you set a custom `size` for the icon. To set the direction use the Boolean `vertical` attribute.

<codex-tutorial-example class="c8y-codex-override">
<div class="container-fluid">
  <div class="row">
    <div class="col-md-4">
<!-- important -->
<c8y-operation-result
  type="success"
  text="Setup completed"
  [vertical]="true">
</c8y-operation-result>
<!-- /important -->
    </div>
    <div class="col-md-4">
<c8y-operation-result
  type="warning"
  text="Setup completed with warnings"
  [vertical]="true">
</c8y-operation-result>
    </div>
    <div class="col-md-4">
<c8y-operation-result
  type="error"
  text="Setup not completed"
  [vertical]="true">
</c8y-operation-result>
    </div>
  </div>
  <div class="row">
    <div class="col-md-4">
<c8y-operation-result
  type="success"
  text="Setup completed"
  [size]="36"
  [vertical]="false">
</c8y-operation-result>
  </div>
  <div class="col-md-4">
<!-- important -->
<c8y-operation-result
  type="warning"
  text="Setup completed with warnings"
  [size]="36"
  [vertical]="false">
</c8y-operation-result>
<!-- /important -->
    </div>
    <div class="col-md-4">
<c8y-operation-result
  type="error"
  text="Setup not completed"
  [size]="36"
  [vertical]="false">
</c8y-operation-result>
    </div>
  </div>
</div>
</codex-tutorial-example>
