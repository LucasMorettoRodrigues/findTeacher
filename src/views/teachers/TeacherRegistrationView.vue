<template>
    <section class="container">
        <h3>Register as a teacher!</h3>
        <TeacherForm @save-data="saveData" />
    </section>
</template>

<script>
import TeacherForm from '../../components/teachers/TeacherForm.vue'

export default {
    components: {
        TeacherForm
    },
    methods: {
        saveData(data) {
            this.$store.dispatch('registerTeacher', data)
            this.$router.push('/teachers')
        }
    }
}
</script>

<style scoped>
h3 {
    max-width: 600px;
    margin: 0 auto;
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 30px;
    font-weight: 600;
}
</style>