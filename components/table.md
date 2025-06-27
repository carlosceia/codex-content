---
title: Table
slug: table
icon: done
order: 410
---

<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

Tables help you see and process great amounts of data in a tabular form.

Designed for simplicity and clarity, they are an efficient way to organize and present information.

## Default table

For basic styling—light padding and only horizontal dividers—add the base class `.table` to any
`table` tag. It may seem redundant, but given the widespread use of tables for other
plugins like calendars and date pickers, we have opted to isolate our custom table styles.

<codex-tutorial-example >
<div class="container-fluid">
  <table class="table">
    <caption>Optional table caption.</caption>
    <colgroup>
      <col width="20px">
      <col width="33%">
      <col width="33%">
      <col width="33%">
    </colgroup>
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Field</td>
        <td>mod22755</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Diom</td>
        <td>2weet22</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Clam</td>
        <td>art36552</td>
      </tr>
    </tbody>
  </table>
</div>
</codex-tutorial-example>

## Striped rows

Use `.table-striped` to add zebra-striping to any table row within the `tbody` tag.

<codex-tutorial-example>
<div class="container-fluid">
  <table class="table table-striped">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Field</td>
        <td>mod22755</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Diom</td>
        <td>2weet22</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Clam</td>
        <td>art36552</td>
      </tr>
    </tbody>
  </table>
</div>
</codex-tutorial-example>

## Bordered tables

Add `.table-bordered` for borders on all sides of the table and cells.

<codex-tutorial-example>
<div class="container-fluid">
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Field</td>
        <td>mod22755</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Diom</td>
        <td>2weet22</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Clam</td>
        <td>art36552</td>
      </tr>
    </tbody>
  </table>
</div>
</codex-tutorial-example>

## Hover rows

Add `.table-hover` to enable a hover state on table rows within a `tbody` tag.

<codex-tutorial-example>
<div class="container-fluid">
  <table class="table table-hover">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Field</td>
        <td>mod22755</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Diom</td>
        <td>2weet22</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Clam</td>
        <td>art36552</td>
      </tr>
    </tbody>
  </table>
</div>
</codex-tutorial-example>

## Condensed tables

When in need of showing tables in a more compact way, add `.table-condensed` to reduce font size and cut cell padding in half.

<codex-tutorial-example>
<div class="container-fluid">
  <table class="table table-condensed">
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Field</td>
        <td>mod22755</td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Diom</td>
        <td>2weet22</td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td colspan="2">Larry the Clam</td>
        <td>art36552</td>
      </tr>
    </tbody>
  </table>
</div>
</codex-tutorial-example>

## Responsive tables

Create responsive tables to enable viewing tables on small screens.

### Horizontal scrolling

Wrap any `.table` in `.table-responsive` to make them scroll horizontally on screens below 768px
wide.

When viewing on anything larger than 768px wide, you will not see any difference in these tables.

<codex-tutorial-example>
<div class="container-fluid">
  <div class="table-responsive">
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="table-responsive">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>#</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
          <th>Table heading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</codex-tutorial-example>

> ### Vertical clipping/truncation  
>
> Responsive tables make use of `overflow-y: hidden`, which clips
> off any content that goes beyond the bottom or top edges of the table. In particular, this can
> clip off dropdown menus and other widgets.

### Stacked cells

With tables without too many columns, you can stack all cells on screens below 768px wide. Just add
`.c8y-table-responsive` to the table and `data-label="[your-column-label]"` to each cell.

You will not see any difference when viewing them on anything larger than 768px wide.

<codex-tutorial-example>
<div class="container-fluid">
  <table class="table table-striped c8y-table-responsive">
    <thead>
      <tr>
        <th>Number</th>
        <th>Table heading 1</th>
        <th>Table heading 2</th>
        <th>Table heading 3</th>
        <th>Table heading 4</th>
        <th>Table heading 5</th>
        <th>Table heading 6</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th data-label="Number" scope="row">1</th>
        <td data-label="Table heading 1">Table cell</td>
        <td data-label="Table heading 2">Table cell</td>
        <td data-label="Table heading 3">Table cell</td>
        <td data-label="Table heading 4">Table cell</td>
        <td data-label="Table heading 5">Table cell</td>
        <td data-label="Table heading 6">Table cell</td>
      </tr>
      <tr>
        <th data-label="Number" scope="row">2</th>
        <td data-label="Table heading 1">Table cell</td>
        <td data-label="Table heading 2">Table cell</td>
        <td data-label="Table heading 3">Table cell</td>
        <td data-label="Table heading 4">Table cell</td>
        <td data-label="Table heading 5">Table cell</td>
        <td data-label="Table heading 6">Table cell</td>
      </tr>
      <tr>
        <th data-label="Number" scope="row">3</th>
        <td data-label="Table heading 1">Table cell</td>
        <td data-label="Table heading 2">Table cell</td>
        <td data-label="Table heading 3">Table cell</td>
        <td data-label="Table heading 4">Table cell</td>
        <td data-label="Table heading 5">Table cell</td>
        <td data-label="Table heading 6">Table cell</td>
      </tr>
    </tbody>
  </table>
</div>
</codex-tutorial-example>
