<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <router-link class="mx-1" :to="{ name: 'Home' }">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="../src/assets/White-Warhammerlogo.png"
            transition="scale-transition"
            width="40"
          />
        </router-link>
        <router-link class="mx-1" :to="{ name: 'Home' }">
          <v-btn color="primary">
            <v-icon class="mr-1">fas fa-home </v-icon>
            Home
          </v-btn>
        </router-link>
        <v-menu open-on-hover bottom offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
              <v-icon class="mr-1"> fas fa-file-alt </v-icon>
              Battlereport
              <v-icon small class="mr-1"> fas fa-caret-down </v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item :to="{ name: 'BattlereportsAos' }">
              <v-list-item-title>AOS</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <router-link class="mx-1" :to="{ name: 'Gallery' }">
          <v-btn color="primary">
            <v-icon class="mr-1"> fas fa-images </v-icon>
            Gallery
          </v-btn>
        </router-link>
        <v-menu open-on-hover bottom offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
              <v-icon class="mr-1"> fas fa-clipboard-list </v-icon>
              Armylist
              <v-icon small class="mr-1"> fas fa-caret-down </v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item :to="{ name: 'ArmylistAos' }">
              <v-list-item-title>AOS</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <router-link class="mx-1" :to="{ name: 'Leaderboards' }">
          <v-btn color="primary">
            <v-icon class="mr-1"> fas fa-trophy </v-icon>
            Leaderboards
          </v-btn>
        </router-link>
      </div>
    </v-app-bar>
    <v-main class="grey lighten-1">
      <router-view> </router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    // test
  }),
};
</script>
