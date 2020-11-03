export const asyncRouterMap = [
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '首页',
      keepAlive: true,
      icon: 'icon-jiaoseguanli',
      permission: ['dashboard'],
    },
    component: () => import('../views/RouterViewApp.vue'),
    children: [
      {
        path: '/home1',
        name: 'home1',
        component: () => import('../views/RouterViewApp.vue'),
        meta: {
          title: '首页',
          keepAlive: true,
          icon: 'icon-jiaoseguanli',
          permission: ['dashboard'],
        },
        children: [
          {
            path: '/homec1',
            name: 'homec1',
            meta: {
              title: '首页',
              keepAlive: true,
              icon: 'icon-jiaoseguanli',
              permission: ['dashboard'],
            },
            component: () => import('../views/home1.vue'),
          },
          {
            path: '/homec2',
            name: 'homec2',
            meta: {
              title: '首页',
              keepAlive: true,
              icon: 'icon-jiaoseguanli',
              permission: ['dashboard'],
            },
            component: () => import('../views/home1.vue'),
          },
          {
            path: '/homec3',
            name: 'homec3',
            meta: {
              title: '首页',
              keepAlive: true,
              icon: 'icon-jiaoseguanli',
              permission: ['dashboard'],
            },
            component: () => import('../views/RouterViewApp.vue'),
            children: [
              {
                path: '/homed3',
                name: 'homed3',
                meta: {
                  title: '首页',
                  keepAlive: true,
                  icon: 'icon-jiaoseguanli',
                  permission: ['dashboard'],
                },
                component: () => import('../views/home1.vue'),
              },
            ],
          },
        ],
      },
      {
        path: '/home2',
        name: 'home2',
        meta: {
          title: '首页',
          keepAlive: true,
          icon: 'icon-jiaoseguanli',
          permission: ['dashboard'],
        },
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/home1.vue'),
        children: [],
      },
      {
        path: '/home3',
        name: 'home3',
        meta: {
          title: '首页',
          keepAlive: true,
          icon: 'icon-jiaoseguanli',
          permission: ['dashboard'],
        },
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/home1.vue'),
        children: [],
      },
    ],
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: '首页',
      keepAlive: true,
      icon: 'icon-jiaoseguanli',
      permission: ['dashboard'],
    },
    component: () => import('../views/RouterViewApp.vue'),
    children: [
      {
        path: '/about1',
        name: 'about1',
        meta: {
          title: '首页',
          keepAlive: true,
          icon: 'icon-jiaoseguanli',
          permission: ['dashboard'],
        },
        component: () => import('../views/home1.vue'),
      },
      {
        path: '/about2',
        name: 'about2',
        meta: {
          title: '首页',
          keepAlive: true,
          icon: 'icon-jiaoseguanli',
          permission: ['dashboard'],
        },
        component: () => import('../views/home1.vue'),
      },
      {
        path: '/about3',
        name: 'about3',
        meta: {
          title: '首页',
          keepAlive: true,
          icon: 'icon-jiaoseguanli',
          permission: ['dashboard'],
        },
        component: () => import('../views/home1.vue'),
      },
    ],
  },
];
