<template>
  <div>
    <h1>Toppings</h1>
    <ul>
      <li v-for="i in getToppingsCount" :key="i">
        <Spinner @set="addTopping" :items="getToppings" />
      </li>
    </ul>
    <button v-on:click="next">Next</button>
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
