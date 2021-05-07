<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center flex-grow-1">
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
        <!-- Home -->
        <router-link
          class="mx-1"
          :to="{ name: 'Home' }"
          v-if="$vuetify.breakpoint.smAndUp"
        >
          <v-btn color="primary">
            <v-icon class="mr-1">fas fa-home </v-icon>
            Home
          </v-btn>
        </router-link>
        <!-- Battlereport -->
        <v-menu
          open-on-hover
          bottom
          offset-y
          v-if="$vuetify.breakpoint.smAndUp"
        >
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
        <!-- Gallery -->
        <router-link
          class="mx-1"
          :to="{ name: 'Gallery' }"
          v-if="$vuetify.breakpoint.smAndUp"
        >
          <v-btn color="primary">
            <v-icon class="mr-1"> fas fa-images </v-icon>
            Gallery
          </v-btn>
        </router-link>
        <!-- Armylist -->
        <v-menu
          open-on-hover
          bottom
          offset-y
          v-if="$vuetify.breakpoint.smAndUp"
        >
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
        <!-- Leaderboards -->
        <router-link
          class="mx-1"
          :to="{ name: 'Leaderboards' }"
          v-if="$vuetify.breakpoint.smAndUp"
        >
          <v-btn color="primary">
            <v-icon class="mr-1"> fas fa-trophy </v-icon>
            Leaderboards
          </v-btn>
        </router-link>
        <!-- Custom -->
        <router-link
          class="mx-1"
          :to="{ name: 'Custom' }"
          v-if="$vuetify.breakpoint.smAndUp"
        >
          <v-btn color="primary">
            <v-icon class="mr-1"> fas fa-file-alt </v-icon>
            Custom
          </v-btn>
        </router-link>
        <v-spacer></v-spacer>
        <v-btn v-if="$vuetify.breakpoint.smAndDown" icon @click="drawer = true">
          <v-icon>fas fa-bars</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
    <v-navigation-drawer
      class="p-fixed"
      height="100vh"
      v-model="drawer"
      absolute
      temporary
      v-if="$vuetify.breakpoint.smAndDown"
    >
      <v-list nav dense>
        <v-list-item-group active-class="text--accent-4">
          <!-- Home -->
          <v-list-item :to="{ name: 'Home' }">
            <v-list-item-icon>
              <v-icon>fas fa-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <!-- Battlereport -->
          <v-menu open-on-hover bottom offset-x>
            <template v-slot:activator="{ on, attrs }">
              <v-list-item v-bind="attrs" v-on="on">
                <v-list-item-icon>
                  <v-icon>fas fa-file-alt</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Battlereport</v-list-item-title>
                <v-icon small class="mr-1"> fas fa-caret-down </v-icon>
              </v-list-item>
            </template>
            <v-list>
              <v-list-item :to="{ name: 'BattlereportsAos' }">
                <v-list-item-title>AOS</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <!-- Gallery -->
          <v-list-item :to="{ name: 'Gallery' }">
            <v-list-item-icon>
              <v-icon>fas fa-images</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Gallery</v-list-item-title>
          </v-list-item>
          <!-- Armylist -->
          <v-menu open-on-hover bottom offset-x>
            <template v-slot:activator="{ on, attrs }">
              <v-list-item v-bind="attrs" v-on="on">
                <v-list-item-icon>
                  <v-icon>fas fa-clipboard-list </v-icon>
                </v-list-item-icon>
                <v-list-item-title>Armylist</v-list-item-title>
                <v-icon small class="mr-1"> fas fa-caret-down </v-icon>
              </v-list-item>
            </template>
            <v-list>
              <v-list-item :to="{ name: 'ArmylistAos' }">
                <v-list-item-title>AOS</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <!-- leaderboards -->
          <v-list-item :to="{ name: 'Leaderboards' }">
            <v-list-item-icon>
              <v-icon>fas fa-trophy</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Leaderboards</v-list-item-title>
          </v-list-item>
          <!-- custom -->
          <v-list-item :to="{ name: 'Custom' }">
            <v-list-item-icon>
              <v-icon>fas fa-file-alt</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Custom</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
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
    drawer: false,
  }),
};
</script>

<style>
.p-fixed {
  position: fixed !important;
}
</style>
