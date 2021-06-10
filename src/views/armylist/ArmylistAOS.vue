<template>
  <div class="ArmyListAOS">
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="title_bar">
            <v-combobox
              v-model="selectedAlliance"
              :items="alliances"
              item-text="alliance"
              item-value="alliance"
              :search-input.sync="search"
              label="Select an alliance to show list"
              small-chips
              return-object
              @input="filterAlliance"
            >
            </v-combobox>
            <v-spacer></v-spacer>
            <v-radio-group
              row
              v-model="radioGroupPoints"
              @change="filterPoints"
            >
              Points:
              <v-radio label="All" value="0"></v-radio>
              <v-radio label="1000" value="1000"></v-radio>
              <v-radio label="2000" value="2000"></v-radio>
              <v-radio label="3000" value="3000"></v-radio>
            </v-radio-group>
            <v-spacer></v-spacer>
            <v-btn @click="filterClear">
              Clear
              <v-icon> mdi-eraser </v-icon>
            </v-btn>
          </div>
        </v-col>
        <v-col
          v-for="list in filteredLists"
          :key="list.id"
          cols="12"
          sm="12"
          md="6"
          lg="6"
          xl="4"
        >
          <v-card>
            <v-img
              class="white--text align-end"
              :src="require(`../../../src/assets/images/armies/${list.image}`)"
              aspect-ratio="1.7778"
            >
            </v-img>
            <v-card-title>
              {{ list.name }}
            </v-card-title>
            <v-card-subtitle>
              {{ list.alliance }}<br />{{ list.subfaction }}
            </v-card-subtitle>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn :href="url + list.pdf + '.pdf'" color="primary" download>
                download List
                <v-icon right dark> mdi-cloud-download </v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <BackToTop></BackToTop>
    </v-container>
  </div>
</template>

<script src="./armylistAOS">
</script>
<style>
.title_bar {
  background-color: white;
  border-radius: 5px;
  padding: 16px;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  display: flex;
  align-items: center;
}
@media screen and (max-width: 768px) {
  .title_bar {
    display: block;
  }
}
</style>
