import { Component } from '@angular/core';
import { AlertService } from '@c8y/ngx-components';
import { SupportedIconsSuggestions } from '@c8y/ngx-components/icon-selector/icons';

@Component({
  selector: 'codex-icon',
  template:
    '<div class="bg-level-1 border-all"><c8y-icon-selector (onSelect)="selectIcon($event)"></c8y-icon-selector></div>',
  standalone: false
})
export class CodexIconComponent {
  constructor(private alertService: AlertService) {}

  selectIcon(icon: SupportedIconsSuggestions) {
    const i = `<i [c8yIcon]="'${icon}'"></i>`;
    window.navigator.clipboard.writeText(i);
    this.alertService.success(`Icon directive stored to clipboard:\n ${i}`);
  }
}
