<template>
  <div class="Custom">
    <v-container>
      <v-row>
        <v-spacer></v-spacer>
        <v-col cols="8" sm="8" md="8" lg="8" xl="8">
          <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header>
                <h2>Triumph and Treachery Cards</h2>
              </v-expansion-panel-header>
              <v-expansion-panel-content>
                <div class="d-flex">
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
                    alt="test"
                    src="../../src/assets/images/custom/triumph_and_treachery_cards.jpg"
                    width="50%"
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

<script>
export default {
  name: "Custom",
  data: () => ({
    url: "http://localhost:8080/",
  }),
  components: {},
};
</script>
<style>
.expansion_panel_content_custom {
  width: 50%;
}
</style>
