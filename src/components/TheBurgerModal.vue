<template>
  <div class="burger-modal">
    <div class="burger-modal__substrate" @click.exact="modalOuterClickHandler" ref="modalSubstrate"></div>
    <div class="burger-modal__inner" ref="modalInner">
      <img class="burger-modal__logo" src="../assets/practico-logo-black.svg" alt="Practico logo">
      <ul class="burger-modal__nav-list">
        <li class="burger-modal__nav-item">
          <a class="burger-modal__external-link" href="https://www.praktika.app/license">License Agreement</a>
        </li>
        <li class="burger-modal__nav-item">
          <a class="burger-modal__external-link" href="https://www.praktika.app/privacy-policy">Privacy Policy</a>
        </li>
        <li class="burger-modal__nav-item">
          <a class="burger-modal__external-link" href="https://www.praktika.app/">Practico Website</a>
        </li>
        <li class="burger-modal__nav-item">
          <a class="burger-modal__external-link" href="mailto:hi@praktika.app">Contact Us</a>
        </li>
      </ul>
      <p class="burger-modal__copyright">
        Copyright holder: PRAKTIKA, INC.<br>
        EIN 87-3267429, 7900 Oak Lane,<br>
        Suite 400, Miami Lakes, FL, 33016
      </p>
      <ul class="burger-modal__store-list">
        <li class="burger-modal__store-item">
          <a class="burger-modal__store-link" href="https://apps.apple.com/ru/app/meditation-sleep-praktika/id1467786415?l=en">
            <span class="burger-modal__link-text visually-hidden">Download on the App Store</span>
          </a>
        </li>
        <li class="burger-modal__store-item">
          <a class="burger-modal__play-link" href="https://play.google.com/store/apps/details?id=com.praktika.app">
            <span class="burger-modal__link-text visually-hidden">Get it on Google Play</span>
          </a>
        </li>
      </ul>
      <button class="burger-modal__close-button" type="button" @click="closeButtonClickHandler">
        <span class="burger-modal__button-text visually-hidden">Close window</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheBurgerModal",
  methods: {
    closeButtonClickHandler() {
      this.$refs.modalSubstrate.classList.add('burger-modal__substrate--closing')
      this.$refs.modalInner.classList.add('burger-modal__inner--closing')
      setTimeout(() => {
        this.$emit('closeModalEvent')
      }, 500)
    },
    modalOuterClickHandler() {
      this.$refs.modalSubstrate.classList.add('burger-modal__substrate--closing')
      this.$refs.modalInner.classList.add('burger-modal__inner--closing')
      setTimeout(() => {
        this.$emit('closeModalEvent')
      }, 500)
    },
  },
}
</script>

<style>
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes slideIn {
  0% {
    transform: translateX(300px);
  }
  100% {
    transform: translateX(0);
  }
}
.burger-modal {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  margin: 0;
  padding: 0;
  width: 100vw;
  min-width: 320px;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: stretch;

  z-index: 10;
}

.burger-modal__substrate {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background-color: rgba(0, 0, 0, 0.8);
  animation: fadeIn 0.2s linear;
}

.burger-modal__substrate--closing {
  transition: opacity 0.2s linear;
  opacity: 0;
}

.burger-modal__inner {
  position: relative;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  overflow-y: scroll;
  background-color: #fff;

  animation: slideIn 0.2s linear;
}

.burger-modal__inner--closing {
  transition: transform 0.2s linear;
  transform: translateX(700px);
}

.burger-modal__logo {
  margin: 32px 0 0;
  padding: 0;
}

.burger-modal__nav-list {
  margin: 58px 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  list-style: none;
}

.burger-modal__nav-item {
  margin: 0;
  padding: 0;
}

.burger-modal__nav-item:not(:first-child) {
  margin-top: 30px;
}

.burger-modal__external-link {
  margin: 0;
  padding: 0;

  font-weight: 500;
  font-style: normal;
  font-size: 25px;
  line-height: 30px;
  color: #000000;
  text-decoration: none;
}

.burger-modal__copyright {
  margin: 50px 0 30px;
  padding: 0;

  font-weight: 400;
  font-style: normal;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  color: #A3A3A3;
}

.burger-modal__store-list {
  margin: auto 0 25px;
  padding: 0;
  min-width: 330px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}

.burger-modal__store-item {
  margin: 0;
  padding: 0;
  display: flex;
}

.burger-modal__store-link {
  margin: 0;
  padding: 0;
  width: 150px;
  height: 50px;

  background: url("../assets/icon-store.svg") center no-repeat;
}

.burger-modal__play-link {
  margin: 0;
  padding: 0;
  width: 170px;
  height: 50px;

  background: url("../assets/icon-play.svg") center no-repeat;
}

.burger-modal__close-button {
  position: absolute;
  top: 20px;
  right: 40px;

  width: 40px;
  height: 40px;

  background: url("../assets/icon-close.svg") center no-repeat;
  border: none;
  cursor: pointer;
}
</style>