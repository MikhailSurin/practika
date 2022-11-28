<template>
  <section class="app-desc">
    <h2 class="app-desc__heading">Best App for Mindful Life</h2>
    <p class="app-desc__text">
      It has all I need to stay calm,<br>
      focus better, and sleep well.
    </p>
    <span class="app-desc__author">
      by David K, US
    </span>
    <img class="app-desc__rating" src="../assets/rating.png" alt="App rating" width="152" height="25">
  </section>
</template>

<script>
export default {
  name: "TheAppDesc"
}
</script>

<style>
.app-desc {
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.app-desc__heading {
  margin: 50px 0 0;
  padding: 0;

  font-weight: 500;
  font-style: normal;
  font-size: 25px;
  line-height: 30px;
  color: #000000;
}
.app-desc__text {
  margin: 50px 0 0;
  padding: 0;

  font-weight: 500;
  font-style: normal;
  font-size: 25px;
  line-height: 30px;
  color: #000000;
}
.app-desc__text {
  margin: 10px 0 0;
  padding: 0;

  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  line-height: 25px;
  color: #000000;
}
.app-desc__author {
  margin: 10px 0 0;
  padding: 0;

  font-weight: 400;
  font-style: normal;
  font-size: 15px;
  line-height: 20px;
  color: #A3A3A3;
}
.app-desc__rating {
  margin: 15px 0 0;
  padding: 0;
}
</style>