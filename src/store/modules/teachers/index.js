export default {
    state() {
        return {
            teachers: [
                {
                    id: 'c1',
                    firstName: 'Maximilian',
                    lastName: 'Schwarzmüller',
                    areas: ['frontend', 'backend', 'career'],
                    description:
                    "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                    hourlyRate: 30
                },
                {
                    id: 'c2',
                    firstName: 'Julie',
                    lastName: 'Jones',
                    areas: ['frontend', 'career'],
                    description:
                    'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                    hourlyRate: 30
                },
                                {
                    id: 'c1',
                    firstName: 'Maximilian',
                    lastName: 'Schwarzmüller',
                    areas: ['frontend', 'backend', 'career'],
                    description:
                    "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                    hourlyRate: 30
                },
                {
                    id: 'c2',
                    firstName: 'Julie',
                    lastName: 'Jones',
                    areas: ['frontend', 'career'],
                    description:
                    'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                    hourlyRate: 30
                },
                                {
                    id: 'c1',
                    firstName: 'Maximilian',
                    lastName: 'Schwarzmüller',
                    areas: ['frontend', 'backend', 'career'],
                    description:
                    "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                    hourlyRate: 30
                },
                {
                    id: 'c2',
                    firstName: 'Julie',
                    lastName: 'Jones',
                    areas: ['frontend', 'career'],
                    description:
                    'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                    hourlyRate: 30
                },
            ]
        }
    },
    mutations: {
        registerTeacher(state, payload) {
            state.teachers.push(payload)
        },
        setTeachers(state, payload) {
            state.teachers = payload
        }
    },
    actions: {
        async registerTeacher(context, data) {
            const teacherData = {
                id: Math.floor(Math.random() * 99999999),
                firstName: data.firstName,
                lastName: data.lastName,
                description: data.description,
                hourlyRate: data.rate,
                areas: data.areas
            }

            const response = await fetch(`https://teacherfinder-abef2-default-rtdb.firebaseio.com/teachers/${teacherData.id}.json`, {
                method: 'PUT',
                body: JSON.stringify(teacherData)
            })
            
            // const responseData = await response.json()

            if(!response.ok) {
                const error = new Error(responseData.message || 'Failed to fetch.')
                throw error
            }

            context.commit('registerTeacher', teacherData)
        },
        async loadTeachers(context) {
            const response = await fetch(
                `https://teacherfinder-abef2-default-rtdb.firebaseio.com/teachers.json`
            )

            const responseData = await response.json()

            if(!response.ok) {
                const error = new Error(responseData.message || 'Failed to fetch.')
                throw error
            }

            const teachers = []

            for (const key in responseData) {
                teachers.push(responseData[key])
            }

            context.commit('setTeachers', teachers)
        }
    },
    getters: {
        teachers(state) {
            return state.teachers
        },
        hasTeachers(state) {
            return state.teachers && state.teachers.length > 0
        }
    }
}