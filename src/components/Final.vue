<template>
  <div>
    <h1>Your Order</h1>
    <p>Base {{ base.id }}</p>
    <ul>
      <li v-for="(topping, i) in toppings.ids" :key="i">
        <p>Topping {{ topping }}</p>
      </li>
    </ul>
    <button v-on:click="restart">Restart</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

function restart() {
  this.$emit('swap', 'landing');
}
export default {
  name: 'Final',
  computed: {
    ...mapGetters([
      'base',
      'toppings',
    ]),
  },
  methods: {
    restart,
  },
};
</script>
