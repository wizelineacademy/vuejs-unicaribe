<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <todo-component />
  </div>
</template>

<script>
import TodoComponent from './components/todo/Todo.vue'

export default {
  name: 'app',
  components: {
    TodoComponent
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
