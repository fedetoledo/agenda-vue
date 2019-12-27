import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        filter: 'all',
        todos: [
            {'id':1,'title':'Primer Todo','description': 'Desc del todo', 'completed': false, 'priority': 0},
            {'id':2,'title':'Segundo Todo','description': 'Desc del todo', 'completed': false, 'priority': 0},
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

        remaining: state => {
            return state.todos.filter(todo => !todo.completed).length
        },

        anyRemaining: (state, getters) => {
            return getters.remaining != 0
        },

        showClearCompletedButton: state => {
            return state.todos.filter(todo => todo.completed).length > 0
        }
    },

    actions: {
        deleteTodo: (context, id) => {
            setTimeout(() => {
                context.commit('deleteTodo', id)
            }, 100)
        },

        addTodo: (context,todo) => {
            setTimeout(() => {
                context.commit('addTodo', todo)
            }, 100)
        },

        checkAll: (context,checked) => {
            setTimeout(() => {
                return context.commit('checkAll', checked)
            }, 100)
        },

        updateTodo: (context, todo) => {
            setTimeout(() => {
                context.commit('updateTodo', todo)
            }, 100)
        },

        clearCompleted: context => {
            setTimeout(() => {
                context.commit('clearCompleted')
            }, 100)
        },

        changeFilter: (context,filter) => {
            setTimeout(() => {
                context.commit('changeFilter', filter)
            })
        }
    },

    mutations: {
        deleteTodo: (state, id) => {
            const index = state.todos.findIndex(item => item.id == id)
            state.todos.splice(index,1)
        },

        addTodo: (state,todo) => {
            state.todos.push({
                id: todo.id,
                title: todo.title,
                description: todo.description,
                completed: false,
            })
        },

        checkAll: (state, checked) => {
            state.todos.forEach(todo => (todo.completed = checked))
        },
        
        updateTodo: (state, todo) => {
            const index = state.todos.findIndex(item => item.id == todo.id)
            state.todos.splice(index, 1, {
                'id': todo.id,
                'title': todo.title,
                'description': todo.description,
                'completed': todo.completed
            })
        },

        clearCompleted: state => {
            state.todos = state.todos.filter(todo => !todo.completed)
        },

        changeFilter: (state,filter) => {
            state.filter = filter
        }
    }
})