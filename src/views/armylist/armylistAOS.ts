import Vue from 'vue';
import Component from 'vue-class-component';
import Axios from "axios";
interface list {
    id: number;
    name: string;
    alliance: number;
    subfaction: string;
    points: number;
    pdf: string;
    image: string;
}

@Component
export default class AmrylistAOS extends Vue {
    public url = 'https://gijs-verbruggen.com/';
    public lists: list[] = [];

    public mounted() {
        Axios.get("https://gijs-verbruggen.com/php/armylist_list.php").then((response) => {
            this.lists = response.data;
        });
    }
}