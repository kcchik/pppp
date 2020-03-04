<template>
  <div class="container">
    <h1 class="header">Base</h1>
    <Spinner class="spinner-1" @set="(base) => base1 = base" :items="getBases" />
    <Spinner class="spinner-2" @set="(base) => base2 = base" :items="getBases" />
    <button class="button-1" v-on:click="next(base1)"
      :disabled="base1 === null || base2 === null">1</button>
    <button class="button-2" v-on:click="next(base2)"
      :disabled="base1 === null || base2 === null">2</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Spinner from './Spinner.vue';

function next(base) {
  this.setBase(base);
  this.$emit('swap', 'toppings');
}

export default {
  name: 'Base',
  components: {
    Spinner,
  },
  data() {
    return {
      base1: null,
      base2: null,
    };
  },
  computed: {
    ...mapGetters([
      'getBases',
    ]),
  },
  methods: {
    next,
    ...mapMutations([
      'setBase',
    ]),
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: auto 50px;
  grid-template-rows: 50px 200px 200px;
}

.header {
  grid-column-start: 1;
  grid-column-end: span 2;
  grid-row-start: 1;
  grid-row-end: span 1;
}

.spinner-1 {
  grid-column-start: 1;
  grid-column-end: span 1;
  grid-row-start: 2;
  grid-row-end: span 1;
}

.spinner-2 {
  grid-column-start: 1;
  grid-column-end: span 1;
  grid-row-start: 3;
  grid-row-end: span 1;
}

.button-1 {
  grid-column-start: 2;
  grid-column-end: span 1;
  grid-row-start: 2;
  grid-row-end: span 1;
}

.button-2 {
  grid-column-start: 2;
  grid-column-end: span 1;
  grid-row-start: 3;
  grid-row-end: span 1;
}
</style>
