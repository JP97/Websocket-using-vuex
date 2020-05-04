const state = {
    webSocket: new WebSocket("wss://echo.websocket.org"),
    message: "",
};

const getters = {
    getWebSocket: (state) => state.webSocket,
    getResponse: (state) => state.message,
};

const actions = {
    send({ commit }, message) {
        state.webSocket.send(message);
        state.webSocket.onmessage = function(event) {
            //quick tjek for the message
            console.log(message);
            commit("response", event.data);
        };
    },
};

const mutations = {
    response: (state, responsemessage) => {
        state.message = responsemessage;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
