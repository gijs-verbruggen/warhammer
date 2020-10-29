<template>
  <v-card class="mx-auto" max-width="400">
    <v-img
      class="white--text align-end"
      height="200px"
      :src="itemLocal.image"
      :alt="itemLocal.text"
    >
      <v-card-title>{{ itemLocal.text }}</v-card-title>
    </v-img>
    <v-card-subtitle class="pb-0"> {{ itemLocal.id }} </v-card-subtitle>
    <v-card-text class="text--primary">
      <div>{{ itemLocal.text }}</div>
      <div>{{ itemLocal.text }}</div>
    </v-card-text>
    <v-card-actions>
      <v-btn color="orange" text v-on:click="goTo(itemLocal.id)">
        Go to Battlereoprt
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
  methods: {
    goTo(key) {
      this.$router.push({ path: "/battlereports/aos/" + key });
    },
  },
};
</script>