export const state = () => ({
  currentUser: null
});

export const mutations = {
  setCurrentUser(vuexContext, user) {
    vuexContext.currentUser = user;
  },
  clearCurrentUser(vuexContext) {
    vuexContext.currentUser = null;
  }
}

export const actions = {
  setCurrentUser(vuexContext, user) {
    vuexContext.commit('setCurrentUser', user);
    localStorage.setItem('currentUser', user);
  },
  clearCurrentUser(vuexContext) {
    vuexContext.commit('clearCurrentUser');
    localStorage.removeItem('currentUser');
  }
}

export const getters = {

}
