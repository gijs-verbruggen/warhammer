<template>
  <div class="ArmyListAOS">
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="6" lg="6" xl="6">
          <v-card>
            <v-img
              class="white--text align-end"
              height="400px"
              :src="
                require(`../../../src/assets/images/gallery/varanguard_nurgle1.jpeg`)
              "
            >
            </v-img>
            <v-card-title>Slaves to Darkness 2000k</v-card-title>
            <v-card-subtitle>Host of the Everchosen</v-card-subtitle>
            <v-card-actions>
              <v-spacer></v-spacer>
              <!-- <v-btn color="primary">
                Go to list
                <v-icon right dark> mdi-open-in-new </v-icon>
              </v-btn> -->
              <v-btn
                :href="url + '2k_gijs_verbruggen.pdf'"
                color="primary"
                download
              >
                download List
                <v-icon right dark> mdi-cloud-download </v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "ArmyListAOS",
  data: () => ({
    url: "http://localhost:8080/",
  }),
  components: {},
};
</script>
