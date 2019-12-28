<template>
    <div class="wrapper">
        <div class="todo-list-title elevation-10">
            <h3>Mis tareas</h3>
            <div class="todo-add-form">
                <v-text-field solo dense label="Titulo" v-model="newTodo.title"/>
                <v-text-field solo dense label="Descripcion" v-model="newTodo.description" @keyup.enter="addTodo"/>
            </div>
            <TodoFiltered/>
            <div class="remaining d-flex justify-space-around align-center py-1 px-3">
                <TodoCheckAll/>
                <TodoItemsRemaining/>
            </div>
        </div>
        <div class="todo-list elevation-10">
            <div class="d-flex justify-center align-center">
                <TodoClearCompleted/>
            </div>
            <!-- CSS LOADING -->
            <div v-if="$store.state.loading" class="lds-facebook"><div></div><div></div><div></div></div>
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

<style>

.wrapper {
    max-width: 20em;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.todo-list-title {
    width:100%;
    background-color: #f0f2f4;
    border-radius: 4px;
    text-align: center;
    margin-bottom: 10px;
    padding: 5px 0;
}

.todo-add-form {
    width: 90%;
    margin: 0 auto;
    height: 6em;
}

.todo-list {
    height: 23em;
    background-color: #f0f2f4;
    border-radius: 4px;
    border-collapse: separate;
    padding: 10px;
    scrollbar-width: none;
    overflow: scroll;
}

.remaining {
    font-size: 14px;
}

.completed {
    text-decoration: line-through;
    color: #ccc;
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