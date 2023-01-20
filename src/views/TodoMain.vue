<template>
  <div class="main">
    <todo-message />
    <todo-register />
    <todo-list />
  </div>
</template>

<script>
import TodoMessage from '@/views/TodoMessage';
import TodoRegister from '@/views/TodoAddTask';
import TodoList from '@/views/TodoList';
export default {
  name: "TodoMain",
  components: {
    TodoMessage,
    TodoRegister,
    TodoList
  }
}
</script>

<style lang="scss" scoped>
.main {
  padding: 24px;
}
</style>
