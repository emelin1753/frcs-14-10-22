<template>
  <div>
    <div class="menu">
      <div>Меню</div>
      <div v-for="(el, index) in menu" class="menu-element" :key="index">
        <button @click="clickMenu(el.table)">{{ el.title }}</button>
      </div>
      <div class="btn-exit">
        <hr />
        <button @click="clickExit">Выйти</button>
      </div>
    </div>
    <Table class="table" />
  </div>
</template>

<script>
import { deleteToken } from "@/helpers/global";
import links from "@/router/links";
import { mapActions, mapGetters } from "vuex";
import Table from "./Table.vue";

export default {
  name: "MenuComp",
  components: { Table },

  async created() {
    await this.getMenu();
    if (this.menu.length) this.getTable(this.menu[0].table);
  },

  methods: {
    ...mapActions("auth", ["getMenu"]),
    ...mapActions("tables", ["getTable"]),

    clickExit() {
      deleteToken();
      this.$router.push(links.home);
    },

    clickMenu(id) {
      this.getTable(id);
    },
  },

  computed: {
    ...mapGetters("auth", ["menu"]),
  },
};
</script>

<style scoped>
.menu {
  margin-top: 30px;
  margin-left: 30px;
  max-width: 120px;
}
.menu-element {
  margin-top: 10px;
}
.btn-exit {
  margin-top: 30px;
}
.table {
  position: absolute; /* Относительное позиционирование */
  left: 250px;
  top: 30px;
}
</style>
