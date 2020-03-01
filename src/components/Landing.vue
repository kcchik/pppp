<template>
  <div>
    <div>
      <span>Shop</span>
      <select v-model.number="shop">
        <option v-for="option in getShops" v-bind:key ="option.id" v-bind:value="option.id">
          {{ option.name }}
        </option>
      </select>
    </div>
    <div>
      <span>Base Rerolls </span>
      <input type="number" min="0" max="10" v-model.number="base.rerolls" />
    </div>
    <div>
      <span>Toppings Amount </span>
      <input type="number" min="0" max="10" v-model.number="toppings.count" />
    </div>
    <div>
      <span>Toppings Rerolls </span>
      <input type="number" min="0" max="10" v-model.number="toppings.rerolls" />
    </div>
    <button v-on:click="start">Start</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';

const base = {
  rerolls: 0,
};

const toppings = {
  count: 0,
  rerolls: 0,
};

async function start() {
  await this.setParams({
    shop: this.shop,
    base: this.base,
    toppings: this.toppings,
  });
  this.$emit('swap', 'base');
}

export default {
  name: 'Landing',
  data() {
    return {
      base,
      toppings,
    };
  },
  computed: {
    shop: {
      get() {
        return this.getShop;
      },
      set(shop) {
        this.setShop(shop);
      },
    },
    ...mapGetters([
      'getShop',
      'getShops',
    ]),
  },
  methods: {
    start,
    ...mapMutations([
      'setShop',
    ]),
    ...mapActions([
      'setParams',
    ]),
  },
};
</script>
