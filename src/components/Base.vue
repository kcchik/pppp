<template>
  <div class="container">
    <h1 class="header">Base</h1>
    <Spinner class="spinner-1" @set="(base) => base1 = base" :items="getBases" />
    <Spinner class="spinner-2" @set="(base) => base2 = base" :items="getBases" />
    <button class="button-1" v-on:click="next(base1)"
      :disabled="base1 === null || base2 === null" />
    <button class="button-2" v-on:click="next(base2)"
      :disabled="base1 === null || base2 === null" />
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
  align-items: center;
  grid-template-columns: auto 50px;
  grid-template-rows: 50px 200px 200px;
  gap: 20px 20px;
}

.header {
  grid-column: 1 / span 2;
  grid-row: 1;
}

.spinner-1 {
  grid-column: 1;
  grid-row: 2;
}

.spinner-2 {
  grid-column: 1;
  grid-row: 3;
}

button {
  height: 50px;
  border-radius: 50%;
  background-color: #ddd;
}

button:disabled {
  background-color: #fff;
}

.button-1 {
  grid-column: 2;
  grid-row: 2;
}

.button-2 {
  grid-column: 2;
  grid-row: 3;
}
</style>
