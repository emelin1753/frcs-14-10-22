import mutations from "../mutations";
import { tables, tokens, fo, users } from "../backend";
import { getToken, validToken } from "@/helpers/global";

const { TABLE } = mutations;

const tablesStore = {
  namespaced: true,

  state: {
    table: {},
  },

  getters: {
    table: ({ table }) => table,
  },

  mutations: {
    [TABLE](state, value) {
      state.table = value;
    },
  },

  actions: {
    getTable({ commit }, id) {
      commit(TABLE, {});
      if (!validToken()) return;
      const result = [];
      const availableKeys = users[tokens[getToken()]].table;
      tables[id].data.forEach((el) => {
        if (availableKeys.includes(el)) result.push(fo[el]);
      });
      commit(TABLE, { id, result });
    },
  },
};

export default tablesStore;
