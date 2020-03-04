<template>
  <div class="container">
    <h1 class="header">Toppings</h1>
    <Spinner class="spinner" @set="addTopping" :items="getToppings" />
    <Spinner class="spinner" v-if="getToppingsCount > 1" @set="addTopping" :items="getToppings" />
    <button class="button" v-on:click="next"
      :disabled="getTopping.length < getToppingsCount" />
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
  align-items: center;
  grid-template-columns: auto 50px;
  grid-template-rows: 50px 200px 200px;
  gap: 20px 20px;
}

.header {
  grid-column: 1 / span 2;
  grid-row: 1;
}

.spinner-list:nth-child(0) {
  grid-column: 1;
  grid-row: 2;
}

.spinner-list:nth-child(1) {
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

.button {
  grid-column: 2;
  grid-row: 2 / span 2;
}
</style>
