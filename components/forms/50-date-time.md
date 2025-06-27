---
title: Date and time
icon: done
slug: date-time
order: 50
apiDocs:
  - name: DateTimePickerComponent
    import: '@c8y/ngx-components'
mockdata:
  date1: "2023-06-05T00:00:00.000Z"
  date2: "2023-06-05T00:00:00.000Z"
---
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

This simplifies the process of inputting dates, times, date ranges, and date time ranges.

Instead of requiring users to manually enter date or time, our date and time picker offer an intuitive visual interface for browsing and selecting the desired date and time.

## Date and time picker

When presenting date and time inputs together, use the `c8y-date-time-picker`, which combines
the date picker and the time picker components.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="row">
      <div class="col-sm-6">
        <!-- important -->
        <!-- Small with label -->
        <div class="form-group form-group-sm">
          <label>Date and time</label>
          <c8y-date-time-picker
            placeholder="Select date…"
            size="sm"
          ></c8y-date-time-picker>
        </div>
        <!-- /important -->
      </div>
      <div class="col-sm-6">
        <!-- important -->
        <!-- Small without label -->
        <c8y-date-time-picker
          placeholder="Select date…"
          size="sm"
        ></c8y-date-time-picker>
        <!-- /important -->
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <!-- important -->
        <!-- Regular with label -->
        <div class="form-group">
          <label>Date and time</label>
          <c8y-date-time-picker placeholder="Select date…"></c8y-date-time-picker>
        </div>
        <!-- /important -->
      </div>
      <div class="col-sm-6">
        <!-- important -->
        <!-- Regular without label -->
        <c8y-date-time-picker placeholder="Select date…"></c8y-date-time-picker>
        <!-- /important -->
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <!-- important -->
        <!-- Large with label -->
        <div class="form-group form-group-lg">
          <label>Date and time</label>
          <c8y-date-time-picker
            placeholder="Select date…"
            size="lg"
          ></c8y-date-time-picker>
        </div>
        <!-- /important -->
      </div>
      <div class="col-sm-6">
        <!-- important -->
        <!-- Large without label -->
        <c8y-date-time-picker
          placeholder="Select date…"
          size="lg"
        ></c8y-date-time-picker>
        <!-- /important -->
      </div>
    </div>
  </div>
</codex-tutorial-example>

### Supported options

| option                    | type            | default         | description                    |
| ------------------------- | --------------- | --------------- | ------------------------------ |
| `size`                    | `string`        |                 | Sets the form-control size, use `sm` for the small size, `lg` for the large size. No need to set it for the regular size. |
| `adaptivePosition`        | `boolean`       | `false`         | By default, the calendar dropdown opens below the input, setting it to `true` will open it either up or down according to the component placement in the viewport |
| `placeholder`             | `string`        | `Select a date…`| The date input placeholder |
| `minDate`                 | `string`        |                 | The allowed minimum date for selecting |
| `maxDate`                 | `string`        |                 | The allowed maximum date for selecting |
| `dateInputFormat`         | `string`        | `YYYY-MM-DD`    | To set your own date format you can use variety of formats provided by the `ngx-bootstrap` date picker. |
| `config`                  | `Object`        |                 | The config object is a configuration instance of the DateAndTimeOptions type, specifying settings for a date and time picker. It sets options such as hiding meridian (AM/PM) indicators, displaying minutes, hiding seconds, and disabling spinners for manual input. |
| `dateType`                | `DateAndTime` \ | `Date` \        | `DateRange` \| `SingleDateRequired` \| `Time`        |  `DateAndTime`  | Specifies the type of date input.  See table below for info on each date type |

### Date types

| Date Type                 | Description                    |
| ------------------------- | ------------------------------ |
|`DateAndTime`              | Displays both date and time. (default) |
|`Date`                     | Display only the date without the time. |
|`DateRange`                | Specify a range of dates. |
|`SingleDateRequired`       | Require the selection of a single date. |
|`Time`                     | Display only the time without the date. |




## Date picker

The `Date` type is used to represent and display single date without any associated time or time range information.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="row">
      <div class="col-sm-6">
        <!-- important -->
        <!-- Small with label -->
        <div class="form-group form-group-sm">
          <label for="dp1">Date</label>
          <c8y-date-time-picker
            placeholder="Select date…"
            size="sm"
            dateType="Date"
          ></c8y-date-time-picker>
        </div>
        <!-- /important -->
      </div>
      <div class="col-sm-6">
        <!-- important -->
        <!-- Small without label -->
        <c8y-date-time-picker
          placeholder="Select date…"
          size="sm"
          dateType="Date"
        ></c8y-date-time-picker>
        <!-- /important -->
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <!-- important -->
        <!-- Regular with label -->
        <div class="form-group">
          <label for="dp2">Date</label>
          <c8y-date-time-picker
            placeholder="Select date…"
            dateType="Date"
          ></c8y-date-time-picker>
        </div>
        <!-- /important -->
      </div>
      <div class="col-sm-6">
        <!-- important -->
        <!-- Regular without label -->
        <c8y-date-time-picker
          placeholder="Select date…"
          dateType="Date"
        ></c8y-date-time-picker>
        <!-- /important -->
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <!-- important -->
        <!-- Large with label -->
        <div class="form-group form-group-lg">
          <label for="dp3">Date</label>
          <c8y-date-time-picker
            placeholder="Select date…"
            size="lg"
            dateType="Date"
          ></c8y-date-time-picker>
        </div>
        <!-- /important -->
      </div>
      <div class="col-sm-6">
        <!-- important -->
        <!-- Large without label -->
        <c8y-date-time-picker
          placeholder="Select date…"
          size="lg"
          dateType="Date"
        ></c8y-date-time-picker>
        <!-- /important -->
      </div>
    </div>
  </div>
</codex-tutorial-example>

## Date range picker

The date range picker simplifies the process of selecting date ranges. You can effortlessly define
start and end dates, allowing for a precise range configuration.

> ### Forms
>
> Date picker and date range picker can be used in forms. Keep in mind that value of ngModel is Date
> object for `datepicker` and array of 2 Date objects for `daterangepicker`.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="row">
      <div class="col-sm-6">
        <!-- important -->
        <!-- Small with label -->
        <div class="form-group form-group-sm">
          <label for="dp4">Date range</label>
          <c8y-date-time-picker
            placeholder="Select a date range…"
            size="sm"
            dateType="DateRange"
          ></c8y-date-time-picker>
        </div>
        <!-- /important -->
      </div>
      <div class="col-sm-6">
        <!-- important -->
        <!-- Small without label -->
        <c8y-date-time-picker
          placeholder="Select a date range…"
          size="sm"
          dateType="DateRange"
        ></c8y-date-time-picker>
        <!-- /important -->
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <!-- important -->
        <!-- Regular with label -->
        <div class="form-group">
          <label for="dp4">Date range</label>
          <c8y-date-time-picker
            placeholder="Select a date range…"
            dateType="DateRange"
          ></c8y-date-time-picker>
        </div>
        <!-- /important -->
      </div>
      <div class="col-sm-6">
        <!-- important -->
        <!-- Regular without label -->
        <c8y-date-time-picker
          placeholder="Select a date range…"
          dateType="DateRange"
        ></c8y-date-time-picker>
        <!-- /important -->
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <!-- important -->
        <!-- Large with label -->
        <div class="form-group form-group-lg">
          <label for="dp4">Date range</label>
          <c8y-date-time-picker
            placeholder="Select a date range…"
            size="lg"
            dateType="DateRange"
          ></c8y-date-time-picker>
        </div>
        <!-- /important -->
      </div>
      <div class="col-sm-6">
        <!-- important -->
        <!-- Large without label -->
        <c8y-date-time-picker
          placeholder="Select a date range…"
          size="lg"
          dateType="DateRange"
        ></c8y-date-time-picker>
        <!-- /important -->
      </div>
    </div>
  </div>
</codex-tutorial-example>

### Single date requirement

If only one of the dates, either the start or the end date, is necessary, use the `SingleDateRequired` type.
This displays a dropdown with two independent date pickers.

<codex-tutorial-example class="c8y-codex-override">
  <div
    class="container-fluid p-24"
    style="min-height: 480px"
  >
    <div class="row">
      <div class="col-sm-6">
        <!-- important -->
        <!-- Small with label -->
        <div class="form-group form-group-sm">
          <label>Start and/or end date</label>
          <c8y-date-time-picker
            placeholder="Select start date, end date, or both"
            size="sm"
            dateType="SingleDateRequired"
          ></c8y-date-time-picker>
        </div>
        <!-- /important -->
      </div>
      <div class="col-sm-6">
        <!-- important -->
        <!-- Small without label -->
        <c8y-date-time-picker
          placeholder="Select start date, end date, or both"
          size="sm"
          dateType="SingleDateRequired"
        ></c8y-date-time-picker>
        <!-- /important -->
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <!-- important -->
        <!-- Regular with label -->
        <div class="form-group">
          <label>Start and/or end date</label>
          <c8y-date-time-picker
            placeholder="Select start date, end date, or both"
            dateType="SingleDateRequired"
          ></c8y-date-time-picker>
        </div>
        <!-- /important -->
      </div>
      <div class="col-sm-6">
        <!-- important -->
        <!-- Regular without label -->
        <c8y-date-time-picker
          placeholder="Select start date, end date, or both"
          dateType="SingleDateRequired"
        ></c8y-date-time-picker>
        <!-- /important -->
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <!-- important -->
        <!-- Large with label -->
        <div class="form-group form-group-lg">
          <label>Start and/or end date</label>
          <c8y-date-time-picker
            placeholder="Select start date, end date, or both"
            size="lg"
            dateType="SingleDateRequired"
          ></c8y-date-time-picker>
        </div>
        <!-- /important -->
      </div>
      <div class="col-sm-6">
        <!-- important -->
        <!-- Large without label -->
        <c8y-date-time-picker
          placeholder="Select start date, end date, or both"
          size="lg"
          dateType="SingleDateRequired"
        ></c8y-date-time-picker>
        <!-- /important -->
      </div>
    </div>
  </div>
</codex-tutorial-example>


## Time picker

When it comes to input time, the `Time` type simplifies the process of setting hours, minutes,
seconds, and meridian configurations. The config object can be used to customize the time picker.

Config options:

| Property         | Description                                               |
| ---------------- | --------------------------------------------------------- |
| `showMeridian`   | When set to `false`, hides the meridian (AM/PM) indicators. |
| `showMinutes`    | When set to `false`, hides the minutes in the time picker. |
| `showSeconds`    | When set to `false`, hides the seconds in the time picker. |
| `showSpinners`   | When set to `false`, disables the spinners for manual input. |

For varying input sizes, simply use the `size` option.

<codex-tutorial-example class="c8y-codex-override">
  <div class="container-fluid p-24">
    <div class="row">
      <div class="col-sm-6">
        <!-- important -->
        <!-- Small with label -->
        <div class="form-group form-group-sm">
          <label>Time</label>
          <c8y-date-time-picker
            [size]="sm"
            [config]="{ showSpinners: false, showSeconds: true, showMeridian: false }"
            [dateType]="'Time'"
          ></c8y-date-time-picker>
        </div>
        <!-- /important -->
      </div>
      <div class="col-sm-6">
        <!-- important -->
        <!-- Small without label -->
        <c8y-date-time-picker
          [size]="sm"
          [config]="{ showSpinners: false, showSeconds: true, showMeridian: true }"
          [dateType]="'Time'"
        ></c8y-date-time-picker>
        <!-- /important -->
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <!-- important -->
        <!-- Regular with label -->
        <div class="form-group">
          <label>Time</label>
          <c8y-date-time-picker
            [size]="lm"
            [config]="{ showSpinners: false, showSeconds: true, showMeridian: false }"
            [dateType]="'Time'"
          ></c8y-date-time-picker>
        </div>
        <!-- /important -->
      </div>
      <div class="col-sm-6">
        <!-- important -->
        <!-- Regular without label -->
        <c8y-date-time-picker
          [config]="{ showSpinners: false, showSeconds: true, showMeridian: true }"
          [dateType]="'Time'"
        ></c8y-date-time-picker>
        <!-- /important -->
      </div>
    </div>
    <div class="row">
      <div class="col-sm-6">
        <!-- important -->
        <!-- Large with label -->
        <div class="form-group form-group-lg">
          <label>Time</label>
          <c8y-date-time-picker
            [size]="lm"
            [config]="{ showSpinners: false, showSeconds: true, showMeridian: false }"
            [dateType]="'Time'"
          ></c8y-date-time-picker>
        </div>
        <!-- /important -->
      </div>
      <div class="col-sm-6">
        <!-- important -->
        <!-- Large without label -->
        <c8y-date-time-picker
          [size]="lm"
          [config]="{ showSpinners: false, showSeconds: true, showMeridian: true }"
          [dateType]="'Time'"
        ></c8y-date-time-picker>
        <!-- /important -->
      </div>
    </div>
  </div>
</codex-tutorial-example>

## Date and time range picker

To enable the selection of date and time ranges, employ a button that exhibits the chosen date range
and triggers a dropdown. This dropdown must contain two `datetime-picker` dedicated to setting the
range accurately.

<codex-tutorial-example iframeHeight="530" class="c8y-codex-override" [module]="'DateTimeRangeExampleModule'"
[sources]="['./packages/tutorial/src/date-time-range/date-time-range-example.component.ts']"></codex-tutorial-example>
