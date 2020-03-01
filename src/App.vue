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
body {
  font: 400 11px system-ui;
  color: buttontext;
  line-height: 2em;
}

ul {
  list-style-type: none;
  padding-left: 0;
}
</style>
