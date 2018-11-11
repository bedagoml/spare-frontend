import {store} from "../store/store";

export default {
    created() {
        axios.defaults.headers.common['Authorization'] = store.getters.accessToken;
    }
};
