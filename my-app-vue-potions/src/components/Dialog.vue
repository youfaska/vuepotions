<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">Click Me</v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">Privacy Policy</v-card-title>

        <v-card-text>
          <h2>{{message}}</h2>
        </v-card-text>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">I accept</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: "Dialog",

  data() {
    return {
      dialog: false
    };
  },
  props: {
    message: {
      type: String,
      required: true,
      default: "Hola mundo"
    }
  },
  computed: {
    changeTheMessage() {
      return this.message + " añado mi parte aqui";
    }
  }
};
</script>
