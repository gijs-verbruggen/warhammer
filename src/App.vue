<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <router-link class="mx-1" to="{name: 'Home'}">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="../src/assets/White-Warhammerlogo.png"
            transition="scale-transition"
            width="40"
          />
        </router-link>
        <router-link class="mx-1" to="{name: 'Home'}">
          <v-btn color="primary">
            <v-icon class="mr-1">fas fa-home </v-icon>
            Home
          </v-btn>
        </router-link>
        <router-link class="mx-1" to="{name: 'Battlereports'}">
          <v-btn color="primary">
            <v-icon class="mr-1"> fas fa-file-alt </v-icon>
            Battlereport
          </v-btn>
        </router-link>
        <router-link class="mx-1" to="{name: 'Gallery'}">
          <v-btn color="primary">
            <v-icon class="mr-1"> fas fa-images </v-icon>
            Gallery
          </v-btn>
        </router-link>
        <router-link class="mx-1" to="{name: 'Armylist'}">
          <v-btn color="primary">
            <v-icon class="mr-1"> fas fa-clipboard-list </v-icon>
            Armylist
          </v-btn>
        </router-link>
        <router-link class="mx-1" to="{name: 'Touraments'}">
          <v-btn color="primary">
            <v-icon class="mr-1"> fas fa-trophy </v-icon>
            Tournaments
          </v-btn>
        </router-link>
      </div>
    </v-app-bar>
    <v-main>
      <router-view> </router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>
