<template>
  <div>
    <div class="spinner-container">
      <div ref="wrap">

        <ItemSpinnerCard
          v-for="(name, i) in items"
          :key="i"
          :content="name"
          :type="type"
          :name="i"
          :large="item === i"
          :selected="selected"
        />

        <ItemSpinnerCard
          :content="items[0]"
          :type="type"
          :name="0"
        />

      </div>
    </div>
    <div :class="`spinner-cover ${selectedClass}`" />
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

  const timeActive = timestamp - this.timeStart;
  const timeRemaining = Math.max(this.timeTotal - timeActive, 0);

  const posOffset = (timeRemaining ** this.power / this.timeTotal ** this.power) * this.startOffset;
  const pos = -1 * Math.floor((posOffset + this.posFinal) % this.heightTotal);

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
    selected: Boolean,
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
    heightTotal() {
      return this.items.length * this.height;
    },
    posFinal() {
      return this.item * this.height;
    },
    selectedClass() {
      return this.selected ? 'selected' : '';
    },
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
  border: 5px solid transparent;
}

.spinner-cover {
  position: relative;
  top: -210px;
  height: 200px;
  margin-bottom: -210px;
  border-radius: 10px;
  box-shadow: inset 0 20px 20px -20px #888, inset 0 -20px 20px -20px #888;
  border: 5px solid transparent;
}

.selected {
  border: 5px solid #90cd71;
}
</style>
