import Vue from "vue";
import App from "./App.vue";
import store from "./store";

// import socketio from 'socket.io';
// import VueSocketIO from 'vue-socket.io';

// export const SocketInstance = socketio('http://localhost:8080');

// Vue.use(VueSocketIO, SocketInstance)

Vue.config.productionTip = false;

new Vue({
    store,
    render: (h) => h(App),
}).$mount("#app");
