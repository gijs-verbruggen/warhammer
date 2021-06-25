<template>
  <div class="ArmyListAOS">
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="title_bar">
            <v-row no-gutters>
              <v-col cols="12" sm="5" md="6" lg="6" xl="2">
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
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="6" sm="7" md="6" lg="6" xl="3">
                <v-radio-group
                  :row="$vuetify.breakpoint.smAndUp"
                  v-model="radioGroupPoints"
                  @change="filterPoints"
                >
                  Points:
                  <v-radio label="All" value="0"></v-radio>
                  <v-radio label="1000" value="1000"></v-radio>
                  <v-radio label="2000" value="2000"></v-radio>
                  <v-radio label="3000" value="3000"></v-radio>
                </v-radio-group>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="6" sm="5" md="6" lg="6" xl="3">
                <v-radio-group
                  :row="$vuetify.breakpoint.smAndUp"
                  v-model="radioGroupVersion"
                  @change="filterPoints"
                >
                  AOS Edition:
                  <v-radio label="All" value="0"></v-radio>
                  <v-radio label="2" value="2"></v-radio>
                  <v-radio label="3" value="3"></v-radio>
                </v-radio-group>
              </v-col>
              <v-spacer></v-spacer>
              <v-col cols="12" sm="7" md="6" lg="6" xl="2">
                <v-select
                  v-model="selectHandbook"
                  :items="selectHandbookItems"
                  item-text="name"
                  item-value="handbook"
                  label="General's Handbook"
                >
                </v-select>
              </v-col>
              <v-spacer></v-spacer>
              <v-col
                class="d-flex align-center"
                cols="12"
                sm="2"
                md="2"
                lg="1"
                xl="1"
              >
                <v-btn @click="filterClear">
                  Clear
                  <v-icon> mdi-eraser </v-icon>
                </v-btn>
              </v-col>
            </v-row>
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
            <v-card-text>
              <p class="mb-0">
                {{ list.alliance }}
                <span class="float-right">AOS Edition: {{ list.version }}</span>
              </p>
              <p class="mb-0">
                {{ list.subfaction }}
                <span class="float-right"
                  >General's handbook: {{ list.handbook }}</span
                >
              </p>
            </v-card-text>
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
