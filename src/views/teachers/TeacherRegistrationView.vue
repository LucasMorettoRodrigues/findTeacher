<template>
    <div class="background">
        <section class="container">
            <div class="wrapper">
                <h3>Register as a teacher!</h3>
                <TeacherForm @save-data="saveData" />
            </div>
        </section>
    </div>
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
.background {
    background-color: var(--primary-color-1);
    padding: 60px 10px;
}

.wrapper {
    background-color: white;
    width: 60vw;
    margin: 10px auto;
    padding: 20px 50px;
    border-radius: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.8) 0px 30px 60px -30px;
}

h3 {
    margin: 0 auto;
    padding-top: 20px;
    margin-bottom: 40px;
    font-size: 40px;
    letter-spacing: 2px;
    font-weight: 600;
}

@media only screen and (max-width: 768px) {
    .background {
        padding: 30px 10px;
    }

    .wrapper {
        padding: 20px;
        width: 95vw;
    }

    h3 {
        font-size: 22px;
        letter-spacing: 1px;
    }
}
</style>