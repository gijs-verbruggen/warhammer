<template>
  <div class="battlereportsSelection">
    <v-container>
      <v-row v-for="slide in filteredBatrep" :key="slide.id" :class="[]">
        <v-col cols="12" sm="12" md="8" lg="8" xl="8" v-if="slide.id % 2 == 0">
          <v-card>
            <v-img
              aspect-ratio="1.7777778"
              max-height="600"
              :src="
                require(`../../../src/assets/images/battlereports/${slide.date}/${slide.src}`)
              "
            >
            </v-img>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="4" lg="4" xl="4" v-else>
          <div class="text_box pa-2">
            <h3>{{ slide.turn }}</h3>
            <p class="body-1">{{ slide.text }}</p>
          </div>
        </v-col>
        <!-- other layout -->
        <v-col cols="12" sm="12" md="4" lg="4" xl="4" v-if="slide.id % 2 == 0">
          <div class="text_box pa-2">
            <h3>{{ slide.turn }}</h3>
            <p class="body-1">{{ slide.text }}</p>
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="8" lg="8" xl="8" v-else>
          <v-card>
            <v-img
              aspect-ratio="1.7777778"
              max-height="600"
              :src="
                require(`../../../src/assets/images/battlereports/${slide.date}/${slide.src}`)
              "
            >
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script src="./battlereportsSelection">
</script>
<style scoped>
.carouselSlider {
  background-color: rgba(12, 12, 12, 0.2);
}

.text_box {
  background-color: white;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  border-radius: 5px;
  max-height: 600px;
}
@media screen and (min-width: 1264px) and (max-width: 1904px) {
  .text_box {
    overflow-y: scroll;
    max-height: 431px;
  }
}
@media screen and (min-width: 960px) and (max-width: 1264px) {
  .text_box {
    overflow-y: scroll;
    max-height: 324px;
  }
}
@media screen and (min-width: 600px) and (max-width: 960px) {
  .text_box {
    overflow-y: scroll;
    max-height: 300px;
  }
}
</style>
