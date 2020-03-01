<template>
  <div>
    <h1>Toppings</h1>
    <ul>
      <li v-for="(topping, i) in toppings.ids" :key="i">
        <p>{{ topping }}</p>
        <button v-on:click="rollTopping(i)" :disabled="buttonDisabled(topping)">
          {{ buttonContent(topping) }}
        </button>
      </li>
    </ul>
    <button v-on:click="next" :disabled="rolled != toppings.count">
      Next
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

function buttonDisabled(topping) {
  return this.toppings.rerolls === -(this.toppings.count)
    || (this.rolled !== this.toppings.count && topping !== null);
}

function buttonContent(topping) {
  if (topping === null) {
    return 'Roll';
  }
  return `Reroll (${this.toppings.rerolls + this.rolled})`;
}

function next() {
  this.$emit('swap', 'final');
}

export default {
  name: 'Toppings',
  computed: {
    ...mapGetters([
      'toppings',
      'rolled',
    ]),
  },
  methods: {
    buttonDisabled,
    buttonContent,
    next,
    ...mapActions([
      'rollTopping',
    ]),
  },
};
</script>
