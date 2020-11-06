<template>
  <router-view id="app" />
</template>
<script>
import { provide, ref } from 'vue';
export default {
  setup() {
    let testdata = ref(0);
    provide('test', testdata);
    setInterval(() => {
      testdata.value++;
    }, 1000);
  },
};
</script>
<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}
</style>
