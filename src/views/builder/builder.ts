import Vue from 'vue';
import Axios from "axios";
import Component from 'vue-class-component';
import ToolTip from "../../components/tooltip/Tooltip.vue";

interface builderRequirements {
    leaders: number;
    battlelines: number;
    behemoths: number;
    artillery: number;
    artefacts: number;
    triumphs: number;
    alliedUnits: number;
    alliedPoints: number;
    spells: number;
    reinforcedUnits: number;
    additionelEnhancements: number;
    grandStrategy: any[];
}
interface userPicks {
    leaders: number;
    battlelines: number;
    behemoths: number;
    artillery: number;
    artefacts: number;
    triumphs: number;
    alliedUnits: number;
    alliedPoints: number;
    spells: number;
    reinforcedUnits: number;
    additionelEnhancements: number;
}
interface grandAlliance {
    id: number;
    name: string;
    disabled: string;
}
interface alliance {
    id: number;
    name: string;
    grandalliance: number;
}
interface faction {
    id: number;
    name: string;
    alliance: number;
}
interface realm {
    id: number;
    name: string;
}
interface model {
    id: number;
    name: string;
    leader: string;
    uniques:string;
    behemoth:string;
    battleline:string;
    artillery:string;
    wizard: string;
    keywords:string;
    alliance_id:number;
    points:string;
}
interface coreBattalion {
    id:number;
    name: string;
    mandatoryCommander:string;
    mandatorySubCommander:string;
    mandatoryTroops:string;
    mandatoryMonster:string;
    mandatoryArtillery:string;
    optionalCommander:string;
    optionalSubCommander:string;
    optionalTroops:string;
    optionalMonster:string;
    optionalArtillery:string;
}
interface artefact {
    id:number;
    name:string;
    wizard: string;
    alliance_id: number;
    faction_id: number;
}
interface spell {
    id:number;
    name:string;
    alliance_id: number;
}
@Component({
    components:{
        ToolTip
    }
})
export default class Builder extends Vue {
    public show:boolean = false;
    public absolute:boolean = true;
    public overlay:boolean = false;
    public pointsValue:number = 2000;
    public pointsValueEdit:number = 2000;
    public builder: builderRequirements = {
        leaders: 6,// bij 1000 = 3, bij 2000 = 6, daarna elke 500 punten +1
        battlelines: 3,// elke 1000 punten +1
        behemoths: 4,// elke 500 punten +1
        artillery: 4,// elke 500 punten +1
        artefacts: 1,// elke enhancement die = artefact +1
        triumphs: 1,// elke enhancement die = triumph +1
        alliedUnits: 0,// totalUnits
        alliedPoints: 400,// points / 5 = alliedPoints
        spells: 3,// elke 1000 punten +1
        reinforcedUnits: 4,// elke 500 punten +1
        additionelEnhancements: 0,// elke warlord of Command Entourage - Magnificent battalion
        grandStrategy: ['Sever the Head','Hold the Line', 'Vendetta', 'Dominating Presence', 'Beast Master', 'Prized Sorcery', 'Pillars of Belief', `Predator's Domain`],
    };
    public userPicks: userPicks = {
        leaders: 0,
        battlelines: 0,
        behemoths: 0,
        artillery: 0,
        artefacts: 0,
        triumphs: 0,
        alliedUnits: 0,
        alliedPoints: 0,
        spells: 0,
        reinforcedUnits: 0,
        additionelEnhancements: 0,
    }
    public grandStrategySelected: string = '';
    public totalUnits:number = 0;
    public grandAlliance: grandAlliance[] = [];
    public grandAllianceSelected: number = 0;
    public alliance: alliance[] = [];
    public allianceSelected: number = 0;
    public allianceUnitsSelected: number= 0;
    public faction: faction[] = [];
    public factionSelected: number = 0;
    public realm: realm[] = [];
    public realmSelected: number = 0;
    //leader builder
    public listLeader: model[] = [];
    public model: model[] = [];
    public modelSelected: number = 0;
    public generalSwitch: boolean = false;
    public alliesSwitch: boolean = false;
    public spell: spell[] = [];
    public spellSelected: number = 0;
    public artefact: artefact[]= [];
    public artefactSelected: number = 0;
    public coreBattalionModel: coreBattalion[] = [];
    //core battalion builder
    public listCoreBattalion: coreBattalion[] =[];
    public coreBattalion: coreBattalion[] = [];
    public coreBattalionSelected: number = 0;



    public mounted() {
        Axios.get("https://gijs-verbruggen.com/php/builder_grandalliance.php").then((response) => {
          this.grandAlliance = response.data;
        });
        Axios.get("https://gijs-verbruggen.com/php/builder_alliance.php").then((response) => {
          this.alliance = response.data;
        });
        Axios.get("https://gijs-verbruggen.com/php/builder_faction.php").then((response) => {
          this.faction = response.data;
        });
        Axios.get("https://gijs-verbruggen.com/php/builder_realm.php").then((response) => {
          this.realm = response.data;
        });
        Axios.get("https://gijs-verbruggen.com/php/builder_model.php").then((response) => {
          this.model = response.data;
        });
        Axios.get("https://gijs-verbruggen.com/php/builder_corebattalions.php").then((response) => {
          this.coreBattalion = response.data;
        });
        Axios.get("https://gijs-verbruggen.com/php/builder_artefacts.php").then((response) => {
          this.artefact = response.data;
        });
        Axios.get("https://gijs-verbruggen.com/php/builder_spells.php").then((response) => {
          this.spell = response.data;
        });
    }

    public get filteredAlliance() {
        return this.filterAlliance(this.alliance);
    }
    public filterAlliance(alliance: alliance[]) {
        return alliance.filter(({ grandalliance }) => grandalliance == this.grandAllianceSelected);
    }

    public get filteredFaction() {
        return this.filterFaction(this.faction);
    }
    public filterFaction(faction: faction[]) {
        return faction.filter(({ alliance }) => alliance == this.allianceSelected);
    }

    public get filteredModel() {
        return this.filterModel(this.model);
    }
    public filterModel(model: model[]) {
        return model.filter(({ alliance_id }) => alliance_id == this.allianceUnitsSelected);
    }

    public get filteredSpells() {
        return this.filterSpells(this.spell)}
    public filterSpells(spell: spell[]) {
        return spell.filter(({ alliance_id }) => alliance_id == this.allianceSelected);
    }

    public get filteredArtefacts() {
        return this.filterArtefactsFaction(this.filterArtefactsWizard(this.artefact, this.model))}
    public filterArtefactsWizard(artefact: artefact[], model: model[]) {
        return artefact.filter(({ wizard }) => wizard == wizard);
    }
    public filterArtefactsFaction(artefact: artefact[]) {
        return artefact.filter(({ faction_id }) => faction_id == this.factionSelected);
    }

    public get filteredCoreBattalionModel() {
        return this.filterCoreBattalionModel(this.listCoreBattalion)
    }
    public filterCoreBattalionModel(coreBattalionModel: coreBattalion[]) {
        if(this.coreBattalionSelected !== 0) {
            let selectedData:coreBattalion[] = this.coreBattalion;
            selectedData.filter(({id})=>id === this.coreBattalionSelected);
            return coreBattalionModel
        }
    }

    public get filteredCorebattalion() {
        return this.filterCoreBattalion(this.listCoreBattalion)
    }
    public filterCoreBattalion(coreBattalionModel: coreBattalion[]) {
        if(this.coreBattalionSelected !== 0) {
            let selectedData:coreBattalion[] = this.coreBattalion;
            selectedData.filter(({id})=>id === this.coreBattalionSelected);
            coreBattalionModel.push(selectedData[0])
            this.coreBattalionSelected = 0;
            return coreBattalionModel
        }
    }

    public addLeaderToList(data:number){
        let selectedData:model[] = this.model.filter(({id})=>id === data)
        this.listLeader.push(selectedData[0]);
        this.$nextTick(() => {
            this.modelSelected = 0;
        });
    }
    public addCoreBattalionToList(data:number){
        let selectedData:coreBattalion[] = this.coreBattalion.filter(({id})=>id === data)
        this.listCoreBattalion.push(selectedData[0]);
        this.$nextTick(() => {
            this.modelSelected = 0;
        });
    }
    public removeLeaderFromList(data:number){
        this.listLeader.splice(data,1);
    }
    public removeCoreBattalionFromList(data:number){
        this.listCoreBattalion.splice(data,1);
    }
    public get trackUserPicks() {
        return this.countUserPicks(this.listLeader)
    }
    public countUserPicks(data:model[]) {
        const countLeader = data.filter(function(item){if (item.leader === '1') {return true;} else {return false;}}).length;
        const countBattleline = data.filter(function(item){if (item.battleline === '1') {return true;} else {return false;}}).length;
        const countBehemoths = data.filter(function(item){if (item.behemoth === '1') {return true;} else {return false;}}).length;
        const countArtillery = data.filter(function(item){if (item.artillery === '1') {return true;} else {return false;}}).length;
        // const countArtefacts = data.filter(function(item){if (item. === '1') {return true;} else {return false;}}).length;
        // const countTriumphs = data.filter(function(item){if (item. === '1') {return true;} else {return false;}}).length;
        // const countAlliedUnits = data.filter(function(item){if (item. === '1') {return true;} else {return false;}}).length;
        // const countAlliedPoints = data.filter(function(item){if (item. === '1') {return true;} else {return false;}}).length;
        // const countSpells = data.filter(function(item){if (item. === '1') {return true;} else {return false;}}).length;
        // const countReinforcedUnits = data.filter(function(item){if (item. === '1') {return true;} else {return false;}}).length;
        // const countAdditionelEnhancements = data.filter(function(item){if (item. === '1') {return true;} else {return false;}}).length;
        this.userPicks.leaders = countLeader
        this.userPicks.battlelines = countBattleline
        this.userPicks.behemoths = countBehemoths
        this.userPicks.artillery = countArtillery
        // this.userPicks.artefacts = countArtefacts
        // this.userPicks.triumphs = countTriumphs
        // this.userPicks.alliedUnits = countAlliedUnits
        // this.userPicks.alliedPoints = countAlliedPoints
        // this.userPicks.spells = countSpells
        // this.userPicks.reinforcedUnits = countReinforcedUnits
        // this.userPicks.additionelEnhancements = countAdditionelEnhancements
        return this.userPicks
    }
    public get trackTotalPoints() {
        return this.countTotalPoints(this.listLeader)
    }
    public countTotalPoints (data:model[]) {
        return data.reduce((totalPoints, {points}) => totalPoints + parseInt(points), 0)
    }

    public SaveWarscrollRequirements() {
        this.pointsValue = this.pointsValueEdit;
        if(this.pointsValueEdit >= 1000 && this.pointsValueEdit <= 1500) {
            this.builder.leaders = Math.floor(this.pointsValueEdit / 500 + 1)
        } else {
            this.builder.leaders = Math.floor(this.pointsValueEdit / 500 + 2)
        }
        this.builder.battlelines = Math.floor(this.pointsValueEdit / 1000 + 1)
        this.builder.behemoths = Math.floor(this.pointsValueEdit / 500)
        this.builder.artillery = Math.floor(this.pointsValueEdit / 500)
        this.builder.artefacts
        this.builder.triumphs
        this.builder.alliedUnits = this.totalUnits
        this.builder.alliedPoints = Math.floor(this.pointsValueEdit / 5)
        this.builder.spells = Math.floor(this.pointsValueEdit / 1000 + 1)
        this.builder.reinforcedUnits = Math.floor(this.pointsValueEdit / 500)
        this.builder.additionelEnhancements
        this.overlay = false
    }
}
