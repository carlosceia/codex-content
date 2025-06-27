import {
  Component,
  DestroyRef,
  ElementRef,
  inject,
  OnInit,
  QueryList,
  ViewChildren
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, EMPTY, map, switchMap, take } from 'rxjs';
import { CodexApiDocService } from './codex-api-doc.service';
import { ApiDoc } from './api-doc.model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'codex-api-doc',
  templateUrl: 'codex-api-doc.component.html',
  standalone: false
})
export class CodexApiDocComponent implements OnInit {
  dataToRender: Partial<ApiDoc>[] = [];
  showIndex = false;
  loading$ = new BehaviorSubject(true);
  @ViewChildren('sectionHeader') headingsElements: QueryList<ElementRef>;
  destroyRef = inject(DestroyRef);

  get title() {
    return this.activatedRoute.snapshot.data.topTitle;
  }

  get breadcrumbs() {
    return this.activatedRoute.snapshot.data.breadcrumbs;
  }

  constructor(
    private codexApi: CodexApiDocService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const apiDocs: ApiDoc[] = this.activatedRoute.snapshot.data?.apiDocs;
    this.loadData(apiDocs);
  }

  async loadData(apiDocs: ApiDoc[]): Promise<void> {
    this.dataToRender = await this.codexApi.loadAllData(apiDocs);

    // if url has fragment matching one of the headings, scroll into this element
    this.activatedRoute.fragment
      .pipe(
        take(1),
        switchMap(fragment => {
          if (!fragment) {
            return EMPTY;
          } else {
            return this.headingsElements.changes.pipe(
              takeUntilDestroyed(this.destroyRef),
              take(1),
              map(() => fragment)
            );
          }
        })
      )
      .subscribe(fragment => {
        const headerToScrollInto = this.headingsElements.find(
          heading => heading.nativeElement.id === fragment
        );
        headerToScrollInto?.nativeElement?.scrollIntoView();
      });
    this.loading$.next(false);
  }

  getMethodNameAndArgs(method: any): string {
    const args = method.args?.map(arg => `${arg.name}: ${arg.type ? arg.type : 'any'}`).join(', ');
    const output = `${method.name ? method.name : 'constructor'}(${args ? args : ''})`;
    return output;
  }
}
