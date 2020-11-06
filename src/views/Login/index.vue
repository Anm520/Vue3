<template>
  <div @click="login">登陆页面</div>
</template>

<script>
import { computed, ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
export default {
  name: '',
  setup() {
    const router = useRouter();
    function login() {
      router.push({ path: '/' });
    }
    return {
      login,
    };
  },
};
</script>
<style lang='scss' scoped>
</style>
