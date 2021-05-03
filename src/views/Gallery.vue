<template>
  <div class="Gallery">
    <v-container>
      <v-row>
        <v-col cols="12" class="my-2 pa-0">
          <div v-if="$vuetify.breakpoint.smAndUp">
            <v-btn @click="filter($event)" class="mr-1 mb-1" color="primary">
              All
            </v-btn>
            <v-btn
              @click="filter($event)"
              v-for="category in categories"
              :key="category.id"
              class="mr-1 mb-1"
              color="primary"
            >
              {{ category.army }}
            </v-btn>
          </div>
          <v-menu
            open-on-click
            allow-overflow
            bottom
            offset-y
            v-if="$vuetify.breakpoint.smAndDown"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                outlined
                width="100%"
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
              >
                <v-icon class="mr-1"> fas fa-clipboard-list </v-icon>
                Armylist
                <v-icon small class="mr-1"> fas fa-caret-down </v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="category in categories"
                :key="category.id"
                @click="filter($event)"
              >
                <v-list-item-title>{{ category.army }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
        <v-col
          v-for="project in filteredProjects"
          :key="project.id"
          class="gallery_photos d-flex child-flex pa-0"
          cols="12"
          sm="6"
          md="4"
          lg="3"
          xl="3"
        >
          <v-card
            class="gallery_photos_card"
            @click="zoomOpen(project)"
            tile
            outlined
          >
            <v-img
              :src="require(`../../src/assets/images/gallery/${project.src}`)"
              :alt="project.title"
              aspect-ratio="1"
              class="gallery_photos_card_img grey lighten-2"
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
        <v-dialog v-model="dialog" max-width="800">
          <div>
            <v-carousel v-model="selectedModel" height="800">
              <v-carousel-item
                v-for="(item, i) in selectedCarousel"
                :key="i"
                :src="item"
              >
              </v-carousel-item>
            </v-carousel>
          </div>
        </v-dialog>
        <BackToTop></BackToTop>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import dataGallery from "../data/gallery/data.js";
import carouselGallery from "../data/gallery/carousel.js";
import dataArmies from "../data/leaderboard/armies.js";
import BackToTop from "../components/BackToTop.vue";

export default {
  name: "Gallery",
  components: { BackToTop },
  data: () => ({
    projects: dataGallery,
    carousel: carouselGallery,
    categories: dataArmies,
    event: null,
    clicked: false,
    dialog: false,
    selectedId: null,
    selectedCarousel: [],
    selectedModel: 0,
  }),
  created() {
    this.projects.sort(function (first, last) {
      var newest = new Date(first.date);
      var oldest = new Date(last.date);
      return newest - oldest;
    });
  },
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
      this.selectedCarousel = [];
      this.selectedId = project.id;
      this.selectedModel = 0;
      var i;
      for (i = 0; i < this.carousel.length; i++) {
        if (this.carousel[i].linkId === this.selectedId) {
          this.selectedCarousel.push(
            require("../../src/assets/images/gallery/" + this.carousel[i].src)
          );
        }
      }
      this.dialog = true;
    },
  },
};
</script>
<style>
.gallery_photos {
  transition: transform 0.2s;
}
.gallery_photos_card {
  overflow: hidden;
}
.gallery_photos:hover .gallery_photos_card_img {
  transition: transform 0.5s;
  transform: scale(1.5);
}
</style>