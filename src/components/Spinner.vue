<template>
  <div class="spinner-container" v-on:click="roll()">
    <div ref="wrap">
      <div class="item" v-for="opt in items" :key="opt">
        {{ opt }}
        <img :src="`${s3}/goku.jpg`" alt="item">
      </div>
      <div class="item" >
        {{ items[0] }}
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
      s3: process.env.VUE_APP_S3_URL,
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
.spinner-container {
  cursor: default;
  height: 200px;
  padding: 0;
  overflow: hidden;
  background-color: #eee;
}

.item {
  height: 160px;
  margin-top: 20px;
  padding-left: 20px;
  line-height: 160px;
  background-color: #ddd;
}

.item img {
  display: table-cell;
  width: 50px;
  height: 50px;
  margin-top: 110px;
  float: right;
}
</style>
