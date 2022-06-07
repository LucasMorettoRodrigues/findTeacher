export default {
    state() {
        return {
            messages: []
        }
    },
    mutations: {
        addMessage(state, payload) {
            state.messages.push(payload)
        },
        setMessages(state, payload) {
            state.messages = payload
        }
    },
    actions: {
        async addMessage(context, data) {
            const messageData = {
                id: Math.floor(Math.random() * 99999999),
                teacherId: data.teacherId,
                email: data.email,
                message: data.message
            }

            const response = await fetch(`https://teacherfinder-abef2-default-rtdb.firebaseio.com/messages/${messageData.id}.json`, {
                method: 'PUT',
                body: JSON.stringify(messageData)
            })

            if (!response.ok) {
                const error = new Error(responseData.message || 'Failed to fetch.')
                throw error
            }

            context.commit('addMessage', messageData)
        },
        async loadMessages(context) {
            const response = await fetch(
                `https://teacherfinder-abef2-default-rtdb.firebaseio.com/messages.json`
            )

            const responseData = await response.json()

            if (!response.ok) {
                const error = new Error(responseData.message || 'Failed to fetch.')
                throw error
            }

            const messages = []

            for (const key in responseData) {
                messages.push(responseData[key])
            }

            console.log(messages)

            context.commit('setMessages', messages)
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