import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cancel: 0,
    filters: {},
    loggedIn: true,
    httpRequests: 0,
    loggedInUser: {},
    userPreference: {
      siteContainerLayout: 'wide',
    },
  },
  getters: {
    filters: (state) => {
      return state.filters;
    },
    requests: (state) => {
      return state.httpRequests;
    },
    isPendingState: (state) => {
      return state.httpRequests > 0;
    },
    cancel: (state) => {
      return state.cancel;
    },
    loggedIn: (state) => {
      return state.loggedIn;
    },
    currentLayoutClass: (state) => {
      if (state.userPreference.siteContainerLayout === 'wide') {
        return 'xl:px-10 w-full';
      }
      return 'container';
    },
  },
  mutations: {
    incrementRequests(state) {
      state.httpRequests++;
    },
    decrementRequests(state) {
      state.httpRequests--;
    },
    setRequests(state, count) {
      state.httpRequests = count;
    },
    logOut(state) {
      state.loggedIn = false;
    },
    cancel(state) {
      state.cancel++;
    },
    setLoggedInUser(state, me) {
      state.loggedInUser = me;
    },
    updateUserPreference(state, { value, key }) {
      state.userPreference[key] = value;
    },
  },
});
