import dataPlayers from "../../data/leaderboard/players";
import Axios from "axios";
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Leaderboards extends Vue {
    /** dit zijn de kopjes voor de speler tabel */
    public headersPlayer = [
      {
        text: "Player",
        align: "start",
        value: "player",
        class: "header_text",
      },
      { text: "Games", align: "end", value: "games", class: "header_text" },
      { text: "Wins", align: "end", value: "wins", class: "header_text" },
      { text: "Loses", align: "end", value: "losses", class: "header_text" },
      {
        text: "Winrate (%)",
        align: "end",
        value: "winrate",
        class: "header_text",
      },
    ];

    /** dit zijn de kopjes voor de alliance tabel */
    public headersAlliance = [
      { text: "Alliance", align: "start", value: "name", class: "header_text" },
      { text: "Games", align: "end", value: "games", class: "header_text" },
      { text: "Wins", align: "end", value: "wins", class: "header_text" },
      { text: "Losses", align: "end", value: "losses", class: "header_text" },
      {
        text: "Winrate (%)",
        align: "end",
        value: "winrate",
        class: "header_text",
      },
    ];

    public players = dataPlayers;
    public searchPlayers: string = '';
    public searchAlliance: string = "";
    public editedIndex: number = -1;
    public editedItem = {
      id: 0,
      player: "",
      games: 0,
      wins: 0,
      loses: 0,
    };

    public leaderboardAlliance: {name: string, wins: number, losses: number, games: number}[]=[];

    mounted() {
        Axios.get("php/leaderboard_alliance.php").then((response) => {
        for (var i = 0; i < response.data.length; i++) {
            response.data[i].winrate =
            (response.data[i].wins / response.data[i].games || 0) * 100 + "%";
            this.leaderboardAlliance.push(response.data[i]);
        }
        });
    }

    public get lba() {
      return this.leaderboardAlliance;
    }
}