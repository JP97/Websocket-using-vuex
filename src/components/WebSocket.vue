<template>
    <div class="hello">
        <img src="../assets/logo.png" alt="" srcset="" class="bigimage" />
        <form @submit.prevent="emitMessage">
            <input
                type="text"
                v-model="message"
                placeholder="Write the message..."
            />
            <button type="submit">send message</button>
        </form>
        <div>
            <p>
                The Response from the message is:
                {{ this.$store.getters.getResponse }}
            </p>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "WebSocket",
    data() {
        return {
            response: "",
            message: "",
            conection: {},
        };
    },
    computed: {
        ...mapGetters(["getWebSocket", "getResponse"]),
    },
    methods: {
        ...mapActions(["send"]),
        emitMessage() {
            console.log(`The messages: "${this.message}" is beeing send`);
            this.send(this.message);
            this.message = "";
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
