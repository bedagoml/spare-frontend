import Vue from "vue";
import App from "./components/App";
import router from "./router/index";

import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";

Vue.use(PaperDashboard);

require('./bootstrap');

Vue.component('app', App);

const app = new Vue({
    router,
    render: h => h(App)
}).$mount("#app");
