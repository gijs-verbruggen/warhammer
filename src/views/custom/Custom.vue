<template>
  <div class="Custom">
    <v-container>
      <v-row>
        <v-spacer></v-spacer>
        <v-col cols="12" sm="12" md="12" lg="8" xl="8">
          <v-expansion-panels v-model="panel">
            <v-expansion-panel>
              <v-expansion-panel-header>
                <h2>Triumph and Treachery Cards</h2>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div class="d-xl-flex d-lg-flex d-md-flex d-sm-flex d-block">
                  <p class="pr-1">
                    This is my custom Triumph and Treachery card set that I
                    created for FFA games. We sometimes play FFA games 1500
                    points each were these cards spice up the game for us and
                    make it alot more fun. I tried to make every card usefull
                    but that is pretty hard to achieve. So not all cards are at
                    the same power lvl I guess but how really cares during a
                    FFA.
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        :href="url + 'triumph_and_treachery_cards.pdf'"
                        color="primary"
                        download
                        rounded
                      >
                        Download PDF
                      </v-btn>
                    </v-card-actions>
                  </p>
                  <v-img
                    class="custom_image"
                    alt="triumph and treachery cards"
                    src="../../../src/assets/images/custom/triumph_and_treachery_cards.jpg"
                  ></v-img>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header>
                <h2>Music</h2>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div class="d-xl-flex d-lg-flex d-md-flex d-sm-flex d-block">
                  <p class="pr-1">
                    During our matches i always put on some background music to
                    prevent awkward silences or epic battle music. So yeh
                    Nightwish, Iron Maiden, Evanescence, DragonForce, Breaking
                    Benjamin, Linkin Park and some League of Legends. Here is my
                    Warhammer playlist on Spotify.
                    <v-card-actions class="pa-0 py-3">
                      <iframe
                        src="https://open.spotify.com/embed/playlist/2jY2KaYw1cY79MThnmdEoz"
                        width="500"
                        height="250"
                        frameborder="0"
                        allowtransparency="true"
                        allow="encrypted-media"
                      ></iframe>
                    </v-card-actions>
                  </p>
                  <v-img
                    class="custom_image"
                    alt="music"
                    src="../../../src/assets/images/custom/music_wallpaper.jpg"
                  ></v-img>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel>
              <v-expansion-panel-header>
                <h2>FFA scenario</h2>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div class="d-xl-flex d-lg-flex d-md-flex d-sm-flex d-block">
                  <p class="pr-1">
                    I created this scenario just for fun for are multiplayer
                    games with some shenanigans to mess with each other. I also
                    put some thought in to makeing it faster since games with
                    alot of people take really long to even finish an single
                    battleround.
                    <v-card-actions class="pa-0 py-3">
                      <v-spacer></v-spacer>
                      <v-btn
                        :href="url + 'Battleplan_birthday.pdf'"
                        color="primary"
                        download
                        rounded
                      >
                        Download PDF
                      </v-btn>
                    </v-card-actions>
                  </p>
                  <v-img
                    class="custom_image"
                    alt="music"
                    src="../../../src/assets/images/custom/battleplan_birthday.jpg"
                  ></v-img>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
        <v-spacer></v-spacer>
      </v-row>
    </v-container>
  </div>
</template>

<script src="./custom.ts">
</script>
<style>
.expansion_panel_content_custom {
  width: 50%;
}
.custom_image {
  width: 50%;
}
@media only screen and (max-width: 375px) {
  .custom_image {
    width: 100%;
  }
}
</style>
