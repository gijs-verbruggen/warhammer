import Vue from 'vue';
import Component from 'vue-class-component';
import dataAos from "../../data/battlereport/aos/items";
import IconLink from "../../components/iconlink/IconLink.vue";

interface item {
    id: number,
    title: string,
    date: string,
    scenario: string,
    src: string,
    gameType: string,
    armies: string,
}

@Component({
    components:{
        IconLink
    }
})
export default class BattlereportsAos extends Vue {
    public items:item[] = dataAos;
    public sortedItems = null;

    created() {
        this.items.sort(function (first, last) {
            let newest:number = new Date(first.date).valueOf();
            let oldest:number = new Date(last.date).valueOf();
            return oldest - newest;
        });
    }
}