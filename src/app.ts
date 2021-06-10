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
        if( document.getElementById('app-v-main')?.classList.contains('background_order') ||
            document.getElementById('app-v-main')?.classList.contains('background_chaos') ||
            document.getElementById('app-v-main')?.classList.contains('background_death') ||
            document.getElementById('app-v-main')?.classList.contains('background_destruction')
            ){
            document.getElementById('app-v-main')?.classList.remove('background_order')
            document.getElementById('app-v-main')?.classList.remove('background_chaos')
            document.getElementById('app-v-main')?.classList.remove('background_death')
            document.getElementById('app-v-main')?.classList.remove('background_destruction')
        }
        document.getElementById('app-v-main')?.classList.add('background_'+value);
        document.getElementById('app-v-main')?.classList.remove('background_'+oldValue);
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