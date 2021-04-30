---
to: src/store/<%=name%>/index.ts
---

import { Module } from 'vuex';
import { StateInterface } from 'src/store/state';
import state, { <%= h.inflection.capitalize(name)  %>Interface } from './state';
import actions from './actions';
import mutations from './mutations';

const  <%= name %>: Module< <%= h.inflection.capitalize(name) %>Interface, StateInterface> = {
  namespaced: true,
  actions,
  mutations,
  state
};

export default  <%= name %>;








