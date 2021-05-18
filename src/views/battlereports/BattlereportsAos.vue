<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
        sm="12"
        md="6"
        lg="6"
        xl="6"
        v-for="item in items"
        :key="item.id"
      >
        <IconLink v-bind:item="item" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="./battlereportsAos.ts">
</script>