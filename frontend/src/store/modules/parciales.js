import db from '../../firebase'

//Parciales Store

//Initial state
const state = {
    parciales: []
}

const getters = {

    getParciales: state => {
        return state.parciales
    }
}

const actions = {

    retrieveParciales: context => {
        db.collection('parciales').get()
        .then(querySnaphot => {
            let tempParciales = []
            querySnaphot.forEach(doc => {
                const data = {
                    id: doc.id,
                    nota: doc.data().nota,
                    fecha: doc.data().fecha
                }
                tempParciales.push(data)
            })
            context.commit('retrieveParciales', tempParciales)
        })
    }
}

const mutations = {

    retrieveParciales: (state, parciales) => {
        state.parciales = parciales
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}