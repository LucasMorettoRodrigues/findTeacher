<template>
    <section>
        Filters
    </section>
    <section>
        <ul v-if="hasTeachers">
            <li v-for="teacher in filteredTeachers" :key="teacher.id">
                <p>{{ teacher.firstName }}</p>
            </li>
        </ul>
        <h3 v-else>Teachers not found.</h3>
    </section>
</template>

<script>
export default {
    computed: {
        filteredTeachers() {
            return this.$store.getters.teachers
        },
        hasTeachers() {
            return this.$store.getters.hasTeachers
        }
    }
}
</script>