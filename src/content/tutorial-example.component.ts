import { Component, ElementRef, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { SourceFile } from './tutorial-example.model';
import { AlertService, gettext } from '@c8y/ngx-components';
import { sortBy } from 'lodash-es';
import prettier from 'prettier/standalone';
import parserEsTree from 'prettier/plugins/estree';
import parserTypescript from 'prettier/plugins/typescript';
import parserHtml from 'prettier/plugins/html';

@Component({
  selector: 'codex-tutorial-example',
  templateUrl: './tutorial-example.component.html',
  standalone: false
})
export class TutorialExampleComponent {
  @Input()
  module: string;
  @Input()
  sources: SourceFile[];
  @Input()
  open = false;
  @Input()
  hideHeader = true;
  @Input()
  hideNavigator = false;
  @Input()
  noAppSwitcher = false;
  @Input()
  hideToggleButton = false;
  fullSrc;
  currentTab$ = new BehaviorSubject(null);
  showAll$ = new BehaviorSubject(false);
  CONTEXT_PATH_TUTORIAL_APP = 'tutorial';
  currentContent$: Observable<string>;
  hasImportant = false;
  @Input()
  iframeHeight = 450; // Set a default height for the iframe
  intersected$ = new BehaviorSubject(false);

  constructor(
    private sanitizer: DomSanitizer,
    private alertService: AlertService,
    private element: ElementRef
  ) {
    this.currentContent$ = combineLatest([this.currentTab$, this.showAll$]).pipe(
      switchMap(([tabName, showAllCode]) => this.getContent(tabName, showAllCode))
    );
    this.handleIntersection();
  }

  adjustIframeHeight(event: Event) {
    const iframe = event.target as HTMLIFrameElement;
    const iframeDocument = iframe.contentWindow?.document;
    if (iframeDocument) {
      const iframeContentHeight = iframeDocument.body.scrollHeight;
      if (iframeContentHeight > this.iframeHeight) {
        this.iframeHeight = iframeContentHeight;
      }
    }
  }

  async getContent(tabName: string, showAllCode: boolean): Promise<string> {
    const currentSource = this.sources.find(source => source.fileName === tabName);
    if (!currentSource) {
      return;
    }

    const content = this.getSourceCode(currentSource, showAllCode);
    const formatted = await this.prettifyCode(currentSource.extension, content);
    return this.getMarkdown(currentSource.extension, formatted);
  }

  getSourceCode(currentSource: SourceFile, showAllCode: boolean) {
    if (typeof currentSource.content === 'object') {
      return JSON.stringify(currentSource.content, undefined, 2) + '\n';
    }

    const testRegex = new RegExp(
      '(// important|<!-- important -->)(.*?)(?=// /important|<!-- /important -->)',
      'gs'
    );
    const onlyImportant = (currentSource.content as string).match(testRegex);
    this.hasImportant = !!onlyImportant;
    if (!onlyImportant || showAllCode) {
      return currentSource.content;
    }

    const onlyImportantImportReplaced = onlyImportant.map(importantSource =>
      importantSource.replace('// important', '').replace('<!-- important -->', '')
    );

    return onlyImportantImportReplaced.join('') + '\n';
  }

  async prettifyCode(extension, content) {
    try {
      if (extension === 'ts') {
        const formatted = await prettier.format(content, {
          parser: 'typescript',
          plugins: [parserEsTree, parserTypescript],
          singleAttributePerLine: true,
          htmlWhitespaceSensitivity: 'ignore'
        });
        return formatted;
      }
      const formatted = await prettier.format(content, {
        parser: 'angular',
        plugins: [parserHtml],
        singleAttributePerLine: true,
        htmlWhitespaceSensitivity: 'ignore'
      });
      return formatted;
    } catch (e) {
      // Ensure that content is always returned.
      // Might be the case if an `// important` comment is used in typescript which breaks the parser
      return content;
    }
  }

  getMarkdown(extensionName: string, content: string) {
    return '```' + extensionName + (content.startsWith('\n') ? '' : '\n') + content + '```';
  }

  ngOnInit(): void {
    this.fullSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
      `/apps/${this.CONTEXT_PATH_TUTORIAL_APP}/index.html?extraCssUrls=["/apps/${this.CONTEXT_PATH_TUTORIAL_APP}/embedded.css"]&noLogin=true&?&remotes={"${this.CONTEXT_PATH_TUTORIAL_APP}":["${this.module}"]}&hideHeader=${this.hideHeader}&hideNavigator=${this.hideNavigator}&noAppSwitcher=${this.noAppSwitcher}&forceUrlRemotes=true#/pickLastRoute`
    );
    this.sources = sortBy(this.sources, ({ extension }) => {
      switch (extension) {
        case 'html':
          return 1;
        case 'ts':
          return 2;
        default:
          return 3;
      }
    });
    this.currentTab$.next(this.sources[0].fileName);
  }

  show(tabName: string) {
    this.currentTab$.next(tabName);
  }

  showAllCode() {
    this.showAll$.next(!this.showAll$.value);
  }

  toggleSource() {
    this.open = !this.open;
  }

  copy() {
    const tabName = this.currentTab$.value;
    const currentSource = this.sources.find(source => source.fileName === tabName);
    if (!currentSource) {
      return;
    }
    if (!currentSource) {
      this.alertService.danger(gettext('Failed to copy to clipboard'));
      return;
    }
    const sourceCode = this.getSourceCode(currentSource, this.showAll$.value);
    navigator.clipboard.writeText(sourceCode);
    this.alertService.success(gettext('Copied to clipboard'));
  }

  private handleIntersection() {
    if ('IntersectionObserver' in window) {
      const intersectionObserver = new IntersectionObserver(events => {
        for (const event of events) {
          if (event.isIntersecting) {
            this.intersected$.next(true);
            intersectionObserver.unobserve(this.element.nativeElement);
          }
        }
      });
      intersectionObserver.observe(this.element.nativeElement);
    } else {
      this.intersected$.next(true);
    }
  }
}
