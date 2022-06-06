<template>
    <form @submit.prevent="submitForm">
        <div class="form-control">
            <label for="email">Email</label>
            <input type="text" name="email" id="email" v-model.trim="email">
        </div>
        <div class="form-control">
            <label for="message">Message</label>
            <textarea rows="5" type="text" name="message" id="message" v-model.trim="message"></textarea>
        </div>
        <p v-if="!formIsValid">Please, verify the fields and try again.</p>
        <div class="form-control">
            <BaseButton size="big">Send Message</BaseButton>
        </div>
    </form>
</template>

<script>
import BaseButton from '../../components/ui/BaseButton.vue'

export default {
    components: {
        BaseButton
    },
    data() {
        return {
            email: '',
            message: '',
            formIsValid: true,
        }
    },
    methods: {
        submitForm() {
            this.formIsValid = true

            if(!this.email || !this.email.includes('@') || !this.message) {
                this.formIsValid = false
                return
            }

            const formData = {
                teacherId: this.$route.params.id,
                email,
                message
            }

            this.$router.push(`/teachers/${this.$route.params.id}`)
        }
    }
}
</script>

<style scoped>
form {
    max-width: 600px;
    margin: 0 auto;
}

.form-control {
    display: flex;
    flex-direction: column;
    margin: 20px 0;
}

input,
textarea {
    padding: 15px 30px;
    font-size: 14px;
    border: 2px solid lightgray;
    outline-color: yellow;
    border-radius: 15px;
}

label {
    margin-left: 20px;
    margin-bottom: -10px;
    z-index: 1;
    background-color: white;
    width: fit-content;
    padding: 0 5px;
}

p {
    color: red;
}
</style>