<template>
  <div>
    <ion-phaser v-bind:game.prop="game" v-bind:initialize.prop="initialize" />
  </div>
</template>

<script>
import Phaser from "phaser";

export default {
  name: "home",
  data() {
    return {
      initialize: false,
      game: {
        width: "100%",
        height: "100%",
        type: Phaser.AUTO,
        scene: {
          init() {
            this.cameras.main.setBackgroundColor("#24252A");
          },
          create() {
            this.helloWorld = this.add.text(
              this.cameras.main.centerX,
              this.cameras.main.centerY,
              "Hello World",
              { font: "40px Arial", fill: "#ffffff" }
            );
            this.helloWorld.setOrigin(0.5);
          },
          update() {
            this.helloWorld.angle += 1;
          },
        },
      },
    };
  },
  mounted() {
    this.initializeGame();
  },
  methods: {
    initializeGame() {
      this.initialize = true;
    },
    openMenu: () => {
      // When user tap the button dispatch an event into the dom.
      // Its will trigger the drawer Open event in (componnents/Drawer.vue)
      document.dispatchEvent(new CustomEvent("toggleDrawer", {}));
    },
  },
};
</script>

<style scoped>
img.logo {
  display: inline-block;
  width: 90px;
  padding: 20px;
}
</style>
