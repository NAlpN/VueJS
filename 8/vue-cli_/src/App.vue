<template>
  <div>
    <Title :titleText="text" :text="text2" />
    <h3>App.vue</h3>
    <Button @clean="cleanInput"/>
    <input type="text" ref="inputText">
  </div>
</template>

<script>
import title from './components/Title.vue'
import Button from './components/Button.vue'
export default {
  name: 'App',
  components: {
    Title,
    Button
  },
  data() {
    return {
      text:"Vue 3 Denemesi",
      text2:"Hello Vue!"
    }
  },
  methods: {
    cleanInput(){
      this.$refs.inputText.value = ''
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>