import Vue from 'vue'
import Vuex from 'vuex'
import WebSocket from './modules/websocket'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    WebSocket
  }
})
