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
        </v-col>
        <v-col cols="12" md="6">
          <v-btn type="submit" color="primary" :disabled="!valid">Crear tarea</v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col col="12">
          <h2 class="text-center">TAREAS</h2>
          <v-simple-table :dense="false" :fixed-header="false" height="300">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Name</th>
                  <th class="text-left">Calories</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in tasks" :key="index">
                  <td>
                    <v-icon color="success" @click="completarTarea(item.text)" v-if="item.completed">far fa-check-square</v-icon>
                    <v-icon @click="completarTarea(item.text)" v-else>far fa-square</v-icon>
                  </td>
                  <td>{{ item.text }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
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
    },
    completarTarea(taskText) {
      console.log("entrando en la funcion de completar tareas");
      for (let i = 0; i < this.tasks.length; i++) {
        let task = this.tasks[i];
        if (taskText === task.text) {
          task.completed = !task.completed;
        }
      }
    }
  }
};
</script>
