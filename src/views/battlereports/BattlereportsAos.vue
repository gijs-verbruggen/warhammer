<template>
  <div class="BattlereportsAos">
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2 class="title_bar">
            The battlereports are sorted by the most recent dates they were
            played. At the top the most recent one.
          </h2>
        </v-col>
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
  </div>
</template>

<script src="./battlereportsAos.ts">
</script>
<style>
.title_bar {
  background-color: white;
  border-radius: 5px;
  padding: 16px;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
}
</style>