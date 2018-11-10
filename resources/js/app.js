import Vue from "vue";
import App from "./components/App";
import router from "./router/index";
import {store} from "./store/store";

import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";

Vue.use(PaperDashboard);

require('./bootstrap');

Vue.component('app', App);

window.headers = {
    "Content-Type": "multipart/form-data;",
    // "Content": "application/x-www-form-urlencoded",
    "Accept": "application/json",
    "Host": "104.238.185.164",
    "Access-Control-Allow-Origin": true
};

const app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
