import { NgModule } from '@angular/core';
import { CommonModule, CoreModule } from '@c8y/ngx-components';
import { RouterModule } from '@angular/router';
import { HighlightCode } from './code.directive';
import { HighlightPipe } from './highlight.pipe';
import { HighlightApiPipe } from './highlightapi.pipe';

@NgModule({
  imports: [CoreModule, CommonModule, RouterModule],
  declarations: [HighlightCode, HighlightPipe, HighlightApiPipe],
  exports: [HighlightCode, HighlightPipe, HighlightApiPipe]
})
export class HighlightCodeModule {}
