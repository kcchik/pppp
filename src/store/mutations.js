export default {
  setShop(state, shop) {
    state.shop = shop;
  },
  setShops(state, shops) {
    state.shops = shops;
  },
  setBaseMax(state, max) {
    state.base.max = max;
  },
  setBaseId(state, id) {
    state.base.id = id;
  },
  setBaseName(state, name) {
    state.base.name = name;
  },
  setBaseRerolls(state, rerolls) {
    state.base.rerolls = rerolls;
  },
  setToppingsMax(state, max) {
    state.toppings.max = max;
  },
  setToppingsCount(state, count) {
    state.toppings.count = count;
  },
  setToppingsIds(state, ids) {
    state.toppings.ids = ids;
  },
  setToppingsNames(state, names) {
    state.toppings.names = names;
  },
  setToppingsId(state, topping) {
    state.toppings.ids.splice(topping.i, 1, topping.id);
  },
  setToppingsName(state, topping) {
    state.toppings.names.splice(topping.i, 1, topping.name);
  },
  setToppingsRerolls(state, rerolls) {
    state.toppings.rerolls = rerolls;
  },
};
