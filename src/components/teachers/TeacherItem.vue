<template>
    <li>
        <div class="back"></div>
        <article class="card">
            <div class="card-image">
                <div class="image">
                    <img src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Teacher Photo" />
                </div>
            </div>
            <div class="card-info">
                <header>
                    <div>
                        <h3>{{ firstName }} {{ lastName }}</h3>
                        <p>English Teacher</p>
                    </div>
                    <TeacherRate :rate="rate" />
                </header>
                <div>
                    <BaseBadge class="badges" v-for="area in areas" :key="area">{{ area }}</BaseBadge>
                </div>
            </div>
        </article>

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
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.8) 0px 30px 60px -30px;
    padding: 30px;
    border-radius: 5px;
    margin: 20px;
    min-width: 400px;
    height: 250px;
    flex: 1;
    background-color: rgb(255, 255, 255);
    flex-direction: column;
    align-items: center;
    transition: all .5s ease-out;
}

.card {
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.card-image {
    height: 190px;
    width: 190px;
}

img {
    width: 190px;
    height: 190px;
    object-fit: cover;
    object-position: right;

}

.card-info {
    flex: 1;
    margin-left: 30px;
}

header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
}

h3 {
    font-size: 24px;
    font-weight: 600;
    color: #444;
}

p {
    color: #666;
    font-style: italic;
}

.badges {
    margin-bottom: 10px;
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