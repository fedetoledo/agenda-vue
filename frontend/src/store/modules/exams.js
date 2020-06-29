import axios from 'axios'
import firebase from 'firebase'
//exams Store
const url = "https://agenda-vue-django-api.herokuapp.com/api/exams/"

//Initial state
const state = {
    exams: [],
    loading: true
}

const getters = {

    getExams: state => {
        return state.exams
    }
}

const actions = {

    retrieveExams: context => {
        context.state.loading = true
        axios.get(url)
        .then(response => {
            let tempParciales = []
            let userExams = response.data.filter(doc => doc.userUid == firebase.auth().currentUser.uid)
            userExams.forEach(exam => {
                const data = {
                    id: exam.id,
                    date: exam.date,
                    time: exam.time,
                    grade: exam.grade,
                    subject: exam.subject,
                    typeOf: exam.typeOf,
                    userUid: exam.userUid
                }
                tempParciales.push(data)
            })
            context.state.loading = false
            context.commit('retrieveExams', tempParciales)
        })
        .catch(error => {
            console.log(error)
        })
    },

    addExam: (context, exam) => {
        axios.post(url, {
            date: exam.date,
            time: exam.time,
            grade: exam.grade,
            subject: exam.subject.id, //Pass the id, not the entire object
            typeOf: exam.typeOf,
            userUid: exam.subject.userUid
        })
        .then(response => {
            context.commit('addExam', response.data)
        })
        .catch(error => {
            console.log(error.response)
        })
    },

    deleteExam: (context, id) => {
        axios.delete(url+id)
        .then( () => {
            context.commit('deleteExam', id)
        })
        .catch(error => {
            console.log(error)
        })
    },

    updateExam: (context, exam) => {
        axios.patch(url+exam.id+'/', {
            date: exam.date,
            time: exam.time,
            grade: exam.grade,
            typeOf: exam.typeOf
        })
        .then( response => {
            context.commit('updateExam', response.data)
        })
    }
}

const mutations = {

    retrieveExams: (state, exams) => {
        state.exams = exams
    },

    addExam: (state, exam) => {
        state.exams.push(exam)
    },

    deleteExam: (state, id) => {
        const index = state.exams.findIndex(item => item.id == id)
        state.exams.splice(index,1)
    },

    updateExam: (state, exam) => {
        const index = state.exams.findIndex(item => item.id == exam.id)
        state.exams.splice(index, 1, exam)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}