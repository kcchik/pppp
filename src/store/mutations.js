export default {
  setShop(state, shop) {
    state.shops.selected = shop;
  },
  setShops(state, shops) {
    state.shops.list = shops;
  },
  setBase(state, base) {
    state.bases.selected = base;
  },
  setBases(state, bases) {
    state.bases.list = bases;
  },
  setTopping(state, topping) {
    state.toppings.selected = topping;
  },
  addTopping(state, topping) {
    state.toppings.selected.push(topping);
  },
  setToppings(state, toppings) {
    state.toppings.list = toppings;
  },
  setToppingsCount(state, count) {
    state.toppings.count = count;
  },
};
