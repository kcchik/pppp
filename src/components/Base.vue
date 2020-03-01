<template>
  <div>
    <h1>Base</h1>
    <p>{{ base.id }}</p>
    <button v-on:click="rollBase" :disabled="base.rerolls === -1">
      {{ buttonContent() }}
    </button>
    <button v-on:click="next" :disabled="base.id === null">Next</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

function buttonContent() {
  if (this.base.id === null) {
    return 'Roll';
  }
  return `Reroll (${this.base.rerolls + 1})`;
}

function next() {
  if (this.toppings.count > 0) {
    this.$emit('swap', 'toppings');
  } else {
    this.$emit('swap', 'final');
  }
}

export default {
  name: 'Base',
  computed: {
    ...mapGetters([
      'base',
      'toppings',
    ]),
  },
  methods: {
    buttonContent,
    next,
    ...mapActions([
      'rollBase',
    ]),
  },
};
</script>
