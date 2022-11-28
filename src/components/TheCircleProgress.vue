<template>
  <div class="round-progress">
    <svg
      class="round-progress__ring"
      width="200"
      height="200"
    >
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#00D9D7" />
          <stop offset="100%" stop-color="#00A5D9" />
        </linearGradient>
      </defs>
      <circle
        class="round-progress__circle"
        stroke="#E5E5EA"
        stroke-width="10"
        cx="50%"
        cy="50%"
        r="80"
        fill="transparent"
      />
      <circle
        class="round-progress__circle"
        ref="circle"
        stroke="url(#gradient)"
        stroke-width="10"
        cx="50%"
        cy="50%"
        r="80"
        fill="transparent"
      />
    </svg>
    <span class="round-progress__percent">{{ percent }}%</span>
  </div>
</template>

<script>
export default {
  name: "TheCircleProgress",
  data() {
    return {
      circle: null,
      radius: null,
      circumference: null,
      percent: 0,
    }
  },
  methods: {
    initCircle() {
      this.circle = this.$refs.circle
      this.radius = this.circle.r.baseVal.value
      this.circumference = 2 * Math.PI * this.radius

      this.circle.style.strokeDasharray = `${this.circumference} ${this.circumference}`
      this.circle.style.strokeDashoffset = this.circumference
    },
    setProgress(percent) {
      this.circle.style.strokeDashoffset = this.circumference - percent / 100 * this.circumference
    },
    initCalculating() {
      let time = 0

      const interval = setInterval(() => {
        if (time === 9) {
          clearInterval(interval)
        }
        this.percent += 10
        this.setProgress(this.percent)
        time++
        this.$emit('percentChange', this.percent)
      }, 1000)
    },
  },
  mounted() {
    this.initCircle()
    this.initCalculating()
  },
}
</script>

<style>
.round-progress {
  position: relative;

  margin: 0;
  padding: 0;
  width: 200px;
  height: 200px;
}

.round-progress__circle {
  stroke-linecap: round;
  transform-origin: center;
  transform: rotate(-90deg);

  transition: stroke-dashoffset 0.3s linear;
}

.round-progress__percent {
  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 50px);

  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;

  font-weight: 700;
  font-style: normal;
  font-size: 40px;
  line-height: 50px;
  text-align: center;
  color: #01C3D8;
}
</style>