<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" md="6">
        <v-card class="my-5">
          <v-card-text>
            <h1>Usuarios</h1>
          </v-card-text>
        </v-card>
        <v-card>
          <v-card-text>
            <router-link to="/">
              <v-btn color="primary">
                <v-icon>as fa-home</v-icon>
              </v-btn>
            </router-link>
            <router-link :to="{ name: 'TodoList'}">
              <v-btn class="ml-5" color="primary">
                <v-icon>fas fa-tasks</v-icon>
              </v-btn>
            </router-link>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col cols="12" md="6">
        <v-card class="my-5">
          <v-card-text>
            <v-btn color="primary" @click="goToHome()">Ir a la home</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: "Users",
   mounted() {
   this.$nextTick(() => {//una forma de asegurarse de que Vue ya ha renderizado todos los elementos del DOM es usar la función nextTick de Vue. La función nextTick lo que hace es dejar pasar un pequeño intervalo de tiempo, el correspondiente a un tick.
      console.log(this.$el.querySelectorAll('a'));
    });
  },
  methods: {
    goToHome() {
      console.log("enviando a la homre...");
      // Con el nombre de la ruta
      this.$router.push({ path: "/" });
      // Esta instrucción lo que hará sera hacer que el usuario vuelva a la página anterior.
      //this.$router.go(-1)

      // Esta instrucción hará que el usuario avance una página en la historia del navegador en caso de que se pueda
      //this.$router.go(1)
    }
  }
};
</script>
