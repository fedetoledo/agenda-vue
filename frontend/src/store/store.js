import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        filter: 'all',
        todos: [
            {'id':1,'title':'Primer Todo','description': 'Desc del todo', 'completed': false, 'priority': 0},
            {'id':1,'title':'Segundo Todo','description': 'Desc del todo', 'completed': false, 'priority': 0},
        ]
    },

    getters: {
        completedTodos: state => {
            return state.todos.filter(todo => todo.completed)
        },

        completedTodosCount: (state, getters) => {
            return getters.completedTodos.length
        },

        todosFiltered: state => {
            if(state.filter == 'all') {
                return state.todos
            } else if (state.filter == 'completed') {
                return state.todos.filter(todo => todo.completed)
            } else if (state.filter == 'active') {
                return state.todos.filter(todo => !todo.completed)
            }
            return state.todos
        },

    }
})