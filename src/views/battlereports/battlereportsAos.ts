import Vue from 'vue';
import Component from 'vue-class-component';
import dataAos from "../../data/battlereport/aos/items";
import IconLink from "../../components/iconlink/IconLink.vue";

@Component({
    components:{
        IconLink
    }
})
export default class BattlereportsAos extends Vue {
    public items = dataAos;
    public sortedItems = null;

    created() {
        this.items.sort(function (first, last) {
            let newest:number = new Date(first.date).valueOf();
            let oldest:number = new Date(last.date).valueOf();
            return oldest - newest;
        });
    }
}