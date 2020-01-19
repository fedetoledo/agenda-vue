import Vue from 'vue'
import Vuex from 'vuex'
import todos from './modules/todos'
import subjects from './modules/subjects'
import exams from './modules/exams'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        todos,
        subjects,
        exams
    }
})