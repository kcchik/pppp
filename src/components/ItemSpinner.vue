<template>
  <div>
    <div class="spinner-container">
      <div ref="wrap">

        <ItemSpinnerCard
          v-for="(opt, i) in items"
          :key="i"
          :content="opt"
          :type="type"
          :name="i"
        />

        <ItemSpinnerCard
          :content="items[0]"
          :type="type"
          :name="0"
        />

      </div>
    </div>
    <div class="spinner-cover" />
  </div>
</template>

<script>
import ItemSpinnerCard from './ItemSpinnerCard.vue';

function roll() {
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
  const finalPosition = this.item * this.height;
  const position = -1 * Math.floor((offset + finalPosition) % (this.items.length * this.height));

  this.$refs.wrap.style.transform = `translateY(${position}px)`;

  if (activeTime <= this.totalTime) {
    window.requestAnimationFrame(this.animate);
  } else {
    this.$emit('done', this.random);
  }
}

export default {
  components: {
    ItemSpinnerCard,
  },
  props: {
    item: Number,
    items: Array,
    type: String,
  },
  data() {
    return {
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
  height: 200px;
  overflow: hidden;
  padding: 0;
  border-radius: 10px;
  cursor: default;
}

.spinner-cover {
  position: relative;
  top: -200px;
  height: 200px;
  margin-bottom: -200px;
  border-radius: 10px;
  box-shadow: inset 0 20px 20px -20px #888, inset 0 -20px 20px -20px #888;
}
</style>
