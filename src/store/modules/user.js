import router from '../../router/index';
const state = () => ({
  userInfo: {
    name: 'admin',
  },
});
// getters
const getters = {
  name: (state) => state.userInfo.name,
};
// mutations
const mutations = {
  setUserInfo(state, payload) {
    state.userInfo = payload;
  },
};
// actions
const actions = {
  removeUserInfo({ state, commit }, payload) {
    commit('setUserInfo', { name: '' });
    router.push({ path: '/login' });
  },
};
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
