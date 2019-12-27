<template>
    <div>
        <h3>Mis tareas</h3>
        <input type="text" class="todo-input" placeholder="Title" v-model="newTodo.title">
        <input type="text" class="todo-input" placeholder="Description" v-model="newTodo.description" @keyup.enter="addTodo">
        <TodoItem
            v-for="todo in todosFiltered"
            :key="todo.id"
            :todo="todo"
            :checkAll="!anyRemaining"
        />
        <TodoCheckAll/>
        <TodoItemsRemaining/>
        <TodoClearCompleted/>
        <TodoFiltered/>
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
  .completed {
    text-decoration: line-through;
    color: #ccc;
  }

</style>