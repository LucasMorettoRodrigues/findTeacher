<template>
    <div class="background">
        <section class="container info-section">
            <div class="top">
                <div class="image">
                    <img src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Teacher Photo" />
                </div>
                <div class="info">
                    <header>
                        <div class="name">
                            <h2>{{ selectedTeacher.firstName }} {{ selectedTeacher.lastName }}</h2>
                            <p>English Teacher</p>
                        </div>
                        <div class="rate-container">
                            <TeacherRate :rate="selectedTeacher.hourlyRate" />
                        </div>
                    </header>
                    <div class="badges-container">
                        <BaseBadge class="badges" v-for="area in selectedTeacher.areas" :key="area">{{ area }}
                        </BaseBadge>
                    </div>
                </div>
            </div>
            <div class="middle">
                <h3>Description</h3>
                <p>{{ selectedTeacher.description }}</p>
            </div>
            <div class="bottom">
                <div v-if="!$route.path.split('/')[3]" class="btn">
                    <BaseButton size="big" link :to="`/teachers/${selectedTeacher.id}/contact`">
                        Send Me a Message and Book a Class!
                    </BaseButton>
                </div>
                <div v-else class="form">
                    <router-view></router-view>
                </div>
            </div>
        </section>
    </div>
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
        this.selectedTeacher = this.$store.getters.teachers.find(i => `${i.id}` === this.$route.params.id)
        console.log(this.$route.path.split('/')[3])
    }
}
</script>

<style scoped>
.background {
    background-color: var(--primary-color-1);
    min-height: 80vh;
    padding-top: 70px;
    padding-bottom: 40px;
    margin-bottom: 0;
}

.info-section {
    padding: 20px;
    margin: 10px;
    max-width: 900px;
    background-color: white;
    border-radius: 10px;
}

.top {
    padding: 0px;
    max-width: 900px;
    background-color: white;
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 20px;
}

header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
}

.image img {
    height: 190px;
    width: 190px;
    object-fit: cover;
    object-position: right;
}

.info {
    flex: 1;
    margin-left: 20px;
}

h2 {
    font-size: 24px;
    font-weight: 600;
    color: #444;
}

.badges {
    margin-bottom: 10px;
}

.info-section p {
    color: #666;
    font-style: italic;
}

.middle {
    margin-bottom: 25px;
}

.middle h3 {
    margin-bottom: 5px;
}

.bottom {
    margin-bottom: 10px;
}

.bottom .btn {
    text-align: right;
}

.bottom .form {
    margin-top: 50px;
}

@media only screen and (max-width: 768px) {
    .background {
        padding: 40px 0;
    }

    .info-section {
        padding: 10px;
    }

    header {
        flex-direction: column;
    }

    h2 {
        font-size: 18px;
    }

    .info {
        margin-left: 10px;
    }

    .name {
        margin-bottom: 5px;
    }

    .badges-container {
        margin-top: -45px;
    }

    .badges {
        margin-bottom: 5px;
    }

    .rate-container {
        margin-bottom: 5px;
    }
}
</style>