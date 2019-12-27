<template>
    <div class="wrapper">
    <h3>Mis tareas</h3>
    <div class="todo-list elevation-15">
        <div class="add-form ma-2">
            <v-btn text small :ripple="false" class="full-width-btn"  @click="showAdd = !showAdd">
                Nueva
                <v-icon small>{{showAdd ? 'mdi-minus': 'mdi-plus'}}</v-icon>
            </v-btn>
            <v-expand-transition>
                <v-form class="formulario" v-show="showAdd" @submit.prevent="addTodo">
                    <v-text-field
                        class="custm-ph"
                        v-model="form.title"
                        label="Title"
                    ></v-text-field>
                    <v-text-field
                        class="custm-ph"
                        v-model="form.description"
                        label="Description"
                    ></v-text-field>
                    <v-select
                        :items = "priorities"
                        v-model="form.priority"
                        label="Priority">
                    </v-select>
                    <v-btn class="full-width-btn" type="submit">Agregar</v-btn>
                </v-form>
            </v-expand-transition>
        </div>
        <TodoItem class="todo-item mt-3"
            v-for="todo in todos"
            :key="todo.id"
            :title=todo.title
            :desc=todo.description
            :date=todo.date
            :priority=todo.priority
            :checked.sync=todo.checked
            :id=todo.id
        />
    </div>
    </div>
    
</template>

<script>
import TodoItem from './TodoItem';
import axios from 'axios';

export default {
    components: {
        TodoItem,
    },

    data: () => ({
        showAdd: 'false',
        todos: [],
        priorities: [
            {value:2, text:'high'},
            {value:1, text:'middle'},
            {value:0, text:'low'}
        ],
        form: {title:'',description:'',priority:''}
    }),

    methods: {

        getTodos() {
            const path = 'http://localhost:8000/api/todos/';
            axios.get(path)
            .then((response) => {
                this.todos = response.data
            })
            .catch((error) => {
                console.log(error)
            })
        },

        addTodo() {
            const path = 'http://localhost:8000/api/todos/';
            axios.post(path, this.form)
            .then(() => {
                this.form = {}
                this.showAdd = false
                this.getTodos()
            })
            .catch((error) => {
                console.log(error)
            })
        }
    },

    created() {
        this.getTodos()
    }
}
</script>

<style>
    .wrapper {
        min-width: 20em;
        max-width: 25%;
        max-height: 30em;
    }

    h3 {
        margin-bottom: 5px;
        border-radius: 4px;
        width: 100%;
        text-align:center;
        padding: 5px;
        background-color: white;
    }
    .todo-list {
        padding: 2px;
        max-height: 35em;
        overflow: scroll;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 3px;
        background-color: #fff;
        scrollbar-width: none;

    }

    .todo-item {
        width: 100%;
    }

    .full-width-btn {
        width:100%;
        background-color: #0079bf !important;
        color: white !important;
        text-align: center;
    }

    .add-form {
        width: 90%;
    }

</style>