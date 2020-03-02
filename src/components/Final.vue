<template>
  <div>
    <h1>Your Order</h1>
    <p>{{ getBases[getBase] }}</p>
    <ul>
      <li v-for="i in getTopping" :key="i">
        <p>{{ getToppings[i] }}</p>
      </li>
    </ul>
    <button v-on:click="reroll">Reroll</button>
    <button v-on:click="restart">Restart</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

function reroll() {
  this.setBase(null);
  this.setTopping([]);
  this.$emit('swap', 'base');
}

function restart() {
  this.setBase(null);
  this.setTopping([]);
  this.$emit('swap', 'landing');
}

export default {
  name: 'Final',
  computed: {
    ...mapGetters([
      'getBase',
      'getBases',
      'getTopping',
      'getToppings',
    ]),
  },
  methods: {
    reroll,
    restart,
    ...mapMutations([
      'setBase',
      'setTopping',
    ]),
  },
};
</script>
