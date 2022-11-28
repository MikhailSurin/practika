<template>
  <button class="app-button" type="button">{{ text }}</button>
</template>

<script>
export default {
  name: "AppButton",
  props: ['text'],
}
</script>

<style>
.app-button {
  box-sizing: border-box;
  padding: 15px 20px 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 300px;

  font-weight: 400;
  font-size: 19px;
  line-height: 23px;
  color: #FFFFFF;

  background: linear-gradient(0deg, #00A5D9 0%, #00D9D7 100%);
  border: none;
  border-radius: 100px;

  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.app-button:disabled {
  background: linear-gradient(0deg, #999999 0%, #C3C3C3 100%);
  cursor: unset;
}
</style>