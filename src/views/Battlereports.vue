<template>
  <div class="Battlereports">
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-btn v-bind:onclick="goTo('/battlereports/aos')">AOS</v-btn>
        </v-col>
        <v-col cols="6">
          <v-btn v-bind:onclick="goTo('/battlereports/40k')">40K</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Battlereports",

  components: {},

  data: () => ({}),
  methods: {
    goTo(key) {
      this.$router.push({ path: key });
    },
  },
};
</script>