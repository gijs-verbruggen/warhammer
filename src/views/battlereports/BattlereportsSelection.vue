<template>
  <v-container>
    <!-- <v-row no-gutters>
      <v-col cols="12" sm="12" md="12" lg="12" xl="12">
        <v-carousel height="800">
          <v-carousel-item
            v-for="slide in filteredBatrep"
            :key="slide.id"
            :src="
              require(`../../../src/assets/images/battlereports/${slide.date}/${slide.src}`)
            "
          >
            <v-container fill-height fluid pa-0 ma-0>
              <v-layout fill-height align-end>
                <v-flex xs12>
                  <v-card style="" class="carouselSlider pa-2 pb-13">
                    <span class="headline white--text" v-text="slide.text">
                    </span>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row> -->
    <v-row v-for="slide in filteredBatrep" :key="slide.id">
      <v-col
        cols="12"
        sm="12"
        :md="colsLeft[slide.id].number"
        :lg="colsLeft[slide.id].number"
        :xl="colsLeft[slide.id].number"
        v-if="slide.id % 2 == 0"
      >
        <v-card>
          <v-img
            aspect-ratio="1"
            max-height="600"
            :src="
              require(`../../../src/assets/images/battlereports/${slide.date}/${slide.src}`)
            "
          >
          </v-img>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        :md="colsLeft[slide.id].number"
        :lg="colsLeft[slide.id].number"
        :xl="colsLeft[slide.id].number"
        v-else
      >
        <p class="body-1">{{ slide.text }}</p>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        :md="colsRight[slide.id].number"
        :lg="colsRight[slide.id].number"
        :xl="colsRight[slide.id].number"
        v-if="slide.id % 2 == 0"
      >
        <p class="body-1">{{ slide.text }}</p>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        :md="colsRight[slide.id].number"
        :lg="colsRight[slide.id].number"
        :xl="colsRight[slide.id].number"
        v-else
      >
        <v-card>
          <v-img
            aspect-ratio="1"
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

<script>
import Batrep from "../../data/battlereport/aos/data.js";

export default {
  name: "BattlereportsSelection",
  data() {
    return {
      batrep: Batrep,
      date: this.$route.params.id,
      newArray: null,
      colsLeft: [
        { number: "8" },
        { number: "4" },
        { number: "8" },
        { number: "4" },
        { number: "8" },
        { number: "4" },
        { number: "8" },
        { number: "4" },
        { number: "8" },
        { number: "4" },
        { number: "8" },
      ],
      colsRight: [
        { number: "4" },
        { number: "8" },
        { number: "4" },
        { number: "8" },
        { number: "4" },
        { number: "8" },
        { number: "4" },
        { number: "8" },
        { number: "4" },
        { number: "8" },
        { number: "4" },
      ],
    };
  },
  computed: {
    filteredBatrep() {
      let tempBatrep = this.batrep;

      tempBatrep = tempBatrep.filter((item) => {
        return item.date == this.date;
      });
      return tempBatrep;
    },
  },
};
</script>
<style scoped>
.carouselSlider {
  background-color: rgba(12, 12, 12, 0.2);
}
</style>
