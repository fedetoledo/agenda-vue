<template>
    <div class="wrapper">
        <div class="section-styled">
            <h3>Tareas</h3>
            <div class="add-todo-form">
                <v-text-field class="input-text" hide-details="auto" autofocus="" solo dense label="Titulo" v-model="newTodo.title"/>
                <v-text-field class="input-text" hide-details="auto" solo dense label="Descripcion" v-model="newTodo.description" @keyup.enter="addTodo"/>
            </div>
            <TodoFiltered/>
            <div class="todos-info">    
                <TodoCheckAll/>
                <TodoItemsRemaining/>
            </div>
            <div class="clear-button">
                <TodoClearCompleted/>
            </div>
        </div>
        <div class="section-styled">
            <!-- CSS LOADING -->
            <div v-if="$store.state.todos.loading" class="lds-facebook"><div></div><div></div><div></div></div>
            <TodoItem
                v-for="todo in todosFiltered"
                :key="todo.id"
                :todo="todo"
                :checkAll="!anyRemaining"
            />
        </div>
    </div>
</template>

<script>
import TodoItem from './TodoItem';
import TodoCheckAll from './TodoCheckAll';
import TodoItemsRemaining from './TodoItemsRemaining';
import TodoClearCompleted from './TodoClearCompleted';
import TodoFiltered from './TodoFiltered';

export default {

    components: {
        TodoItem,
        TodoCheckAll,
        TodoItemsRemaining,
        TodoClearCompleted,
        TodoFiltered,
    },

    created() {
        this.$store.dispatch('retrieveTodos')
    },

    data() {
        return {
            newTodo: {
                id: 3,
                title: '',
                description: '',
            },
        }
    },

    computed: {
        todosFiltered() {
            return this.$store.getters.todosFiltered
        },

        anyRemaining() {
            return this.$store.getters.anyRemaining
        }
    },

    methods: {
        addTodo() {
            if(this.newTodo.title.trim().length == 0) { //Verifica que haya algo escrito
                return
            }

            this.$store.dispatch('addTodo', {
                id: this.idForTodo,
                title: this.newTodo.title,
                description: this.newTodo.description
            })

            this.newTodo.id++
            this.newTodo.title = '';
            this.newTodo.description = '';
        },
    }

  
}
</script>

<style scoped>

.add-todo-form .input-text {
    margin-bottom: 15px;
}

.todos-info {
    display: flex;
    justify-content: space-around;
    margin: 10px 0;
}

.clear-button {
    width: 90%;
    margin: 5px auto;
}

/* CSS LOADING */
.lds-facebook {
  display: block;
  position: relative;
  width: 80px;
  height: 80px;
  margin: auto;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: #0079bf;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
}
</style>