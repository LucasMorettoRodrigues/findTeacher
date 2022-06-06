<template>
    <section class="container filters">
        <TeacherFilter @category="(category) => setCategoryFilter(category)"/>
    </section>
    <section class="container">
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
import TeacherFilter from '../../components/teachers/TeacherFilter.vue';

export default {
    components: { 
        TeacherItem, 
        TeacherFilter 
    },
    data() {
        return {
            categoryFilter: null
        }
    },    
    computed: {
        filteredTeachers() {
            if(this.categoryFilter) {
                return this.$store.getters.teachers.filter(i => i.areas.includes(this.categoryFilter))
            }
            return this.$store.getters.teachers;
        },
        hasTeachers() {
            return this.$store.getters.hasTeachers;
        }
    },
    methods: {
        setCategoryFilter(category) {
            this.categoryFilter = category
        }
    }
}
</script>

<style scoped>
.filters {
    margin: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0 auto;
}
</style>