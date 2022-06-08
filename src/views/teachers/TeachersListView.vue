<template>
    <div class="background">
        <section class="container filters">
            <TeacherFilter @category="setCategoryFilter" />
        </section>
        <section class="container">
            <div v-if="isLoading" style="margin-top: 100px">
                <BaseSpinner />
            </div>
            <div class="error" v-if="!!error">
                <h3>Error</h3>
                <p>Sorry, something went wrong, try again later.</p>
                <p>{{ error }}.</p>
            </div>
            <ul v-if="hasTeachers && !isLoading">
                <TeacherItem v-for="teacher in filteredTeachers" :key="teacher.id" :id="teacher.id"
                    :firstName="teacher.firstName" :lastName="teacher.lastName" :areas="teacher.areas"
                    :rate="teacher.hourlyRate" />
            </ul>
            <h3 v-if="!hasTeachers && !isLoading">Teachers not found.</h3>
        </section>
    </div>

</template>

<script>
import TeacherItem from '../../components/teachers/TeacherItem.vue'
import TeacherFilter from '../../components/teachers/TeacherFilter.vue';
import BaseSpinner from '../../components/ui/BaseSpinner.vue';

export default {
    components: {
        TeacherItem,
        TeacherFilter,
        BaseSpinner
    },
    data() {
        return {
            categoryFilter: null,
            isLoading: false,
            error: null
        }
    },
    computed: {
        filteredTeachers() {
            if (this.categoryFilter) {
                return this.$store.getters.teachers.filter(i => i.areas.includes(this.categoryFilter))
            }
            return this.$store.getters.teachers;
        },
        hasTeachers() {
            return this.$store.getters.hasTeachers;
        }
    },
    created() {
        this.loadTeachers()
    },
    methods: {
        setCategoryFilter(category) {
            this.categoryFilter = category
        },
        async loadTeachers() {
            this.isLoading = true
            try {
                await this.$store.dispatch('loadTeachers')
            } catch (error) {
                this.error = error.message || 'Something went wrong.'
            }
            this.isLoading = false
        }
    }
}
</script>

<style scoped>
.background {
    background-color: var(--primary-color-1);
}

.filters {
    padding: 40px 0;
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

.error {
    color: red;
    text-align: center;
}

.error h3 {
    font-size: 18px;
    font-weight: 800;
}
</style>