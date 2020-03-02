<template>
  <div>
    <select v-model.number="shop">
      <option v-for="option in getShops" v-bind:key="option">
        {{ option }}
      </option>
    </select>
    <select v-model.number="count">
      <option>1</option>
      <option>2</option>
    </select>
    <button v-on:click="start">Start</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';

async function start() {
  await this.setBases(this.shop);
  await this.setToppings(this.shop);
  this.$emit('swap', 'base');
}

export default {
  name: 'Landing',
  computed: {
    shop: {
      get() {
        return this.getShop;
      },
      set(shop) {
        this.setShop(shop);
      },
    },
    count: {
      get() {
        return this.getToppingsCount;
      },
      set(count) {
        this.setToppingsCount(count);
      },
    },
    ...mapGetters([
      'getShop',
      'getShops',
      'getToppingsCount',
    ]),
  },
  methods: {
    start,
    ...mapMutations([
      'setShop',
      'setToppingsCount',
    ]),
    ...mapActions([
      'setBases',
      'setToppings',
    ]),
  },
};
</script>
