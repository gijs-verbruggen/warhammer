import Vue from 'vue';
import Component from 'vue-class-component';
import { Watch } from 'vue-property-decorator';

@Component
export default class App extends Vue {
    public drawer:boolean = false;
    public backgroundOption: string = '';
    public dialogBackgroundOption: boolean = false;
    public radioGroup: string= '';

    public pickBackground() {
        this.dialogBackgroundOption = true;
    }
    public cancelBackground() {
        this.dialogBackgroundOption = false;
    }
    public saveBackground(backgroundOptionpicked: string) {
        localStorage.setItem('backgroundImage', backgroundOptionpicked);
        localStorage.setItem('oldBackgroundImage', backgroundOptionpicked);
        this.backgroundOption = localStorage.getItem('backgroundImage') || 'chaos';
    }
    @Watch('backgroundOption') onPropertyChanged(value: string, oldValue: string) {
        let mainElement: HTMLElement|null = document.getElementById('app-v-main');
        if(mainElement) {
            mainElement.classList.remove('background_order', 'background_chaos', 'background_death', 'background_destruction');
            mainElement.classList.add('background_'+value);
        }
        this.dialogBackgroundOption = false;
    }
    public mounted() {
        if(localStorage.getItem('backgroundImage')) {
            document.getElementById('app-v-main')?.classList.remove('background_a');
            document.getElementById('app-v-main')?.classList.add('background_'+localStorage.getItem('backgroundImage'));
        } else {
            localStorage.setItem('backgroundImage', 'chaos');
            document.getElementById('app-v-main')?.classList.add('background_a');
        }
    }
}