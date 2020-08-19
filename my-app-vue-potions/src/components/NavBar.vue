<template>
  <nav>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline text-uppercase">
        <router-link class="white--text" :to="{path:'/'}">
          <img
            alt="Gestion de tareas"
            src="@/assets/logo.png"
            width="25%"
            height="20%"
            min="100"
            max="200"
          />
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!--v-btn>
        <span class="mr-2">XXX</span>
        <v-icon>ar fa-address-card</v-icon>
      </v-btn-->
    </v-app-bar>
    <v-navigation-drawer color="primary" v-model="drawer" app>
      <v-layout column align-center mt-5></v-layout>
      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" :to="item.to">
          <v-list-item-icon>
            <v-icon class="white--text">{{item.icon}}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{item.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      drawer: false,
      items: [
        {
          title: "Home",
          icon: "as fa-home",
          to: { path: "/" }
        },

        { title: "Tareas", icon: "fas fa-tasks", to: { path: "lists" } },

      ]
    };
  },
  methods: {},
  computed: {}
};
</script>
