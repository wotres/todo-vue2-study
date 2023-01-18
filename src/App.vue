<template>
  <div id="app">
    <todo-header />
    <router-view/>
    <todo-footer />
  </div>
</template>

<script>
import TodoHeader from '@/layout/Header/TodoHeader';
import TodoFooter from '@/layout/Footer/TodoFooter';
export default {
  name: 'App',
  components: {
    TodoHeader,
    TodoFooter,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0;
}
</style>
