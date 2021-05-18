import Vue from 'vue';
import Component from 'vue-class-component';
import Batrep from "../../data/battlereport/aos/data";


@Component
export default class battlereportsSelection extends Vue {
    public batrep = Batrep;
    public date = new Date(this.$route.params.id).toLocaleDateString("en-CA");
    public newArray = null;

    // created() {
    //     var i = 0;
    //     for (i = 0; i < this.batrep.length; i++) {
    //         this.batrep[i].date =
    //         this.batrep[i].date.toLocaleDateString("nl-NL", { year: "numeric" }) +
    //         "-" +
    //         this.batrep[i].date.toLocaleDateString("nl-NL", { month: "numeric" }) +
    //         "-" +
    //         this.batrep[i].date.toLocaleDateString("nl-NL", { day: "numeric" });
    //     }
    // }

    get filteredBatrep() {
        let tempBatrep = this.batrep;

        tempBatrep = tempBatrep.filter((item) => {
            return item.date == this.date;
        });
        return tempBatrep;
    }
}
