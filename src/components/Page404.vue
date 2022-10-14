<template>
  <div>
    Такой страницы нет
    <br />
    <router-link :to="links.home">Домой</router-link>
  </div>
</template>

<script>
import links from "@/router/links";

export default {
  name: "Page404Copm",
  data: () => ({ links }),
};
</script>
