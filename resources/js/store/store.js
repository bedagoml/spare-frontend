import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);



export const store = new Vuex.Store({
    state: {
        user: {}
    },
    mutations: {
        updateUser(state, data) {
            state.user = data;
        }
    },
    getters: {
        accessToken: (state) => {
            return state.user.accessToken;
        },
        userName: (state) => {
            return state.user.name;
        },
        userEmail: (state) => {
            return state.user.email;
        }
    }
});
