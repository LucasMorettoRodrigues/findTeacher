<template>
    <div class="rate">
        <div>
            <h2><span>$</span>{{ rate }}</h2>
        </div>
        <p>per hour</p>
    </div>
</template>

<script>
export default {
    props: ['rate']
}
</script>

<style scoped>
.rate {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    margin-bottom: 30px;
}

.rate span {
    font-size: 16px;
    font-weight: 300;
}

.rate p {
    margin-top: -4px;
    font-size: 14px;
    color: #888;
}
</style>