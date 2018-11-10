import Vue from "vue";
import App from "./components/App";
import router from "./router/index";
import {store} from "./store/store";
import Auth from "./mixins/Auth";

import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";

Vue.use(PaperDashboard);

require('./bootstrap');

Vue.component('app', App);

Vue.mixin(Auth);

const app = new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
