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
    <v-card-subtitle>Scenario: {{ itemLocal.scenario }}</v-card-subtitle>
    <v-card-actions>
      <v-btn color="orange" text v-on:click="goTo(itemLocal.date)">
        Go to Battlereport
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script src="./iconlink.ts">
</script>
<style>
</style>