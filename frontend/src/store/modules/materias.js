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
    },

    addMateria: (context, materia) => {
        db.collection('materias').add({
            nombre: materia.nombre,
            horarios: materia.horarios
        })
        .then(docRef => {
            context.commit('addMateria', {
                id: docRef.id,
                nombre: materia.nombre,
                horarios: materia.horarios
            })
        })
        .catch(error => {
            console.log(error)
        })
    },

    deleteMateria: (context, id) => {
        db.collection('materias').doc(id).delete()
        .then( () => {
            alert("Materia Deleted")
            context.commit('deleteMateria', id)
        })
        .catch(error => {
            console.log(error)
        })
    },

    updateMateria: (context, materia) => {
        db.collection('materias').doc(materia.id).update(materia)
        .then( () => {
            context.commit('updateMateria', materia)
        })
        .catch(error => {
            console.log(error)
        })
    }
}

const mutations = {

    retrieveMaterias: (state, materias) => {
        state.materias = materias
    },

    addMateria: (state, materia) => {
        state.materias.push({
            id: materia.id,
            nombre: materia.nombre,
            horarios: materia.horarios,
        })
    },

    deleteMateria: (state, id) => {
        const index = state.materias.findIndex(item => item.id == id)
        state.materias.splice(index,1)
    },

    updateMateria: (state, materia) => {
        const index = state.materias.findIndex(item => item.id == materia.id)
        state.materias.splice(index, 1, {
            id: materia.id,
            nombre: materia.nombre,
            horarios: materia.horarios
        })
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}