import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import tables from "./modules/tables";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { auth, tables },
});
