export default {
  getShop(state) {
    return state.shop;
  },
  getShops(state) {
    return state.shops;
  },
  getBase(state) {
    return state.base;
  },
  getToppings(state) {
    return state.toppings;
  },
  getToppingsRolled(state) {
    let count = 0;
    for (let i = 0; i < state.toppings.count; i += 1) {
      if (state.toppings.ids[i] !== null) {
        count += 1;
      }
    }
    return count;
  },
};
