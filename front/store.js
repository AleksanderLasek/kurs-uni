import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      waitingTime: 0,
      callTime: 0,
    };
  },
  mutations: {
    updateWaitingTime(state, time) {
      state.waitingTime = time;
    },
    updateCallTime(state, time) {
      state.callTime = time;
    },
  },
});
