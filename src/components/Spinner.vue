<template>
  <div class="container" v-on:click="roll()">
    <div ref="wrap">
      <div class="item" v-for="opt in items" :key="opt">{{ opt }}</div>
      <div class="item item-copy" >{{ items[0] }}</div>
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

  this.position = random * this.height;

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
  const position = -1 * Math.floor((offset + this.position) % (this.items.length * this.height));

  this.$refs.wrap.style.transform = `translateY(${position}px)`;

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
      height: 180,
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
.container {
  height: 200px;
  overflow: hidden;
}

.item {
  height: 180px;
  text-align: center;
  line-height: 180px;
}
</style>
