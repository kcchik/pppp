function random(max) {
  return Math.floor(Math.random() * max) + 1;
}

export default {
  async init({ commit }) {
    let res = await fetch('stores');
    res = await res.json();
    commit('setShops', res);
  },
  async setParams({ commit }, { shop, base, toppings }) {
    commit('setBaseId', null);
    commit('setBaseRerolls', base.rerolls);
    commit('setToppingsCount', toppings.count);
    commit('setToppingsIds', new Array(toppings.count).fill(null));
    commit('setToppingsRerolls', toppings.rerolls);
    let res = await fetch(`stores/${shop}`);
    res = await res.json();
    commit('setBaseMax', res.base);
    commit('setToppingsMax', res.toppings);
  },
  rollBase({ commit, state }) {
    commit('setBaseRerolls', state.base.rerolls - 1);
    commit('setBaseId', random(state.base.max));
  },
  rollTopping({ commit, state }, i) {
    commit('setToppingsRerolls', state.toppings.rerolls - 1);
    commit('setToppingsId', { i, id: random(state.toppings.max) });
  },
};
