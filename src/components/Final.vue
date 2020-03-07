<template>
  <div>
    <h1 class="header">Your Order</h1>
    <div class="item">
      <img :src="`${s3}/bases/${getBase + 1}.png`" alt="item">
      <p class="base">{{ getBases[getBase] }}</p>
      <ul>
        <li v-for="(topping, i) in getTopping" :key="i">
          <p class="toppings">{{ getToppings[topping] }}</p>
        </li>
      </ul>
    </div>
    <div class="item-cover" />
    <button class="button" v-on:click="reroll">Reroll</button>
    <button class="button" v-on:click="restart">Restart</button>
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
  data() {
    return {
      s3: process.env.VUE_APP_S3_URL,
    };
  },
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

<style scoped>
  .item {
    height: 200px;
    box-shadow: inset 300px 0 150px -150px #888;
    border-radius: 10px;
    margin-bottom: 20px;
    overflow: hidden;
  }

  .item-cover {
    position: relative;
    top: -220px;
    margin-bottom: -200px;
    height: 200px;
    box-shadow: inset 0 20px 20px -20px #888, inset 0 -20px 20px -20px #888;
    border-radius: 10px;
  }

  .item p {
    color: white;
    position: relative;
    top: -145px;
    left: 20px;
    text-shadow: 0 0 10px #666;
  }

  .item img {
    display: table-cell;
    height: 200px;
    float: right;
  }

  .base {
    font-size: 20px;
  }

  .toppings {
    font-size: 16px;
  }
</style>
