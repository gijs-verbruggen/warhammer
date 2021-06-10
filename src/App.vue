<template>
  <v-app id="app">
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
          v-if="$vuetify.breakpoint.lgAndUp"
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
          v-if="$vuetify.breakpoint.lgAndUp"
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
          v-if="$vuetify.breakpoint.lgAndUp"
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
          v-if="$vuetify.breakpoint.lgAndUp"
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
          v-if="$vuetify.breakpoint.lgAndUp"
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
          v-if="$vuetify.breakpoint.lgAndUp"
        >
          <v-btn color="primary">
            <v-icon class="mr-1"> fas fa-file-alt </v-icon>
            Custom
          </v-btn>
        </router-link>
        <!-- Programming -->
        <router-link
          class="mx-1"
          :to="{ name: 'Programming' }"
          v-if="$vuetify.breakpoint.lgAndUp"
        >
          <v-btn color="primary">
            <v-icon class="mr-1"> fas fa-desktop </v-icon>
            Programming
          </v-btn>
        </router-link>
        <v-spacer></v-spacer>
        <v-btn color="" @click="pickBackground">background</v-btn>
        <v-btn v-if="$vuetify.breakpoint.mdAndDown" icon @click="drawer = true">
          <v-icon>fas fa-bars</v-icon>
        </v-btn>
      </div>
    </v-app-bar>
    <!--
      ///////////////////////
      MOBILE
      ///////////////////////
     -->
    <v-navigation-drawer
      class="p-fixed"
      height="100vh"
      v-model="drawer"
      absolute
      temporary
      v-if="$vuetify.breakpoint.mdAndDown"
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
          <!-- programming -->
          <v-list-item :to="{ name: 'Programming' }">
            <v-list-item-icon>
              <v-icon>fas fa-desktop</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Programming</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main id="app-v-main" class="grey lighten-1 background_image">
      <router-view class="wrapper_main"> </router-view>
    </v-main>
    <v-dialog
      v-model="dialogBackgroundOption"
      max-width="1200"
      max-height="1200"
    >
      <v-container class="app_dialog">
        <v-radio-group label="Select an background image!" v-model="radioGroup">
          <v-row>
            <v-col cols="12" sm="12" md="6">
              <v-radio
                color="green"
                on-icon="mdi-check-bold"
                class="radio_background_order radioImage"
                value="order"
              ></v-radio>
              <div class="text-center">
                <h3>Order</h3>
              </div>
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <v-radio
                color="green"
                on-icon="mdi-check-bold"
                class="radio_background_chaos radioImage"
                value="chaos"
              ></v-radio>
              <div class="text-center">
                <h3>Chaos</h3>
              </div>
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <v-radio
                color="green"
                on-icon="mdi-check-bold"
                class="radio_background_death radioImage"
                value="death"
              ></v-radio>
              <div class="text-center">
                <h3>Death</h3>
              </div>
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <v-radio
                color="green"
                on-icon="mdi-check-bold"
                class="radio_background_destruction radioImage"
                value="destruction"
              ></v-radio>
              <div class="text-center">
                <h3>Destruction</h3>
              </div>
            </v-col>
          </v-row>
        </v-radio-group>
        <div class="d-flex">
          <v-spacer></v-spacer>
          <v-btn @click="cancelBackground">
            Cancel
            <v-icon>mdi-cancel</v-icon>
          </v-btn>
          <v-btn color="green" @click="saveBackground(radioGroup)">
            Save
            <v-icon>mdi-content-save</v-icon>
          </v-btn>
        </div>
      </v-container>
    </v-dialog>
  </v-app>
</template>

<script src="./app.ts">
</script>

<style>
.app_dialog {
  background-color: rgba(255, 255, 255, 1);
}
.p-fixed {
  position: fixed !important;
}
.background_image {
  height: 100%;
  overflow: hidden;
}
.wrapper_main {
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
}
.radioImage {
  position: relative;
  width: 100%;
  height: 95% !important;
  min-height: 360px;
  background-size: cover !important;
}
/* overwrite */
.radio_background_order .v-input--selection-controls__input,
.radio_background_chaos .v-input--selection-controls__input,
.radio_background_death .v-input--selection-controls__input,
.radio_background_destruction .v-input--selection-controls__input {
  position: absolute !important;
  right: 0;
  top: 14px;
}
/* background options */
.background_a {
  background: url("./assets/background_chaos.jpg") no-repeat top fixed;
  background-size: cover;
}
.background_order {
  background: url("./assets/background_order.jpg") no-repeat top fixed;
  background-size: cover;
}
.background_chaos {
  background: url("./assets/background_chaos.jpg") no-repeat top fixed;
  background-size: cover;
}
.background_death {
  background: url("./assets/background_death.jpg") no-repeat top fixed;
  background-size: cover;
}
.background_destruction {
  background: url("./assets/background_destruction.jpg") no-repeat top fixed;
  background-size: cover;
}
/* background input options */
.radio_background_order {
  background: url("./assets/background_order.jpg") no-repeat center;
}
.radio_background_chaos {
  background: url("./assets/background_chaos.jpg") no-repeat center;
}
.radio_background_death {
  background: url("./assets/background_death.jpg") no-repeat center;
}
.radio_background_destruction {
  background: url("./assets/background_destruction.jpg") no-repeat center;
}
</style>
