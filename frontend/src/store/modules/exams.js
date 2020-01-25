import axios from 'axios'
//exams Store
const url = "http://localhost:8000/api/exams/"

//Initial state
const state = {
    exams: []
}

const getters = {

    getExams: state => {
        return state.exams
    }
}

const actions = {

    retrieveExams: context => {
        axios.get(url)
        .then(response => {
            let tempParciales = []
            response.data.forEach(exam => {
                const data = {
                    id: exam.id,
                    date: exam.date,
                    grade: exam.grade,
                    subject: exam.subject,
                    typeOf: exam.typeOf
                }
                tempParciales.push(data)
            })
            context.commit('retrieveExams', tempParciales)
        })
        .catch(error => {
            console.log(error)
        })
    },

    addExam: (context, exam) => {
        console.log(exam.typeOf)
        axios.post(url, {
            date: exam.date,
            grade: exam.grade,
            subject: exam.subject.id, //Pass the id, not the entire object
            typeOf: exam.typeOf
        })
        .then(response => {
            context.commit('addExam', response.data)
        })
        .catch(error => {
            console.log(error)
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
            grade: exam.grade,
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