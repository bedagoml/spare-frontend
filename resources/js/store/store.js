import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);



export const store = new Vuex.Store({
    state: {
        cart: {
            cartItems: []
        }
    },
    mutations: {
        updateCart(state, data) {
            state.cart = data;
        }
    },
    getters: {
        cartItems: (state) => {
            return state.cart.cartItems;
        },
        cartItemCount: (state) => {
            return state.cart.cartItems.length;
        }
    }
});
