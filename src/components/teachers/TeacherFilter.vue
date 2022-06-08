<template>
    <h2>Find Your Teacher Now!</h2>
    <div class="input-control">
        <select name="category" id="category" ref="category">
            <option value="" disabled selected>Areas of Expertise</option>
            <option value="">Show All</option>
            <option value="English for work">English for work</option>
            <option value="Business English">Business English</option>
            <option value="English for traveling">English for traveling</option>
            <option value="English for study abroad">English for study abroad</option>
        </select>
        <BaseButton size="big" @click="$emit('category', this.$refs.category.value)">Search</BaseButton>
    </div>
</template>

<script>
import BaseButton from '../ui/BaseButton.vue'

export default {
    components: {
        BaseButton
    },
    emits: ['category']
}
</script>

<style scoped>
select {
    cursor: pointer;
    padding: 12px 24px;
    font-size: 16px;
    border-radius: 24px;
    border: 2px solid black;
    font-weight: 500;
    white-space: nowrap;
    background-color: black;
    color: white;
    width: 30%;
    min-width: 300px;
    margin-right: 10px;
}

h2 {
    font-weight: bold;
    font-size: 45px;
    letter-spacing: 2px;
    margin-bottom: 20px;
}

.input-control {
    width: fit-content;
    padding: 10px;
    border-radius: 80px;
    text-align: center;
    background-color: white;
}
</style>