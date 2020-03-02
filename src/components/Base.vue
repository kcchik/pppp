<template>
  <div>
    <h1>Base</h1>
    <Spinner @set="(base) => base1 = base" :items="getBases" />
    <Spinner @set="(base) => base2 = base" :items="getBases" />
    <button v-on:click="next(base1)" :disabled="base1 === null || base2 === null">1</button>
    <button v-on:click="next(base2)" :disabled="base1 === null || base2 === null">2</button>
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
