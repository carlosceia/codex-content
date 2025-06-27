import { Component } from '@angular/core';
import { AppStateService, TitleComponent, IconDirective } from '@c8y/ngx-components';
import { sortBy } from 'lodash-es';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [TitleComponent, NgFor, IconDirective, RouterLink]
})
export class HomeComponent {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  sections = sortBy(require('../../content.json'), s => -s.data.priority);
  constructor(public state: AppStateService) {}

  getLink(section) {
    return section.path + '/' + sortBy(section.children, s => -s.data.priority)[0].path;
  }
}
