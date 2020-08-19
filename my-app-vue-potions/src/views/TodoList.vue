<template>
  <v-form v-model="valid" @submit.prevent="crearTarea()">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            v-model="newTask"
            :rules="nameRules"
            :counter="10"
            label="Nombre de la tarea"
            outlined
            required
          ></v-text-field>
          {{newTask}}
        </v-col>
        <v-col cols="12" md="6">
          <v-btn type="submit" color="primary" :disabled="!valid">Crear tarea</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
export default {
  name: "TodoList",
  data() {
    return {
      newTask: "",
      tasks: [],
      valid: false,
      nameRules: [
        v => !!v || "El nomrbe de la tarea es obligatorio",
        v => v.length <= 10 || "el nombre no puede ser mayor de 10 caracteres"
      ]
    };
  },
  methods: {
    crearTarea() {
      let task = {
        text: this.newTask,
        completed: false
      };

      this.tasks.push(task);
      this.newTask = "";
      console.log(this.tasks);
    }
  }
};
</script>
