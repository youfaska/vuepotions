<template>
  <v-btn color="primary" @click="handleClick">{{text}}</v-btn>
</template>
<script>
export default {
  name:'CustomButton',
  data() {
    return {
      mensaje:'Hola gente...'
    }
  },
  props: {
    text: String
  },
  methods: {
    handleClick() {
      this.$emit("aaa", this.mensaje,'Oufaska');
    }
  }
}
</script>
