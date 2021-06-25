import Vue from 'vue';
import Component from 'vue-class-component';
import dataAos from "../../data/battlereport/aos/items";
interface battlereport {
    id: number,
    title: string,
    date: string,
    scenario: string,
    src: string,
    gameType: string,
    armies: string,
}

@Component
export default class Home extends Vue {
    public battlereports: battlereport[] = dataAos;
    public show: boolean = false;
    public newestBattlereport: battlereport = {id: 0, title: '', date: '', scenario: '', src: '', gameType: '', armies: '',};

    public mounted() {
        this.battlereports.sort(function (first, last) {
            let newest:number = new Date(first.date).valueOf();
            let oldest:number = new Date(last.date).valueOf();
            return newest - oldest;
        });
        this.newestBattlereport = this.getSingleBattlereport(this.battlereports);
    }

    public get reportImageSrc():string {
        if(this.newestBattlereport != null && this.newestBattlereport.src != '') {
            let images = require('../../../src/assets/images/battlereports/'+this.newestBattlereport.src);
            return images;
        } else {
            return '';
        }
    }

    public getSingleBattlereport(data:battlereport[]) {
        return data.slice(-1)[0];
    }
}