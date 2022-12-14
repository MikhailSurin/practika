<template>
  <div class="submit-page">
    <header class="submit-page__header">
      <h1 class="main-page__heading visually-hidden">Submit data</h1>
      <img class="quiz-page__logo" src="../assets/practico-logo-black.svg" alt="practico" width="75" height="15">
      <button
        class="submit-page__burger-button"
        @click="burgerButtonClickHandler"
      >
        <span class="quiz-page__button-text visually-hidden">
          show menu
        </span>
      </button>
      <the-burger-modal class="submit-page__burger-modal" v-if="showModal" v-on:closeModalEvent="closeModalEventHandler"/>
    </header>
    <main class="submit-page__main-content">
      <p class="submit-page__text">
        Practico is ready to meet<br>
        you now! Leave your<br>
        email to get a link
      </p>
      <form class="submit-page__form" action="#" @submit="submitHandler">
        <input class="submit-page__input" type="email" name="email" placeholder="Enter your email" required>
        <span class="submit-page__hint">
          By submitting this data, you accept the<br>
          <a href="https://www.praktika.app/license">user agreement</a> and <a href="https://www.praktika.app/privacy-policy">privacy policy</a>
        </span>
        <div class="submit-page__button-wrapper">
          <app-button
            class="submit-page__submit-button"
            type="submit"
            text="Let’s get to it!"
          />
        </div>
      </form>
    </main>
  </div>
</template>

<script>
import TheBurgerModal from "../components/TheBurgerModal.vue"
import AppButton from "../components/AppButton.vue"

export default {
  name: "SubmitView",
  components: {
    TheBurgerModal,
    AppButton,
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
    submitHandler(event) {
      event.preventDefault()

      const formData = new FormData(event.target)
      const email = formData.get('email')
      this.fetchNewEmail(email)
    },

    fetchNewEmail(email) {
      console.log(email)
      const url = 'https://service-api.praktika.app/api/email/add'

      fetch(url, {
        mode: 'no-cors',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({'email': email})
      })
        .then(response => response.json())
        .then(status => {
          console.log(status)
          this.$router.push('/download')
        })
        .catch(e => {
          console.warn(e)
        })
    },
  },
}
</script>

<style>
.submit-page {
  position: relative;

  margin: 0 auto 120px;
  padding: 0;
  width: 100%;
  height: 100vh;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  background: #FFFFFF;
  box-shadow: 0 4px 184px rgba(0, 0, 0, 0.1);
  overflow-y: scroll;
}

.submit-page__header {
  position: relative;
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.submit-page__burger-button {
  position: absolute;
  top: calc(50% - 20px);
  right: 40px;

  margin: 0;
  padding: 0;
  width: 40px;
  height: 40px;

  background: url('../assets/icon-burger-black.svg') center no-repeat;
  border: none;
  cursor: pointer;
}

.submit-page__main-content {
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.submit-page__text {
  margin: 23px 0 0;
  padding: 0;

  font-weight: 500;
  font-style: normal;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  color: #000000;
}

.submit-page__form {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.submit-page__input {
  box-sizing: border-box;
  width: 270px;
  margin: 30px 0 0;
  padding: 15px;

  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  line-height: 25px;
  color: #A3A3A3;

  border: 1px solid #A3A3A3;
  border-radius: 10px;
}

.submit-page__hint {
  margin: 20px 0 0;
  padding: 0;

  font-weight: 400;
  font-style: normal;
  font-size: 15px;
  line-height: 20px;
  text-align: center;
  color: #A3A3A3;
}

.submit-page__hint a {
  color: #A3A3A3;
}

.submit-page__button-wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  box-sizing: border-box;
  margin: 0;
  padding: 25px 45px 40px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #FFFFFF;
  box-shadow: 0px -5px 15px rgba(0, 0, 0, 0.1);
}

@media screen and (min-width: 748px) {
  .submit-page__burger-button,
  .submit-page__burger-modal {
    display: none;
  }
}

@media screen and (min-width: 1280px) {
  .submit-page__header .quiz-page__logo {
    margin: 33px auto;
  }

  .submit-page__button-wrapper {
    position: unset;

    margin: 40px 0 0;
    padding: 0;

    box-shadow: none;
  }
}
</style>