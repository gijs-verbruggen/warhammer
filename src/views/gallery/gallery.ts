import Vue from 'vue';
import Axios from "axios";
import Component from 'vue-class-component';
import dataGallery from "../../data/gallery/data";
import carouselGallery from "../../data/gallery/carousel";
import BackToTop from "../../components/backtotop/BackToTop.vue";

interface category {
  id: number;
  alliance: string;
  grandalliance: string;
}

@Component({
    components:{
        BackToTop
    }
})
export default class Gallery extends Vue {

  public projects = dataGallery;
  public carousel = carouselGallery;
  public categories: category[] = [];
  public event:any = null;
  public clicked = false;
  public dialog = false;
  public selectedId = null;
  public selectedCarousel:string[] = [];
  public selectedModel = 0;
  public hover = false;

  created() {
    this.projects.sort(function (first, last) {
      let newest:number = new Date(first.date).valueOf();
      let oldest:number = new Date(last.date).valueOf();
      return newest - oldest;
    });
  }

  public mounted() {
    Axios.get("https://gijs-verbruggen.com/php/gallery_alliance.php").then((response) => {
      this.categories = response.data;
    });
  }

  public get filteredProjects() {
    if (this.event != null && this.event.target.innerText.toLowerCase() != "all") {
      return this.projects.filter(({ category }) => category.toLowerCase() == this.event.target.innerText.toLowerCase());
    } else {
      return this.projects;
    }
  }
  public filter(event: any)
  {
    this.event = event;
  }
  public zoomOpen(project: any) {
    this.selectedCarousel = [];
    this.selectedId = project.id;
    this.selectedModel = 0;
    var i;
    this.$gtag.event("gallery-model", {
      value: this.selectedId,
    });
    for (i = 0; i < this.carousel.length; i++) {
      if (this.carousel[i].linkId === this.selectedId) {
        this.selectedCarousel.push(
          require("../../../src/assets/images/gallery/" + this.carousel[i].src)
        );
      }
    }
    this.dialog = true;
  }
}
