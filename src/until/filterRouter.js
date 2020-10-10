function asyncRouterList(routerMap) {
  let arr = [];
  function asyncRouter(routerMap) {
    routerMap.forEach((item) => {
      arr.push(item.path);
      console.log(item);
      if (item.children && item.children.length) {
        console.log('object');
        asyncRouter(item.children);
      }
    });
  }
  asyncRouter(routerMap);
  return arr;
}

function filterAsyncRouter(routerMap, asyncRouter) {
  const accessedRouters = routerMap.filter((itemRoute) => {
    if (itemRoute.children && itemRoute.children.length) {
      itemRoute.children = filterAsyncRouter(itemRoute.children, asyncRouter);
      if (itemRoute.children && itemRoute.children.length) {
        return true;
      } else {
        return false;
      }
    } else {
      if (asyncRouter.includes(itemRoute.path)) {
        return true;
      }
      return false;
    }
  });
  return accessedRouters;
}
export { asyncRouterList, filterAsyncRouter };
