<template>
  <div class="Leaderboards">
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="12" lg="6" xl="6">
          <v-card>
            <v-card-title>
              Player
              <v-spacer></v-spacer>
              <v-text-field
                v-model="searchPlayer"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="headersPlayer"
              :single-select="true"
              show-select
              :items="lbp"
              :item-key="lbp.id"
              :items-per-page="5"
              :search="searchPlayer"
              :sort-desc="[false, true]"
              :footer-props="{
                showFirstLastPage: true,
                firstIcon: 'mdi-arrow-collapse-left',
                lastIcon: 'mdi-arrow-collapse-right',
                prevIcon: 'mdi-minus',
                nextIcon: 'mdi-plus',
              }"
            >
              <template v-slot:[`item.data-table-select`]="{ item }">
                <v-checkbox
                  :multiple="false"
                  v-model="selected"
                  :value="item"
                  @change="SelectedPlayerData()"
                ></v-checkbox>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12" md="12" lg="6" xl="6">
          <v-card>
            <v-card-title>
              Alliance
              <v-spacer></v-spacer>
              <v-text-field
                v-model="searchAlliance"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="headersAlliance"
              :items="lba"
              :items-per-page="5"
              :search="searchAlliance"
              :sort-desc="[false, true]"
              :footer-props="{
                showFirstLastPage: true,
                firstIcon: 'mdi-arrow-collapse-left',
                lastIcon: 'mdi-arrow-collapse-right',
                prevIcon: 'mdi-minus',
                nextIcon: 'mdi-plus',
              }"
            >
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" md="12" lg="12" xl="12">
          <h3 class="data_crud">Player: {{ selected.name }}</h3>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="6"
          lg="6"
          xl="4"
          v-for="(item, index) in lbpl"
          :key="index"
        >
          <v-card class="mx-auto box_shadow_backgroud" outlined>
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">
                  Winrate: {{ item.wins }} / {{ item.losses }}
                </div>
                <v-list-item-title class="headline mb-1">
                  {{ item.name }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  Subfaction: {{ item.subfaction }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-avatar size="80">
                <v-img
                  :src="
                    require('../../../src/assets/images/custom/' + item.img)
                  "
                  alt="test"
                ></v-img>
              </v-list-item-avatar>
            </v-list-item>
            <v-card-actions>
              <v-btn
                :href="'https://gijs-verbruggen.com/' + item.pdf + '.pdf'"
                color="primary"
                rounded
                download
              >
                Download
                <v-icon right dark> mdi-cloud-download </v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script src="./leaderboards.ts"></script>
<style>
.header_text {
  font-size: 1rem !important;
}

.data_crud {
  background-color: white;
  border-radius: 5px;
  padding: 16px;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
}

.box_shadow_backgroud {
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
}
</style>