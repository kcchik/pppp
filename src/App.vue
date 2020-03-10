<template>
  <div id="app">
    <component
      :is="page"
      @swap="swap"
    />
  </div>
</template>

<script>
import PageLanding from './components/PageLanding.vue';
import PageBase from './components/PageBase.vue';
import PageTopping from './components/PageTopping.vue';
import PageOrder from './components/PageOrder.vue';

function swap(page) {
  switch (page) {
    case 'base':
      this.page = PageBase; break;
    case 'topping':
      this.page = PageTopping; break;
    case 'order':
      this.page = PageOrder; break;
    default:
      this.page = PageLanding;
  }
}

export default {
  data() {
    return {
      page: PageLanding,
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
