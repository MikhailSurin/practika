<template>
  <button class="burger-button" type="button">
    <span class="burger-button__text visually-hidden">Toggle menu</span>
  </button>
</template>

<script>
export default {
  name: "TheBurgerButton"
}
</script>

<style scoped>
  .burger-button {
    position: absolute;
    top: 20px;
    right: 20px;

    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: 40px;
    height: 40px;

    background: url("../assets/icon-burger.svg") center no-repeat;
    border: none;

    cursor: pointer;
  }
</style>