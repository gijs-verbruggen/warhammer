<template>
  <div class="Programming">
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="12" lg="12" xl="12">
          <div class="background_container pa-2">
            <h1>Development process</h1>
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="6" xl="6">
          <p class="background_container rounded">
            I created this database for the leaderboard fuctions that will be
            needed to make a solid leaderboard with a lot of important
            information for all players.
          </p>
        </v-col>
        <v-col cols="12" sm="12" md="6" lg="6" xl="6">
          <div class="background_container">
            <v-img
              class="rounded"
              alt="database"
              src="../../../src/assets/images/programming/database.jpg"
            ></v-img>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script src="./programming.ts"></script>
<style>
.background_container {
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  border-radius: 5px;
}
</style>
