<template>
  <div>
    <h1 class="header">Pee Pee Poo Poo</h1>
    <div class="image-container">
      <img :src="`${s3}/shops/${getShop + 1}.png`" alt="shop">
    </div>
    <button class="button shop" v-on:click="prevShop">2</button>
    <button class="button shop" v-on:click="nextShop">1</button>
    <div class="radio-container">
      <input id="topping1" type="radio" value="1"
        v-model.number="count" />
      <label for="topping1">1 Topping</label>
      <input id="topping2" type="radio" value="2"
        v-model.number="count" />
      <label for="topping2">2 Toppings</label>
    </div>
    <button class="button" v-on:click="start">Start</button>
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

async function start() {
  await this.setBases(this.shop);
  await this.setToppings(this.shop);
  this.$emit('swap', 'base');
}

export default {
  name: 'Landing',
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
.image-container {
  height: 300px;
  overflow: hidden;
  border-radius: 10px;
  margin: 0;
}

.image-container img {
  height: 300px;
  margin-left: 50%;
  transform: translateX(-50%);
}

.shop {
  width: 50%;
  height: 300px;
  position: relative;
  margin: 0;
  top: -308px;
  opacity: 0;
}

.radio-container {
  text-align: center;
  margin: -275px 0 28px 0;
}

input[type="radio"] + label {
  margin: 0 10px;
  padding: 0.25em 0.5em;
  font: bold 20px 'Sriracha';
  color: #fff;
  background: #90cd71;
  background: #b6e49f;
  border: 0;
  border-bottom: solid 2px #90cd71;
  border-radius: 10px;
}

input[type="radio"]:checked + label {
  background: #90cd71;
  border-bottom: solid 2px #b6e49f;
}

input[type="radio"] {
  position: absolute;
  opacity: 0;
}
</style>
