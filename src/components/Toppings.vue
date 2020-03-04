<template>
  <div class="container">
    <h1 class="header">Toppings</h1>
    <ul class="spinner-list">
      <li v-for="i in getToppingsCount" :key="i">
        <Spinner @set="addTopping" :items="getToppings" />
      </li>
    </ul>
    <button class="button" v-on:click="next"
      :disabled="getTopping.length < getToppingsCount">Next</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Spinner from './Spinner.vue';

function next() {
  this.$emit('swap', 'final');
}

export default {
  name: 'Toppings',
  components: {
    Spinner,
  },
  computed: {
    ...mapGetters([
      'getTopping',
      'getToppings',
      'getToppingsCount',
    ]),
  },
  methods: {
    next,
    ...mapMutations([
      'addTopping',
    ]),
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: auto 50px;
  grid-template-rows: 50px auto;
}

.header {
  grid-column-start: 1;
  grid-column-end: span 2;
  grid-row-start: 1;
  grid-row-end: span 1;
}

.spinner-list {
  grid-column-start: 1;
  grid-column-end: span 1;
  grid-row-start: 2;
  grid-row-end: span 1;
}
.button {
  grid-column-start: 2;
  grid-column-end: span 1;
  grid-row-start: 2;
  grid-row-end: span 1;
}
</style>
