<template>
  <div class="Leaderboards">
    <v-container>
      <v-row>
        <!-- <v-col cols="12" sm="12" md="12" lg="6" xl="6">
          <v-card>
            <v-card-title>
              Players
              <v-spacer></v-spacer>
              <v-text-field
                v-model="searchPlayers"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="primary" dark v-bind="attrs" v-on="on">
                    New Player
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">New player</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12">
                          <v-text-field
                            v-model="editedItem.player"
                            label="Player name"
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="close">
                      Cancel
                    </v-btn>
                    <v-btn color="blue darken-1" text @click="save">
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-card-title>
            <v-data-table
              :headers="headersPlayer"
              :items="calculatedResults(players)"
              :items-per-page="5"
              :search="searchPlayers"
              :sort-desc="[false, true]"
              :footer-props="{
                showFirstLastPage: true,
                firstIcon: 'mdi-arrow-collapse-left',
                lastIcon: 'mdi-arrow-collapse-right',
                prevIcon: 'mdi-minus',
                nextIcon: 'mdi-plus',
              }"
            >
              <template slot="items">
                <tr>
                  <td>{{ calculatedResults.player }}</td>
                  <td>{{ calculatedResults.games }}</td>
                  <td>{{ calculatedResults.wins }}</td>
                  <td>{{ calculatedResults.loses }}</td>
                  <td>{{ calculatedResults.winrate }}</td>
                </tr>
              </template>
            </v-data-table>
          </v-card>
        </v-col> -->
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
</style>