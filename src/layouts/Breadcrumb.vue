<template>
  <div class="_bread">
    <a-breadcrumb>
      <a-breadcrumb-item v-for="(item, index) in breadcrumb" :key="index">
        <span class="_link" v-if="item.path" @click="navigate(item.path)">{{
          item.name
        }}</span>
        <template v-else>{{ item.name }}</template>
      </a-breadcrumb-item>
    </a-breadcrumb>
    <div class="title-container">
      <ArrowLeftOutlined
        class="arrow-left"
        v-show="breadcrumb && breadcrumb.length > 1"
        @click="back"
      />
      <div class="title">{{ title }}</div>
    </div>
  </div>
</template>

<script>
import { computed, reactive, ref, toRefs } from 'vue';
import { ArrowLeftOutlined } from '@ant-design/icons-vue';
import { useRouter, useRoute } from 'vue-router';
export default {
  name: 'breadcrumb',
  setup(props, ctx) {
    const router = useRouter();
    const route = useRoute();
    const state = reactive({
      cont: 1,
      breadcrumb: computed(() => route.meta.breadcrumb),
      title: computed(() => route.meta.title),
    });
    function navigate(path) {
      router.push({ path });
    }
    function back() {
      // const breadcrumbItem = this.breadcrumb[this.breadcrumb.length - 2];
      // this.$router.push({ path: breadcrumbItem.path }).catch(() => {});
      window.history.back(-1);
    }

    return {
      ...toRefs(state),
      navigate,
      back,
    };
  },
  components: { ArrowLeftOutlined },
};
</script>

<style scoped lang="scss">
._bread {
  padding: 16px 24px;
  background: #ffffff;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.12);
  z-index: 1;
  ._link {
    cursor: pointer;
  }
  .title-container {
    display: flex;
    align-items: center;
    margin-top: 16px;
    .arrow-left {
      font-size: 20px;
      padding-right: 16px;
      margin-right: 16px;
      cursor: pointer;
      border-right: 1px solid rgba(0, 0, 0, 0.15);
    }
    .title {
      line-height: 1;
      font-size: 20px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.85);
    }
  }
}
</style>
