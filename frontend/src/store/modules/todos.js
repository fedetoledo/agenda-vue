import axios from 'axios'

//Todos Store

const url = 'http://localhost:8000/api/todos/'

//Initial State
const state = {
    todos: [],
    filter: 'all',
    loading: true
}

const getters = {

    getTodos: state => {
        return state.todos
    },

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
    
}

const actions = {
    
    retrieveTodos: context => {
        context.state.loading = true
        axios.get(url)
        .then(response => {
            let tempTodos = []
            response.data.forEach(todo => {
                const data = {
                    id: todo.id,
                    title: todo.title,
                    description: todo.description,
                    completed: todo.completed,
                    created_at: todo.created_at,
                    priority: todo.priority,
                    subject: todo.subject
                }
                tempTodos.push(data)
            })
            context.state.loading = false
            context.commit('retrieveTodos', tempTodos)
        })
        .catch(error => {
            context.state.loading = false
            console.log(error)
        })
    },

    deleteTodo: (context, id) => {
        axios.delete(url+id)
        .then( () => {
            context.commit('deleteTodo', id)
        })
        .catch(error => {
            console.log(error)
        })
    },

    addTodo: (context,todo) => {
            axios.post(url,{
                title: todo.title,
                description: todo.description,
                priority: todo.priority,
                completed: false,
                // Axios expects an ID, not the entire object
                subject: todo.subject.id,
            })
            .then(response => {
                context.commit('addTodo', {
                    id: response.data.id,
                    title: todo.title,
                    description: todo.description,
                    priority: todo.priority,
                    completed: false,
                    //Here I can send the entire object and then use it in component
                    subject: todo.subject
                })
            })
            .catch(error => {
                console.log(error)
            })
    },

    updateTodo: (context, todo) => {
        axios.patch(url+todo.id+'/', {
            title: todo.title,
            description: todo.description,
            // priority: todo.priority,
            completed: todo.completed,
            // subject: todo.subject.id
        })
        .then(() => {
            context.commit('updateTodo', todo)
        })
        .catch(error => {
            console.log(error)
        })
    },

    clearCompleted: (context, getters) => {
        getters.getTodos.forEach(todo => {
            axios.delete(url+todo.id)
        })
        .then(() => {
            context.commit('clearCompleted')
        })
    },

    changeFilter: (context,filter) => {
            context.commit('changeFilter', filter)
    },

}

const mutations = {
    deleteTodo: (state, id) => {
        const index = state.todos.findIndex(item => item.id == id)
        state.todos.splice(index,1)
    },

    addTodo: (state,todo) => {
        state.todos.push({
            id: todo.id,
            title: todo.title,
            description: todo.description,
            priority: todo.priority,
            completed: todo.completed,
            subject: todo.subject
        })
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

export default {
    state,
    getters,
    actions,
    mutations
}