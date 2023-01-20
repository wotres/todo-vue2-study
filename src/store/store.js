import Vue from 'vue';
import Vuex from 'vuex';
import * as mutations from "./mutations";
import * as getters from '@/store/getters';
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    taskList: [],
    userName: "",
    orderType: "DESC",
  },
  getters: getters,
  mutations: mutations
})
