<template>
  <div class="download-page">
    <header class="download-page__header">
      <h1 class="download-page__heading visually-hidden">Download application</h1>
      <img class="download-page__logo" src="../assets/practico-logo-black.svg" alt="practico" width="75" height="15">
      <button
        class="download-page__burger-button"
        @click="burgerButtonClickHandler"
      >
        <span class="download-page__button-text visually-hidden">
          show menu
        </span>
      </button>
      <the-burger-modal class="download-page__burger-modal" v-if="showModal" v-on:closeModalEvent="closeModalEventHandler"/>
    </header>
    <main class="download-page__main-content">
      <p class="download-page__main-text">
        Download Practico now<br>
        to begin your journey
      </p>
      <img class="download-page__phone" src="../assets/phone-big.png" alt="Practico application" width="250" height="505">
      <div class="download-page__links-wrapper">
        <ul class="download-page__links-list">
          <li class="download-page__links-item">
            <a class="download-page__store-link" href="#">
              <span class="download-page__link-text visually-hidden">Download on the App Store</span>
            </a>
          </li>
          <li class="download-page__links-item">
            <a class="download-page__play-link" href="#">
              <span class="download-page__link-text visually-hidden">Get it on Google Play</span>
            </a>
          </li>
        </ul>
      </div>
      <app-company-info class="download-page__company-info" />
    </main>
  </div>
</template>

<script>
import TheBurgerModal from "../components/TheBurgerModal.vue"
import AppCompanyInfo from "../components/AppCompanyInfo.vue"

export default {
  name: "EndPageView",
  components: {
    TheBurgerModal,
    AppCompanyInfo,
  },
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    burgerButtonClickHandler() {
      this.showModal = !this.showModal
      document.body.classList.toggle('lock')
    },
    closeModalEventHandler() {
      this.showModal = !this.showModal
      document.body.classList.toggle('lock')
    },
  },
}
</script>

<style>
.download-page {
  margin: 0 auto;
  padding: 0;
  width: 100%;
  height: 100%;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;

  background: #FFFFFF;
  box-shadow: 0 4px 184px rgba(0, 0, 0, 0.1);
}

.download-page__header {
  position: relative;
  box-sizing: border-box;
  margin: 0;
  padding: 32px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}

.download-page__burger-button {
  position: absolute;
  top: 20px;
  right: 40px;

  margin: 0;
  padding: 0;
  width: 40px;
  height: 40px;

  background: url('../assets/icon-burger-black.svg') center no-repeat;
  border: none;
  cursor: pointer;
}

.download-page__main-content {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.download-page__main-text {
  margin: 58px 0 0;
  padding: 0;

  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  color: #000000;
}

.download-page__phone {
  margin: 40px 0 0;
  padding: 0;
}

.download-page__links-wrapper {
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;

  box-sizing: border-box;
  margin: 55px 0 0;
  padding: 30px 22px 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background: #FFFFFF;
  box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.1);
}

.download-page__links-list {
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 330px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  list-style: none;
}

.download-page__links-item {
  margin: 0;
  padding: 0;
  display: flex;
}

.download-page__store-link {
  margin: 0;
  padding: 0;
  width: 150px;
  height: 50px;

  background: url("../assets/icon-store.svg") center no-repeat;
}

.download-page__play-link {
  margin: 0;
  padding: 0;
  width: 170px;
  height: 50px;

  background: url("../assets/icon-play.svg") center no-repeat;
}

.download-page__company-info {
  margin: 140px 0 140px;
  padding: 0 20px;

  display: none;
}

@media screen and (min-width: 748px) {
  .download-page__burger-button,
  .download-page__burger-modal {
    display: none;
  }

  .download-page__company-info {
    display: flex;
  }
}

@media screen and (min-width: 1280px) {
  .download-page__links-wrapper {
    padding: 0;
    width: 330px;
    position: unset;
    box-shadow: none;
  }

  .download-page__company-info {
    margin-bottom: 20px;
  }
}
</style>