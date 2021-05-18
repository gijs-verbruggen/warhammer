import Vue from 'vue';
import Component from 'vue-class-component';
import dataArmyList from "../../data/armylist/aos/data";

@Component
export default class AmrylistAOS extends Vue {
    public lists = dataArmyList;
    public url = 'https://gijs-verbruggen.com/';
}