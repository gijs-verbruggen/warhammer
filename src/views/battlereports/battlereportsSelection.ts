import Vue from 'vue';
import Component from 'vue-class-component';
import Batrep from "../../data/battlereport/aos/data";


@Component
export default class battlereportsSelection extends Vue {
    public batrep = Batrep;
    public date = new Date(this.$route.params.id).toLocaleDateString("en-CA");
    public newArray = null;

    get filteredBatrep() {
        let tempBatrep = this.batrep;

        tempBatrep = tempBatrep.filter((item) => {
            return item.date == this.date;
        });
        return tempBatrep;
    }
}
