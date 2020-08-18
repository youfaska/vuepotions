<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6">
        <v-card>
          <v-card-text>Mi mensaje es: {{mensaje}}</v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card :class="miTexto">
          <v-card-text v-if="condicion">Mi url de AS es: {{urlApiNode}}</v-card-text>
          <v-card-text class="white--text" v-else-if="items.length !== 0">Todavia no hay mensaje</v-card-text>
          <v-card-text v-else>No habrá mensaje</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-list>
          <v-subheader>Listado</v-subheader>
          <v-list-item-group v-model="item" color="primary">
            <v-list-item :style="styleObject" v-for="(item, i) in items" :key="i">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
      <v-col cols="12" md="6">
        <v-card class="rounded5">
          <v-card-text>
            <v-slider v-model="width" min="200" max="500" step="1"></v-slider>
            <v-img class="rounded10" :src="imagen" :width="width" aspect-ratio="2"></v-img>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6">
        <v-card class="rounded5">
          <v-card-text>{{print(calculate())}}</v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card class="rounded5">
          <v-card-text>{{sumarPuntos()}} - {{sumarPuntos()}} - {{sumarPuntos()}}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" class="text-center">
        <v-btn @click="anotherPrint()" fab dark large class="primary">
          <v-icon dark>mdi-apple</v-icon>
        </v-btn>
      </v-col>

      <v-col cols="12" md="6">
        <v-card class="rounded5">
          <v-card-text>VACIO</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" class="text-center">
        <v-tooltip left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              @click="aumentarContador()"
              fab
              dark
              large
              class="primary"
            >
              <v-icon dark>fas fa-plus</v-icon>
            </v-btn>
          </template>
          <span>Incrementar el valor del contador</span>
        </v-tooltip>
      </v-col>

      <v-col cols="12" md="6">
        <v-card class="rounded5">
          <v-card-text>{{contador}} - Su double sería: {{double}}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="3" class="text-center">
        <v-card class="rounded5">
          <v-card-text>Como variables {{contador-double}}</v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="3">
        <v-card class="rounded5">
          <v-card-text>Como string {{contador}} - {{double}}</v-card-text>
        </v-card>
      </v-col>
       <v-col cols="12" md="3">
        <v-card class="rounded5">
          <v-card-text>Metodo y computed juntos {{sumarCincoDouble()}}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { urlApiNode } from "@/config.js";
let total = 0;
export default {
  name: "MiComponente",
  data() {
    return {
      numero: 5,
      contador: 1,
      urlApiNode: urlApiNode,
      width: 300,
      miTexto: {
        "text-capitalize": true,
        "purple darken-3": true,
        "white--text": true
      },
      mensaje: "Esto es mi mensaje",
      condicion: null,
      imagen: "https://i.imgur.com/BBcy6Wc.jpg",
      styleObject: {
        background: "#E3F2FD"
      },
      items: [
        { text: "Real-Time", icon: "mdi-clock" },
        { text: "Audience", icon: "mdi-account" },
        { text: "Conversions", icon: "mdi-flag" }
      ],
      item: 1
    };
  },
  methods: {
    aumentarContador() {
      this.contador++;
    },
    print(param) {
      return `Esto es un método,
      y imprime la varibale: ${param} que se pasaó como parametro`;
    },
    anotherPrint() {
      console.log(
        "Esto es otro método, por el momento solo pinta en la consola"
      );
    },
    calculate() {
      return this.numero * 5;
    },
    sumarPuntos() {
      total++;
      return total;
    },
    sumarCincoDouble(){
      return this.double+5
    }
  },
  computed: {
    double() {
      return this.contador * 2;
    }
  },
  props: {
    msg: String
  }
};
</script>

<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
