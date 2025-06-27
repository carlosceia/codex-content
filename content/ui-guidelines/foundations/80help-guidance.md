---
title: Help and guidance
slug: help-guidance
icon: done
order: 80
---

<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD051 -->

Having a [comprehensive documentation system](https://cumulocity.com/docs), seems just natural
to offer contextual, appropriate, and adaptive support.

## Three key qualities for an effective help system

<div class="d-flex flex-wrap row">
  <div class="col-xs-12 col-sm-6 col-md-4 p-b-40 p-t-24 p-l-32 p-r-32">
    <div class="c8y-svgicon m-b-16" style="font-size: 80px; line-height: 1;">
      <i c8yIcon="centralized-network" class="c8y-icon-duocolor"></i>
    </div>
    <h3 class="card-title ">Availability without Interference</h3>
    <p class="text-16 m-b-8 m-t-8 ">
      Help resources must be readily available to users without obstructing their primary tasks. When assistance is required, it must be easy to locate.
    </p>
  </div>  
  <div class="col-xs-12 col-sm-6 col-md-4 p-b-40 p-t-24 p-l-32 p-r-32">
    <div class="c8y-svgicon m-b-16" style="font-size: 80px; line-height: 1;">
      <i c8yIcon="omnichannel" class="c8y-icon-duocolor"></i>
    </div>
    <h3 class="card-title ">Unintrusive</h3>
    <p class="text-16 m-b-8 m-t-8 ">
     After seeking help, users have to be able to seamlessly return to their original task without any disruptions.
    </p>
  </div>  
  <div class="col-xs-12 col-sm-6 col-md-4 p-b-40 p-t-24 p-l-32 p-r-32">
    <div class="c8y-svgicon m-b-16" style="font-size: 80px; line-height: 1;">
      <i c8yIcon="string" class="c8y-icon-duocolor"></i>
    </div>
    <h3 class="card-title ">Succinct yet descriptive</h3>
    <p class="text-16 m-b-8 m-t-8 ">
     Help messages must be concise, using only the necessary words to convey the information in an easily understandable manner.
    </p>
  </div>  
</div>

## Levels of assistance

### Tooltips

Every button or link has to be accompanied by a tooltip to offer users additional information about
the associated action or link. You can enable this feature simply by adding a `title` parameter to
each button or link.

For more detailed supplementary information, such as when hovering over an icon, consider utilizing
the [tooltip](#/components/tooltip) component.

<div class="c8y-example m-b-16">
  <div class="row">
    <div class="col-sm-6 m-b-xs-16">
      <img src="../../images/foundations/tooltip1.png"
        class="img-responsive"
        alt="tooltip example 1">
    </div>
    <div class="col-sm-6">
      <img src="../../images/foundations/tooltip2.png"
        class="img-responsive"
        alt="tooltip example 2">
    </div>
  </div>
</div>

### Inline help

When you have longer content that can't fit within a tooltip, consider using the
[inline help](#/components/help/overview#inline-help) component.

<div class="c8y-example m-b-16">
    <div class="d-flex j-c-center">
      <img src="../../images/foundations/popover1.png"
        class="img-responsive"
        alt="popover example 1">
    </div>
</div>

### Contextual help

For situations where a more extensive explanation is necessary, display the help content directly on
the page. This approach provides in-depth insights into specific processes.

Check the [Contextual help](#/components/help/overview#contextual-help) component.

<div class="c8y-example m-b-16">
  <div class="row">
    <div class="d-flex j-c-center">
      <img src="../../images/foundations/contextual1.png"
        class="img-responsive"
        alt="contextual example 1">
    </div>
  </div>
</div>

### Inline help

For brief explanations (shorter than a sentence), you can position the text beneath the input field.
If the explanation is lengthier, think about employing a popover. Additionally, consider using
placeholder text to provide examples when necessary.

Refer to [Inline help](#/components/help/overview#inline-help) for more information.

<div class="c8y-example m-b-16">
  <div class="d-flex j-c-center">
    <div class="col-md-6">
      <div class="form-group">
        <label for="inputHelpBlock">Email</label>
        <input type="email"
          id="inputHelpBlock"
          class="form-control"
          placeholder="e.g. email@example.com (required)">
        <span id="helpBlock"
          class="help-block">A short block of help text.</span>
      </div>
      <div class="form-group">
        <label for="inputHelpBlock2">IMEI</label>
        <input type="email"
          id="inputHelpBlock2"
          class="form-control"
          placeholder="e.g. 154827859688154">
      </div>
    </div>
  </div>
</div>

## Guidance

Certain features may involve complex configuration processes. In such cases, it is beneficial to provide a step-by-step wizard to guide users through the process.

For more information, refer to the [Stepper](#/components/stepper/overview) component.

<div class="c8y-example">
  <div class="row">
    <div class="col-sm-1 m-b-xs-8">
      <h4>Step 1</h4>
    </div>
    <div class="col-sm-11">
      <img src="../../images/foundations/guidance-01.png" alt="Guidance Step 1" class="img-responsive">
    </div>
  </div>

  <div class="row m-t-40">
    <div class="col-sm-1 m-b-xs-8">
      <h4>Step 2</h4>
    </div>
    <div class="col-sm-11">
      <img src="../../images/foundations/guidance-02.png" alt="Guidance Step 2" class="img-responsive">
    </div>
  </div>

  <div class="row m-t-40">
    <div class="col-sm-1">
      <h4>Step 3</h4>
    </div>
    <div class="col-sm-11">
      <img src="../../images/foundations/guidance-03.png" alt="Guidance Step 3" class="img-responsive">
    </div>
  </div>

  <div class="row m-t-40">
    <div class="col-sm-1">
      <h4>Step 4</h4>
    </div>
    <div class="col-sm-11">
      <img src="../../images/foundations/guidance-04.png" alt="Guidance Step 4" class="img-responsive">
    </div>
  </div>

</div>
