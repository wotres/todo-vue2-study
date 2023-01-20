<template>
  <div class="home">
    <div class="home__welcome">
      <span>Welcome!</span>
      <span>Manage your schedule efficiently through Todo App</span>
    </div>
    <div class="home__question">What is your name?</div>
    <div class="home__register">
      <input
          class="home__register__input"
          placeholder="Enter your name"
          v-model="userName"
          v-on:keydown.enter="login(userName)"
      />
      <div class="home__register-btn" @click="login()">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoHome",
  data() {
    return {
      userName: ""
    }
  },
  methods: {
    login() {
      this.$store.commit('setUserName', this.userName);
      this.$router.push('/main', () => {});
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  padding: 48px;
  font-weight: 400;
  font-size: 24px;
  &__welcome {
    display: flex;
    flex-direction: column;
    padding: 24px 0;
  }
  &__question {
    font-size: 48px;
    font-weight: 700;
    padding-bottom: 24px;
  }
  &__register {
    display: flex;
    align-items: center;
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
}
</style>
