import { Directive, ElementRef } from '@angular/core';
import { default as hjs } from 'highlight.js';

@Directive({
  selector: 'pre > code',
  standalone: false
})
export class HighlightCode {
  get codeContainer() {
    return this.element.nativeElement.parentNode;
  }
  constructor(private element: ElementRef) {}

  ngAfterViewInit(): void {
    if (this.codeContainer.tagName !== 'PRE') {
      return;
    }
    hjs.highlightElement(this.element.nativeElement);
  }
}
