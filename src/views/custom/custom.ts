import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Custom extends Vue {
    public url: string = 'https://gijs-verbruggen.com/pdf/';
    public panel: number = 0;
}