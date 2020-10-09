<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <!-- menu左侧菜单 -->
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
      <div class="logo">
        <!-- 图标icon -->
        <apple-outlined />
        <span v-if="!collapsed" class="title">后台管理</span>
      </div>
      <BasicMenu :collapsed="collapsed" />
    </a-layout-sider>
    <!-- 右侧内容 -->
    <a-layout>
      <!-- header头部 -->
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          :style="{ fontSize: '28px' }"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          :style="{ fontSize: '28px' }"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <!-- Content内容区域 -->
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  AppleOutlined,
} from '@ant-design/icons-vue';
import BasicMenu from './menu';
export default {
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    AppleOutlined,
    BasicMenu, // 左侧菜单组件
  },
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}

.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  border: 1px solid red;
  color: red;
  font-size: 20px;
  white-space: nowrap;
  overflow: hidden;
  .title {
  }
}
</style>
