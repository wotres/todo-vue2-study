<template>
  <div class="order">
    <div class="select">
      <select name="" id="order" class="select-box"
              v-model="selected"
              @change="changeOrderType">
        <option value="ase">Oldest</option>
        <option value="desc">Latest</option>
      </select>
    </div>
    <div class="order__delete-all" @click="removeTaskAll">Delete All</div>
  </div>
</template>

<script>
export default {
  name: "TodoOrderBox",
  data() {
    return {
      selected: "desc"
    }
  },
  methods: {
    changeOrderType() {
      this.$store.commit("changeOrderType", this.selected);
    },
    removeTaskAll() {
      this.$store.commit("removeTaskAll");
    }
  }
}
</script>

<style lang="scss" scoped>
.order {
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  &__delete-all {
    background-color: #E6E6FA;
    border: 1px solid black;
  }
}
</style>
