<template>
    <section class="container">
        <header>
            <h2>My Messages</h2>
        </header>
        <ul v-if="hasMessages">
            <MessageItem v-for="message in messages" :email="message.email" :message="message.message" />
        </ul>
        <h3 v-else>You does not have messages.</h3>
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