<template>
  <div class="user-info">
    <a-dropdown :trigger="['click']">
      <div class="user-info">
        <div class="user-avatar">
          <div class="img"></div>
        </div>
        <span class="user-name" style="margin-left: 10px">{{ name }}</span>

        <DownOutlined style="margin-left: 10px" />
      </div>
      <template v-slot:overlay>
        <a-menu>
          <!-- <a-menu-item>
            <a href="javascript:;" @click="handleUpdatePassword">修改密码</a>
          </a-menu-item> -->
          <a-menu-item>
            <a href="javascript:;" @click="removeUserInfo">退出登录</a>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script>
import { computed, ref, reactive } from 'vue';
import { DownOutlined } from '@ant-design/icons-vue';
import { mapGetters, mapActions } from 'vuex';
export default {
  name: '',
  setup(props, ctx) {
    function handleLogout() {
      this.removeUserInfo();
    }
    return {
      handleLogout,
    };
  },
  computed: mapGetters('user', ['name']),
  methods: mapActions('user', ['removeUserInfo']),
  components: {
    DownOutlined,
  },
};
</script>
<style lang='scss' scoped>
.user-info {
  float: right;
  margin-right: 15px;
  z-index: 999;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  .user-name {
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .user-avatar {
    display: flex;
    width: 49px;
    height: 48px;
    background: url('../assets/img/circle.png');
    margin-left: 20px;
    justify-content: center;
    align-items: center;

    .img {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      background: url('../assets/img/head-logo.png');
      background-size: cover;
    }
  }
}
</style>
