<template>
    <section>
        Filters
    </section>
    <section>
        <ul v-if="hasTeachers">
            <TeacherItem v-for="teacher in filteredTeachers" :key="teacher.id" :id="teacher.id"
                :firstName="teacher.firstName" :lastName="teacher.lastName" :areas="teacher.areas"
                :rate="teacher.hourlyRate" />
        </ul>
        <h3 v-else>Teachers not found.</h3>
    </section>
</template>

<script>
import TeacherItem from '../../components/teachers/TeacherItem.vue'

export default {
    components: {
        TeacherItem
    },
    computed: {
        filteredTeachers() {
            return this.$store.getters.teachers;
        },
        hasTeachers() {
            return this.$store.getters.hasTeachers;
        }
    },
    components: { TeacherItem }
}
</script>

<style scoped>
ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
}
</style>