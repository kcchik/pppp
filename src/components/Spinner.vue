<template>
  <div>
    <div class="spinner-container">
      <div ref="wrap">
        <div class="item" v-for="(opt, i) in items" :key="i">
          <img :src="`${s3}/bases/${i + 1}.png`" alt="item">
          <span>{{ opt }}</span>
        </div>
        <div class="item" >
          <img :src="`${s3}/bases/1.png`" alt="item">
          <span>{{ items[0] }}</span>
        </div>
      </div>
    </div>
    <div class="spinner-cover" />
  </div>
</template>

<script>
function roll() {
  if (this.random) {
    return;
  }

  this.random = Math.floor(Math.random() * this.items.length);
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
  const finalPosition = this.random * this.height;
  const position = -1 * Math.floor((offset + finalPosition) % (this.items.length * this.height));

  this.$refs.wrap.style.transform = `translateY(${position}px)`;

  if (activeTime <= this.totalTime) {
    window.requestAnimationFrame(this.animate);
  } else {
    this.$emit('set', this.random);
  }
}

export default {
  name: 'Base',
  props: {
    items: Array,
  },
  data() {
    return {
      random: null,
      s3: process.env.VUE_APP_S3_URL,
      startTime: null,
      totalTime: 2000,
      height: 200,
    };
  },
  mounted() {
    this.roll();
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
  border-radius: 10px;
}

.spinner-cover {
  position: relative;
  top: -200px;
  margin-bottom: -200px;
  height: 200px;
  box-shadow: inset 0 20px 20px -20px #888, inset 0 -20px 20px -20px #888;
  border-radius: 10px;
}

.item {
  height: 200px;
  box-shadow: inset 300px 0 150px -150px #888;
}

.item span {
  color: white;
  position: relative;
  top: -110px;
  left: 20px;
  font-size: 20px;
  text-shadow: 0 0 10px #666;
}

.item img {
  display: table-cell;
  height: 200px;
  float: right;
}
</style>
