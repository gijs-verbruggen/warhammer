<template>
  <v-btn
    v-scroll="onScroll"
    v-show="fab"
    fab
    dark
    fixed
    bottom
    right
    color="primary"
    @click="toTop"
    v-if="$vuetify.breakpoint.smAndDown"
  >
    <v-icon>mdi-arrow-up</v-icon>
  </v-btn>
</template>

<script src="./backtotop.ts">
</script>
<style>
</style>