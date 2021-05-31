<template>
  <div class="Gallery">
    <v-container>
      <v-row>
        <v-col cols="12" class="my-2 pa-0">
          <div v-if="$vuetify.breakpoint.lgAndUp">
            <v-btn @click="filter($event)" class="mr-1 mb-1" color="primary">
              All
            </v-btn>
            <v-btn
              @click="filter($event)"
              v-for="category in categories"
              :key="category.id"
              class="mr-1 mb-1"
              :class="{
                'indigo lighten-2': category.grandalliance === 'Order',
                'deep-orange lighten-1': category.grandalliance === 'Chaos',
                'light-blue lighten-2': category.grandalliance === 'Death',
                'green lighten-2': category.grandalliance === 'Destruction',
              }"
            >
              {{ category.alliance }}
            </v-btn>
          </div>
          <v-menu
            open-on-click
            allow-overflow
            bottom
            offset-y
            v-if="$vuetify.breakpoint.mdAndDown"
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
              <v-list-item @click="filter($event)">
                <v-list-item-title>All</v-list-item-title>
              </v-list-item>
              <v-list-item
                v-for="category in categories"
                :key="category.id"
                @click="filter($event)"
              >
                <v-list-item-title>{{ category.alliance }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
        <v-col
          v-for="project in filteredProjects"
          :key="project.id"
          class="d-flex child-flex pa-0"
          cols="12"
          sm="6"
          md="4"
          lg="3"
          xl="3"
        >
          <v-card class="" @click="zoomOpen(project)" tile outlined>
            <v-hover v-slot="{ hover }">
              <v-img
                :src="
                  require(`../../../src/assets/images/gallery/${project.src}`)
                "
                :alt="project.title"
                aspect-ratio="1"
                class="grey lighten-2"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
                <v-expand-transition>
                  <div
                    class="d-flex transition-fast-in-fast-out v-card--reveal white--text gallery_photos_card_hover_content"
                    style="height: 25%"
                    width="100%"
                    bottom
                    v-if="hover"
                  >
                    <h5>{{ project.title }}</h5>
                  </div>
                </v-expand-transition>
              </v-img>
            </v-hover>
          </v-card>
        </v-col>
        <v-dialog v-model="dialog" max-width="800" max-height="1600">
          <div>
            <v-carousel v-model="selectedModel" width="auto" height="auto">
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

<script src="./gallery">
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
.gallery_photos_card_hover_content {
  height: 25%;
  width: 100%;
  position: absolute;
  bottom: 0;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.gallery_photos_card_hover_content h5 {
  font-size: 1.25rem !important;
}
</style>