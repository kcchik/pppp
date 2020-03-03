export default {
  async init({ commit }) {
    let res = await fetch('stores');
    res = await res.json();
    commit('setShops', res);
    commit('setShop', res[0]);
  },
  async setBases({ commit, state }) {
    let res = await fetch(`stores/${state.shop}/bases`);
    res = await res.json();
    commit('setBases', res);
  },
  async setToppings({ commit, state }) {
    let res = await fetch(`stores/${state.shop}/toppings`);
    res = await res.json();
    commit('setToppings', res);
  },
};
