<template>
    <button v-if="!link" :class="mode">
        <slot></slot>
    </button>
    <router-link v-else :to="to" :class="mode">
        <slot></slot>
    </router-link>
</template>

<script>
export default {
    props: {
        link: {
            type: Boolean,
            required: false,
            default: false
        },
        to: {
            type: String,
            required: false,
            default: '/'
        },
        mode: {
            type: String,
            required: false,
            default: 'fill'
        }
    }
}
</script>

<style scoped>
button,
a {
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 20px;
    font-weight: 600;
    white-space: nowrap;
}

button.fill,
a.fill {
    background-color: rgb(233, 159, 0);
    border: 2px solid rgb(233, 159, 0);
    color: white;
}

button.fill:hover,
a.fill:hover {
    background-color: rgb(238, 163, 0);
    border: 2px solid rgb(238, 163, 0);
}

button.autline,
a.outline {
    border: 2px solid rgb(233, 159, 0);
    color: rgb(233, 159, 0);
}
button.autline:hover,
a.outline:hover {
    background-color: rgba(255, 174, 0, 0.178);
}
</style>