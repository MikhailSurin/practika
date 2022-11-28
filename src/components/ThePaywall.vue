<template>
  <!-- DEPRECATED -->
  <div class="paywall">
    <ul class="paywall__s-list">
      <li class="paywall__s-item">
        <img class="paywall__s-image" src="../assets/keyvisual/onTheWalk.svg" alt="on the walk">
      </li>
      <li class="paywall__s-item">
        <img class="paywall__s-image" src="../assets/keyvisual/jogging.svg" alt="jogging">
      </li>
      <li class="paywall__s-item">
        <img class="paywall__s-image" src="../assets/keyvisual/quickFocus.svg" alt="quick focus">
      </li>
      <li class="paywall__s-item">
        <img class="paywall__s-image" src="../assets/keyvisual/stopAnxiety.svg" alt="stop anxiety">
      </li>
      <li class="paywall__s-item">
        <img class="paywall__s-image" src="../assets/keyvisual/wakingUp.svg" alt="waking up">
      </li>
      <li class="paywall__s-item">
        <img class="paywall__s-image" src="../assets/keyvisual/forKids.svg" alt="for kids">
      </li>
    </ul>
    <ul class="paywall__m-list">
      <li class="paywall__m-item">
        <img src="../assets/keyvisual/routine.svg" alt="routine">
      </li>
      <li class="paywall__m-item">
        <img src="../assets/keyvisual/deepRelax.svg" alt="deep relax">
      </li>
      <li class="paywall__m-item">
        <img src="../assets/keyvisual/commuting.svg" alt="commuting">
      </li>
      <li class="paywall__m-item">
        <img src="../assets/keyvisual/meditation.svg" alt="meditation">
      </li>
      <li class="paywall__m-item">
        <img src="../assets/keyvisual/afterWorkout.svg" alt="after workout">
      </li>
      <li class="paywall__m-item">
        <img src="../assets/keyvisual/dreams.svg" alt="dreams">
      </li>
    </ul>
    <ul class="paywall__l-list">
      <li class="paywall__l-item">
        <img src="../assets/keyvisual/sadness.svg" alt="sadness">
      </li>
      <li class="paywall__l-item">
        <img src="../assets/keyvisual/zeroStress.svg" alt="zero stress">
      </li>
      <li class="paywall__l-item">
        <img src="../assets/keyvisual/brainRelief.svg" alt="brain relief">
      </li>
      <li class="paywall__l-item">
        <img src="../assets/keyvisual/soundSleep.svg" alt="sound sleep">
      </li>
      <li class="paywall__l-item">
        <img src="../assets/keyvisual/dailyLesson.svg" alt="daily lesson">
      </li>
      <li class="paywall__l-item">
        <img src="../assets/keyvisual/balance.svg" alt="balance">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ThePaywall"
}
</script>

<style>
@keyframes wavering {
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(10px);
  }
  50% {
    transform: translateY(0);
  }
  75% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

.paywall {
  position: relative;
  padding: 0;
  width: 100%;
  min-height: 315px;

  overflow: hidden;
}

.paywall__s-list {
  position: absolute;
  top: 10px;
  left: calc(50% - 251px);
  margin: 0;
  padding: 0;
  width: 502px;
  display: grid;
  grid-template-columns: 48px 48px 48px 48px 48px 48px;
  grid-template-rows: 48px 48px 48px;
  grid-column-gap: 43px;
  grid-row-gap: 81px;

  list-style: none;
  animation: wavering 5s infinite linear 1s;
}

.paywall__s-item {
  margin: 0;
  padding: 0;
}
.paywall__s-item:nth-child(1) {
  grid-row: 0 / 1;
  grid-column: 1 / 2;
}
.paywall__s-item:nth-child(2) {
  grid-row: 2 / 3;
  grid-column: 2 / 3;
}
.paywall__s-item:nth-child(3) {
  grid-row: 3 / 4;
  grid-column: 3 / 4;
}
.paywall__s-item:nth-child(4) {
  grid-row: 2 / 3;
  grid-column: 4 / 5;
}
.paywall__s-item:nth-child(5) {
  grid-row: 1 / 2;
  grid-column: 5 / 6;
}
.paywall__s-item:nth-child(6) {
  grid-row: 2 / 3;
  grid-column: 6 / 7;
}

.paywall__m-list {
  position: absolute;
  top: 79px;
  left: calc(50% - 260px);
  margin: 0;
  padding: 0;
  width: 520px;
  display: grid;
  grid-template-columns: 64px 64px 64px 64px 64px 64px;
  grid-template-rows: 64px 64px;
  grid-column-gap: 27px;
  grid-row-gap: 66px;

  list-style: none;
  animation: wavering 5s infinite linear 2s;
}

.paywall__m-item {
  margin: 0;
  padding: 0;
}
.paywall__m-item:nth-child(1) {
  grid-row: 1 / 2;
  grid-column: 1 / 2;
}
.paywall__m-item:nth-child(2) {
  grid-row: 2 / 3;
  grid-column: 2 / 3;
}
.paywall__m-item:nth-child(3) {
  grid-row: 1 / 2;
  grid-column: 3 / 4;
}
.paywall__m-item:nth-child(4) {
  grid-row: 2 / 3;
  grid-column: 4 / 5;
}
.paywall__m-item:nth-child(5) {
  grid-row: 1 / 2;
  grid-column: 5 / 6;
}
.paywall__m-item:nth-child(6) {
  grid-row: 2 / 3;
  grid-column: 6 / 7;
}

.paywall__l-list {
  position: absolute;
  top: 36px;
  left: calc(50% - 268px);
  margin: 0;
  padding: 0;
  width: 536px;
  display: grid;
  grid-template-columns: 80px 80px 80px 80px 80px 80px;
  grid-template-rows: 80px 80px;
  grid-column-gap: 11px;
  grid-row-gap: 50px;

  list-style: none;
  animation: wavering 5s infinite reverse linear 1.5s;
}

.paywall__l-item {
  margin: 0;
  padding: 0;
}
.paywall__l-item:nth-child(1) {
  grid-row: 2 / 3;
  grid-column: 1 / 2;
}
.paywall__l-item:nth-child(2) {
  grid-row: 1 / 2;
  grid-column: 2 / 3;
}
.paywall__l-item:nth-child(3) {
  grid-row: 2 / 3;
  grid-column: 3 / 4;
}
.paywall__l-item:nth-child(4) {
  grid-row: 1 / 2;
  grid-column: 4 / 5;
}
.paywall__l-item:nth-child(5) {
  grid-row: 2 / 3;
  grid-column: 5 / 6;
}
.paywall__l-item:nth-child(6) {
  grid-row: 1 / 2;
  grid-column: 6 / 7;
}
</style>