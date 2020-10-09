<template>
  <div>
    <a-menu
      id="dddddd"
      style="width: 256px"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      @click="handleClick"
    >
    </a-menu>
  </div>
</template>
<script>
import {
  MailOutlined,
  QqOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons-vue';
import { asyncRouterMap } from '../config/router.config';
export default {
  components: {
    MailOutlined,
    QqOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
  data() {
    return {
      selectedKeys: ['1'],
      openKeys: ['sub1'],
      asyncRouterMap,
    };
  },
  watch: {
    openKeys(val) {
      console.log('openKeys', val);
    },
  },
  methods: {
    handleClick(e) {
      console.log('click', e);
    },
    titleClick(e) {
      console.log('titleClick', e);
    },
  },
};
</script>
