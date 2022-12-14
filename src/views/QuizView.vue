<template>
  <div class="quiz-page">
    <header class="quiz-page__header">
      <h2 class="quiz-page__heading visually-hidden">Short quiz</h2>
      <button class="quiz-page__back-button" @click="stepBackButtonClickHandler">
        <span class="quiz-page__button-text visually-hidden">Go back</span>
      </button>
      <img class="quiz-page__logo" src="../assets/practico-logo-black.svg" alt="practico" width="75" height="15">
      <span class="quiz-page__progress" v-if="showQuiz">
        <span class="quiz-page__current-step">{{ currentStep }}</span>
        /
        <span class="quiz-page__max-pages">{{ quiz.length }}</span>
      </span>
      <button
        v-if="showLoader"
        class="quiz-page__burger-button"
        @click="burgerButtonClickHandler"
      >
        <span class="quiz-page__button-text visually-hidden">
          show menu
        </span>
      </button>
      <the-burger-modal
        class="main-page__burger-modal"
        v-if="showModal"
        v-on:closeModalEvent="closeModalEventHandler"
      />
    </header>
    <main class="quiz-page__main-content quiz" v-if="showQuiz">
      <div class="quiz__progress-bar" :style="`--line-width: ${currentPercentProgress}%`" />

      <h3 class="quiz__title">{{ currentQuestionData.title }}</h3>
      <p class="quiz__hint">{{ currentQuestionData.hint }}</p>

      <ul class="quiz__list" v-if="currentQuestionData.type === 'radio'">
        <li class="quiz__item" v-for="answer in currentQuestionData.answers" :key="answer.id">
          <input
            class="quiz__input visually-hidden"
            type="radio"
            :name="answer.name"
            :id="answer.id"
            :value="answer.value"
            @change="radioButtonChangeHandler"
          >
          <label class="quiz__label" :for="answer.id">{{ answer.text }}</label>
        </li>
      </ul>

      <ul class="quiz__list" v-else>
        <li class="quiz__item" v-for="answer in currentQuestionData.answers" :key="answer.id">
          <input
            class="quiz__input visually-hidden"
            type="checkbox"
            :name="answer.name"
            :id="answer.id"
            @change="checkboxChangeHandler"
          >
          <label class="quiz__label" :for="answer.id">{{ answer.text }}</label>
        </li>
      </ul>

      <div class="quiz__button-wrapper">
        <app-button
          class="quiz__apply-button"
          text="Next step"
          :disabled="currentQuestionData.userAnswer === null || currentQuestionData.userAnswer.length === 0"
          @click="nextButtonClickHandler"
        />
      </div>
      <app-company-info class="quiz-page__company-info" />
    </main>
    <main class="quiz-page__result-calc" v-if="showLoader">
      <h2 class="quiz-page__heading visually-hidden">Calculating your result</h2>
      <b class="quiz-page__hint">
        Hold on a moment!<br>
        We’re analyzing the data<br>
        to tailor your experience
      </b>

      <the-circle-progress
        class="quiz-page__round-progress"
        v-if="showLoader"
        v-on:percentChange="percentChangeHandler"
      />

      <ul class="quiz-page__steps-list">
        <li :class="[
            step.selected ? 'quiz-page__steps-item--selected' : '',
            'quiz-page__steps-item',
          ]" v-for="step in steps" :key="step">
          {{ step.selected ? step.text + '...' : step.text }}
        </li>
      </ul>
      <app-company-info class="quiz-page__company-info" />
    </main>
  </div>
</template>

<script>
import AppButton from "../components/AppButton.vue"
import AppCompanyInfo from "../components/AppCompanyInfo.vue"
import TheBurgerModal from "../components/TheBurgerModal.vue"
import TheCircleProgress from "../components/TheCircleProgress.vue"

export default {
  name: "QuizView",
  components: {
    AppButton,
    AppCompanyInfo,
    TheBurgerModal,
    TheCircleProgress,
  },
  data() {
    return {
      showQuiz: true,
      showLoader: false,
      showModal: false,
      currentStep: 1,
      quiz: [
        {
          question: 1,
          title: 'How old are you?',
          hint: 'The law says you have to be 18 y.o. or older to continue.',
          type: 'radio',
          answers: [
            {
              text: '50+',
              id: 1,
              name: 'user_age',
              value: '50+',
            },
            {
              text: '40-50',
              id: 2,
              name: 'user_age',
              value: '40-50',
            },
            {
              text: '30-40',
              id: 3,
              name: 'user_age',
              value: '30-40',
            },
            {
              text: '25-30',
              id: 4,
              name: 'user_age',
              value: '25-30',
            },
            {
              text: '18-25',
              id: 5,
              name: 'user_age',
              value: '18-25',
            },
          ],
          userAnswer: null,
        },
        {
          question: 2,
          title: 'First, let’s see what worries you the most?',
          hint: 'Feel free to pick multiple options.',
          type: 'checkbox',
          answers: [
            {
              text: 'Stress and anxiety',
              id: 6,
              name: 'Stress and anxiety',
            },
            {
              text: 'Lack of sleep',
              id: 7,
              name: 'Lack of sleep',
            },
            {
              text: 'Poor productivity',
              id: 8,
              name: 'Poor productivity',
            },
            {
              text: 'Bad mood',
              id: 9,
              name: 'Bad mood',
            },
            {
              text: 'Just curious',
              id: 10,
              name: 'Just curious',
            },
          ],
          userAnswer: [],
        },
        {
          question: 3,
          title: 'How often you do experience stress?',
          hint: 'Pick one most accurate answer.',
          type: 'radio',
          answers: [
            {
              text: 'I’m constantly stressed',
              id: 11,
              name: 'periodicity_of_stress',
              value: 'I’m constantly stressed',
            },
            {
              text: 'Almost every day',
              id: 12,
              name: 'periodicity_of_stress',
              value: 'Almost every day',
            },
            {
              text: 'Few times a week',
              id: 13,
              name: 'periodicity_of_stress',
              value: 'Few times a week',
            },
            {
              text: 'Every now and then',
              id: 14,
              name: 'periodicity_of_stress',
              value: 'Every now and then',
            },
            {
              text: 'What is ‘stress’?',
              id: 15,
              name: 'periodicity_of_stress',
              value: 'What is ‘stress’?',
            },
          ],
          userAnswer: [],
        },
        {
          question: 4,
          title: 'How would you rate your level of stress?',
          hint: 'Pick one most accurate answer.',
          type: 'radio',
          answers: [
            {
              text: 'Always on edge',
              id: 16,
              name: 'level_of_stress',
              value: 'Always on edge',
            },
            {
              text: 'A lot of pressure',
              id: 17,
              name: 'level_of_stress',
              value: 'A lot of pressure',
            },
            {
              text: 'Just moderate',
              id: 18,
              name: 'level_of_stress',
              value: 'Just moderate',
            },
            {
              text: 'I can handle it',
              id: 19,
              name: 'level_of_stress',
              value: 'I can handle it',
            },
            {
              text: 'I’m usually chill',
              id: 20,
              name: 'level_of_stress',
              value: 'I’m usually chill',
            },
          ],
          userAnswer: [],
        },
        {
          question: 5,
          title: 'What areas of your life cause more stress?',
          hint: 'Feel free to pick multiple options.',
          type: 'checkbox',
          answers: [
            {
              text: 'Work and education',
              id: 21,
              name: 'Work and education',
            },
            {
              text: 'Relationships and family',
              id: 22,
              name: 'Relationships and family',
            },
            {
              text: 'Personal health',
              id: 23,
              name: 'Personal health',
            },
            {
              text: 'Habits and addictions',
              id: 24,
              name: 'Habits and addictions',
            },
            {
              text: 'Something else',
              id: 25,
              name: 'Something else',
            },
          ],
          userAnswer: [],
        },
        {
          question: 6,
          title: 'How does your stress usually manifest itself?',
          hint: 'Feel free to pick multiple options.',
          type: 'checkbox',
          answers: [
            {
              text: 'Anxiety during the day',
              id: 26,
              name: 'Anxiety during the day',
            },
            {
              text: 'Sudden mood swings',
              id: 27,
              name: 'Sudden mood swings',
            },
            {
              text: 'Issues with sleep',
              id: 28,
              name: 'Issues with sleep',
            },
            {
              text: 'Physical pain',
              id: 29,
              name: 'Physical pain',
            },
            {
              text: 'Lack of focus',
              id: 30,
              name: 'Lack of focus',
            },
          ],
          userAnswer: [],
        },
        {
          question: 7,
          title: 'How long do you usually sleep at night?',
          hint: 'Pick one most accurate answer.',
          type: 'radio',
          answers: [
            {
              text: '10 hours or more',
              id: 31,
              name: 'sleep_duration',
              value: '10 hours or more',
            },
            {
              text: '8 - 10 hours',
              id: 32,
              name: 'sleep_duration',
              value: '8 - 10 hours',
            },
            {
              text: '6 - 8 hours',
              id: 33,
              name: 'sleep_duration',
              value: '6 - 8 hours',
            },
            {
              text: '4 - 6 hours',
              id: 34,
              name: 'sleep_duration',
              value: '4 - 6 hours',
            },
            {
              text: '4 hours or less',
              id: 35,
              name: 'sleep_duration',
              value: '4 hours or less',
            },
          ],
          userAnswer: [],
        },
        {
          question: 8,
          title: 'How do you usually feel in the morning?',
          hint: 'Pick one most accurate answer.',
          type: 'radio',
          answers: [
            {
              text: 'Fresh and well rested',
              id: 36,
              name: 'morning_feel',
              value: 'Fresh and well rested',
            },
            {
              text: 'A little sleepy',
              id: 37,
              name: 'morning_feel',
              value: 'A little sleepy',
            },
            {
              text: 'Not great, not terrible',
              id: 38,
              name: 'morning_feel',
              value: 'Not great, not terrible',
            },
            {
              text: 'Lazy and weak',
              id: 39,
              name: 'morning_feel',
              value: 'Lazy and weak',
            },
            {
              text: 'Tired and broken',
              id: 40,
              name: 'morning_feel',
              value: 'Tired and broken',
            },
          ],
          userAnswer: [],
        },
        {
          question: 9,
          title: 'Do you ever take naps during the daytime?',
          hint: 'Pick one most accurate answer.',
          type: 'radio',
          answers: [
            {
              text: 'Yes, I do it quite often',
              id: 41,
              name: 'daytime_naps',
              value: 'Yes, I do it quite often',
            },
            {
              text: 'Every now and then',
              id: 42,
              name: 'daytime_naps',
              value: 'Every now and then',
            },
            {
              text: 'Almost never',
              id: 43,
              name: 'daytime_naps',
              value: 'Almost never',
            },
          ],
          userAnswer: [],
        },
        {
          question: 10,
          title: 'Do you usually use your phone or tablet in bed?',
          hint: 'Pick one most accurate answer.',
          type: 'radio',
          answers: [
            {
              text: 'Yes, I can’t put it away',
              id: 44,
              name: 'phone_in_bed',
              value: 'Yes, I can’t put it away',
            },
            {
              text: 'Sometimes, if I have to',
              id: 45,
              name: 'phone_in_bed',
              value: 'Sometimes, if I have to',
            },
            {
              text: 'No, I try not to',
              id: 46,
              name: 'phone_in_bed',
              value: 'No, I try not to',
            },
          ],
          userAnswer: [],
        },
        {
          question: 11,
          title: 'Do you experience any of these issues at night?',
          hint: 'Feel free to pick multiple options.',
          type: 'checkbox',
          answers: [
            {
              text: 'Anxious thoughts',
              id: 47,
              name: 'Anxious thoughts',
            },
            {
              text: 'Sudden awakenings',
              id: 48,
              name: 'Sudden awakenings',
            },
            {
              text: 'Sleepwalking',
              id: 49,
              name: 'Sleepwalking',
            },
            {
              text: 'Bad dreams',
              id: 50,
              name: 'Bad dreams',
            },
            {
              text: 'No, my sleep is sound',
              id: 51,
              name: 'No, my sleep is sound',
            },
          ],
          userAnswer: [],
        },
        {
          question: 12,
          title: 'Have you ever practiced meditation before?',
          hint: 'Pick one most accurate answer.',
          type: 'radio',
          answers: [
            {
              text: 'Yes, I’m a pro',
              id: 52,
              name: 'meditation_practice',
              value: 'Yes, I’m a pro',
            },
            {
              text: 'Yes, but not too much',
              id: 53,
              name: 'meditation_practice',
              value: 'Yes, but not too much',
            },
            {
              text: 'No, I’m a first-timer',
              id: 54,
              name: 'meditation_practice',
              value: 'No, I’m a first-timer',
            },
          ],
          userAnswer: [],
        },
        {
          question: 13,
          title: 'How much time per day are you willing to devote?',
          hint: 'Pick one most accurate answer.',
          type: 'radio',
          answers: [
            {
              text: '5 minutes or less',
              id: 55,
              name: 'time_to_devote',
              value: '5 minutes or less',
            },
            {
              text: '5-10 minutes',
              id: 56,
              name: 'time_to_devote',
              value: '5-10 minutes',
            },
            {
              text: '15 minutes and more',
              id: 57,
              name: 'time_to_devote',
              value: '15 minutes and more',
            },
          ],
          userAnswer: [],
        },
        {
          question: 14,
          title: 'When is the best time for your daily exercise?',
          hint: 'Feel free to pick multiple options.',
          type: 'checkbox',
          answers: [
            {
              text: 'Early in the morning',
              id: 58,
              name: 'Early in the morning',
            },
            {
              text: 'During lunch break',
              id: 59,
              name: 'During lunch break',
            },
            {
              text: 'At home after work',
              id: 60,
              name: 'At home after work',
            },
            {
              text: 'In bed before sleep',
              id: 61,
              name: 'In bed before sleep',
            },
            {
              text: 'Anytime',
              id: 62,
              name: 'Anytime',
            },
          ],
          userAnswer: [],
        },
        {
          question: 13,
          title: 'Do you have any medical conditions?',
          hint: 'If you’ve been diagnosed with any physical or mental health issues, please consult your doctor before you proceed.',
          type: 'radio',
          answers: [
            {
              text: 'Yes',
              id: 63,
              name: 'medical_conditions',
              value: 'Yes',
            },
            {
              text: 'No',
              id: 64,
              name: 'medical_conditions',
              value: 'No',
            },
          ],
          userAnswer: [],
        },
      ],
      steps: [
        {
          text: 'Analyzing answers',
          selected: true,
        },
        {
          text: 'Matching results',
          selected: false,
        },
        {
          text: 'Building a program',
          selected: false,
        },
        {
          text: 'Personalizing',
          selected: false,
        },
      ],
    }
  },
  computed: {
    currentQuestionData() {
      return this.quiz[this.currentStep - 1]
    },
    currentPercentProgress() {
      return (this.currentStep / this.quiz.length) * 100
    }
  },
  methods: {
    radioButtonChangeHandler(event) {
      this.currentQuestionData.userAnswer = event.target.value
      console.log(this.currentQuestionData.userAnswer)
    },
    checkboxChangeHandler(event) {
      if (event.target.checked) {
        this.currentQuestionData.userAnswer.push(event.target.name)
      } else {
        const index = this.currentQuestionData.userAnswer.findIndex(answer => answer === event.target.name)
        this.currentQuestionData.userAnswer.splice(index, 1)
      }
      console.log(this.currentQuestionData.userAnswer)
    },
    nextButtonClickHandler() {
      if (this.currentStep < this.quiz.length) {
        this.currentStep++
      } else {
        console.log('Сабмит')
        this.showQuiz = false
        this.showLoader = true
      }
    },
    burgerButtonClickHandler() {
      this.showModal = !this.showModal
      document.body.classList.toggle('lock')
    },
    closeModalEventHandler() {
      this.showModal = !this.showModal
      document.body.classList.toggle('lock')
    },
    stepBackButtonClickHandler() {
      if (this.currentStep > 1) {
        // Clear data in current step and in prev step
        this.currentQuestionData.userAnswer = []
        this.currentStep--
        this.currentQuestionData.userAnswer = []
      }
    },
    percentChangeHandler(percent) {
      console.log(percent)
      // Need refactoring...
      if (percent >= 25 && percent < 50) {
        this.steps[0].selected = false
        this.steps[1].selected = true
        console.log('2')
      } else if (percent >= 50 && percent < 75) {
        this.steps[1].selected = false
        this.steps[2].selected = true
        console.log('3')
      } else if (percent >= 75 && percent < 100) {
        this.steps[2].selected = false
        this.steps[3].selected = true
        console.log('4')
      } else if (percent === 100) {
        this.$router.push('/submit')
      }
    },
  },
}
</script>

<style>
.quiz-page {
  box-sizing: border-box;
  margin: 0 auto;
  padding: 20px 45px 120px;
  width: 100%;
  max-width: 720px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background: #FFFFFF;
  box-shadow: 0 4px 184px rgba(0, 0, 0, 0.1);
}

.quiz-page__header {
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 460px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}

.quiz-page__logo {
  margin: 0 auto;
}

.quiz-page__main-content {
  flex-grow: 1;
}

.quiz-page__back-button {
  margin: 0;
  padding: 0;
  width: 40px;
  height: 40px;

  background: url('../assets/icon-arrow.svg') center no-repeat;
  border: none;
  cursor: pointer;
}

.quiz-page__progress {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  font-weight: 500;
  font-style: normal;
  font-size: 20px;
  line-height: 25px;
  color: #000000;
}

.quiz-page__current-step {
  margin: 0;
  padding: 0;

  color: #01C3D8;
}

.quiz {
  margin: 0 ;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  overflow-y: scroll;
}

.quiz__progress-bar {
  position: relative;
  margin: 10px 0 0;
  padding: 0;
  width: 100%;
  max-width: 460px;
  align-self: center;
  height: 5px;

  background: #E5E5EA;
  border-radius: 3px;
}

.quiz__progress-bar::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;

  display: block;
  width: var(--line-width);

  background: linear-gradient(270deg, #01D9D7 0%, #01A5D9 100%);
  border-radius: 3px;
  transition: width 0.2s ease-in-out;
}

.quiz__title {
  max-width: 300px;
  margin: 30px 0 0;
  padding: 0;
  align-self: center;

  font-weight: 500;
  font-style: normal;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  color: #000000;
}

.quiz__hint {
  margin: 15px 0 0;
  padding: 0;
  max-width: 300px;
  align-self: center;

  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #A3A3A3;
}

.quiz__list {
  margin: 30px 0 40px;
  padding: 0;
  width: 100%;
  max-width: 460px;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;

  list-style: none;
}

.quiz__item {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
}
.quiz__item:not(:first-child) {
  margin-top: 20px;
}

.quiz__label {
  position: relative;
  box-sizing: border-box;
  margin: 0;
  padding: 15px 60px 15px 15px;

  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  line-height: 25px;
  color: #555555;

  border: 1px solid #E5E5EA;
  background: #E5E5EA;
  border-radius: 10px;

  transition: all 0.2s ease-in-out;
}

.quiz__input:checked ~ .quiz__label {
  border-color: #01C3D8;
  background-color: #ffffff;
}
.quiz__input:checked ~ .quiz__label::after {
  content: "";
  position: absolute;
  top: 15px;
  right: 15px;

  display: block;
  width: 25px;
  height: 25px;

  background: url("../assets/icon-check.svg") center no-repeat;
}

.quiz-page__company-info {
  margin-top: auto;
  margin-bottom: 20px;
}

.quiz__button-wrapper {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  box-sizing: border-box;
  margin: 0;
  padding: 25px 45px 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background: #FFFFFF;
  box-shadow: 0px -5px 15px rgba(0, 0, 0, 0.1);
}

.quiz__apply-button {
  width: 100%;
  max-width: 300px;
}

.quiz-page__burger-button {
  margin: 0;
  padding: 0;
  width: 40px;
  height: 40px;

  background: url("../assets/icon-burger-black.svg") center no-repeat;
  border: none;
  cursor: pointer;
}

.quiz-page__result-calc {
  margin: 55px 0 0;
  padding: 0;
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
}

.quiz-page__hint {
  margin: 0;
  padding: 0;

  font-weight: 500;
  font-style: normal;
  font-size: 25px;
  line-height: 30px;
  text-align: center;
  color: #000000;
}

.quiz-page__round-progress {
  margin: 50px 0 0;
  padding: 0;

  align-self: center;
}

.quiz-page__steps-list {
  margin: 50px 0 40px;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;

  list-style: none;
}

.quiz-page__steps-item {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #A3A3A3;

  transition: all 0.2s ease-in-out;
}

.quiz-page__steps-item--selected {
  color: #01C3D8;
}

.quiz-page__steps-item:not(:first-child) {
  margin-top: 15px;
}

@media screen and (min-width: 1280px) {
  .quiz-page {
    padding-bottom: 0;
  }

  .quiz-page__progress {
    margin: 0 0 0 auto;
  }

  .quiz__list {
    margin-bottom: 0;
  }

  .quiz-page__header {
    justify-content: flex-start;
  }

  .quiz-page__logo {
    margin: 0 0 0 152px;
  }

  .quiz-page__burger-button {
    display: none;
  }

  .quiz__button-wrapper {
    position: unset;
    margin: 50px auto 40px;
    padding: 0;
    box-shadow: none;
  }
}
</style>