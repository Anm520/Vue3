<template>
  <div>
    <div @click="login">登陆页面</div>
    <div @click="test">按钮</div>
    <div @click="edit">修改</div>
    <p>{{ name }}</p>
  </div>
</template>

<script>
import { computed, ref, reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
export default {
  name: '',
  setup() {
    const router = useRouter();
    const store = useStore();
    let name = computed(() => store.getters['user/name']);

    function login() {
      router.push({ path: '/' });
    }
    function test() {
      console.log(store);
      console.log(name);
    }
    function edit() {
      store.commit('user/setUserInfo', { name: '小二黑' });
    }
    return {
      name,
      login,
      test,
      edit,
    };
  },
};
</script>
<style lang='scss' scoped>
</style>
