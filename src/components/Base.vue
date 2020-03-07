<template>
  <div>
    <h1 class="header">Base</h1>
    <div :class="selected" />
    <div v-on:click="set(base1)">
      <Spinner class="spinner" :items="getBases" @set="(base) => base1 = base" type="bases" />
    </div>
    <div v-on:click="set(base2)">
      <Spinner class="spinner" :items="getBases" @set="(base) => base2 = base" type="bases" />
    </div>
    <button class="button" v-on:click="next"
      :disabled="getBase === null">
      Next
    </button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import Spinner from './Spinner.vue';

function set(base) {
  if (this.base1 !== null && this.base2 !== null) {
    this.selected = 'selected base-1';
    if (this.base2 === base) {
      this.selected = 'selected base-2';
    }
    this.setBase(base);
  }
}

function next() {
  this.$emit('swap', 'toppings');
}

export default {
  name: 'Base',
  components: {
    Spinner,
  },
  data() {
    return {
      base1: null,
      base2: null,
      selected: '',
    };
  },
  computed: {
    ...mapGetters([
      'getBase',
      'getBases',
    ]),
  },
  methods: {
    set,
    next,
    ...mapMutations([
      'setBase',
    ]),
  },
};
</script>

<style scoped>
.selected {
  position: relative;
  height: 200px;
  margin-top: -200px;
  background-color: #90cd71;
  border-radius: 10px;
}

.base-1 {
  top: 200px;
}

.base-2 {
  top: 420px;
}
</style>
