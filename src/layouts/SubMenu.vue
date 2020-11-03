<template>
  <a-sub-menu :key="menuInfo.path" v-bind="$attrs">
    <template v-slot:title>
      <span class="anticon"><base-icon :icon="menuInfo.meta.icon" /></span>
      <span>{{ menuInfo.name }}</span>
    </template>
    <template v-for="item in menuInfo.children" :key="item.path">
      <template v-if="!item.children || item.children.length === 0">
        <a-menu-item :key="item.path">
          <router-link :to="item.path">
            <span class="anticon"><base-icon :icon="item.meta.icon" /></span>
            <span>{{ item.name }}</span>
          </router-link>
        </a-menu-item>
      </template>
      <template v-else>
        <sub-menu :menu-info="item" :key="item.path" />
      </template>
    </template>
  </a-sub-menu>
</template>

<script>
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from '@ant-design/icons-vue';
export default {
  name: 'SubMenu',
  props: {
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {},
  components: {
    PieChartOutlined,
    MailOutlined,
  },
  beforeUnmount() {},
};
</script>
<style lang='scss' scoped>
</style>
