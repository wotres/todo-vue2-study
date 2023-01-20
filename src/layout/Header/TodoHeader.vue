<template>
  <div class="header">
    <div class="header__image" @click="goToHome"></div>
    <div class="header__date">{{ today }}</div>
  </div>
</template>

<script>
export default {
  name: "TodoHeader",
  data() {
    return {
      today: ''
    }
  },
  created() {
    this.today = this.calculateDate();
  },
  methods: {
    goToHome() {
      this.$router.push('/', () => {})
    },
    calculateDate() {
      const date = new Date();
      const dayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      return `today is ${date.getMonth() + 1}/${date.getDate()} ${dayList[date.getDay()]}`
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  padding: 6px 12px;
  background: linear-gradient(70deg, #BB2649, #d75f56, #E6E6FA);
  &__image {
    width: 48px;
    height: 48px;
    background-image: url("@/assets/images/home_white_48.svg");
  }
  &__date {
    font-size: 18px;
    height: 48px;
    width: 240px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
