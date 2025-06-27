import { NgModule } from '@angular/core';
import { TableOfContentsComponent } from './table-of-contents.component';
import { CommonModule, CoreModule } from '@c8y/ngx-components';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CoreModule, CommonModule, RouterModule],
  declarations: [TableOfContentsComponent],
  exports: [TableOfContentsComponent]
})
export class TableOfContentsModule {}
