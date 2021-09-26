/*
 * @Description: 全局状态
 * @Autor: zxx
 * @Date: 2020-12-01 22:20:41
 * @LastEditors: zxx
 * @LastEditTime: 2021-09-26 21:33:57
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginStatus: false,
    userList: [],
  },
  // 同步行为
  mutations: {
    setLoginstatus(state, payload) {
      state.loginStatus = payload.loginstatus
    },
    setUserList(state, payload) {
      state.userList = payload.userList
    }
  },
  // 异步行为
  actions: {
    getuser(context, userlist) {
      console.log(context, "context");
      context.commit('setUserList', userlist)
    }
    // getuser({ commit }) {
    //   console.log(context, "context");
    //   commit('setUserList')
    // }
  },
});
