<template>
  <div class="Gallery">
    <v-container>
      <v-row>
        <v-col cols="12">
          <div>
            <v-btn @click="filter($event)" class="ma-2" outlined color="indigo">
              All
            </v-btn>
            <v-btn @click="filter($event)" class="ma-2" outlined color="indigo">
              Slaves to Darkness
            </v-btn>
            <v-btn @click="filter($event)" class="ma-2" outlined color="indigo">
              Maggothkin of Nurgle
            </v-btn>
            <v-btn @click="filter($event)" class="ma-2" outlined color="indigo">
              Hedonites of Slaanesh
            </v-btn>
            <v-btn @click="filter($event)" class="ma-2" outlined color="indigo">
              Blades of Khorne
            </v-btn>
            <v-btn @click="filter($event)" class="ma-2" outlined color="indigo">
              Disciples of Tzeentch
            </v-btn>
            <v-btn @click="filter($event)" class="ma-2" outlined color="indigo">
              Beasts of Chaos
            </v-btn>
            <v-btn @click="filter($event)" class="ma-2" outlined color="indigo">
              Skaven
            </v-btn>
          </div>
        </v-col>
        <v-col
          v-for="project in filteredProjects"
          :key="project.id"
          class="d-flex child-flex"
          cols="3"
        >
          <v-card
            class="ma-auto"
            max-width="400"
            @click="zoomOpen(project.src)"
          >
            <v-img
              :src="require(`../../src/assets/images/gallery/${project.src}`)"
              :alt="project.title"
              aspect-ratio="1"
              class="grey lighten-2"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
        </v-col>
        <v-dialog v-model="dialog" width="700">
          <v-card class="ma-auto" max-width="900">
            <v-btn @click="zoomClose()" icon>
              <v-icon>fa-times</v-icon>
            </v-btn>
            <v-img :src="selectedImage" aspect-ratio="1" class="grey lighten-2">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
        </v-dialog>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import dataGallery from "../data/gallery/data.js";
export default {
  name: "Gallery",
  components: {},
  data: () => ({
    projects: dataGallery,
    event: null,
    clicked: false,
    dialog: false,
    selectedImage: null,
  }),
  computed: {
    filteredProjects() {
      if (
        this.event != null &&
        this.event.target.innerText.toLowerCase() != "all"
      ) {
        return this.projects.filter(
          ({ category }) =>
            category.toLowerCase() == this.event.target.innerText.toLowerCase()
        );
      } else {
        return this.projects;
      }
    },
  },
  methods: {
    filter(event) {
      this.event = event;
    },
    zoomOpen(url) {
      console.log(url);
      this.selectedImage = require("../../src/assets/images/gallery/" + url);
      this.dialog = true;
      console.log(this.selectedImage);
    },
    zoomClose() {
      this.dialog = false;
      this.selectedImage = null;
    },
  },
};
</script>