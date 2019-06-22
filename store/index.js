export const strict = false

export const state = () => ({
  currentUser: null
});

export const mutations = {
  setCurrentUser(vuexContext, user) {
    console.log('[mutation] setCurrentUser');
    vuexContext.currentUser = user;
  },
  clearCurrentUser(vuexContext) {
    console.log('[mutation] clearCurrentUser');
    vuexContext.currentUser = null;
  }
}

export const actions = {
  setCurrentUser(vuexContext, user) {
    console.log('[action] setCurrentUser');
    vuexContext.commit('setCurrentUser', user);
    localStorage.setItem('currentUser', user);
  },
  clearCurrentUser(vuexContext) {
    console.log('[action] clearCurrentUser');
    vuexContext.commit('clearCurrentUser');
    localStorage.removeItem('currentUser');
  }
}

export const getters = {

}
