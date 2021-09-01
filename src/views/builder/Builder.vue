<template>
  <div class="Builder">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="12"
          offset-md="1"
          md="9"
          offset-lg="1"
          lg="9"
          offset-xl="1"
          xl="9"
        >
          <div class="background_container">
            <div class="pa-3">
              <h2>Create you're own list here!</h2>
              <div class="builder_ga d-flex">
                <h4 class="builder_ga_title d-flex">
                  Choose a Grand Alliance:
                </h4>
                <v-radio-group
                  class="d-flex pl-1"
                  v-model="grandAllianceSelected"
                  row
                >
                  <v-radio
                    class="d-flex builder_ga_radio"
                    v-for="item in grandAlliance"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                    :disabled="!!parseInt(item.disabled)"
                  ></v-radio>
                </v-radio-group>
              </div>
              <div class="builder_a d-flex">
                <h4 class="builder_a_title d-flex">
                  Choose a Alliance, Faction & Mortal Realm:
                </h4>
                <v-select
                  class="pl-1"
                  :items="filteredAlliance"
                  item-value="id"
                  item-text="name"
                  v-model="allianceSelected"
                  label="Alliance"
                ></v-select>
                <v-select
                  class="pl-1"
                  :items="filteredFaction"
                  item-value="id"
                  item-text="name"
                  v-model="factionSelected"
                  label="Faction"
                ></v-select>
                <v-select
                  class="pl-1"
                  :items="realm"
                  item-value="id"
                  item-text="name"
                  v-model="realmSelected"
                  label="Realm"
                ></v-select>
              </div>
              <div class="builder_a d-flex">
                <h4 class="builder_a_title d-flex">Choose a Army:</h4>
                <v-select
                  class="pl-1"
                  :items="filteredAlliance"
                  item-value="id"
                  item-text="name"
                  v-model="allianceUnitsSelected"
                  label="Alliance"
                ></v-select>
              </div>
            </div>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          offset-md="1"
          md="9"
          offset-lg="1"
          lg="9"
          offset-xl="1"
          xl="9"
        >
          <div class="background_container">
            <div class="pa-3">
              <div class="builder_ga d-flex">
                <h4 class="builder_a_title d-flex">Choose a Leader:</h4>
                <v-select
                  class="pl-1"
                  :items="filteredModel"
                  item-text="name"
                  item-value="id"
                  v-model="modelSelected"
                  label="Leaders"
                  @change="addLeaderToList(modelSelected)"
                >
                  <template slot="selection" slot-scope="{ item }">
                    {{ item.name }} - {{ item.points }}
                  </template>
                  <template slot="item" slot-scope="{ item }">
                    <p class="filter_model_item_text">
                      {{ item.name }}
                    </p>
                    <p
                      class="filter_model_item_text text-right font-weight-bold"
                    >
                      {{ item.points }} Points
                    </p>
                  </template>
                </v-select>
              </div>
              <v-card id="builder_leader_section" class="mx-auto" tile>
                <v-list-item
                  class="builder_leader_items"
                  v-for="(item, index) in listLeader"
                  :key="item.id"
                  two-line
                  :ref="'model-ref'"
                >
                  <v-list-item-avatar>
                    <v-img
                      src="../../../src/assets/images/icon/leader.png"
                      alt="leader"
                    ></v-img>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ item.name }}
                      {{ item.points }}
                    </v-list-item-title>
                    <v-list-item-subtitle>
                      {{ item.keywords }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action class="switches_action">
                    <v-switch
                      class="px-1"
                      color="blue lighten-1"
                      v-model="generalSwitch"
                      label="General"
                      inset
                    ></v-switch>
                    <v-switch
                      class="px-1"
                      color="blue lighten-1"
                      v-model="alliesSwitch"
                      label="Allies"
                      inset
                    ></v-switch>
                  </v-list-item-action>
                  <v-list-item-action>
                    <v-select
                      class="pl-1"
                      :items="filteredCoreBattalionModel"
                      item-value="id"
                      item-text="name"
                      v-model="coreBattalionModel"
                      label="Core Battalion"
                    ></v-select>
                    <v-select
                      v-if="item.wizard == '1'"
                      class="pl-1"
                      :items="filteredSpells"
                      item-value="id"
                      item-text="name"
                      v-model="spellSelected"
                      label="Spell"
                    >
                    </v-select>
                    <v-select
                      v-if="item.uniques == '0'"
                      class="pl-1"
                      :items="filteredArtefacts"
                      item-value="id"
                      item-text="name"
                      v-model="artefactSelected"
                      label="Artefact"
                    >
                    </v-select>
                  </v-list-item-action>
                  <v-list-item-action>
                    <v-btn @click="removeLeaderFromList(index)" icon>
                      <v-icon color="red lighten-1">fas fa-trash-alt</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-card>
            </div>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          offset-md="1"
          md="9"
          offset-lg="1"
          lg="9"
          offset-xl="1"
          xl="9"
        >
          <div class="background_container">
            <div class="pa-3">
              <div class="builder_ga d-flex">
                <h4 class="builder_a_title d-flex">Choose a Core Battalion:</h4>
                <v-select
                  class="pl-1"
                  :items="coreBattalion"
                  item-value="id"
                  item-text="name"
                  v-model="coreBattalionSelected"
                  label="Core Battalion"
                  @change="addCoreBattalionToList(coreBattalionSelected)"
                ></v-select>
              </div>
              <v-card class="mx-auto" tile>
                <v-list-item
                  v-for="(item, index) in listCoreBattalion"
                  :key="item.id"
                  two-line
                >
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ item.name }}
                    </v-list-item-title>
                    <h5>Mandatory:</h5>
                    <v-list-item-subtitle class="d-flex justify-space-around">
                      <div class="d-flex builder_core_battalion_options">
                        <v-img
                          src="../../../src/assets/images/icon/leader.png"
                          alt="leader"
                          width="60px"
                          max-height="60px"
                          aspect-ratio="1"
                        ></v-img>
                        <p class="text-center">
                          {{ item.mandatoryCommander }}
                        </p>
                      </div>
                      <div class="d-flex builder_core_battalion_options">
                        <v-img
                          src="../../../src/assets/images/icon/commander.png"
                          alt="sub commander"
                          width="60px"
                          max-height="60px"
                          aspect-ratio="1"
                        ></v-img>
                        <p class="text-center">
                          {{ item.mandatorySubCommander }}
                        </p>
                      </div>
                      <div class="d-flex builder_core_battalion_options">
                        <v-img
                          src="../../../src/assets/images/icon/troops.png"
                          alt="troops"
                          width="60px"
                          max-height="60px"
                          aspect-ratio="1"
                        ></v-img>
                        <p class="text-center">
                          {{ item.mandatoryTroops }}
                        </p>
                      </div>
                      <div class="d-flex builder_core_battalion_options">
                        <v-img
                          src="../../../src/assets/images/icon/monster.png"
                          alt="monster"
                          width="60px"
                          max-height="60px"
                          aspect-ratio="1"
                        ></v-img>
                        <p class="text-center">
                          {{ item.mandatoryMonster }}
                        </p>
                      </div>
                      <div class="d-flex builder_core_battalion_options">
                        <v-img
                          src="../../../src/assets/images/icon/artillery.png"
                          alt="artillery"
                          width="60px"
                          max-height="60px"
                          aspect-ratio="1"
                        ></v-img>
                        <p class="text-center">
                          {{ item.mandatoryArtillery }}
                        </p>
                      </div>
                    </v-list-item-subtitle>
                    <h5>Optional:</h5>
                    <v-list-item-subtitle class="d-flex justify-space-around">
                      <div class="d-flex builder_core_battalion_options">
                        <v-img
                          src="../../../src/assets/images/icon/leader-light.png"
                          alt="leader"
                          width="60px"
                          max-height="60px"
                          aspect-ratio="1"
                        ></v-img>
                        <p class="text-center">
                          {{ item.optionalCommander }}
                        </p>
                      </div>
                      <div class="d-flex builder_core_battalion_options">
                        <v-img
                          src="../../../src/assets/images/icon/commander-light.png"
                          alt="sub commander"
                          width="60px"
                          max-height="60px"
                          aspect-ratio="1"
                        ></v-img>
                        <p class="text-center">
                          {{ item.optionalSubCommander }}
                        </p>
                      </div>
                      <div class="d-flex builder_core_battalion_options">
                        <v-img
                          src="../../../src/assets/images/icon/troops-light.png"
                          alt="troops"
                          width="60px"
                          max-height="60px"
                          aspect-ratio="1"
                        ></v-img>
                        <p class="text-center">
                          {{ item.optionalTroops }}
                        </p>
                      </div>
                      <div class="d-flex builder_core_battalion_options">
                        <v-img
                          src="../../../src/assets/images/icon/monster-light.png"
                          alt="monster"
                          width="60px"
                          max-height="60px"
                          aspect-ratio="1"
                        ></v-img>
                        <p class="text-center">
                          {{ item.optionalMonster }}
                        </p>
                      </div>
                      <div class="d-flex builder_core_battalion_options">
                        <v-img
                          src="../../../src/assets/images/icon/artillery-light.png"
                          alt="artillery"
                          width="60px"
                          max-height="60px"
                          aspect-ratio="1"
                        ></v-img>
                        <p class="text-center">
                          {{ item.optionalArtillery }}
                        </p>
                      </div>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-btn @click="removeCoreBattalionFromList(index)" icon>
                      <v-icon color="red lighten-1">fas fa-trash-alt</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-card>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div class="requirements_tab">
      <h2>
        Points {{ trackTotalPoints }} /
        <button
          class="points_change"
          color="orange lighten-2"
          @click="overlay = !overlay"
        >
          {{ pointsValue }}
        </button>
      </h2>
      <h4>
        Leaders {{ trackUserPicks.leaders }} / {{ builder.leaders }}
        <ToolTip
          :text="`Minimum of 1 and a maximum of ` + builder.leaders"
        ></ToolTip>
      </h4>
      <h4>
        Battlelines {{ trackUserPicks.battlelines }} / {{ builder.battlelines }}
        <ToolTip
          :text="`Atleast ` + builder.battlelines + ` or more`"
        ></ToolTip>
      </h4>
      <h4>
        Behemoths {{ trackUserPicks.behemoths }} / {{ builder.behemoths }}
        <ToolTip :text="`Maximum of ` + builder.behemoths"></ToolTip>
      </h4>
      <h4>
        Artillery {{ trackUserPicks.artillery }} / {{ builder.artillery }}
        <ToolTip :text="`Maximum of ` + builder.artillery"></ToolTip>
      </h4>
      <h4>
        Artefacts {{ trackUserPicks.artefacts }} / {{ builder.artefacts }}
        <ToolTip :text="`Maximum of ` + builder.artefacts"></ToolTip>
      </h4>
      <h4>
        Triumphs {{ trackUserPicks.triumphs }} / {{ builder.triumphs }}
        <ToolTip text="Maximum of 1"></ToolTip>
      </h4>
      <h4>
        Allied Units {{ trackUserPicks.alliedUnits }} /
        {{ builder.alliedUnits }}
        <ToolTip :text="`Maximum of ` + builder.alliedUnits / 4"></ToolTip>
      </h4>
      <h4>
        Allied Points {{ trackUserPicks.alliedPoints }} /
        {{ builder.alliedPoints }}
        <ToolTip text="20% of you're points can be spend on allies"></ToolTip>
      </h4>
      <h4>
        Endless Spells or Invocations {{ trackUserPicks.spells }} /
        {{ builder.spells }}
        <ToolTip :text="`Maximum of ` + builder.spells"></ToolTip>
      </h4>
      <h4>
        Reinforced Units {{ trackUserPicks.reinforcedUnits }} /
        {{ builder.reinforcedUnits }}
        <ToolTip :text="`Maximum of ` + builder.reinforcedUnits"></ToolTip>
      </h4>
      <h4>
        Additionel Enhancements {{ trackUserPicks.additionelEnhancements }} /
        {{ builder.additionelEnhancements }}
      </h4>
      <v-select
        :items="builder.grandStrategy"
        v-model="grandStrategySelected"
        label="grand strategy"
      ></v-select>
      <v-overlay
        class="requirements_tab_overlay"
        :absolute="absolute"
        opacity="0.9"
        :value="overlay"
      >
        <div class="requirements_tab_overlay_header">
          <h3 class="requirements_tab_overlay_header_title">
            Pitched Battle Points value
          </h3>
        </div>
        <div class="requirements_tab_overlay_main">
          <v-text-field
            v-model="pointsValueEdit"
            label="Points"
            type="number"
            filled
          ></v-text-field>
        </div>
        <div class="requirements_tab_overlay_footer">
          <v-btn
            class="requirements_tab_overlay_footer_save"
            color="green lighten-2"
            @click="SaveWarscrollRequirements"
          >
            <v-icon left small>fas fa-check</v-icon> Save
          </v-btn>
          <v-btn
            class="requirements_tab_overlay_footer_cancel"
            color="grey lighten-2"
            @click="overlay = false"
          >
            <v-icon left small>fas fa-ban</v-icon> Cancel
          </v-btn>
        </div>
      </v-overlay>
    </div>
  </div>
</template>

<script src="./builder.ts"></script>
<style>
.background_container {
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  border-radius: 5px;
}
.builder_ga_title,
.builder_a_title {
  align-items: center;
}
.builder_ga_radio {
  justify-content: space-between;
}
.requirements_tab {
  position: absolute;
  right: 22px;
  top: 24px;
  width: 300px;
  height: 500px;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%),
    0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
  border-radius: 5px;
  padding: 5px;
}
.requirements_tab_overlay {
  padding: 10px;
}
.requirements_tab_overlay_header {
  height: 60px;
  width: 100%;
}
.requirements_tab_overlay_header_title {
  text-align: center;
  margin: auto;
}
.requirements_tab_overlay_main {
  height: calc(100% - 96px);
  width: 100%;
}
.requirements_tab_overlay_footer {
  height: 60px;
  width: 100%;
}
.requirements_tab_overlay_footer_save {
  position: absolute;
  left: 0;
}
.requirements_tab_overlay_footer_cancel {
  position: absolute;
  right: 0;
}
.points_change {
  color: orange;
}
.points_change:hover {
  text-decoration: underline;
}
.switches_action {
  flex-direction: row;
  align-self: center;
}
.builder_core_battalion_options {
  flex-direction: column;
}
.filter_model_item_text {
  margin-bottom: 0px !important;
  display: block;
  width: 100%;
}
@media screen and (orientation: landscape) and (min-width: 2100px) {
  .requirements_tab {
    width: 600px;
  }
}
</style>
