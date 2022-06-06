import { createStore } from 'vuex'
import teachersModule from './modules/teachers'
import messagesModule from './modules/messages'

const store = createStore({
    modules: {
        teachers: teachersModule,
        messages: messagesModule
    }
})

export default store

