import Vue from 'vue'
import Vuex from 'vuex'
import todos from './modules/todos'
import subjects from './modules/subjects'
import exams from './modules/exams'
import main from './main'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        main,
        todos,
        subjects,
        exams
    }
})