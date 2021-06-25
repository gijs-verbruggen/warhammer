import Vue from 'vue';
import Component from 'vue-class-component';
import Batrep from "../../data/battlereport/aos/data";
interface batrep {
    id: number,
    linkId:number,
    date: string,
    turn: string,
    text: string,
    src: string,
}

@Component
export default class battlereportsSelection extends Vue {
    public batreps: batrep[] = Batrep;
    public date = new Date(this.$route.params.id).toLocaleDateString("en-CA");
    public newArray = null;

    get filteredBatrep() {
        let tempBatrep = this.batreps;

        tempBatrep = tempBatrep.filter((item) => {
            return item.date == this.date;
        });
        return tempBatrep;
    }
}
