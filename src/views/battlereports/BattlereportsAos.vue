<template>
  <v-container>
    <v-row>
      <v-col v-for="item in items" :key="item.id">
        <IconLink v-bind:item="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import dataAos from "../../data/battlereport/aos/items.js";
import IconLink from "../../components/IconLink.vue";

export default {
  name: "BattlereportsSelection",

  components: { IconLink },

  data: () => ({
    items: dataAos,
  }),
};
</script>