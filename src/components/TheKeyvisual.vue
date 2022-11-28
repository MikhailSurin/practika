<template>
  <section class="keyvisual">
    <b class="keyvisual__text">Welcome to</b>
    <img class="keyvisual__logo" src="../assets/practico-logo-white.svg" alt="Practico logo" width="150" height="30">
    <p class="keyvisual__desc">
      Get free access to your<br>
      personal well-being guide<br>
      in just a few steps.
    </p>
  </section>
</template>

<script>

export default {
  name: "TheKeyvisual",
  components: {
  },
}
</script>

<style>
@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(0);
  }
}
.keyvisual {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background: url('../assets/icons.svg') center -35px no-repeat, linear-gradient(0deg, #00A5D9 0%, #00D9D7 100%);
}

.keyvisual::after {
  content: "";
  position: absolute;
  top: 170px;
  left: calc(50% - 60px);

  display: block;
  width: 120px;
  height: 120px;

  background: url('../assets/meditation-img.png') center no-repeat;
  animation: float 3s infinite ease-in-out;
}

.keyvisual__text {
  margin: 60px 0 0;
  padding: 0;

  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: #ffffff;
}

.keyvisual__logo {
  margin: 5px 0 0;
  padding: 0;
}

.keyvisual__desc {
  margin: 195px 0 70px;
  padding: 0;

  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  color: #FFFFFF;
}
</style>