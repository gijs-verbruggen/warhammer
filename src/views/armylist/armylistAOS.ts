import Vue from 'vue';
import Component from 'vue-class-component';
import Axios from "axios";
import BackToTop from "../../components/backtotop/BackToTop.vue";

interface list {
    id: number;
    name: string;
    alliance: string;
    subfaction: string;
    points: number;
    pdf: string;
    image: string;
}
interface alliance {
    id: number;
    alliance: string;
    grandalliance: string;
}

@Component({
    components:{
        BackToTop
    }
})
export default class AmrylistAOS extends Vue {
    public url: string = 'https://gijs-verbruggen.com/';
    public lists: list[] = [];
    public selectedAlliance = {id: 0, alliance: 'All', grandalliance: 'All'};
    public alliances: alliance[] = [{id : 0, alliance: 'All', grandalliance: 'All'}];
    public event:any = null;
    public search: string = '';
    public radioGroupPoints: number = 0;

    public mounted() {
        Axios.get("https://gijs-verbruggen.com/php/gallery_alliance.php").then((response) => {
            this.alliances = [...this.alliances, ...response.data];
        });
        Axios.get("https://gijs-verbruggen.com/php/armylist_list.php").then((response) => {
            this.lists = response.data;
        });
    }
    public get filteredLists() {
        return this.filterAlliance(this.filterPoints(this.lists))
    }
    public filterAlliance(lists: list[]) {
        if (this.selectedAlliance != null && this.selectedAlliance.alliance != "All") {
            return lists.filter(({ alliance }) => alliance == this.selectedAlliance.alliance);
        } else {
            return lists;
        }
    }
    public filterPoints(lists: list[]) {
        if (this.radioGroupPoints != null && this.radioGroupPoints != 0) {
            return lists.filter(({ points }) => points == this.radioGroupPoints);
        } else {
            return lists;
        }
    }
    public filterClear() {
        this.selectedAlliance = {id: 0, alliance: 'All', grandalliance: 'All'};
        this.radioGroupPoints = 0;
    }
}