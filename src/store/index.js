import { createStore } from 'vuex'
import teachersModule from './modules/teachers'

const store = createStore({
    modules: {
        teachers: teachersModule
    }
})

export default store

