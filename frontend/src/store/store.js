import Vue from 'vue';
import Vuex from 'vuex';
import db from '../firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        filter: 'all',
        loading: true,
        todos: []
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
            db.collection('todos').doc(id).delete()
            .then( () => {
                context.commit('deleteTodo', id)
            })
            .catch(error => {
                console.log(error)
            })
        },

        addTodo: (context,todo) => {
                console.log(todo.completed)

                db.collection('todos').add({
                    title: todo.title,
                    description: todo.description,
                    completed: false,
                    created_at: new Date()
                })
                .then(docRef => {
                    context.commit('addTodo', {
                        id: docRef.id,
                        title: todo.title,
                        description: todo.description,
                        completed: false,
                    })
                })
                .catch(error => {
                    console.log(error)
                    console.log(todo.completed)
                })
        },

        checkAll: (context,checked) => {
            db.collection('todos').get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    doc.ref.update({
                        completed: checked
                    })
                    .then( () => {
                        return context.commit('checkAll', checked)
                    })
                })
            })
        },

        updateTodo: (context, todo) => {
            db.collection('todos').doc(todo.id).update(todo)
            .then(() => {
                context.commit('updateTodo', todo)
            })
            .catch(error => {
                console.log(error)
            })
        },

        clearCompleted: context => {
            db.collection('todos').where('completed', '==', true).get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    doc.ref.delete()
                    .then(() => {
                        context.commit('clearCompleted')
                    })
                })
            })
        },

        changeFilter: (context,filter) => {
            setTimeout(() => {
                context.commit('changeFilter', filter)
            })
        },

        retrieveTodos: context => {
            context.state.loading = true
            db.collection('todos').get()
            .then(querySnapshot => {
                let tempTodos = []
                querySnapshot.forEach(doc => {
                    // console.log(doc.data())
                    const data = {
                        id: doc.id,
                        title: doc.data().title,
                        description: doc.data().description,
                        completed: doc.data().completed,
                        created_at: doc.data().created_at,
                        priority: doc.data().priority
                    }
                    tempTodos.push(data)
                })
                context.state.loading = false
                context.commit('retrieveTodos', tempTodos)
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
                completed: todo.completed,
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
        },

        retrieveTodos: (state, todos) => {
            state.todos = todos
        }
    }
})