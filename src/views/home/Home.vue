<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="background_container pa-2">
            <h1 class="text-center text-lg-h1 text-sm-h3">Welcome</h1>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" md="6" lg="6" xl="6">
          <div class="background_container pa-2">
            <p>
              Hi my name is Gijs and I'm the creator of this website. You might
              have guessed it from the URL were it says 'gijs'. I've been
              collecting warhammer since around 2013 right before the End Times.
              My collection consists of Slaves to Darkness, Maggotkin of Nurgle,
              Blades of Khorne, Disciples of Tzeentch, Hedonites of Slaanesh ,
              Skaven and Cities of Sigmar Dispossessed (old dwarfs). I also own
              a little bit of warhammer 40000 some Deathguard and Adeptus
              Custodes.
            </p>
            <p>
              Check out the Gallery where I have posted alot of my models and
              some of my good friends models.
            </p>
            <p>
              Go to the Armylist to find some armies you might like to play or
              get inspired by. Some of these armies are more for casual play
              with your friends and some of these armies are more made for
              tournement play.
            </p>
            <p>
              On the leaderboards you can find some local statistics I've been
              collecting in my region.
            </p>
          </div>
        </v-col>
        <v-spacer></v-spacer>
        <v-col cols="12" sm="12" md="6" lg="4" xl="3">
          <h2 class="background_container mb-2">
            Check the lastest battlereport here!
          </h2>
          <v-card>
            <v-img
              :src="reportImageSrc"
              :alt="newestBattlereport.gameType"
              height="250px"
            ></v-img>
            <v-card-title>
              {{ newestBattlereport.gameType }}
            </v-card-title>
            <v-card-subtitle>
              Scenario: {{ newestBattlereport.scenario }}
            </v-card-subtitle>
            <v-card-actions>
              <v-btn
                color="primary "
                :to="'battlereports/aos/' + newestBattlereport.date"
              >
                Explore here
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn icon @click="show = !show">
                <v-icon>
                  {{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}
                </v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="show">
                <v-divider></v-divider>
                <v-card-text>
                  {{ newestBattlereport.armies }}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script src="./home.ts"></script>

<style>
.background_container {
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  border-radius: 5px;
  padding: 5px;
}
</style>
