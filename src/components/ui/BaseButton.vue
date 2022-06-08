<template>
    <button v-if="!link" :class="[size, mode]">
        <slot></slot>
    </button>
    <router-link v-else :to="to" :class="[size, mode]">
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
        },
        size: {
            type: String,
            required: false,
            default: 'small'
        }
    }
}
</script>

<style scoped>
button,
a {
    cursor: pointer;
    font-weight: 600;
    white-space: nowrap;
}

button.small,
a.small {
    padding: 10px 20px;
    border-radius: 20px;
    font-size: 14px;
}

button.big,
a.big {
    padding: 12px 24px;
    font-size: 16px;
    border-radius: 24px;
}

button.fill,
a.fill {
    background-color: var(--primary-color-1);
    border: 2px solid var(--primary-color-1);
    color: white;
}

button.fill:hover,
a.fill:hover {
    background-color: var(--primary-color-2);
    border: 2px solid var(--primary-color-2);
}

button.autline,
a.outline {
    border: 2px solid var(--primary-color-1);
    color: var(--primary-color-1);
}

button.outline:hover,
a.outline:hover {
    background-color: var(--primary-color-3);
}
</style>