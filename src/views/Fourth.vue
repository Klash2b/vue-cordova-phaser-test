<template>
  <div>
    <!-- <lottie-animation path="data.json" /> -->
    <lottie-animation
      path="data.json"
      :loop="true"
      :autoPlay="true"
      :speed="mySpeed"
      :width="256"
      :height="256"
      @AnimControl="handleAnimation"
    />
    <div>
      <v-btn @click="playPause()">
        Play / Pause
      </v-btn>
      <v-btn @click="speedPlus()">SpeedPlus ({{ this.mySpeed }})</v-btn>
      <v-btn @click="resetSpeed()">resetSpeed</v-btn>
      <v-btn @click="swapDirection()">swapDirection</v-btn>
    </div>
    <!-- <div @mouseover="hover = true" @mouseleave="hover = false"> -->
    <div @mouseover="hoverYes" @mouseleave="hoverNo">
      <lottie-animation
        path="data.json"
        :loop="false"
        :autoPlay="false"
        :speed="mySpeed"
        :width="256"
        :height="256"
        @AnimControl="handleAnimation2"
      />
    </div>
    <div>Hover? : {{ hover }}</div>
  </div>
</template>

<script>
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue"; // import lottie-vuejs

export default {
  name: "fourth",
  components: {
    LottieAnimation,
  },
  data() {
    return {
      hover: false,
      abeille1: null,
      abeille2: null,
      mySpeed: 1,
    };
  },
  methods: {
    hoverYes() {
      this.abeille2.setDirection(1);
      this.abeille2.play();
    },
    hoverNo() {
      this.abeille2.setDirection(-1);
      this.abeille2.play();
    },
    handleAnimation: function(event) {
      console.log(event);
      this.abeille1 = event;
      console.log(this.abeille1);
    },
    handleAnimation2: function(event) {
      console.log(event);
      this.abeille2 = event;
      console.log(this.abeille2);
    },
    playPause() {
      if (this.abeille1.isPaused) {
        this.abeille1.play();
      } else {
        this.abeille1.pause();
      }
    },
    speedPlus() {
      this.mySpeed = this.mySpeed + 1;
      this.abeille1.setSpeed(this.mySpeed);
      console.log(this.abeille1.playSpeed);
    },
    resetSpeed() {
      this.mySpeed = 1;
      this.abeille1.setSpeed(this.mySpeed);
    },
    swapDirection() {
      this.abeille1.setDirection(this.abeille1.playDirection * -1);
      console.log(this.abeille1.playDirection);
    },
    stopAll() {
      this.lottie.stop();
    },
  },
  mounted() {},
};
</script>

<style scoped></style>
