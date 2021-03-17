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
          <v-card class="ma-auto" max-width="400" @click="zoomOpen(project)">
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
        <v-dialog v-model="dialog" max-width="600">
          <div>
            <v-carousel v-model="model">
              <v-carousel-item
                v-for="(item, i) in selectedcarousel"
                :key="i"
                :src="item"
              >
              </v-carousel-item>
            </v-carousel>
          </div>
        </v-dialog>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import dataGallery from "../data/gallery/data.js";
import carouselGallery from "../data/gallery/carousel.js";
export default {
  name: "Gallery",
  components: {},
  data: () => ({
    projects: dataGallery,
    carousel: carouselGallery,
    event: null,
    clicked: false,
    dialog: false,
    selectedId: null,
    selectedcarousel: [],
    model: 0,
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
    zoomOpen(project) {
      this.selectedcarousel = [];
      this.selectedId = project.id;
      var i;
      for (i = 0; i < this.carousel.length; i++) {
        if (this.carousel[i].linkId === this.selectedId) {
          this.selectedcarousel.push(
            require("../../src/assets/images/gallery/" + this.carousel[i].src)
          );
        }
      }
      this.dialog = true;
    },
  },
};
</script>