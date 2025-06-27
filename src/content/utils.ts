export function buildPath(page) {
  if (!page.parent) {
    return;
  }
  const parts = [];
  while (page) {
    parts.push(page.path);
    page = page.parent;
  }
  return parts.reverse().join('/');
}

export function getBreadcrumbs(page) {
  const breadcrumbs = [];
  while (page) {
    breadcrumbs.push({
      path: buildPath(page),
      label: page.data.title,
      icon: page.data.icon || 'folder'
    });
    page = page.parent;
  }
  breadcrumbs.reverse().pop();
  return breadcrumbs;
}

export function getTopTitle(page) {
  let title = page.data.title;
  while (page) {
    title = page.data.title;
    page = page.children;
  }
  return title;
}
