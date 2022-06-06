<template>
    <section class="container">
        <h3>My Messages</h3>
        <ul v-if="hasMessages">
            <MessageItem v-for="message in messages" :email="message.email" :message="message.message" />
        </ul>
        <h4 v-else>You does not have messages.</h4>
    </section>
</template>

<script>
import MessageItem from '../../components/messages/MessageItem.vue'

export default {
    components: { 
        MessageItem 
    },
    computed: {
        messages() {
            return this.$store.getters.messages;
        },
        hasMessages() {
            return this.$store.getters.hasMessages;
        }
    }
}
</script>

<style scoped>
section {
    max-width: 600px;
    margin: 0 auto;
}

h3 {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: 600;
}

ul {
    list-style: none;
}
</style>