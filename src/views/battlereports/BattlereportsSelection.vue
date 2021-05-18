<template>
  <v-container>
    <v-row v-for="slide in filteredBatrep" :key="slide.id">
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
</template>

<script src="./battlereportsSelection">
</script>
<style scoped>
.carouselSlider {
  background-color: rgba(12, 12, 12, 0.2);
}

.text_box {
  background-color: white;
  border-radius: 5px;
}
</style>
