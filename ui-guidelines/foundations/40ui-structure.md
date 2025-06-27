---
title: UI structure
slug: ui-structure
icon: done
order: 40
---

<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD037 -->
<!-- markdownlint-disable MD025 -->
<!-- markdownlint-disable MD051 -->

The general application UI structure, common to all Cumulocity applications.

## Application layout

The application layout is composed by four main sections:  
The "Navigator", the "Main header", the "Right drawer", and the "Main content"

<img src="../../images/ui-guidelines/app-layout.svg" style="max-height: 530px" class="img-responsive" alt="Application layout">

<div class="row m-t-40">
  <div class="col-md-3">
    <div class="d-flex m-b-16">
      <span class="badge badge-info m-r-4 a-s-start flex-no-shrink">1</span>
      <div class="flex-grow">
        <strong>Navigator</strong>
        <p>The application's main navigation. A tree indicates the content's hierarchy. It's collapsed below 1200px wide viewports.</p>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="d-flex m-b-16">
      <span class="badge badge-info m-r-4 a-s-start flex-no-shrink">2</span>
      <div class="flex-grow">
        <strong>Main header</strong>
        <ul class="p-l-0">
          <li>The navigator toggle button</li>
          <li>The page title and breadcrumbs</li>
          <li>Optional search</li>
          <li>Application switcher</li>
          <li>User badge that toggles the right drawer</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="d-flex m-b-16">
      <span class="badge badge-info m-r-4 a-s-start flex-no-shrink">3</span>
      <div class="flex-grow">
        <strong>Right drawer</strong>
        <ul class="p-l-0">
          <li>The user identification</li>
          <li>The user menu</li>
          <li>The UI settings menu</li>
          <li>Platform menu</li>
          <li>Bookmarks</li>
          <li>Support</li>
          <li>Documentation links</li>
          <li>The legal notices link</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="d-flex m-b-16">
      <span class="badge badge-info m-r-4 a-s-start flex-no-shrink">4</span>
      <div class="flex-grow">
        <strong>Main content</strong>
        <p>This section uses a 12 column grid and expands vertically.</p>
      </div>
    </div>
  </div>
</div>

## Navigator

The navigator has the platform brand logo, name and icon of the current application, and the
navigation with a list of entries leading to the various sections of the application.

Each navigation entry has a specific icon, device icons also display device connectivity status.
It allows drag-and-drop on devices and groups for easier organization.

By default, the navigator collapses on screens smaller than 1200px.

<img
  src="../../images/ui-guidelines/navigator.svg"
  alt="Navigator"
  style="max-height: 300px"
  class="img-responsive"
/>

## Main header

Holds the navigator toggle button, page title, breadcrumbs, optional search, application switcher, and the user badge that also toggles the right drawer.

It may hold other components which are optional and application-specific.

<img src="../../images/ui-guidelines/main-header.svg" alt="Main header" class="img-responsive" />

## Right drawer

The right drawer has two sections: Quick links and Help & Support.  

Its primary function is to help users quickly access often-used areas and support doubts when using the site in general or accessing particular sections of the documentation.

<img src="../../images/ui-guidelines/right-drawer.svg" alt="Right drawer" style="max-height: 420px" class="img-responsive" />

## Main content

This section holds four content areas: Tabs, Action bar, Alerts, and the page content.

<img src="../../images/ui-guidelines/main-content.svg" style="max-height: 530px"class="img-responsive" alt="Main content">

<div class="row m-t-40">
  <div class="col-md-3">
    <div class="d-flex m-b-16">
      <span class="badge badge-info m-r-4 a-s-start flex-no-shrink">1</span>
      <div class="flex-grow">
        <strong>Tabs</strong>
        <p>A tab allow to switch routes on a page. Two options: horizontal tabs and vertical tabs.</p>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="d-flex m-b-16">
      <span class="badge badge-info m-r-4 a-s-start flex-no-shrink">2</span>
      <div class="flex-grow">
        <strong>Action bar</strong>
        <p>An action bar item is a action in scope of a current route of the application.</p>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="d-flex m-b-16">
      <span class="badge badge-info m-r-4 a-s-start flex-no-shrink">3</span>
      <div class="flex-grow">
        <strong>Alerts</strong>
        <p>The platform feedback mechanism to communicate important information after the user or the system.</p>
      </div>
    </div>
  </div>
  <div class="col-md-3">
    <div class="d-flex m-b-16">
      <span class="badge badge-info m-r-4 a-s-start flex-no-shrink">4</span>
      <div class="flex-grow">
        <strong>Page content</strong>
        <p>The page content uses a 12 columns grid and expands vertically.</p>
      </div>
    </div>
  </div>
</div>
