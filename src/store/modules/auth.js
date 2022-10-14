import mutations from "../mutations";
import { users } from "../backend";

const { TOKEN, MENU } = mutations;

const auth = {
  namespaced: true,

  state: {
    token: null,
    menu: null,
  },

  getters: {
    token: ({ token }) => token,
    menu: ({ menu }) => menu,
  },

  mutations: {
    [TOKEN](state, value) {
      state.token = value;
    },
    [MENU](state, value) {
      state.menu = value;
    },
  },

  actions: {
    // авторизация пользователя и получение токена
    getLoginToken({ commit }, data) {
      commit(TOKEN, null);
      if (users[data.login]?.password === data.password)
        commit(TOKEN, users[data.login].token);
    },
  },
};

export default auth;
