---
title: dlt & c8y
description: "Featuring Cumulocity's custom icons and Delite icon font."
slug: icons
icon: done
apiDocs:
  - name: IconDirective
    import: '@c8y/ngx-components'
---
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

Icons serve as a powerful visual language in user interfaces, allowing for the concise and
universally recognizable communication of meaning and functionality. They play a vital role in
guiding users through complex systems and simplifying interactions.

In our collection, we offer two sets of icons:

- The **dlt-c8y-icon**: A subset of the Material Sharp icons comprising over
  1350 glyphs presented in a font format. These icons encompass a wide range of categories,
  providing a comprehensive selection to meet your UI design needs.
- **c8y-icon**: A subset based on the versatile `iconmonstr` library, our custom
  icons offer 112 distinct icons with the option for a duo-color variant.

## Search icons

Find the icon you need, select it, and it will be automatically copied to your clipboard.

<codex-icon></codex-icon>

## Icon directive

To effortlessly incorporate these icons into the UI, use the `c8yIcon` directive. Simply identify
the desired icon, ensuring a space between the icon and accompanying text.

<codex-tutorial-example class="c8y-codex-override">
<div class="inner-scroll">
  <div class="container-fluid p-24 icon-20 d-flex gap-16">
<!-- important --><!-- 1- You can either use classes-->
<!-- for the c8y icons always provide the generic `c8y-icon` class. -->
<p> <i class="c8y-icon c8y-icon-device-management"></i></p>
<!-- for the dlt-c8y icons you just have to provide icon class. -->
<p><i class="dlt-c8y-icon-pencil"></i></p>  

<!-- 2- or the [c8yIcon] directive -->
<!-- For the c8y icons, always provide the `c8y` prefix and the icon name -->
<p><i [c8yIcon]="'c8y-cockpit'"></i></p>
<!-- For the dlt-c8y icons, you just have to add the icon name, not the prefix -->
<p><i [c8yIcon]="'download'" ></i></p>
<p><i c8yIcon="building"></i></p>
<!-- /important -->
    </div>
  </div>
</codex-tutorial-example>

## Duo-color icons

The c8y-icon icons have a two color version. When over light backgrounds use the: `.c8y-icon-duocolor`,
for darker backgrounds use the `.c8y-icon-white`.

<codex-tutorial-example class="c8y-codex-override">
  <div class="inner-scroll">
    <div class="container-fluid p-24 icon-20 d-flex gap-16">
      <div class="row d-flex">
        <div class="col-md-4 p-16">
          <!-- important -->
<i c8yIcon="c8y-business-rules" class="icon-48"></i>
          <!-- /important -->
        </div>
        <div class="col-md-4 p-16">
               <!-- important -->
<i c8yIcon="c8y-business-rules" class="icon-48 c8y-icon-duocolor"></i>
               <!-- /important -->
              </div>
              <div class="col-md-4 p-16 bg-gray-20">
                <!-- important -->
<i c8yIcon="c8y-business-rules" class="icon-48 c8y-icon-white"></i>
                <!-- /important -->
        </div>
      </div>
    </div>  
  </div>
</codex-tutorial-example>

## Icon sizes

Whether you need small icons to accompany text or larger icons to draw attention, these utility
classes provide the flexibility to achieve the desired visual impact. Simply apply the appropriate
class to your icon element, effortlessly customizing their size while maintaining consistent
alignment throughout your interface.

<codex-tutorial-example class="c8y-codex-override">
  <div class="inner-scroll">
    <div class="container-fluid p-24">
      <table class="table">
        <thead>
          <tr>
            <th class="text-nowrap ">Icon collection</th>
            <th class="text-nowrap text-lowercase"><code>icon-12</code></th>
            <th class="text-nowrap text-lowercase"><code>icon-14</code></th>
            <th class="text-nowrap text-lowercase"><code>icon-16</code></th>
            <th class="text-nowrap text-lowercase"><code>icon-20</code></th>
            <th class="text-nowrap text-lowercase"><code>icon-24</code></th>
            <th class="text-nowrap text-lowercase"><code>icon-28</code></th>
            <th class="text-nowrap text-lowercase"><code>icon-32</code></th>
            <th class="text-nowrap text-lowercase"><code>icon-36</code></th>
            <th class="text-nowrap text-lowercase"><code>icon-40</code></th>
            <th class="text-nowrap text-lowercase"><code>icon-44</code></th>
            <th class="text-nowrap text-lowercase"><code>icon-48</code></th>
            <th class="text-nowrap text-lowercase"><code>icon-52</code></th>
            <th class="text-nowrap text-lowercase"><code>icon-56</code></th>
            <th class="text-nowrap text-lowercase"><code>icon-60</code></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>c8y-icon</code>
            </td>
            <td class="text-center">
              <i c8yIcon="c8y-cockpit" class="c8y-icon-duocolor icon-12"></i>
            </td>
            <td class="text-center">
<!-- important -->
<i c8yIcon="c8y-cockpit" class="c8y-icon-duocolor icon-14"></i>
<!-- /important -->
            </td>
            <td class="text-center">
              <i c8yIcon="c8y-cockpit" class="c8y-icon-duocolor icon-16"></i>
            </td>
            <td class="text-center">
              <i c8yIcon="c8y-cockpit" class="c8y-icon-duocolor icon-20"></i>
            </td>
            <td class="text-center">
              <i c8yIcon="c8y-cockpit" class="c8y-icon-duocolor icon-24"></i>
            </td>
            <td class="text-center">
              <i c8yIcon="c8y-cockpit" class="c8y-icon-duocolor icon-28"></i>
            </td>
            <td class="text-center">
              <i c8yIcon="c8y-cockpit" class="c8y-icon-duocolor icon-32"></i>
            </td>
            <td class="text-center">
              <i c8yIcon="c8y-cockpit" class="c8y-icon-duocolor icon-36"></i>
            </td>
            <td class="text-center">
              <i c8yIcon="c8y-cockpit" class="c8y-icon-duocolor icon-40"></i>
            </td>
            <td class="text-center">
              <i c8yIcon="c8y-cockpit" class="c8y-icon-duocolor icon-44"></i>
            </td>
            <td class="text-center">
              <i c8yIcon="c8y-cockpit" class="c8y-icon-duocolor icon-48"></i>
            </td>
            <td class="text-center">
              <i c8yIcon="c8y-cockpit" class="c8y-icon-duocolor icon-52"></i>
            </td>
            <td class="text-center">
              <i c8yIcon="c8y-cockpit" class="c8y-icon-duocolor icon-56"></i>
            </td>
            <td class="text-center">
              <i c8yIcon="c8y-cockpit" class="c8y-icon-duocolor icon-60"></i>
            </td>
          </tr>
          <tr>
            <td>
              <code>dlt-c8y-icon</code>
            </td>
            <td class="text-center">
              <i c8yIcon="pencil" class="icon-12"></i>
            </td>
            <td class="text-center">
              <i c8yIcon="pencil" class="icon-14"></i>
            </td>
            <td class="text-center">
              <i c8yIcon="pencil" class="icon-16"></i>
            </td>
            <td class="text-center">
              <i c8yIcon="pencil" class="icon-20"></i>
            </td>
            <td class="text-center">
              <i c8yIcon="pencil" class="icon-24"></i>
            </td>
            <td class="text-center">
              <i c8yIcon="pencil" class="icon-28"></i>
            </td>
            <td class="text-center">
<!-- important -->
<i c8yIcon="pencil" class="icon-32"></i>
<!-- /important -->
            </td>
            <td class="text-center">
              <i c8yIcon="pencil" class="icon-36"></i>
            </td>
            <td class="text-center">
              <i c8yIcon="pencil" class="icon-40"></i>
            </td>
            <td class="text-center">
              <i c8yIcon="pencil" class="icon-44"></i>
            </td>
            <td class="text-center">
              <i c8yIcon="pencil" class="icon-48"></i>
            </td>
            <td class="text-center">
              <i c8yIcon="pencil" class="icon-52"></i>
            </td>
            <td class="text-center">
              <i c8yIcon="pencil" class="icon-56"></i>
            </td>
            <td class="text-center">
              <i c8yIcon="pencil" class="icon-60"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</codex-tutorial-example>

## Icon + label

On certain occasions, you have to provide an icon and a label. Use the `.icon-flex` container to
ensure correct spacing and text wrap.

<codex-tutorial-example class="c8y-codex-override">
  <div class="inner-scroll">
    <div class="container-fluid p-24">
      <div class="row">
        <div class="col-sm-3">
<!-- important -->
<div class="icon-flex">
  <i c8yIcon="c8y-enterprise"></i>
  <span>Long label that eventually needs to wrap into multiple lines</span>
</div>
<!-- /important -->
        </div>
      </div>
    </div>
  </div>
</codex-tutorial-example>
