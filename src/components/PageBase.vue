<template>
  <div>
    <h1 class="header">
      Base
    </h1>
    <div :class="selected" />

    <div @click="clickBase(base1)">
      <ItemSpinner
        class="spinner"
        type="bases"
        :item="base1"
        :items="getBases"
        @done="spinnerComplete"
      />
    </div>

    <div @click="clickBase(base2)">
      <ItemSpinner
        class="spinner"
        type="bases"
        :item="base2"
        :items="getBases"
        @done="spinnerComplete"
      />
    </div>

    <button
      class="button"
      :disabled="done < 2"
      @click="next"
    >
      Next
    </button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import ItemSpinner from './ItemSpinner.vue';

function rollBases() {
  const { length } = this.getBases;
  this.base1 = Math.floor(Math.random() * length);
  do {
    this.base2 = Math.floor(Math.random() * length);
  } while (this.base1 === this.base2);
}

function spinnerComplete() {
  this.done += 1;
  this.clickBase(this.base1);
}

function clickBase(base) {
  if (this.done < 2) {
    return;
  }
  this.selected = `selected base-${this.base1 === base ? '1' : '2'}`;
  this.setBase(base);
}

function next() {
  this.$emit('swap', 'topping');
}

export default {
  components: {
    ItemSpinner,
  },
  data() {
    return {
      base1: 0,
      base2: 0,
      done: 0,
      selected: '',
    };
  },
  computed: {
    ...mapGetters([
      'getBase',
      'getBases',
    ]),
  },
  mounted() {
    this.rollBases();
  },
  methods: {
    rollBases,
    spinnerComplete,
    clickBase,
    next,
    ...mapMutations([
      'setBase',
    ]),
  },
};
</script>

<style scoped>
.selected {
  position: relative;
  height: 200px;
  margin-top: -200px;
  border-radius: 10px;
  background-color: #90cd71;
}

.base-1 {
  top: 200px;
}

.base-2 {
  top: 420px;
}
</style>
