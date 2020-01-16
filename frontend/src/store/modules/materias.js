import db from '../../firebase'

//Materias Store

//Initial State
const state = {
    materias: [],
    loading: true,
}

const getters = {

    getMaterias: state => {
        return state.materias
    }
}

const actions = {

    retrieveMaterias: context => {
        context.state.loading = true
        db.collection('materias').get()
        .then(querySnapshot => {
            let tempMaterias = []
            querySnapshot.forEach(doc => {
                const data = {
                    id: doc.id,
                    nombre: doc.data().nombre,
                    horarios: doc.data().horarios
                }
                tempMaterias.push(data)
            })
            context.state.loading = false
            context.commit('retrieveMaterias', tempMaterias)
        })
    }
}

const mutations = {

    retrieveMaterias: (state, materias) => {
        state.materias = materias
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}