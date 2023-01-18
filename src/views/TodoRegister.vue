<template>
  <div class="register">
    <input type="text" placeholder="Enter your task"/>
  </div>
</template>

<script>
export default {
  name: "TodoRegister.vue"
}
</script>

<style lang="scss" scoped>
.register {
  margin: 24px 0;
  input {
    width: 100%;
    height: 48px;
  }
}
</style>
