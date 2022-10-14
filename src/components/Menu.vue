<template>
  <div>
    MenuComp
    <button @click="clickExit">Выйти</button>
  </div>
</template>

<script>
import { deleteToken } from "@/helpers/global";
import links from "@/router/links";

export default {
  name: "MenuComp",

  methods: {
    clickExit() {
      deleteToken();
      this.$router.push(links.home);
    },
  },
};
</script>
