<template>
  <div>
    <h4>{{ table.id }}</h4>
    <table width="100%" class="table-blue">
      <tr>
        <th>#</th>
        <th>ФО</th>
      </tr>
      <tr v-for="(el, index) in table.result" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ el }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TableComp",

  computed: {
    ...mapGetters("tables", ["table"]),
  },
};
</script>
