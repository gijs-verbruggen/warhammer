<template>
  <div>
    <v-row justify="space-around">
      <v-icon @click="model--"> mdi-minus </v-icon>
      {{ model }}
      <v-icon @click="model++"> mdi-plus </v-icon>
    </v-row>
    <v-carousel v-model="model">
      <v-carousel-item v-for="slide in batrep" :key="slide.id">
        <v-sheet height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">
              <v-img :src="slide.image" :alt="slide.turn" />
              <p>{slide.text}</p>
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import Batrep from "../../data/battlereport/aos/09-10-2020/data.js";

export default {
  name: "BattlereportsAos",
  data() {
    return {
      batrep: Batrep,
      model: 0,
    };
  },
  props: ["1"],
};
</script>
