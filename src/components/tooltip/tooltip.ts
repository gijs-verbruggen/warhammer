import Vue from 'vue';
import Component from 'vue-class-component';

const Items = Vue.extend({
    props: {
        text: String,
    }
})

@Component
export default class Tooltip extends Items {
    public localText = this.text
    public show:boolean = false;

    public get updateLocalText() {
        return this.localText = this.text;
    }
}