<template>
  <div class="container">
    <h1 class="header">Toppings</h1>
    <Spinner class="spinner" @set="addTopping" :items="getToppings" />
    <Spinner class="spinner" v-if="getToppingsCount > 1" @set="addTopping" :items="getToppings" />
    <button class="button" v-on:click="next"
      :disabled="getTopping.length < getToppingsCount">
      Finalize
    </button>
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
