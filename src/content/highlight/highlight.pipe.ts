import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { from, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Pipe({
  name: 'highlight',
  standalone: false
})
export class HighlightPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(htmlString: string): Observable<string> {
    return htmlString
      ? from(import('highlight.js')).pipe(
          map(({ default: hljs }) => {
            const newElement = document.createElement('div');
            newElement.innerHTML = htmlString;
            hljs.highlightElement(newElement.firstElementChild.firstElementChild as HTMLElement);
            return newElement;
          }),
          map(html => this.sanitizer.sanitize(SecurityContext.HTML, html.innerHTML)),
          catchError(() => {
            return of(this.sanitizer.sanitize(SecurityContext.HTML, htmlString));
          })
        )
      : of('');
  }
}
