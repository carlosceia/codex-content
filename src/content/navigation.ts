import { hookNavigator, NavigatorNode } from '@c8y/ngx-components';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const content = require('../../content.json');
const navigationNodes = content.map(root => routeToNode(root));
declare const __MODE__: string;

export const NAVIGATION_CONTENT = hookNavigator(navigationNodes);

function routeToNode(route, parent?) {
  const { data } = route;

  const node = new NavigatorNode({
    label: data.title || route.path,
    priority: data.priority,
    icon: data.icon || 'done',
    path: (parent && parent.path ? parent.path + '/' : '') + route.path,
    routerLinkExact: false
  });

  // if only one child exist, don't show it. Instead use the parent node.
  if (route.children?.length === 1) {
    const singleChildRoute = route.children[0];
    if (__MODE__ !== 'production' || singleChildRoute.data.icon === 'done') {
      singleChildRoute.data.icon = data.icon;
      singleChildRoute.data.title = data.title;
      return routeToNode(singleChildRoute, node);
    }
  }

  if (route.children) {
    route.children.forEach(r => {
      if (__MODE__ !== 'production' || r.data.icon === 'done') {
        node.add(routeToNode(r, node));
      }
    });
  }
  if (!parent) {
    node.path = undefined;
  }
  return node;
}
