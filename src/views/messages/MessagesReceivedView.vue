<template>
    <div class="background">
        <section class="container">
            <h3>My Messages</h3>
            <div v-if="isLoading" style="margin-top: 100px">
                <BaseSpinner />
            </div>
            <div class="error" v-else-if="!!error">
                <h3>Error</h3>
                <p>Sorry, something went wrong, try again later.</p>
                <p>{{ error }}.</p>
            </div>
            <ul v-else-if="hasMessages">
                <MessageItem v-for="message in messages" :email="message.email" :message="message.message"
                    :to="teachers.find(i => i.id == message.teacherId).firstName + ' ' + teachers.find(i => i.id == message.teacherId).lastName" />
            </ul>
            <h4 v-else>You does not have messages.</h4>
        </section>
    </div>
</template>

<script>
import MessageItem from '../../components/messages/MessageItem.vue'
import BaseSpinner from '../../components/ui/BaseSpinner.vue';

export default {
    components: {
        MessageItem,
        BaseSpinner
    },
    data() {
        return {
            isLoading: false,
            error: ''
        }
    },
    computed: {
        messages() {
            return this.$store.getters.messages;
        },
        hasMessages() {
            return this.$store.getters.hasMessages;
        },
        teachers() {
            return this.$store.getters.teachers;
        }
    },
    created() {
        this.loadMessages()
        this.loadTeachers()
    },
    methods: {
        async loadMessages() {
            this.isLoading = true

            try {
                await this.$store.dispatch('loadMessages')
            } catch (error) {
                this.error = error.message || 'Someting went wrong.'
            }

            this.isLoading = false
        },
        async loadTeachers() {
            this.isLoading = true

            try {
                await this.$store.dispatch('loadTeachers')
            } catch (error) {
                this.error = error.message || 'Someting went wrong.'
            }

            this.isLoading = false
        }
    }
}
</script>

<style scoped>
.background {
    background-color: var(--primary-color-1);
    min-height: 85vh;
}

section {
    max-width: 600px;
    margin: 0 auto;
}

h3 {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
    padding: 40px 0;
    font-size: 40px;
    letter-spacing: 2px;
    font-weight: 600;
}

ul {
    list-style: none;
}

.error {
    color: red;
    text-align: center;
}

.error h3 {
    font-size: 18px;
    font-weight: 800;
}

@media only screen and (max-width: 768px) {
    h3 {
        font-size: 30px;
    }

    ul {
        padding: 0 20px;
        margin: 0 auto;
    }
}
</style>