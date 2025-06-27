import { buildPath, getBreadcrumbs } from './utils';
import { createComponent } from './component.factory';
import { Route } from '@c8y/ngx-components';
import { sortBy } from 'lodash-es';
import { CodexApiDocComponent } from './codex-api-doc';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const content = require('../../content.json');

export const COMPONENTS = [];
export const ROUTES = content.reduce(reduceRoutes, []);

function reduceRoutes(routes: Route[], page) {
  if (page.children) {
    page.children.forEach(p => {
      p.parent = page;
    });
  }

  if (page.parent) {
    const path = buildPath(page);
    if (!!page.data?.apiDocs?.length) {
      routes.push({
        data: {
          breadcrumbs: getBreadcrumbs(page),
          apiDocs: page.data?.apiDocs,
          topTitle: page.data.title
        },
        path: `${path}/api`,
        component: CodexApiDocComponent
      });
    }
    const component = createComponent(page);
    routes.push({
      path: `${path}${component ? '/overview' : ''}`,
      data: {
        ...page.data,
        breadcrumbs: getBreadcrumbs(page),
        topTitle: page.data.title,
        apiDocs: page.data?.apiDocs
      },
      ...(component
        ? { component }
        : {
            redirectTo:
              buildPath(sortBy(page.children, [({ data }) => -data.priority, 'data.title'])[0]) +
              '/overview'
          })
    });

    routes.push({
      path: `${path}`,
      redirectTo: `${path}/overview`
    });

    if (component) {
      COMPONENTS.push(component);
    }
  }
  if (page.children) {
    return page.children.reduce(reduceRoutes, routes);
  }
  return routes;
}
