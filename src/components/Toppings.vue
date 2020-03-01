<template>
  <div>
    <h1>Toppings</h1>
    <ul>
      <li v-for="(topping, i) in getToppings.ids" :key="i">
        <p>{{ getToppings.names[i] }}</p>
        <button v-on:click="rollTopping(i)" :disabled="buttonDisabled(topping)">
          {{ buttonContent(topping) }}
        </button>
      </li>
    </ul>
    <button v-on:click="next" :disabled="getToppingsRolled != getToppings.count">
      Next
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

function buttonDisabled(topping) {
  return this.getToppings.rerolls === -(this.getToppings.count)
    || (this.getToppingsRolled !== this.getToppings.count && topping !== null);
}

function buttonContent(topping) {
  if (topping === null) {
    return 'Roll';
  }
  return `Reroll (${this.getToppings.rerolls + this.getToppingsRolled})`;
}

function next() {
  this.$emit('swap', 'final');
}

export default {
  name: 'Toppings',
  computed: {
    ...mapGetters([
      'getToppings',
      'getToppingsRolled',
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
