<template>
  <div>
    <Menu />
    <Table />
  </div>
</template>

<script>
import Menu from "./Menu.vue";
import Table from "./Table.vue";

export default {
  name: "DashboradComp",
  components: { Menu, Table },
};
</script>
