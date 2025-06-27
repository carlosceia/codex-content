import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExtensionFactory, Tab } from '@c8y/ngx-components';

@Injectable({ providedIn: 'root' })
export class TabsFactoryService implements ExtensionFactory<Tab> {
  constructor(private router: Router) {}

  get(activatedRoute?: ActivatedRoute): Tab | Tab[] {
    const apiDocs = activatedRoute.snapshot.data.apiDocs;

    if (!apiDocs || !apiDocs.length) {
      return [];
    }

    const path = this.router.url.split('#')[0];
    const cleanedPath = path.replace('/overview', '').replace('/api', '');

    const apiTab = {
      label: 'API',
      path: `${cleanedPath}/api`,
      icon: 'code',
      priority: 10
    };
    const overviewTab = {
      label: 'Overview',
      path: `${cleanedPath}/overview`,
      icon: 'sheet',
      priority: 20
    };

    return [apiTab, overviewTab];
  }
}
