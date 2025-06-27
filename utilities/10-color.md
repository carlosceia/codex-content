---
title: Color
slug: color
icon: done
order: 10
---

<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

Color is one of the most important tools to communicate meaning, convey visual differentiation,
enhance accessibility and provide a consistent look and feel.

Our color utilities provide a range of classes to work with the
[color palette](#/ui-guidelines/foundations/color/overview), apply color variations, and create
visually appealing interfaces.

## Text color

Use color to convey meaning with a handful of utility classes. These can also be applied to
links and will retain the default link style on hover.

The displayed contrast ratio is comparing the text color against the default background color.
Always add the right [background color](#/utilities/color/overview#background-color) utility class
to ensure enough color contrast.


<div id="generic">
  <div class="h4 m-t-32 d-inline-block">Generic</div>
  <table class="table">
    <thead>
      <tr class="page-sticky-header">
        <th style="min-width: 200px">Class</th>
        <th>Light theme</th>
        <th>Dark theme</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>text-default</code></td>
        <td>
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeLight="#011F3D" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-component">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" contrastDark="23262a" codeDark="#cacbcc" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>text-muted</code></td>
        <td>
          <div class="d-flex gap-8 a-i-center">
            <p class="text-muted">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" name="--c8y-text-muted" codeLight="#537393" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-component">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-muted">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" name="--c8y-text-muted" codeDark="#b5b7b9" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>text-white</code></td>
        <td>
          <div class="d-flex gap-8 a-i-center">
            <p class="text-white">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeLight="#fffff" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-component">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-white">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeDark="#23262A" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<div id="brand">
  <div class="h4 m-t-32 d-inline-block">Brand</div>
  <table class="table">
    <thead>
      <tr class="page-sticky-header">
        <th style="min-width: 200px">Class</th>
        <th>Light theme</th>
        <th>Dark theme</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>text-primary</code></td>
        <td>
          <div class="d-flex gap-8 a-i-center">
            <p class="text-primary">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeLight="#058192" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-component">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-primary">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeDark="#8ADBD5" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>text-primary-light</code></td>
        <td>
          <div class="d-flex gap-8 a-i-center">
            <p class="text-primary-light">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeLight="#3CC1B7" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-component">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-primary-light">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeDark="#22A6AA" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>text-complementary</code></td>
        <td>
          <div class="d-flex gap-8 a-i-center">
            <p class="text-complementary">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeLight="#1C5569" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-component">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-complementary">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeDark="#C5EDEA" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<div id="accent">
  <div class="h4 m-t-32 d-inline-block">Accent</div>
  <table class="table">
    <thead>
      <tr class="page-sticky-header">
        <th style="min-width: 200px">Class</th>
        <th>Light theme</th>
        <th>Dark theme</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>text-accent</code></td>
        <td>
          <div class="d-flex gap-8 a-i-center">
            <p class="text-accent">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeLight="#8E3CF7" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-component">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-accent">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeDark="#A96CF9" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>text-accent-light</code></td>
        <td>
          <div class="d-flex gap-8 a-i-center">
            <p class="text-accent-light">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeLight="#F1E7FE" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-component">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-accent-light">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeDark="#DABFFC" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>text-accent-dark</code></td>
        <td>
          <div class="d-flex gap-8 a-i-center">
            <p class="text-accent-dark">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeLight="#5B25A7" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-component">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-accent-dark">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeDark="#8E3CF7" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<div id="status">
  <div class="h4 m-t-32 d-inline-block">Status</div>
  <table class="table">
    <thead>
      <tr class="page-sticky-header">
        <th style="min-width: 200px">Class</th>
        <th>Light theme</th>
        <th>Dark theme</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>text-info</code></td>
        <td>
          <div class="d-flex gap-8 a-i-center">
            <p class="text-info">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeLight="#1776BF" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-component">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-info">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeDark="#1776BF" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>text-info-light</code></td>
        <td>
          <div class="d-flex gap-8 a-i-center">
            <p class="text-info-light">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeLight="#ebf5ff" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-component">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-info-light">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeDark="#ebf5ff" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>text-info-dark</code></td>
        <td>
          <div class="d-flex gap-8 a-i-center">
            <p class="text-info-dark">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeLight="#105589" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-component">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-info-dark">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeDark="#105589" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>text-success</code></td>
        <td>
          <div class="d-flex gap-8 a-i-center">
            <p class="text-success">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeLight="#71A112" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-component">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-success">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeDark="#71A112" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>text-success-light</code></td>
        <td>
          <div class="d-flex gap-8 a-i-center">
            <p class="text-success-light">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeLight="#f4fce3" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-component">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-success-light">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeDark="#f4fce3" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>text-success-dark</code></td>
        <td>
          <div class="d-flex gap-8 a-i-center">
            <p class="text-success-dark">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeLight="#007700" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-component">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-success-dark">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeDark="#007700" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>text-warning</code></td>
        <td>
          <div class="d-flex gap-8 a-i-center">
            <p class="text-warning">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeLight="#E07800" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-component">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-warning">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeDark="#E07800" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>text-warning-light</code></td>
        <td>
          <div class="d-flex gap-8 a-i-center">
            <p class="text-warning-light">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeLight="#ECBE23" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-component">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-warning-light">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeDark="#ECBE23" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>text-warning-dark</code></td>
        <td>
          <div class="d-flex gap-8 a-i-center">
            <p class="text-warning-dark">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeLight="#806A00" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-component">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-warning-dark">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeDark="#806A00" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>text-danger</code></td>
        <td>
          <div class="d-flex gap-8 a-i-center">
            <p class="text-danger">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeLight="#D22D3D" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-component">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-danger">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeDark="#DC5B68" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>text-danger-light</code></td>
        <td>
          <div class="d-flex gap-8 a-i-center">
            <p class="text-danger-light">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeLight="#fae6e8" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-component">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-danger-light">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeDark="#fae6e8" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>text-danger-dark</code></td>
        <td>
          <div class="d-flex gap-8 a-i-center">
            <p class="text-danger-dark">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeLight="#8f0009" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-component">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-danger-dark">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeDark="#8f0009" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<div id="grays">
  <div class="h4 m-t-32 d-inline-block">Grays</div>
  <table class="table">
    <thead>
      <tr class="page-sticky-header">
        <th style="min-width: 200px">Class</th>
        <th>Light theme</th>
        <th>Dark theme</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>text-gray-10</code></td>
        <td>
          <div class="d-flex gap-8 a-i-center">
            <p class="text-gray-10">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeLight="#011F3D" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-component">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-gray-10">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeDark="#f2f2f3" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>text-gray-20</code></td>
        <td>
          <div class="d-flex gap-8 a-i-center">
            <p class="text-gray-20">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeLight="#193857" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-component">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-gray-20">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeDark="#dedee0" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>text-gray-30</code></td>
        <td>
          <div class="d-flex gap-8 a-i-center">
            <p class="text-gray-30">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeLight="#36597D" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-component">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-gray-30">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeDark="#cacbcc" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>text-gray-40</code></td>
        <td>
          <div class="d-flex gap-8 a-i-center">
            <p class="text-gray-40">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeLight="#537393" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-component">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-gray-40">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeDark="#b5b7b9" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>text-gray-50</code></td>
        <td>
          <div class="d-flex gap-8 a-i-center">
            <p class="text-gray-50">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeLight="#7E96AE" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-component">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-gray-50">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeDark="#707375" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>text-gray-60</code></td>
        <td>
          <div class="d-flex gap-8 a-i-center">
            <p class="text-gray-60">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeLight="#D2D9E0" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-component">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-gray-60">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeDark="#5f6265" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>text-gray-70</code></td>
        <td>
          <div class="d-flex gap-8 a-i-center">
            <p class="text-gray-70">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeLight="#E1E5EA" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-component">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-gray-70">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeDark="#4e5154" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>text-gray-80</code></td>
        <td>
          <div class="d-flex gap-8 a-i-center">
            <p class="text-gray-80">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeLight="#E7EBEE" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-component">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-gray-80">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeDark="#32363A" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>text-gray-90</code></td>
        <td>
          <div class="d-flex gap-8 a-i-center">
            <p class="text-gray-90">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeLight="#F0F2F4" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-component">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-gray-90">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeDark="#2e3338" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>text-gray-100</code></td>
        <td>
          <div class="d-flex gap-8 a-i-center">
            <p class="text-gray-100">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeLight="#F9FAFB" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-component">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-gray-100">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeDark="#23262A" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>

## Background color

Similarly to text color classes, you can easily set an element's background to any contextual class.

The displayed contrast ratio is comparing the default text color against the background color. Always add
the right [text color](#/utilities/color/overview#text-color) utility class to ensure
enough color contrast.

<div id="bg-generic">
  <div class="h4 m-t-32 d-inline-block">Generic</div>
  <table class="table">
    <thead>
      <tr class="page-sticky-header">
        <th style="min-width: 200px">Class</th>
        <th>Light theme</th>
        <th>Dark theme</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>bg-level-0</code></td>
        <td class="bg-level-0">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" contrastLight="ffffff" codeLight="#011F3D" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-level-0">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" contrastDark="23262A" codeDark="#cacbcc" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>bg-level-1</code></td>
        <td class="bg-level-1">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" contrastLight="F9FAFB" codeLight="#011F3D" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-level-1">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" contrastDark="2e3338" codeDark="#cacbcc" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>bg-level-2</code></td>
        <td class="bg-level-2">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" contrastLight="F0F2F4" codeLight="#011F3D" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-level-2">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" contrastDark="32363A" codeDark="#cacbcc" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>bg-level-3</code></td>
        <td class="bg-level-3">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" contrastLight="E7EBEE" codeLight="#011F3D" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-level-3">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" contrastDark="4e5154" codeDark="#cacbcc" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>bg-level-4</code></td>
        <td class="bg-level-4">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" contrastLight="E1E5EA" codeLight="#011F3D" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-level-4">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" contrastDark="5f6265" codeDark="#f2f2f3" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<div id="bg-brand">
  <div class="h4 m-t-32 d-inline-block">Brand</div>
  <table class="table">
    <thead>
      <tr class="page-sticky-header">
        <th style="min-width: 200px">Class</th>
        <th>Light theme</th>
        <th>Dark theme</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>bg-primary</code></td>
        <td class="bg-primary">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" contrastLight="058192" codeLight="#011F3D" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-primary">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" contrastDark="8Adbd5" codeDark="#cacbcc" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>bg-primary-light</code></td>
        <td class="bg-primary-light">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" contrastLight="3cc1b7" codeLight="#011F3D" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-primary-light">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" contrastDark="22a6aa" codeDark="#cacbcc" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>bg-complementary</code></td>
        <td class="bg-complementary">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" contrastLight="1C5569" codeLight="#011F3D" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-complementary">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" contrastDark="c5edda" codeDark="#cacbcc" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<div id="bg-accent">
  <div class="h4 m-t-32 d-inline-block">Accent</div>
  <table class="table">
    <thead>
      <tr class="page-sticky-header">
        <th style="min-width: 200px">Class</th>
        <th>Light theme</th>
        <th>Dark theme</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>bg-accent</code></td>
        <td class="bg-accent">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" contrastLight="8E3CF7" codeLight="#011F3D" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-accent">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" contrastDark="A96CF9" codeDark="#cacbcc" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>bg-accent-light</code></td>
        <td class="bg-accent-light">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" contrastLight="F1E7FE" codeLight="#011F3D" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-accent-light">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" contrastDark="DABFFC" codeDark="#cacbcc" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>bg-accent-dark</code></td>
        <td class="bg-accent-dark">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" contrastLight="5B25A7" codeLight="#011F3D" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-accent-dark">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" contrastDark="8E3CF7" codeDark="#cacbcc" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<div id="bg-status">
  <div class="h4 m-t-32 d-inline-block">Status</div>
  <table class="table">
    <thead>
      <tr class="page-sticky-header">
        <th style="min-width: 200px">Class</th>
        <th>Light theme</th>
        <th>Dark theme</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>bg-info</code></td>
        <td class="bg-info">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeLight="#011f3d" contrastLight="1776BF" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-info">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeDark="#cacbcc" contrastDark="1776BF" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>bg-info-light</code></td>
        <td class="bg-info-light">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeLight="#011f3d" contrastLight="ebf5ff" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-info-light">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeDark="#cacbcc" contrastDark="ebf5ff" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>bg-info-dark</code></td>
        <td class="bg-info-dark">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeLight="#011f3d" contrastLight="105589" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-info-dark">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeDark="#cacbcc" contrastDark="105589" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>bg-success</code></td>
        <td class="bg-success">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeLight="#011f3d" contrastLight="71A112" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-success">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeDark="#cacbcc" contrastDark="71A112" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>bg-success-light</code></td>
        <td class="bg-success-light">
          <div class="d-flex gap-8 a-i-center">
            <p >Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeLight="#011f3d" contrastLight="f4fce3" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-success-light">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeDark="#cacbcc" contrastDark="f4fce3" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>bg-success-dark</code></td>
        <td class="bg-success-dark">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeLight="#011f3d" contrastLight="007700" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-success-dark">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeDark="#cacbcc" contrastDark="007700" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>bg-warning</code></td>
        <td class="bg-warning">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeLight="#011f3d" contrastLight="E07800" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-warning">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeDark="#cacbcc" contrastDark="E07800" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>bg-warning-light</code></td>
        <td class="bg-warning-light">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeLight="#011f3d" contrastLight="ECBE23" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-warning-light">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeDark="#cacbcc" contrastDark="ECBE23" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>bg-warning-dark</code></td>
        <td class="bg-warning-dark">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeLight="#011f3d" contrastLight="806A00" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-warning-dark">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeDark="#cacbcc" contrastDark="806A00" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>bg-danger</code></td>
        <td class="bg-danger">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeLight="#011f3d" contrastLight="D22D3D" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-danger">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeDark="#cacbcc" contrastDark="DC5B68" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>bg-danger-light</code></td>
        <td class="bg-danger-light">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeLight="#011f3d" contrastLight="fae6e8" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-danger-light">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeDark="#cacbcc" contrastDark="fae6e8" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>bg-danger-dark</code></td>
        <td class="bg-danger-dark">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeLight="#011f3d" contrastLight="8f0009" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-danger-dark">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" codeDark="#cacbcc" contrastDark="8f0009" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<div id="bg-grays">
  <div class="h4 m-t-32 d-inline-block">Grays</div>
  <table class="table">
    <thead>
      <tr class="page-sticky-header">
        <th style="min-width: 200px">Class</th>
        <th>Light theme</th>
        <th>Dark theme</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>bg-gray-10</code></td>
        <td class="bg-gray-10">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" contrastLight="011F3D" codeLight="#011F3D" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-gray-10">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" contrastDark="f2f2f3" codeDark="#cacbcc" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>bg-gray-20</code></td>
        <td class="bg-gray-20">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" contrastLight="193857" codeLight="#011F3D" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-gray-20">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" contrastDark="dedee0" codeDark="#cacbcc" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>bg-gray-30</code></td>
        <td class="bg-gray-30">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" contrastLight="36597D" codeLight="#011F3D" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-gray-30">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" contrastDark="cacbcc" codeDark="#cacbcc" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>bg-gray-40</code></td>
        <td class="bg-gray-40">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" contrastLight="537393" codeLight="#011F3D" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-gray-40">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" contrastDark="b5b7b9" codeDark="#cacbcc" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>bg-gray-50</code></td>
        <td class="bg-gray-50">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" contrastLight="7E96AE" codeLight="#011F3D" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-gray-50">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" contrastDark="707375" codeDark="#cacbcc" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>bg-gray-60</code></td>
        <td class="bg-gray-60">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" contrastLight="D2D9E0" codeLight="#011F3D" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-gray-60">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" contrastDark="5f6265" codeDark="#cacbcc" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>bg-gray-70</code></td>
        <td class="bg-gray-70">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" contrastLight="E1E5EA" codeLight="#011F3D" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-gray-70">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" contrastDark="4e5154" codeDark="#cacbcc" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>bg-gray-80</code></td>
        <td class="bg-gray-80">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" contrastLight="E7EBEE" codeLight="#011F3D" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-gray-80">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" contrastDark="32363A" codeDark="#cacbcc" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>bg-gray-90</code></td>
        <td class="bg-gray-90">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" contrastLight="F0F2F4" codeLight="#011F3D" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-gray-90">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" contrastDark="2e3338" codeDark="#cacbcc" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
      <tr>
        <td><code>bg-gray-100</code></td>
        <td class="bg-gray-100">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" contrastLight="F9FAFB" codeLight="#011F3D" class="color-tip"></c8y-colortip>
          </div>
        </td>
        <td class="c8y-dark-theme bg-gray-100">
          <div class="d-flex gap-8 a-i-center">
            <p class="text-default">Yeah, I like animals better than people sometimes...</p>
            <c8y-colortip contrastOnly="true" contrastDark="23262A" codeDark="#cacbcc" class="color-tip"></c8y-colortip>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>

