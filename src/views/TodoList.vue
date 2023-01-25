<template>
  <div class="list">
    <div class="list__item"
        v-for="(item, index) in taskList" :key="index">
      <div :class="['list__item__content', {'checked': item.checked}]">
        <input type="checkbox" :checked="item.checked" @change="clickChecked(item)"/>
        <div>{{item.checked}}</div>
      </div>
      <div class="list__item__remove" @click="removeTask(item.id)">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TodoList",
  computed: {
    taskList() {
      return this.$store.getters.taskList;
    },
  },
  methods: {
    clickChecked(item) {
      return this.$store.commit("clickChecked", item.id, item.checked);
    },
    removeTask(id) {
      return this.$store.commit("removeTask", id);
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  background-color: #d75f56;
  padding: 24px;
  &__item {
    height: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
    background-color: #E6E6FA;
    &:last-child {
      margin-bottom: 0;
    }
    &__content {
      display: flex;
      align-items: center;
    }
    &__remove {
      width: 24px;
      height: 24px;
      background-size: cover;
      background-repeat: no-repeat;
      background-image: url("@/assets/images/delete_white_48.svg");
    }
  }
}
</style>
