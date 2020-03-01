<template>
  <div>
    <h1>Base</h1>
    <p>{{ getBase.name }}</p>
    <button v-on:click="rollBase" :disabled="getBase.rerolls === -1">
      {{ buttonContent() }}
    </button>
    <button v-on:click="next" :disabled="getBase.id === null">Next</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

function buttonContent() {
  if (this.getBase.id === null) {
    return 'Roll';
  }
  return `Reroll (${this.getBase.rerolls + 1})`;
}

function next() {
  if (this.getToppings.count > 0) {
    this.$emit('swap', 'toppings');
  } else {
    this.$emit('swap', 'final');
  }
}

export default {
  name: 'Base',
  computed: {
    ...mapGetters([
      'getBase',
      'getToppings',
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
