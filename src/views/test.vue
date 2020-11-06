<template>
  <div>{{ num }}</div>
</template>

<script>
import { computed, ref, reactive, watchEffect, inject } from 'vue';
export default {
  name: '',
  setup() {
    let num = inject('test', ref(9));
    // const state = reactive({
    //   count: 0,
    // });
    // // setInterval(() => {
    // //   state.count += 1;
    // // }, 1000);
    // watchEffect(() => {
    //   console.log(state.count);
    //   document.body.innerHTML = `count is ${state.count}`;
    // });
    return {
      num,
    };
  },
};
</script>
<style lang='scss' scoped>
</style>
