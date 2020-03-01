export default {
  setShops(state, shops) {
    state.shops = shops;
  },
  setBaseMax(state, max) {
    state.base.max = max;
  },
  setBaseId(state, id) {
    state.base.id = id;
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
  setToppingsId(state, topping) {
    state.toppings.ids.splice(topping.i, 1, topping.id);
  },
  setToppingsRerolls(state, rerolls) {
    state.toppings.rerolls = rerolls;
  },
};
