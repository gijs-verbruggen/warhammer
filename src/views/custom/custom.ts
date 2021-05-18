import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Custom extends Vue {
    public url = process.env.BASE_URL;
}