<template>
  <div id="app">
    <FibComponent/>
  </div>
</template>

<script>
import FibComponent from './components/FibComponent.vue'

export default {
  name: 'App',
  components: {
    FibComponent
  }
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
