<template>
    <div>
        <slot></slot>
    </div>
</template>

<style scoped>
div {
    padding: 5px 10px;
    border-radius: 10px;
    background-color: rgba(255, 255, 0, 0.39);
    color: rgb(168, 123, 0);
    margin-right: 10px;
}

@media only screen and (max-width: 768px) {
    div {
        font-size: 14px;
    }
}
</style>