<template>
  <div class="add-task">
    <input
        type="text"
        class=""
        placeholder="Enter your task"
        v-model="task"
        v-on:keydown.enter="addTask"
    />
    <div class="add-task-btn" @click="addTask">
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoAddTask",
  data() {
    return {
      task: ""
    }
  },
  methods: {
    addTask() {
      this.$store.commit('addNewTask', this.task);
    }
  }
}
</script>

<style lang="scss" scoped>
.add-task {
  margin: 24px 0;
  display: flex;
  input {
    width: 648px;
    height: 24px;
    border: none;
    border-bottom: 1px solid black;
    font-size: 24px;
    &:focus {
      outline: none;
    }
  }
  &-btn {
    width: 36px;
    height: 36px;
    background-image: url("@/assets/images/login_white_48.svg");
    background-size: cover;
    &:hover {
      background-image: url("@/assets/images/login_red_48.svg");
    }
  }
}
</style>
