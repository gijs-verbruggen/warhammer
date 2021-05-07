<template>
  <div class="home">
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="12" lg="12" xl="12">
          <div class="home_container white pa-2">
            <h1 class="text-center text-lg-h1 text-sm-h3">Welcome</h1>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="8" md="8" lg="8" xl="8">
          <div class="home_container white pa-2">
            <p class="text-lg-body-1">
              Hi my name is Gijs and i'm the creator of this website. You might
              have guessed it from the URL were it says 'gijs'. I've been
              collecting warhammer since around 2013 right before the End Times.
              My collection consists of Slaves to Darkness, Maggotkin of Nurgle,
              Blades of Khorne, Disciples of Tzeentch, Hedonites of Slaanesh ,
              Skaven and Cities of Sigmar Dispossessed (old dwarfs). I also own
              little bit of warhammer 40000 some Deathgaurd and Adeptus
              Custodes.
            </p>
            <p class="text-lg-body-1">
              Check out the Gallery where i have posted alot of my models and
              some of my good friends models.
            </p>
            <p class="text-lg-body-1">
              Check out the Battlereport where you can find many battlereports
              for your own reading pleasure.
            </p>
            <p class="text-lg-body-1">
              Go to the Armylist to find some armies you might like play or get
              inspired by. Some of these armies are more for casual play with
              your friends and some of these armies are more made for tournement
              play.
            </p>
            <p class="text-lg-body-1">
              On the leaderboards you can find some local statistics i've been
              collecting in my region.
            </p>
          </div>
        </v-col>
        <v-col cols="12" sm="4" md="4" lg="4" xl="4">
          <div class="home_container text-center white">
            <v-img
              alt="everchosen icon"
              :src="require('../../src/assets/images/icon/everchosen_icon.png')"
              aspect-ratio="1"
            ></v-img>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" md="4s" lg="4" xl="4">
          <div class="home_container text-center white">test</div>
        </v-col>
        <v-col cols="12" sm="12" md="4s" lg="4" xl="4">
          <div class="home_container text-center white">test</div>
        </v-col>
        <v-col cols="12" sm="12" md="4s" lg="4" xl="4">
          <div class="home_container text-center white">test</div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
<style>
.home_container {
  border-radius: 5px;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
}
</style>
