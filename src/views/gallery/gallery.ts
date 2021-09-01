import Vue from 'vue';
import Axios from "axios";
import Component from 'vue-class-component';
import BackToTop from "../../components/backtotop/BackToTop.vue";

interface category {
  id: number;
  alliance: string;
  grandalliance: string;
}
interface project {
  id: number;
  name: string;
  image: string;
  date: string;
  painter_name: string;
  alliance_name: string;
}
interface carousel {
  id: number;
  gallery_id: number;
  image: string;
}

@Component({
    components:{
        BackToTop
    }
})
export default class Gallery extends Vue {

  public projects: project[] = [];
  public carousels: carousel[] = [];
  public categories: category[] = [];
  public event:any = null;
  public clicked:boolean = false;
  public dialog:boolean = false;
  public selectedId:number|null = null;
  public selectedCarousel:string[] = [];
  public selectedModel:number = 0;
  public hover:boolean = false;

  created() {
    this.projects.sort(function (first, last) {
      let newest:number = new Date(first.date).valueOf();
      let oldest:number = new Date(last.date).valueOf();
      return newest - oldest;
    });
  }

  public mounted() {
    Axios.get("/php/gallery_alliance.php").then((response) => {
      this.categories = response.data;
    });
    Axios.get("/php/gallery.php").then((response) => {
      this.projects = response.data;
    });
    Axios.get("/php/galleryitem.php").then((response) => {
      this.carousels = response.data;
    });
  }

  public get filteredProjects() {
    if (this.event != null && this.event.target.innerText.toLowerCase() != "all") {
      return this.projects.filter(({ alliance_name }) => alliance_name.toLowerCase() == this.event.target.innerText.toLowerCase());
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
    for (i = 0; i < this.carousels.length; i++) {
      if (this.carousels[i].gallery_id === this.selectedId) {
        this.selectedCarousel.push(
          require("../../../src/assets/images/gallery/" + this.carousels[i].image)
        );
      }
    }
    this.dialog = true;
  }
}
