<template>
    <div class="wrapper">
        <div class="section-styled upper-section">
            <h3 class="title">Tareas</h3>
            <div class="add-todo-form">
                <b-field>
                    <b-input v-model="newTodo.title" placeholder="Titulo"></b-input>
                </b-field>
                <b-field>
                    <b-input v-model="newTodo.description" placeholder="Descripcion" maxlength="400" type="textarea"></b-input>
                </b-field>
                <div class="columns todo-selects">
                    <b-field class="column is-6">
                        <b-select v-model="newTodo.subject" placeholder="Materia">
                            <option
                                v-for="subject in getSubjects"
                                :value="subject"
                                :key="subject.id">                       
                                {{subject.name}}
                            </option>
                        </b-select>
                        </b-field>
                    <b-field class="column is-4">
                        <b-select v-model="newTodo.priority" placeholder="Prioridad">
                            <option
                                v-for="priority in priorityNums"
                                :value="priority.value"
                                :key="priority.value">
                                {{priority.text}}
                            </option>
                        </b-select>
                    </b-field>
                </div>
                <b-button expanded class="add-btn" @click="addTodo"><strong>Agregar tarea</strong></b-button>
            </div>
        </div>
        <div class="section-styled">
            <TodoFiltered/>
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
import TodoFiltered from './TodoFiltered';

export default {

    components: {
        TodoItem,
        TodoFiltered,
    },

    created() {
        this.$store.dispatch('retrieveTodos')
    },

    data() {
        return {
            newTodo: {
                // id: 3,
                title: '',
                description: null,
                subject: null,
                priority: null,
            },
            priorityNums: [
                {text: 'Baja', value: 0},
                {text: 'Media', value: 1},
                {text: 'Alta', value:2}
            ]
        }
    },

    computed: {
        todosFiltered() {
            return this.$store.getters.todosFiltered
        },

        anyRemaining() {
            return this.$store.getters.anyRemaining
        },

        getSubjects() {
            return this.$store.getters.getSubjects
        }
    },

    methods: {
        addTodo() {
            if(this.newTodo.title.trim().length == 0) { //Verifica que haya algo escrito
                return
            }

            this.$store.dispatch('addTodo', {
                // id: this.idForTodo,
                title: this.newTodo.title,
                description: this.newTodo.description,
                priority: this.newTodo.priority,
                completed: false,
                subject: this.newTodo.subject,
            })

            // this.newTodo.id++
            this.newTodo.title = '';
            this.newTodo.description = '';
            this.newTodo.subject = null
            this.newTodo.priority = null
        },
    }

  
}
</script>

<style scoped>

.todo-selects {
    justify-content: space-between;
}

.add-todo-form {
    margin: 10px 10px;
}

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
</style>