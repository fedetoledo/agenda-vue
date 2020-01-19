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
                    nota: exam.nota,
                    fecha: exam.fecha,
                }
                tempParciales.push(data)
            })
            context.commit('retrieveExams', tempParciales)
        })
        .catch(error => {
            console.log(error)
        })
    }
}

const mutations = {

    retrieveExams: (state, exams) => {
        state.exams = exams
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}