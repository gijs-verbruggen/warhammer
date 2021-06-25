import Vue from 'vue';
import Component from 'vue-class-component';
import Axios from "axios";
import BackToTop from "../../components/backtotop/BackToTop.vue";
import { Watch } from 'vue-property-decorator';

interface list {
    id: number;
    name: string;
    alliance: string;
    subfaction: string;
    points: number;
    pdf: string;
    image: string;
    version: number;
    handbook: number,
}
interface alliance {
    id: number;
    alliance: string;
    grandalliance: string;
}
interface handbook {
    id: number;
    name: string;
    handbook: number;
}

@Component({
    components:{
        BackToTop
    }
})
export default class AmrylistAOS extends Vue {
    public url: string = 'https://gijs-verbruggen.com/pdf/';
    public lists: list[] = [];
    public selectedAlliance = {id: 0, alliance: 'All', grandalliance: 'All'};
    public alliances: alliance[] = [{id : 0, alliance: 'All', grandalliance: 'All'}];
    public search: string = '';
    public isLoading:boolean = false;
    public radioGroupPoints: number = 0;
    public radioGroupVersion: number = 0;
    public selectHandbook: number = 0;
    public selectHandbookItems: handbook[] = [{id: 0, name: 'All', handbook: 0}, {id: 1, name: '2020', handbook: 2020}, {id: 2, name: '2021', handbook: 2021}];
    private _timerId = 0;


    public mounted() {
        Axios.get("https://gijs-verbruggen.com/php/gallery_alliance.php").then((response) => {
            this.alliances = [...this.alliances, ...response.data];
        })
        Axios.get("https://gijs-verbruggen.com/php/armylist_list.php").then((response) => {
            this.lists = response.data;
            for(var _i = 0; _i < this.lists.length; _i++) {
                if(this.lists[_i].image === ''){
                    this.lists[_i].image += 'armylist_placeholder.jpg'
                }
            }
        });

    }
    public get filteredLists() {
        return this.filterAlliance(this.filterPoints(this.filterVersion(this.filterHandbook(this.lists))));
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
    public filterVersion(lists: list[]) {
        if (this.radioGroupVersion != null && this.radioGroupVersion != 0) {
            return lists.filter(({ version }) => version == this.radioGroupVersion);
        } else {
            return lists;
        }
    }
    public filterHandbook(lists: list[]) {
        if (this.selectHandbook != null && this.selectHandbook != 0) {
            return lists.filter(({ handbook }) => handbook == this.selectHandbook);
        } else {
            return lists;
        }
    }
    public filterClear() {
        this.selectedAlliance = {id: 0, alliance: 'All', grandalliance: 'All'};
        this.radioGroupPoints = 0;
        this.radioGroupVersion = 0;
        this.selectHandbook = 0;
    }
}