import { Module } from "vuex";
import { StateInterface } from "src/store/state";
import state, { CounterInterface } from "./state";
import actions from "./actions";
import mutations from "./mutations";

const Counter: Module<CounterInterface, StateInterface> = {
  namespaced: true,
  actions,
  mutations,
  state
};

export default Counter;
