<template>
  <div class="main-page">
    <header class="main-page__header">
      <h1 class="main-page__heading visually-hidden">Welcome to Practico</h1>
      <the-burger-button class="main-page__burger-button" @click="burgerButtonClickHandler" />
      <the-burger-modal class="main-page__burger-modal" v-if="showModal" v-on:closeModalEvent="closeModalEventHandler"/>
    </header>
    <main class="main-page__inner">
      <the-keyvisual class="main-page__keyvisual" />
      <the-app-desc class="main-page__desc" />
      <div class="main-page__button-wrapper">
        <app-button class="main-page__next-button" text="Begin your journey" @click="$router.push('/quiz')"/>
      </div>
      <app-company-info class="main-page__company-info" />
      <ul class="main-page__store-list">
        <li class="main-page__store-item">
          <a class="main-page__store-link" href="#">
            <span class="main-page__link-text visually-hidden">Download on the App Store</span>
          </a>
        </li>
        <li class="main-page__store-item">
          <a class="main-page__play-link" href="#">
            <span class="main-page__link-text visually-hidden">Get it on Google Play</span>
          </a>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import TheBurgerButton from "../components/TheBurgerButton.vue"
import TheBurgerModal from "../components/TheBurgerModal.vue"
import TheKeyvisual from "../components/TheKeyvisual.vue"
import TheAppDesc from "../components/TheAppDesc.vue"
import AppButton from "../components/AppButton.vue"
import AppCompanyInfo from "../components/AppCompanyInfo.vue"

export default {
  name: "MainPageView",
  components: {
    TheBurgerButton,
    TheBurgerModal,
    TheKeyvisual,
    TheAppDesc,
    AppButton,
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
    }
  },
}
</script>

<style>
.main-page__inner {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.main-page__keyvisual {
  align-self: stretch;
}
.main-page__desc {
  margin-bottom: 150px;
}
.main-page__button-wrapper {
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;

  box-sizing: border-box;
  margin: 0;
  padding: 25px 45px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #FFFFFF;
  box-shadow: 0 -5px 15px rgba(0, 0, 0, 0.1);
}

.main-page__company-info,
.main-page__store-list{
  display: none;
}

@media screen and (min-width: 748px) {
  .main-page__header {
    display: none;
  }
  .main-page__desc {
    margin-bottom: 0;
  }
  .main-page__company-info {
    margin: 100px 0 0;
    display: flex;
  }
  .main-page__store-list {
    margin: 40px 0 185px;
    padding: 0;
    width: 280px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
  }
  .main-page__store-item {
    margin: 0;
    padding: 0;
    display: flex;
  }
  .main-page__store-item:not(:first-child) {
    margin-left: 20px;
  }
  .main-page__store-link {
    margin: 0;
    padding: 0;
    width: 120px;
    height: 40px;

    background: url('../assets/icon-store.svg') center / contain no-repeat;
  }
  .main-page__play-link {
    margin: 0;
    padding: 0;
    width: 136px;
    height: 40px;

    background: url('../assets/icon-play.svg') center / contain no-repeat;
  }
}

@media screen and (min-width: 1280px) {
  .main-page__button-wrapper {
    position: unset;

    margin: 40px 0 0;
    padding: 0;

    box-shadow: none;
  }

  .main-page__store-list {
    margin-bottom: 65px;
  }
}
</style>