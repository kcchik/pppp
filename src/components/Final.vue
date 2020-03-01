<template>
  <div>
    <h1>Your Order</h1>
    <p>{{ getBase.name }}</p>
    <ul>
      <li v-for="(topping, i) in getToppings.names" :key="i">
        <p>{{ topping }}</p>
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
      'getBase',
      'getToppings',
    ]),
  },
  methods: {
    restart,
  },
};
</script>
