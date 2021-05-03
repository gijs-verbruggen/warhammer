<template>
  <div class="Leaderboards">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-alert v-model="error" dismissible type="error">
            You can't pick the same person in both the Winner and Loser
            category.
          </v-alert>
          <div class="data_crud">
            Winner:
            <v-select
              v-model="playerW"
              class="d-inline-block mr-2"
              :hint="`${selectPlayer.player}`"
              :items="players"
              label="Select a the player who Won"
              item-text="player"
              item-value="id"
              dense
              required
            ></v-select>
            <v-select
              v-model="armyW"
              class="d-inline-block mr-2"
              :hint="`${selectArmy.army}`"
              :items="armies"
              label="Select a the army who Won"
              item-text="army"
              item-value="id"
              dense
              required
            ></v-select>
            Loser:
            <v-select
              v-model="playerL"
              class="d-inline-block ml-2 mr-2"
              :hint="`${selectPlayer.player}`"
              :items="players"
              label="Select a the player who Lost"
              item-text="player"
              item-value="id"
              dense
              required
            ></v-select>
            <v-select
              v-model="armyL"
              class="d-inline-block mr-2"
              :hint="`${selectArmy.army}`"
              :items="armies"
              label="Select a the army who Lost"
              item-text="army"
              item-value="id"
              dense
              required
            ></v-select>
            <v-btn
              class="mr-4"
              type="submit"
              @click="submit(playerW, playerL, armyW, armyL)"
            >
              submit
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="12" lg="6" xl="6">
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
        </v-col>
        <v-col cols="12" sm="12" md="12" lg="6" xl="6">
          <v-card>
            <v-card-title>
              Armies
              <v-spacer></v-spacer>
              <v-text-field
                v-model="searchArmies"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="headersArmy"
              :items="calculatedResults(armies)"
              :items-per-page="5"
              :search="searchArmies"
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
                  <td>{{ calculatedResults.army }}</td>
                  <td>{{ calculatedResults.games }}</td>
                  <td>{{ calculatedResults.wins }}</td>
                  <td>{{ calculatedResults.loses }}</td>
                  <td>{{ calculatedResults.winrate }}</td>
                </tr>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import dataPlayers from "../data/leaderboard/players.js";
import dataArmies from "../data/leaderboard/armies.js";

export default {
  name: "Leaderboards",
  components: {},
  data: () => ({
    headersPlayer: [
      {
        text: "Player",
        align: "start",
        value: "player",
        class: "header_text",
      },
      { text: "Games", align: "end", value: "games", class: "header_text" },
      { text: "Wins", align: "end", value: "wins", class: "header_text" },
      { text: "Loses", align: "end", value: "loses", class: "header_text" },
      {
        text: "Winrate (%)",
        align: "end",
        value: "winrate",
        class: "header_text",
      },
    ],
    headersArmy: [
      { text: "Army", align: "start", value: "army", class: "header_text" },
      { text: "Games", align: "end", value: "games", class: "header_text" },
      { text: "Wins", align: "end", value: "wins", class: "header_text" },
      { text: "Loses", align: "end", value: "loses", class: "header_text" },
      {
        text: "Winrate (%)",
        align: "end",
        value: "winrate",
        class: "header_text",
      },
    ],
    players: dataPlayers,
    armies: dataArmies,
    selectPlayer: { player: "Gijs" },
    selectArmy: { army: "Slaves to Darkness" },
    playerW: "",
    playerL: "",
    armyW: "",
    armyL: "",
    searchPlayers: "",
    searchArmies: "",
    error: false,
    dialog: false,
    editedIndex: -1,
    editedItem: {
      id: 0,
      player: "",
      games: 0,
      wins: 0,
      loses: 0,
    },
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
  }),
  methods: {
    calculatedResults(items) {
      return items.map((item) =>
        Object.assign(
          {
            winrate: (item.wins * 100) / item.games || 0,
          },
          item
        )
      );
    },
    submit(playerW, playerL, armyW, armyL) {
      var i = 0;
      if (playerW === playerL) {
        this.error = true;
      } else {
        for (i = 0; i < this.players.length; i++) {
          if (this.players[i].id === playerW) {
            this.players[i].games++;
            this.players[i].wins++;
          }
          if (this.armies[i].id === armyW) {
            this.armies[i].games++;
            this.armies[i].wins++;
          }
          if (this.players[i].id === playerL) {
            this.players[i].games++;
            this.players[i].loses++;
          }
          if (this.armies[i].id === armyL) {
            this.armies[i].games++;
            this.armies[i].loses++;
          }
        }
      }
      this.playerW = "";
      this.playerL = "";
      this.armyW = "";
      this.armyL = "";
      this.calculatedResults();
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.players[this.editedIndex], this.editedItem);
      } else {
        this.players.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
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