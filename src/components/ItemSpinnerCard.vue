<template>
  <div>
    <img
      :src="url"
      alt="item"
    >
    <span :class="contentClass">
      {{ content }}
    </span>
  </div>
</template>

<script>
export default {
  props: {
    content: String,
    type: String,
    name: Number,
    selected: Boolean,
  },
  data() {
    return {
      url: `${process.env.VUE_APP_S3_URL}/${this.type}/${this.name + 1}.png`,
    };
  },
  computed: {
    contentClass() {
      return this.selected ? 'selected' : '';
    },
  },
};
</script>

<style scoped>
div {
  height: 200px;
  box-shadow: inset 300px 0 150px -150px #888;
}

img {
  display: table-cell;
  float: right;
  height: 200px;
}

span {
  position: relative;
  top: -110px;
  left: 20px;
  color: #fff;
  font-size: 20px;
  text-shadow: 0 0 10px #666;
}

.selected {
  font-size: 30px;
}
</style>
