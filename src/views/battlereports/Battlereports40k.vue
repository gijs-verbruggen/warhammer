<template>
  <v-container>
    <v-row>
      <v-col v-for="index in items" :key="index.id">
        <IconLink v-bind:item="index" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import dataItem from "../../data/battlereport/aos/items.js";
import IconLink from "../../components/IconLink.vue";

export default {
  name: "BattlereportsSelection",

  components: { IconLink },

  data: () => ({
    items: dataItem,
  }),
};
</script>