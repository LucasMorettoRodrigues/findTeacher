<template>
    <li>
        <div>
            <a :href="`mailto: ${email}`">{{ email }}</a>
        </div>
        <p>{{ message }}</p>
    </li>
</template>

<script>
export default {
    props: ['email', 'message'],
}
</script>

<style scoped>
li {
    background-color: aliceblue;
    padding: 20px;
    margin-bottom: 10px;
    border-radius: 10px;
}

a {
    color: rgb(0, 0, 133);
}

p {
    margin-top: 10px;
    font-size: 16px;
}
</style>