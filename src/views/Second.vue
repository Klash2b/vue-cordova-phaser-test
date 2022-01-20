<template>
  <div>
    <ion-phaser :game.prop="game" :initialize.prop="initialize" />
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
        physics: {
          default: "arcade",
          arcade: {
            gravity: { y: 200 },
          },
        },
        scene: {
          preload() {
            this.load.setBaseURL("http://labs.phaser.io");

            this.load.image("sky", "assets/skies/space3.png");
            this.load.image("logo", "https://labs.phaser.io/assets/sprites/wabbit.png");
            // this.load.image("logo", "assets/sprites/phaser3-logo.png");
            this.load.image("particle", "assets/particles/bubble.png");
          },
          create() {
            this.add.image(400, 400, "sky");

            var particles = this.add.particles("particle");
            particles.scale = 1

            var emitter = particles.createEmitter({
              speed: 200,
              scale: { start: 1, end: 0 },
              blendMode: "ADD",
            });

            var logo = this.physics.add.image(0, 0, "logo");

            logo.setVelocity(100, 200);
            logo.setBounce(1, 1);
            logo.setCollideWorldBounds(true);
            logo.scale = 1.5
            emitter.startFollow(logo);
          },
          // update() {
          //   this.helloWorld.angle += 1;
          // },
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
