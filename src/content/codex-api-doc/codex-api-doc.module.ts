import { NgModule } from '@angular/core';
import { CoreModule, hookTab } from '@c8y/ngx-components';
import { CodexApiDocComponent } from './codex-api-doc.component';
import { TabsFactoryService } from './tabs.factory';
import { TableOfContentsModule } from '../table-of-content';
import { HighlightCodeModule } from '../highlight/highlightCode.module';

@NgModule({
  imports: [CoreModule, TableOfContentsModule, HighlightCodeModule],
  declarations: [CodexApiDocComponent],
  exports: [CodexApiDocComponent],
  providers: [hookTab(TabsFactoryService)]
})
export class CodexApiDocModule {}
