<template>
  <div>
    <div class="window" v-on:click="roll()">
      <div ref="wrap">
        <div class="item" v-for="opt in items" :key="opt">{{ opt }}</div>
        <div class="item item-copy" >{{ items[0] }}</div>
      </div>
    </div>
  </div>
</template>

<script>
function roll() {
  if (this.position) {
    return;
  }

  const random = Math.floor(Math.random() * this.items.length);
  this.$emit('set', random);

  this.position = random * 180;

  window.webkitRequestAnimationFrame(this.animate);
}

function animate(timestamp) {
  if (this.start === null) {
    this.start = timestamp;
  }

  const timeDiff = timestamp - this.start;
  const timeRemaining = Math.max(this.duration - timeDiff, 0);
  const power = 2;
  const offset = (timeRemaining ** power / this.duration ** power) * 2000;
  const pos = -1 * Math.floor((offset + this.position) % this.height);

  this.$refs.wrap.style.transform = `translateY(${pos}px)`;

  if (timeDiff <= this.duration) {
    window.webkitRequestAnimationFrame(this.animate);
  }
}

export default {
  name: 'Base',
  props: {
    items: Array,
  },
  data() {
    return {
      start: null,
      duration: 2000,
      height: this.items.length * 180,
      position: null,
    };
  },
  methods: {
    roll,
    animate,
  },
};
</script>

<style scoped>
.window {
  width: 200px;
  height: 200px;
  overflow: hidden;
}

.item {
  height: 180px;
  width: 200px;

  text-align: center;

  line-height: 180px;
}
</style>
