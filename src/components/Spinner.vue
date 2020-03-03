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

  window.requestAnimationFrame(this.animate);
}

function animate(timestamp) {
  if (this.startTime === null) {
    this.startTime = timestamp;
  }

  const activeTime = timestamp - this.startTime;
  const remainingTime = Math.max(this.totalTime - activeTime, 0);
  const power = 2;
  const offset = (remainingTime ** power / this.totalTime ** power) * 2000;
  const pos = -1 * Math.floor((offset + this.position) % this.height);

  this.$refs.wrap.style.transform = `translateY(${pos}px)`;

  if (activeTime <= this.totalTime) {
    window.requestAnimationFrame(this.animate);
  }
}

export default {
  name: 'Base',
  props: {
    items: Array,
  },
  data() {
    return {
      startTime: null,
      totalTime: 2000,
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
