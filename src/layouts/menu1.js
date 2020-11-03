import { computed, ref, reactive, toRefs, watchEffect, watch } from 'vue';
import { asyncRouterMap, testrouter } from '../config/router.config.js';
import { useRoute } from 'vue-router';
import { AppleOutlined } from '@ant-design/icons-vue';
// 废弃文件
export default {
  name: '',
  props: {
    collapsed: Boolean,
  },
  setup(props, ctx) {
    const route = useRoute();
    const routeslist = route.matched;
    let arr = [];
    routeslist.forEach((item) => {
      arr.push(item.path);
    });
    let data = reactive({
      selectedKeys: [route.path],
      openKeys: arr,
      catopenKeys: arr,
    });
    watch(
      () => props.collapsed,
      () => {
        if (!props.collapsed) {
          data.openKeys = data.catopenKeys;
        } else {
          data.catopenKeys = data.openKeys;
          data.openKeys = [];
        }
      }
    );
    watch(
      () => route.matched,
      (val) => {
        // console.log('路由变化了');
        // const routes = route.matched.concat();
        const openKeys = [];
        val.forEach((item) => {
          openKeys.push(item.path);
        });
        props.collapsed
          ? (data.catopenKeys = openKeys)
          : (data.openKeys = openKeys);
      }
      // { deep: true }
    );
    const rootSubmenuKeys = computed(() => {
      const keys = [];
      asyncRouterMap.forEach((item) => keys.push(item.path));
      return keys;
    });
    return {
      ...toRefs(data),
      rootSubmenuKeys,
    };
  },
  methods: {
    // render
    renderItem(menu) {
      return menu.children && menu.children.length > 0
        ? this.renderSubMenu(menu)
        : this.renderMenuItem(menu);
    },
    renderMenuItem(menu) {
      // const tag = 'routerLink';
      const props = { to: menu.path };
      return (
        <aMenuItem {...{ key: menu.path }}>
          <router-link to={menu.path}>
            {this.renderIcon(menu.meta.icon)}
            <span>{menu.name}</span>
          </router-link>
        </aMenuItem>
      );
    },
    renderTitle(name, icon) {
      return (
        <span>
          {/* <AppleOutlined /> */}
          {this.renderIcon(icon)}
          <span>{name}</span>
        </span>
      );
    },
    renderIcon(icon) {
      if (icon === 'none' || icon === undefined) {
        return null;
      }
      const props = {
        icon: icon,
      };

      return <BaseIcon icon={icon} />;
    },
    renderSubMenu(menu) {
      const itemArr = [];
      if (menu.children && menu.children.length > 0) {
        menu.children.forEach((item) => itemArr.push(this.renderItem(item)));
        return (
          <aSubMenu
            key={menu.path}
            title={this.renderTitle(
              menu.name,
              (menu.meta && menu.meta.icon) || 'none'
            )}
          >
            {/* <span vSlot:title></span> */}
            {itemArr}
          </aSubMenu>
        );
      }
    },
  },
  render(h) {
    let props = {
      theme: 'dark',
      mode: 'inline',
      openKeys: this.openKeys,
      selectedKeys: this.selectedKeys,
      onSelect: (menu) => {
        this.selectedKeys = menu.selectedKeys;
        this.$emit('select', menu);
      },
      onOpenChange: (openKeys) => {
        const latestOpenKey = openKeys.find(
          (key) => !this.openKeys.includes(key)
        );
        if (!this.rootSubmenuKeys.includes(latestOpenKey)) {
          this.openKeys = openKeys;
        } else {
          this.openKeys = latestOpenKey ? [latestOpenKey] : [];
        }
      },
    };
    const menuTree = asyncRouterMap.map((item) => {
      return this.renderItem(item);
    });
    return <aMenu {...props}>{menuTree}</aMenu>;
  },
};
