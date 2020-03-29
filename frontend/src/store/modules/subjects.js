import axios from 'axios'

//subjects Store

//API URL
const url = "https://safe-coast-17254.herokuapp.com/api/subjects/"

//Initial State
const state = {
    subjects: [],
    loading: true,
}

const getters = {

    getSubjects: state => {
        return state.subjects
    }
}

const actions = {

    retrieveSubjects: context => {
        axios.get(url)
        .then(response => {
            let tempSubjects = []
            response.data.forEach(doc => {
                const data = {
                    id: doc.id,
                    name: doc.name,
                    schedule1: doc.schedule1,
                    schedule2: doc.schedule2,
                    color: doc.color,
                }
                tempSubjects.push(data)
            })
            context.commit('retrieveSubjects', tempSubjects)
        })
        .catch(error => {
            console.log(error)
        })
    },

    addSubject: (context,subject) => {
        axios.post(url, {
            name: subject.name,
            schedule1: subject.schedule1,
            schedule2: subject.schedule2,
            color: subject.color,
        })
        .then(response => {
            context.commit('addSubject', {
                id: response.data.id,
                name: response.data.name,
                schedule1: response.data.schedule1,
                schedule2: response.data.schedule2,
                color: response.data.color,
            })
        })
        .catch(error => {
            console.log(error)
        })
    },

    deleteSubject: (context, id) => {
        axios.delete(url+id)
        .then( () => {
            context.commit('deleteSubject', id)
        })
        .catch(error => {
            console.log(error)
        })
    },

    updateSubject: (context, subject) => {
        const path = url + subject.id + '/'
        axios.put(path, {
            name: subject.name,
            schedule1: subject.schedule1,
            schedule2: subject.schedule2,
            color: subject.color,
        })
        .then(response => {
            context.commit('updateSubject', response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }
}

const mutations = {

    retrieveSubjects: (state, subjects) => {
        state.subjects = subjects
    },

    addSubject: (state, subject) => {
        state.subjects.push(subject)
    },

    deleteSubject: (state, id) => {
        const index = state.subjects.findIndex(item => item.id == id)
        state.subjects.splice(index,1)
    },

    updateSubject: (state, subject) => {
        const index = state.subjects.findIndex(item => item.id == subject.id)
        state.subjects.splice(index, 1, {
            id: subject.id,
            name: subject.name,
            schedule1: subject.schedule1,
            schedule2: subject.schedule2
        })
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}