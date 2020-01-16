import Vue from 'vue'
import Vuex from 'vuex'
import todos from './modules/todos'
import materias from './modules/materias'
import parciales from './modules/parciales'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        todos,
        materias,
        parciales
    }
})