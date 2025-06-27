import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { checkcontrast } from './contrast-checker';

@Component({
  selector: 'c8y-colortip',
  templateUrl: './colortip.template.html',
  standalone: false
})
export class ColorTipComponent implements OnInit {
  @Input() codeLight: string;
  @Input() codeDark: string;
  @Input() name: string;
  @Input() refColorLight: string;
  @Input() refColorDark: string;
  @Input() contrastLight = 'ffffff'; // default light theme background
  @Input() contrastDark = '212121'; // default dark theme background
  @Input() contrastOnly: boolean;
  @Input() showThemes = true;
  @HostBinding('class.d-inline-block') get isContrastOnly() {
    return this.contrastOnly;
  }

  statusLightClass: string;
  ratioLight: string;
  colorLight: string;

  statusDarkClass: string;
  ratioDark: string;
  colorDark: string;

  ngOnInit(): void {
    if (this.codeLight) {
      const computedLight = this.getComputedColor(this.codeLight);
      const result = checkcontrast(computedLight.replace(/#/, ''), this.contrastLight);
      this.statusLightClass = result.normalaa === 'Pass' ? 'label-success' : 'label-danger';
      this.ratioLight = `${result.ratio}`;
      this.colorLight = result.normalaa === 'Pass' ? '#ffffff' : '#212121';
    }
    if (this.codeDark) {
      const computedDark = this.getComputedColor(this.codeDark);
      const resultDark = checkcontrast(computedDark.replace(/#/, ''), this.contrastDark);
      this.statusDarkClass = resultDark.normalaa === 'Pass' ? 'label-success' : 'label-danger';
      this.ratioDark = `${resultDark.ratio}`;
      this.colorDark = resultDark.normalaa === 'Pass' ? '#212121' : '#ffffff';
    }
  }

  private getComputedColor(cssVar: string): string {
    if (cssVar.startsWith('#')) {
      return cssVar;
    }

    // Create a temporary element to compute the CSS variable
    const temp = document.createElement('div');
    temp.style.color = cssVar;
    document.body.appendChild(temp);
    const color = window.getComputedStyle(temp).color;
    document.body.removeChild(temp);

    // Convert rgb/rgba to hex
    const rgb = color.match(/\d+/g);
    if (rgb) {
      const hex =
        '#' +
        rgb
          .slice(0, 3)
          .map(x => {
            const hex = parseInt(x).toString(16);
            return hex.length === 1 ? '0' + hex : hex;
          })
          .join('');
      return hex;
    }

    return '#000000'; // fallback color
  }
}
