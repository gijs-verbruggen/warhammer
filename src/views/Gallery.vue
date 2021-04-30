<template>
  <div class="Gallery">
    <v-container>
      <v-row>
        <v-col cols="12" class="my-2 pa-0">
          <div>
            <v-btn @click="filter($event)" class="mr-1 mb-1" color="primary">
              All
            </v-btn>
            <v-btn @click="filter($event)" class="mr-1 mb-1" color="primary">
              Slaves to Darkness
            </v-btn>
            <v-btn @click="filter($event)" class="mr-1 mb-1" color="primary">
              Maggothkin of Nurgle
            </v-btn>
            <v-btn @click="filter($event)" class="mr-1 mb-1" color="primary">
              Hedonites of Slaanesh
            </v-btn>
            <v-btn @click="filter($event)" class="mr-1 mb-1" color="primary">
              Blades of Khorne
            </v-btn>
            <v-btn @click="filter($event)" class="mr-1 mb-1" color="primary">
              Disciples of Tzeentch
            </v-btn>
            <v-btn @click="filter($event)" class="mr-1 mb-1" color="primary">
              Beasts of Chaos
            </v-btn>
            <v-btn @click="filter($event)" class="mr-1 mb-1" color="primary">
              Skaven
            </v-btn>
            <v-btn @click="filter($event)" class="mr-1 mb-1" color="primary">
              Cities of Sigmar
            </v-btn>
          </div>
        </v-col>
        <v-col
          v-for="project in filteredProjects"
          :key="project.id"
          class="gallery_photos d-flex child-flex pa-0"
          cols="12"
          sm="12"
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