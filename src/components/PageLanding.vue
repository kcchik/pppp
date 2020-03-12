<template>
  <div>
    <h1 class="header">
      Pee Pee Poo Poo
    </h1>

    <div class="shop-image">
      <img
        :src="`${s3}/shops/${getShop + 1}.png`"
        alt="shop"
      >
    </div>

    <div class="shop-button">
      <button @click="prevShop" />
      <button @click="nextShop" />
    </div>

    <div class="toppings">
      <button
        :class="buttonClass(1)"
        @click="count = 1"
      >
        1 Topping
      </button>

      <button
        :class="buttonClass(2)"
        @click="count = 2"
      >
        2 Toppings
      </button>
    </div>

    <button @click="start">
      Start
    </button>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';

function nextShop() {
  let shop = this.getShop + 1;
  if (this.getShop === this.getShops.length - 1) {
    shop = 0;
  }
  this.setShop(shop);
}

function prevShop() {
  let shop = this.getShop - 1;
  if (this.getShop === 0) {
    shop = this.getShops.length - 1;
  }
  this.setShop(shop);
}

function buttonClass(i) {
  return this.getToppingsCount === i ? '' : 'disabled';
}

async function start() {
  await this.setBases(this.shop);
  await this.setToppings(this.shop);
  this.$emit('swap', 'base');
}

export default {
  data() {
    return {
      s3: process.env.VUE_APP_S3_URL,
    };
  },
  computed: {
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
    nextShop,
    prevShop,
    buttonClass,
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

<style scoped>
.shop-image {
  height: 300px;
  overflow: hidden;
  margin: 0;
  border-radius: 10px;
}

.shop-image img {
  height: 300px;
  margin-left: 50%;
  transform: translateX(-50%);
}

.shop-button button {
  position: relative;
  top: -300px;
  width: 50%;
  height: 300px;
  opacity: 0;
}

.toppings {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  justify-items: center;
  margin-top: -300px;
}

.toppings button {
  width: 70%;
}
</style>
