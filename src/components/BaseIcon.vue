<template>
  <span :class="['iconfont', icon, 'baseicon']"></span>
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
  font-size: 18px;
  color: #1890ff;
  //   color: #1890ff;
}
</style>
