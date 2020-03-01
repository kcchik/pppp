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
    commit('setBaseName', '');
    commit('setBaseRerolls', base.rerolls);
    commit('setToppingsCount', toppings.count);
    commit('setToppingsIds', new Array(toppings.count).fill(null));
    commit('setToppingsNames', new Array(toppings.count).fill(''));
    commit('setToppingsRerolls', toppings.rerolls);
    let res = await fetch(`stores/${shop}`);
    res = await res.json();
    commit('setBaseMax', res.base);
    commit('setToppingsMax', res.toppings);
  },
  async rollBase({ commit, state }) {
    commit('setBaseRerolls', state.base.rerolls - 1);
    const id = random(state.base.max);
    commit('setBaseId', id);
    let res = await fetch(`stores/${state.shop}/base/${id}`);
    res = await res.json();
    commit('setBaseName', res.name);
  },
  async rollTopping({ commit, state }, i) {
    commit('setToppingsRerolls', state.toppings.rerolls - 1);
    const id = random(state.toppings.max);
    commit('setToppingsId', { i, id });
    let res = await fetch(`stores/${state.shop}/toppings/${id}`);
    res = await res.json();
    commit('setToppingsName', { i, name: res.name });
  },
};
