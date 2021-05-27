<template>
  <div class="ArmyListAOS">
    <v-container>
      <v-row>
        <v-col
          v-for="list in lists"
          :key="list.id"
          cols="12"
          sm="12"
          md="6"
          lg="6"
          xl="6"
        >
          <v-card>
            <v-img
              class="white--text align-end"
              :src="require(`../../../src/assets/images/armies/${list.image}`)"
              aspect-ratio="1.7778"
            >
            </v-img>
            <v-card-title>
              {{ list.name }}
            </v-card-title>
            <v-card-subtitle>
              {{ list.alliance }}<br />{{ list.subfaction }}
            </v-card-subtitle>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn :href="url + list.pdf + '.pdf'" color="primary" download>
                download List
                <v-icon right dark> mdi-cloud-download </v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script src="./armylistAOS">
</script>
