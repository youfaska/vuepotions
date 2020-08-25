<template>
  <div class="my-5">
    <h1>{{nombreCreador}}</h1>
    <MiComponente msg="Welcome to Your Vue.js App" />
    <Dialog message="Este es mi mensaje 8888"></Dialog>
    <v-btn @click="goToTodoList()" color="primary" class="ml-5 mr-5">
      <v-icon>fab fa-facebook-f</v-icon>
    </v-btn>
    <CustomButton @aaa="handleClick" text="Botón de ejemplo"></CustomButton>
  </div>
</template>

<script>
// @ is an alias to /src
import MiComponente from "@/components/MiComponente.vue";
import Dialog from "@/components/Dialog";
import CustomButton from "@/components/CustomButton";

export default {
  name: "Home",
  data() {
    return {
      nombreCreador:'Youssef'
    }
  },
  components: {
    MiComponente,
    CustomButton,
    Dialog
  },
  methods: {
    goToTodoList() {
      console.log("Vamos a Todo List....");
      // router.push({ name: 'lists', params: {message: 'test title' }})
    },
     handleClick(mensaje, nuevoNombre) {
      console.log("Click event on the button of the children with: " + mensaje)
      this.nombreCreador=nuevoNombre
    }
  }
};
</script>
