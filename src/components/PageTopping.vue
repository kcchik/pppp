<template>
  <div class="container">
    <h1 class="header">
      Toppings
    </h1>

    <ItemSpinner
      class="spinner"
      type="toppings"
      :item="topping1"
      :items="getToppings"
      @done="done++"
    />

    <ItemSpinner
      v-if="getToppingsCount > 1"
      class="spinner"
      type="toppings"
      :item="topping2"
      :items="getToppings"
      @done="done++"
    />

    <button
      class="button"
      @click="next"
      :disabled="done < getToppingsCount"
    >
      Finalize
    </button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import ItemSpinner from './ItemSpinner.vue';

function rollToppings() {
  const { length } = this.getToppings;
  this.topping1 = Math.floor(Math.random() * length);
  this.addTopping(this.topping1);
  if (this.getToppingsCount > 1) {
    this.topping2 = Math.floor(Math.random() * length);
    this.addTopping(this.topping2);
  }
}

function next() {
  this.$emit('swap', 'order');
}

export default {
  data() {
    return {
      topping1: 0,
      topping2: 0,
      done: 0,
    };
  },
  components: {
    ItemSpinner,
  },
  computed: {
    ...mapGetters([
      'getTopping',
      'getToppings',
      'getToppingsCount',
    ]),
  },
  mounted() {
    this.rollToppings();
  },
  methods: {
    rollToppings,
    next,
    ...mapMutations([
      'addTopping',
    ]),
  },
};
</script>
