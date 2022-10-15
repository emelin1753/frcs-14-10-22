import mutations from "../mutations";
import { users, menu, tokens } from "../backend";
import { getToken, validToken } from "@/helpers/global";

const { TOKEN, MENU } = mutations;

const auth = {
  namespaced: true,

  state: {
    token: null,
    menu: [],
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
      if (users[data.login] && users[data.login]?.password === data.password)
        commit(TOKEN, users[data.login].token);
    },

    getMenu({ commit }) {
      commit(MENU, []);
      if (!validToken()) return;
      const result = [];
      users[tokens[getToken()]].menu.forEach((el) => {
        result.push(menu[el]);
      });
      commit(MENU, result);
    },
  },
};

export default auth;
