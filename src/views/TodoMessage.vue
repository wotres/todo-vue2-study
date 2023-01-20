<template>
  <div class="message">
    <div class="message__text">hi {{userName}}</div>
    <div class="message__info">
      <span>You've got</span>
      <span class="message__info__count">
        {{taskCount}} / {{totalTaskCount}}
      </span>
      <span>today</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoMessage",
  data() {
    return {
      taskCount: 0,
      totalTaskCount: 0,
    }
  },
  computed: {
    userName() {
      return this.$store.getters.userName;
    }
  }
}
</script>

<style lang="scss" scoped>
.message {
  font-size: 18px;
  font-weight: 400;
  &__text {
    font-size: 24px;
    color: violet;
  }
  &__info {
    display: flex;
    flex-direction: column;
    &__count {
      font-size: 24px;
      font-weight: 700;
    }
  }
}
</style>
