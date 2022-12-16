<template>
  <div class="unsubscribe-view">
    <header class="unsubscribe-view__header">
      <h1 class="unsubscribe-view__heading visually-hidden">Unsubscribe</h1>
      <img class="unsubscribe-view__logo" src="../assets/practico-logo-black.svg" alt="practico" width="75" height="15">
      <button
        class="unsubscribe-view__burger-button"
        @click="burgerButtonClickHandler"
      >
        <span class="unsubscribe-view__button-text visually-hidden">
          show menu
        </span>
      </button>
      <the-burger-modal class="unsubscribe-view__burger-modal" v-if="showModal" v-on:closeModalEvent="closeModalEventHandler"/>
    </header>

    <main class="unsubscribe-view__main-content">
      <p class="unsubscribe-view__text">
        Are you sure you want<br> to unsubscribe?
      </p>
      <app-button class="unsubscribe-view__button" text="Unsubscribe now" @click="unsubscribeButtonClickHandler"/>

      <app-company-info class="unsubscribe-view__company-info" />
      <ul class="unsubscribe-view__store-list">
        <li class="unsubscribe-view__store-item">
          <a class="unsubscribe-view__store-link" href="https://apps.apple.com/ru/app/meditation-sleep-praktika/id1467786415?l=en">
            <span class="unsubscribe-view__link-text visually-hidden">Download on the App Store</span>
          </a>
        </li>
        <li class="unsubscribe-view__store-item">
          <a class="unsubscribe-view__play-link" href="https://play.google.com/store/apps/details?id=com.praktika.app">
            <span class="unsubscribe-view__link-text visually-hidden">Get it on Google Play</span>
          </a>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import TheBurgerModal from "../components/TheBurgerModal.vue"
import AppCompanyInfo from "../components/AppCompanyInfo.vue"
import AppButton from "../components/AppButton.vue"

export default {
  name: "UnsubscribeView",
  components: {
    TheBurgerModal,
    AppCompanyInfo,
    AppButton,
  },
  data() {
    return {
      showModal: false,
      unsubscribeCode: null,
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
    unsubscribeButtonClickHandler() {
      if (this.unsubscribeCode) {
        this.fetchUnsubscribeCode()
      } else {
        console.warn(`Can't fetch data with empty code`)
      }
    },
    getCodeFromURL() {
      const urlData = window.location.href.split('/')
      if (urlData.length >= 5) {
        this.unsubscribeCode = window.location.href.split('/')[4]
      } else {
        console.warn('Empty code')
      }
    },
    fetchUnsubscribeCode() {
      const url = 'https://service-api.praktika.app/api/email/unsubscribe'

      fetch(url, {
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({unsubscribe_code: this.unsubscribeCode})
      })
        .then(response => response.json())
        .then(status => {
          console.log(status)
          this.unsubscribeCode = null
        })
        .catch(e => {
          console.warn(e)
        })
    },
  },
  mounted() {
    this.getCodeFromURL()
  },
}
</script>

<style>
.unsubscribe-view {
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.unsubscribe-view__header {
  position: relative;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}

.unsubscribe-view__burger-button {
  position: absolute;
  right: 45px;
  top: calc(50% - 12px);

  margin: 0;
  padding: 0;
  width: 25px;
  height: 22px;

  background: url('../assets/icon-burger-black.svg') center no-repeat;
  border: none;
  cursor: pointer;
}

.unsubscribe-view__logo {
  margin: 32px 0;
}

.unsubscribe-view__main-content {
  box-sizing: border-box;
  margin: 0;
  padding: 0 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.unsubscribe-view__text {
  margin: auto 0 0;
  padding: 0;

  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  color: #000000;

}

.unsubscribe-view__button {
  margin: 30px 0;
}

.unsubscribe-view__company-info {
  display: none;
}

.unsubscribe-view__store-list {
  margin: auto 0 40px;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  width: 276px;

  list-style: none;
}

.unsubscribe-view__store-item {
  margin: 0;
  padding: 0;
  display: flex;
}

.unsubscribe-view__store-link {
  margin: 0;
  padding: 0;
  width: 120px;
  height: 40px;

  background: url('../assets/icon-store.svg') center / contain no-repeat;
}
.unsubscribe-view__play-link {
  margin: 0;
  padding: 0;
  width: 136px;
  height: 40px;

  background: url('../assets/icon-play.svg') center / contain no-repeat;
}

@media screen and (min-width: 748px) {
  .unsubscribe-view__logo {
    margin-top: 40px;
  }

  .unsubscribe-view__burger-button {
    display: none;
  }

  .unsubscribe-view__company-info {
    display: flex;
  }

  .unsubscribe-view__company-info {
    margin-top: auto;
  }
  .unsubscribe-view__store-list {
    margin-top: 40px;
  }
}

</style>