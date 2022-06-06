<template>
    <h2>Find Your Teacher</h2>
    <div class="input-control">
        <select name="category" id="category" ref="category">
            <option value="" disabled selected>category</option>
            <option value="">Show All</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="career">Career</option>
        </select>
            <BaseButton @click="$emit('category', this.$refs.category.value)">Search</BaseButton>
    </div>
</template>

<script>
import BaseButton from '../ui/BaseButton.vue'

export default {
    components: {
        BaseButton
    }
}
</script>

<style scoped>
select {
    cursor: pointer;
    padding: 8px 18px;
    border-radius: 20px;
    border: 2px solid black;
    font-weight: 600;
    white-space: nowrap;
    background-color: black;
    color: white;
    width: 30%;
    min-width: 300px;
    margin-right: 10px;
}

h2 {
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 20px;
}

.input-control {
    width: 100%;
    text-align: center;
}
</style>