export default {
    state() {
        return {
            messages: [
                {
                    id: '1',
                    teacherId: 'c1',
                    email: 'email@email.com',
                    message: 'Some message.'
                },
                {
                    id: '2',
                    teacherId: 'c2',
                    email: 'email@email.com',
                    message: 'Some other message.'
                },
            ]
        }
    },
    mutations: {
        addMessage(state, payload) {
            state.teachers.push(payload)
        }
    },
    actions: {
        addMessage(context, data) {
            const messageData = {
                id: new Data().toISOString(),
                teacherId: data.teacherId,
                email: data.email,
                message: data.message
            }

            context.commit('addMessage', messageData)
        }
    },
    getters: {
        messages(state) {
            return state.messages
        },
        hasMessages(state) {
            return state.messages && state.messages.length > 0
        }
    }
}