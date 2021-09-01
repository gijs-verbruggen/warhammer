<template>
  <v-tooltip v-model="show" bottom>
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon color="blue lighten-1"> fas fa-info-circle </v-icon>
      </v-btn>
    </template>
    <span>{{ updateLocalText }}</span>
  </v-tooltip>
</template>

<script src="./tooltip.ts">
</script>
<style>
</style>