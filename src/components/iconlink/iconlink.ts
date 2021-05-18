import Vue from 'vue';
import Component from 'vue-class-component';

const Items = Vue.extend({
    props: {
        item: Object,
    }
})

@Component
export default class IconLink extends Items {
    public itemLocal = { ...this.item };

      get imageSource() {
        return require("../../../src/assets/images/battlereports/" +
          this.itemLocal.src);
      }
      public goTo(key:string) {
        this.$router.push({
          path: "/battlereports/aos/" + key,
        });
      }
}