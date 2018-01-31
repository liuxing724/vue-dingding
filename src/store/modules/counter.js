import Vue from 'vue';
import * as types from '../mutation-types';
import counterApi from '@/api/counter';

const state = {
  count: 0,
  step: 1
};

const getters = {
  count4Man: state => state.count + '个'
};

const actions = {
  increase( { commit, state }, { step = 1 } = {}){
    commit(types.INCREASE, step);
  },
  decrease( { commit }, { step = 1 } = {}){
    commit(types.DECREASE, step);
  },
  getCounter( { commit } ){
    commit(types.COUNTER_REQUEST);
    counterApi.getCounter(
      () => {
        commit(types.COUNTER_SUCCESS);
      },
      () => {
        commit(types.COUNTER_FAIL);
      }
    )
  }
};

const mutations = {
  [types.INCREASE](state, step = 1){
    state.count += step;
  },
  [types.DECREASE](state, step = 1){
    state.count -= step;
  },
  [types.COUNTER_REQUEST](){

  },
  [types.COUNTER_SUCCESS](){
    Vue.set(state, 'asyncFlag', true);
    Vue.set(state, 'count2', 99);
  },
  [types.COUNTER_FAIL](){

  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
