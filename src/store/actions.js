export default {
  async init({ commit }) {
    let res = await fetch('stores');
    res = await res.json();
    commit('setShops', res);
    commit('setShop', 0);
  },
  async setBases({ commit, state }) {
    let res = await fetch(`stores/${state.shops.selected + 1}/bases`);
    res = await res.json();
    commit('setBases', res);
  },
  async setToppings({ commit, state }) {
    let res = await fetch(`stores/${state.shops.selected + 1}/toppings`);
    res = await res.json();
    commit('setToppings', res);
  },
};
