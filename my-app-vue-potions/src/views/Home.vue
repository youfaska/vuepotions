<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <MiComponente msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import MiComponente from '@/components/MiComponente.vue'

export default {
  name: 'Home',
  components: {
    MiComponente
  }
}
</script>
