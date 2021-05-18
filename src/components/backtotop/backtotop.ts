import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class BackToTop extends Vue {
    public fab:boolean = false;

    public onScroll(e:any) {
        if (typeof window === "undefined") return;
        const top = window.pageYOffset || e.target.scrollTop || 0;
        this.fab = top > 20;
    }
    public toTop() {
        this.$vuetify.goTo(0);
    }
}