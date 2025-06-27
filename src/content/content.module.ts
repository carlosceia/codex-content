import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { ContentService } from './content.service';
import { NAVIGATION_CONTENT } from './navigation';
import { COMPONENTS } from './routes';
import { CoreModule, CommonModule } from '@c8y/ngx-components';
import { RouterModule } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { ColorTipComponent } from './colortip.component';
import { MotionTipComponent } from './motiontip.component';
import { CodexApiDocModule } from './codex-api-doc/codex-api-doc.module';
import { TutorialExampleComponent } from './tutorial-example.component';
import { TabNamePipe } from './tab-name.pipe';
import { CodexIconComponent } from './codex-icon.component';
import { IconSelectorModule } from '@c8y/ngx-components/icon-selector';
import { TableOfContentsModule } from './table-of-content';
import { HighlightCodeModule } from './highlight/highlightCode.module';
import { A11yModule } from '@angular/cdk/a11y';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    ...COMPONENTS,
    ColorTipComponent,
    MotionTipComponent,
    TutorialExampleComponent,
    TabNamePipe,
    CodexIconComponent
  ],
  imports: [
    IconSelectorModule,
    NgCommonModule,
    CoreModule,
    RouterModule,
    CommonModule,
    CollapseModule,
    BsDropdownModule,
    TooltipModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule,
    CodexApiDocModule,
    TableOfContentsModule,
    A11yModule,
    HighlightCodeModule,
    DragDropModule
  ],
  exports: [],
  providers: [ContentService, NAVIGATION_CONTENT],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ContentModule {}

export { ROUTES } from './routes';
