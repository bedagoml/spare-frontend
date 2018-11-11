import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        user: JSON.parse(localStorage.getItem('user-data')) || {}
    },
    mutations: {
        updateUser(state, data) {
            localStorage.setItem('user-data', JSON.stringify(data));
            state.user = data;
        },
        clearUserData(state) {
            localStorage.clear();
            state.user = {};
        }
    },
    getters: {
        accessToken: (state) => {
            return state.user.accessToken;
        },
        loggedIn: (state) => {
            return state.user.hasOwnProperty('accessToken');
        },
        userName: (state) => {
            return state.user.name;
        },
        userEmail: (state) => {
            return state.user.email;
        }
    }
});
