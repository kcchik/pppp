<template>
  <div id="app">
    <component :is="page"  @swap="swap" />
  </div>
</template>

<script>
import Landing from './components/Landing.vue';
import Base from './components/Base.vue';
import Toppings from './components/Toppings.vue';
import Final from './components/Final.vue';

function swap(page) {
  switch (page) {
    case 'base':
      this.page = Base; break;
    case 'toppings':
      this.page = Toppings; break;
    case 'final':
      this.page = Final; break;
    default:
      this.page = Landing;
  }
}

export default {
  name: 'App',
  data() {
    return {
      page: Landing,
    };
  },
  methods: {
    swap,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Sriracha&display=swap');

body {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 10px;
  font: 400 11px 'Sriracha', system-ui;
  color: buttontext;
  line-height: 2em;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

.header {
  font-size: 40px;
  text-align: center;
}

.spinner {
  margin-bottom: 20px;
}

.button {
    width: 100%;
    margin-bottom: 20px;
    padding: 0.25em 0.5em;
    font: bold 20px 'Sriracha';
    color: #fff;
    background: #90cd71;
    border: 0;
    border-bottom: solid 2px #7fb265;
    border-radius: 10px;
}

.button:disabled {
    background: #b6e49f;
    border-bottom: solid 2px #b6e49f;
}
</style>
