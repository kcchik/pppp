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
  if (this.timeStart === null) {
    this.timeStart = timestamp;
  }

  const timeActive = timestamp - this.startTime;
  const timeRemaining = Math.max(this.timeTotal - timeActive, 0);

  const power = timeRemaining ** this.power / this.timeTotal ** this.power;
  const posOffset = power * this.startOffset;
  const posFinal = posOffset + this.posFinal;
  const pos = -1 * Math.floor(posFinal % this.heightTotal);

  this.$refs.wrap.style.transform = `translateY(${pos}px)`;

  if (timeActive <= this.timeTotal) {
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
      timeStart: null,
      timeTotal: 2000,
      startOffset: 2000,
      power: 2,
      height: 200,
    };
  },
  computed: {
    heightTotal: this.items.length * this.height,
    posFinal: this.item * this.height,
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
