export default {
  async init({ commit }) {
    // let res = await fetch('stores');
    // res = await res.json();
    const res = ['Cocos'];
    commit('setShops', res);
    commit('setShop', res[0]);
  },
  async setBases({ commit }) {
    // let res = await fetch(`stores/${state.shop}/bases`);
    // res = await res.json();
    const res = ['Base A', 'Base B', 'Base C'];
    commit('setBases', res);
  },
  async setToppings({ commit }) {
    // let res = await fetch(`stores/${state.shop}/toppings`);
    // res = await res.json();
    const res = ['Toppings A', 'Toppings B', 'Toppings C'];
    commit('setToppings', res);
  },
};
