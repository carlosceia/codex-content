---
title: File picker
slug: file-picker
icon: done
order: 75
apiDocs:
  - name: FilePickerComponent
    import: '@c8y/ngx-components'
---
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

The `c8y-file-picker` component provides users with flexible options for uploading files, allowing them to upload binaries directly or use URLs for seamless integration.

Users have the capability to:

- **Upload binary files**: Directly upload files from their local system, providing a straightforward
  method to include files in the desired destination.
- **Use URLs**: Users can also provide URLs. This is useful for cases where
  files are hosted externally, to ensure efficient and smooth integration.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="p-b-24">
      <!-- important -->
      <c8y-file-picker (onFilesPicked)="onFile($event)" [filePickerIndex]="1"></c8y-file-picker>
      <!-- /important -->
    </div>
    <!-- important -->
    <c8y-file-picker
      [maxAllowedFiles]="1"
      (onFilesPicked)="onFile($event)"
      [fileUrl]="'CustomBinary.url'"
      [fileUrlPopover]="'Custom popover text'"
      [filePickerIndex]="2"
    >
    </c8y-file-picker>
    <!-- /important -->
  </div>
</codex-tutorial-example>

  ### Supported options

| option                    | type            | default    | description                    |
| ------------------------- | --------------- | ---------- | ------------------------------ |
| `maxAllowedFiles`         | `any`           | infinity   | Describe how many files can be dropped once |
| `uploadChoice`            | `string`        | `uploadBinary` | Defined initial view of picker: 'uploadBinary' for drop zone, 'uploadUrl' for text input |
| `fileUrl`                 | `string`        |            | URL address for a file, for example, http://example.com/binary.zip |
| `fileBinary`              | `DroppedFile`   |            | Dropped file from parent component |
| `fileUrlPopover`          | `string`        |            | Additional text to be displayed in a popover |
| `onFilesPicked`           | `EventEmitter<PickedFiles>`  |  | Emit dropped files and register handlers for those files |
| `filePickerIndex`          | `number`        |            | Used only when displaying multiple file pickers in the same view |
