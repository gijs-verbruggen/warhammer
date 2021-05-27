import Axios from "axios";
import Vue from 'vue';
import Component from 'vue-class-component';
@Component
export default class Leaderboards extends Vue {
  public headersPlayer = [
    {
      text: "Player",
      align: "start",
      value: "name",
      class: "header_text",
    },
    { text: "Wins", align: "end", value: "wins", class: "header_text" },
    { text: "Loses", align: "end", value: "losses", class: "header_text" },
    { text: "Games", align: "end", value: "games", class: "header_text" },
    {
      text: "Winrate (%)",
      align: "end",
      value: "winrate",
      class: "header_text",
    },
  ];
  public headersAlliance = [
    { text: "Alliance", align: "start", value: "name", class: "header_text" },
    { text: "Wins", align: "end", value: "wins", class: "header_text" },
    { text: "Losses", align: "end", value: "losses", class: "header_text" },
    { text: "Games", align: "end", value: "games", class: "header_text" },
    {
      text: "Winrate (%)",
      align: "end",
      value: "winrate",
      class: "header_text",
    },
  ];

  public searchPlayer: string = '';
  public searchAlliance: string = "";
  public editedIndex: number = -1;
  public editedItem = {
    id: 0,
    player: "",
    games: 0,
    wins: 0,
    loses: 0,
  };
  public selected: any = [];

  public leaderboardAlliance: {name: string, wins: number, losses: number, games: number}[]=[];
  public leaderboardPlayer: {name: string, wins: number, losses: number, games: number}[]=[];
  public leaderboardPlayerList: {name:string, subfaction: string, pdf:string, wins: number, losses: number, img: string}[]=[];

  public mounted() {
    Axios.get("https://gijs-verbruggen.com/php/leaderboard_alliance.php").then((response) => {
      for (var i = 0; i < response.data.length; i++) {
        response.data[i].winrate =
        (response.data[i].wins / response.data[i].games || 0) * 100 + "%";
        this.leaderboardAlliance.push(response.data[i]);
      }
    });
    Axios.get("https://gijs-verbruggen.com/php/leaderboard_player.php").then((response) => {
      for (var i = 0; i < response.data.length; i++) {
        response.data[i].winrate =
        (response.data[i].wins / response.data[i].games || 0) * 100 + "%";
        this.leaderboardPlayer.push(response.data[i]);
      }
    });
  }

  public SelectedPlayerData() {
    let currentId = this.selected.id
    Axios.get("https://gijs-verbruggen.com/php/leaderboard_player_lists.php", {
      params: {
        selectedId: currentId
      }
    }).then((response) => {
      return this.leaderboardPlayerList = response.data;
    })
  }

  public get lba() {
    return this.leaderboardAlliance;
  }
  public get lbp() {
    return this.leaderboardPlayer;
  }
  public get lbpl() {
    return this.leaderboardPlayerList;
  }
}
