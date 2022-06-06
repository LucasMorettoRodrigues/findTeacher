<template>
    <form @submit.prevent="submitForm">
        <div class="form-control" :class="{invalid: !firstName.isValid}">
            <label for="firstName">First Name</label>
            <input type="text" name="firstName" id="firstName" v-model.trim="firstName.value">
            <p v-if="!firstName.isValid">Invalid input, try again.</p>
        </div>
        <div class="form-control" :class="{invalid: !lastName.isValid}">
            <label for="lastName">Last Name</label>
            <input type="text" name="lastName" id="lastName" v-model.trim="lastName.value">
            <p v-if="!lastName.isValid">Invalid input, try again.</p>
        </div>
        <div class="form-control" :class="{invalid: !description.isValid}">
            <label for="description">Description</label>
            <textarea rows="5" type="text" name="description" id="description" v-model.trim="description.value" />
            <p v-if="!description.isValid">Invalid input, try again.</p>
        </div>
        <div class="form-control" :class="{invalid: !rate.isValid}">
            <label for="rate">Hourly Rate</label>
            <input type="text" name="rate" id="rate" v-model.trim="rate.value">
            <p v-if="!rate.isValid">Invalid input, try again.</p>
        </div>
        <div class="form-control" :class="{invalid: !category.isValid}">
            <label for="category">Category</label>
            <input type="text" name="category" id="category" v-model.trim="category.value">
            <p v-if="!category.isValid">Invalid input, try again.</p>
        </div>
        <div class="form-control" :class="{invalid: !areas.isValid}">
            <label for="areas">Areas of expertise</label>
            <input type="text" name="areas" id="areas" v-model.trim="areas.value">
            <p v-if="!areas.isValid">Invalid input, try again.</p>
        </div>
        <p v-if="!formIsValid">Please fix the above errors and submit again.</p>
        <div class="form-control btn-container">
            <BaseButton size="big">Register</BaseButton>
        </div>
    </form>
</template>

<script>
import BaseButton from '../ui/BaseButton.vue'

export default {
    components: { 
        BaseButton 
    },
    emits: ['saveData'],
    data() {
        return {
            firstName: {
                value: "",
                isValid: true
            },
            lastName: {
                value: "",
                isValid: true
            },
            description: {
                value: "",
                isValid: true
            },
            rate: {
                value: null,
                isValid: true
            },
            category: {
                value: "",
                isValid: true
            },
            areas: {
                value: "",
                isValid: true
            },
            formIsValid: true
        };
    },
    methods: {
        validateForm() {
            this.formIsValid = true

            if(!this.firstName.value) {
                this.firstName.isValid = false
                this.formIsValid = false
            }
            if(!this.lastName.value) {
                this.lastName.isValid = false
                this.formIsValid = false
            }
            if(!this.description.value) {
                this.description.isValid = false
                this.formIsValid = false
            }
            if(!this.rate.value || this.rate < 0) {
                this.rate.isValid = false
                this.formIsValid = false
            }
            if(!this.category.value) {
                this.category.isValid = false
                this.formIsValid = false
            }
            if(!this.areas.value) {
                this.areas.isValid = false
                this.formIsValid = false
            }
        },
        submitForm: function() {
            this.validateForm()

            if(!this.formIsValid) {
                return
            }

            const formData = {
                firstName: this.firstName.value,
                lastName: this.lastName.value,
                description: this.description.value,
                rate: this.rate.value,
                category: this.category.value,
                areas: [this.areas.value]
            };
            
            this.$emit('saveData', formData)
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

.form-control.invalid label,
p {
    color: red;
}

.form-control.invalid input,
.form-control.invalid textarea {
    border-color: red;
}

.btn-container {
    margin-top: 20px;
}
</style>