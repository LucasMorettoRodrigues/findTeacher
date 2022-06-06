<template>
    <li>
        <div class="back"></div>
        <h3>{{ firstName }} {{ lastName }}</h3>
        <TeacherRate :rate="rate" />
        <div>
            <BaseBadge v-for="area in areas" :key="area">{{ area }}</BaseBadge>
        </div>
        <div class="actions">
            <div>
                <BaseButton link :to="`/teachers/${id}/contact`" mode="outline">Contact</BaseButton>
            </div>
            <div>
                <BaseButton link :to="`/teachers/${id}`">View Details</BaseButton>
            </div>
        </div>
    </li>
</template>

<script>
import BaseButton from '../ui/BaseButton.vue';
import BaseBadge from '../ui/BaseBadge.vue';
import TeacherRate from '../teachers/TeacherRate.vue';

export default {
    components: { 
        BaseButton, 
        BaseBadge,
        TeacherRate
    },
    props: ["id", "firstName", "lastName", "areas", "rate"]
}
</script>

<style scoped>
li {
    position: relative;
    display: flex;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    padding: 50px;
    border-radius: 5px;
    margin: 20px;
    min-width: 400px;
    flex: 1;
    background-color: rgba(255, 255, 0, 0.267);
    flex-direction: column;
    align-items: center;
    transition: all .5s ease-out;
}

h3 {
    font-size: 20px;
    font-weight: 600;
    color: #444;
    margin-bottom: 20px;
}

.actions {
    display: flex;
    position: absolute;
    transform: translateX(-50%) translateY(-50%);
    top: 50%;
    left: 50%;
    opacity: 0;
    transition: all .2s ease-out;
    transition-delay: .3s;
    z-index: 1;
}

.actions div {
    margin-left: 10px;
    margin-bottom: 5px;
}

.back {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.849);
    transition: all 1s ease-out;
    z-index: 1;
    transform: scaleX(0);
}

li:hover .back {
    transform: scaleX(1);
    transform-origin: top;
}

li:hover .actions {
    opacity: 1;
}
</style>