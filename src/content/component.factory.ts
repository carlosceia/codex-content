import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export function createComponent(page) {
  const { data } = page;

  if (!data.filePath) {
    return;
  }

  const body = getBody(data.filePath);
  @Component({
    template: templateRoot(body),
    standalone: false
  })
  class HtmlComponent {
    data: any = {};

    get frontmatter() {
      return this.route.snapshot.data;
    }
    get breadcrumbs() {
      return this.route.snapshot.data.breadcrumbs;
    }
    exampleSelector = 'pre.example-src > code';
    constructor(
      public route: ActivatedRoute,
      private element: ElementRef
    ) {}

    ngAfterViewInit() {
      window.scrollTo(0, 0);
    }

    showAlert(message) {
      alert(message);
    }
  }
  return HtmlComponent;
}

export function templateRoot(body: string) {
  // replace @ with &#64; to avoid this error after ng17 upgrade:
  // Errors during JIT compilation of template for HtmlComponent: Incomplete block "NgModule". If you meant to write the @ character, you should use the "&#64;" HTML entity instead.
  body = body.replace(/@/g, '&#64;');
  return `<c8y-title>{{route.snapshot.data.title}}</c8y-title>
<c8y-breadcrumb>
  <c8y-breadcrumb-item
    *ngFor="let item of breadcrumbs"
    [label]="item.label"
    [path]="item.path"
  >
  </c8y-breadcrumb-item>
</c8y-breadcrumb>
<div class="container-fluid">
<div class="row d-flex">
  <div #contentElement id="codex-content" class="col-md-9 col-xs-12 codex-content">${body}</div>
  <c8y-table-of-contents
    class="styleguide-page-nav col-md-3 p-static hidden-sm hidden-xs"
    [contentElement]="contentElement"
  ></c8y-table-of-contents>
</div></div>`;
}

function getBody(path) {
  return require(`../../content/${path}`);
}
