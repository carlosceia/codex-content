import type { ConfigurationOptions } from '@c8y/devkit';
import { version, name } from './package.json';

export default {
  runTime: {
    name,
    icon: {
      class: 'c8y-icon-tools'
    },
    tabsHorizontal: true,
    noLogin: true,
    version
  },
  buildTime: {
    sourceMapLess: false,
    extraWebpackConfig: './packages/codex/webpack/index.js',
    copy: [{ from: './packages/style/embedded.css', to: './embedded.css' }],
    federation: [
      '@angular/animations',
      '@angular/cdk',
      '@angular/common',
      '@angular/compiler',
      '@angular/core',
      '@angular/forms',
      '@angular/platform-browser',
      '@angular/platform-browser-dynamic',
      '@angular/router',
      '@angular/upgrade',
      '@c8y/client',
      '@c8y/ngx-components',
      'angular',
      'ngx-bootstrap',
      '@ngx-translate/core',
      '@ngx-formly/core'
    ]
  }
} as const satisfies ConfigurationOptions;
