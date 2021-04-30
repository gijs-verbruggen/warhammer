<template>
  <v-card class="mx-auto">
    <v-img
      class="white--text align-end"
      height="300px"
      :src="imageSource"
      :alt="itemLocal.text"
    >
    </v-img>
    <v-card-title style="min-height: 96px">{{ itemLocal.title }}</v-card-title>
    <v-card-text class="text--primary">
      <div>{{ itemLocal.date }}</div>
    </v-card-text>
    <v-card-actions>
      <v-btn color="orange" text v-on:click="goTo(itemLocal.date)">
        Go to Battlereport
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "IconLink",
  props: {
    item: Object,
  },
  data() {
    return {
      itemLocal: { ...this.item },
    };
  },
  computed: {
    imageSource() {
      return require("../../src/assets/images/battlereports/" +
        this.itemLocal.src);
    },
  },
  methods: {
    goTo(key) {
      this.$router.push({ path: "/battlereports/aos/" + key });
    },
  },
};
</script>
<style>
</style>