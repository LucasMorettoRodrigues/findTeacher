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
    background-color: white;
    padding: 20px;
    margin-bottom: 10px;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.8) 0px 30px 60px -30px;
}

a {
    color: rgb(0, 0, 133);
}

p {
    margin-top: 10px;
    font-size: 16px;
}
</style>