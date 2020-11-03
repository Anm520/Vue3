<template>
  <a-menu
    :openKeys="openKeys"
    :selectedKeys="selectedKeys"
    mode="inline"
    theme="dark"
    @select="onSelect"
    @openChange="onOpenChange"
  >
    <template v-for="item in asyncRouterMap" :key="item.path">
      <template v-if="!item.children">
        <a-menu-item :key="item.path">
          <router-link :to="item.path">
            <span class="anticon" v-if="item.meta && item.meta.icon"
              ><base-icon :icon="item.meta.icon"
            /></span>
            <span>{{ item.name }}</span>
          </router-link>
        </a-menu-item>
      </template>
      <template v-else>
        <SubMenu :menu-info="item" :key="item.path" />
      </template>
    </template>
  </a-menu>
</template>

<script>
import { computed, ref, reactive, toRefs, watchEffect, watch } from 'vue';
import { asyncRouterMap } from '../config/router.config.js';
import { useRoute } from 'vue-router';
import SubMenu from './SubMenu';
export default {
  name: 'Menu',
  components: {
    SubMenu,
  },
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
      asyncRouterMap,
    };
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    onSelect(menu) {
      this.selectedKeys = menu.selectedKeys;
      this.$emit('select', menu);
    },
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(
        (key) => !this.openKeys.includes(key)
      );
      if (!this.rootSubmenuKeys.includes(latestOpenKey)) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
  },
};
</script>
<style lang='scss' scoped>
</style>
