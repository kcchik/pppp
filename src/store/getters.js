export default {
  getShop(state) {
    return state.shops.selected;
  },
  getShops(state) {
    return state.shops.list;
  },
  getBase(state) {
    return state.bases.selected;
  },
  getBases(state) {
    return state.bases.list;
  },
  getTopping(state) {
    return state.toppings.selected;
  },
  getToppings(state) {
    return state.toppings.list;
  },
  getToppingsCount(state) {
    return state.toppings.count;
  },
};
