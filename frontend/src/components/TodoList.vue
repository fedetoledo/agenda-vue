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

</style>