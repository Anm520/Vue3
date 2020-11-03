<template>
  <i :class="['iconfont', icon, 'baseicon']"> </i>
</template>

<script>
import { computed, ref, reactive } from 'vue';
export default {
  name: '',
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang='scss' scoped>
.baseicon {
  // font-size: 14px;
  // color: #1890ff;
  //   color: #1890ff;
}
</style>
