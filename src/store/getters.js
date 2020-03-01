export default {
  shops(state) {
    return state.shops;
  },
  base(state) {
    return state.base;
  },
  toppings(state) {
    return state.toppings;
  },
  rolled(state) {
    let count = 0;
    for (let i = 0; i < state.toppings.count; i += 1) {
      if (state.toppings.ids[i] !== null) {
        count += 1;
      }
    }
    return count;
  },
};
