import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClipboardService } from '@c8y/ngx-components';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'c8y-table-of-contents',
  templateUrl: './table-of-contents.component.html',
  standalone: false
})
export class TableOfContentsComponent implements AfterViewInit, OnDestroy {
  @Input() contentElement: HTMLElement;
  @Input() headingsElementSelector = '.codex-content > h2';
  headings: { id: string; innerText: string; offsetTop: number }[];
  activeSection: string;
  private destroy$ = new Subject<void>();

  constructor(
    private clipboardService: ClipboardService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngAfterViewInit(): void {
    this.updateHeadings();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private updateHeadings(): void {
    if (!this.contentElement) {
      return;
    }
    queueMicrotask(() => {
      const headingsElements = Array.from(
        this.contentElement.querySelectorAll(this.headingsElementSelector)
      ) as HTMLHeadingElement[];
      if (headingsElements?.length <= 1) {
        return;
      }

      this.headings = headingsElements.map(({ id, innerText, offsetTop }) => ({
        id,
        innerText,
        offsetTop
      }));
      this.updateActiveSection();
      this.subscribeToWindowScroll();

      headingsElements.forEach(heading => {
        heading.innerHTML =
          heading.innerText +
          `<button class="btn-dot showOnHover m-l-16" title="Copy link to clipboard">
            <i class="dlt-c8y-icon-chain"></i>
          </button>`;

        heading.querySelector('button').addEventListener('click', () => {
          this.copyUrlToClipboard(heading.id);
        });
      });
    });
  }

  private subscribeToWindowScroll() {
    fromEvent(window, 'scroll')
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        window.requestAnimationFrame(() => {
          this.updateActiveSection();
        });
      });
  }

  private copyUrlToClipboard(headingId: string) {
    const currentLocation = window.location.href;
    const currentFragment = this.activatedRoute.snapshot.fragment;
    let urlToCopy;
    if (currentFragment === headingId) {
      urlToCopy = currentLocation;
    } else if (currentFragment) {
      urlToCopy = currentLocation.replace(`#${currentFragment}`, `#${headingId}`);
    } else {
      urlToCopy = `${currentLocation}#${headingId}`;
    }
    this.clipboardService.writeText(urlToCopy);
  }

  private updateActiveSection(): void {
    const currentScrollPosition =
      window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

    for (const heading of this.headings) {
      const sectionOffset = heading.offsetTop;
      const windowHeight = window.innerHeight;
      if (currentScrollPosition >= sectionOffset - windowHeight / 2) {
        this.activeSection = heading.id;
      } else {
        break;
      }
    }
  }
}
