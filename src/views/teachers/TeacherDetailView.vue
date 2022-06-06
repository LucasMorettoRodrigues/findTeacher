<template>
    <section class="container info-section">
        <h2>{{ selectedTeacher.firstName }} {{ selectedTeacher.lastName }}</h2>
        <TeacherRate :rate="selectedTeacher.hourlyRate" />
        <div>
            <BaseBadge v-for="area in selectedTeacher.areas" :key="area">{{ area }}</BaseBadge>
        </div>
        <p>{{ selectedTeacher.description }}</p>
    </section>
    <section class="container">
        <BaseButton link :to="`/teachers/${selectedTeacher.id}/contact`">Contact</BaseButton>
        <router-view></router-view>
    </section>
</template>

<script>
import BaseButton from '../../components/ui/BaseButton.vue'
import BaseBadge from '../../components/ui/BaseBadge.vue'
import TeacherRate from '../../components/teachers/TeacherRate.vue'

export default {
    components: {
    BaseButton,
    BaseBadge,
    TeacherRate
    },
    data() {
        return {
            selectedTeacher: null
        }
    },
    created() {
        this.selectedTeacher = this.$store.getters.teachers.find(i => i.id === this.$route.params.id)
    }
}
</script>

<style scoped>
.info-section {
    margin-top: 40px;
}

h2 {
    font-weight: 800;
    margin-bottom: 20px;
}

.info-section p {
    margin-top: 20px;
    margin-bottom: 25px;
}
</style>