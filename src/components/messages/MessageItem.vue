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