<template>
    <div class="wrapper">
        <div class="section-styled upper-section">
            <h3>Tareas</h3>
            <div class="add-todo-form">
                <v-row justify="center">
                    <v-col cols="11">
                        <v-text-field class="input-text" hide-details="auto" autofocus="" solo dense label="Titulo" v-model="newTodo.title"/>
                    </v-col>
                </v-row>
                <!-- <v-text-field class="input-text" hide-details="auto" solo dense label="Descripcion" v-model="newTodo.description" @keyup.enter="addTodo"/> -->
                <v-row no-gutters justify="space-around">
                    <v-col cols="5">
                        <v-select return-object v-model="newTodo.subject" item-text="name" :items="getSubjects"  placeholder="Materia"></v-select>
                    </v-col>
                    <v-col cols="5">
                        <v-select v-model="newTodo.priority" item-name="text" item-value="value" :items="priorityNums" @keyup.enter="addTodo" placeholder="Prioridad"></v-select>
                    </v-col>
                </v-row>
                
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
                // description: '',
                subject: Object,
                priority: null,
            },
            priorityNums: [
                {text: 'Low', value: 0},
                {text: 'Middle', value: 1},
                {text: 'High', value:2}
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
                // description: this.newTodo.description,
                priority: this.newTodo.priority,
                completed: false,
                subject: this.newTodo.subject
            })

            // this.newTodo.id++
            this.newTodo.title = '';
            // this.newTodo.description = '';
            this.newTodo.subject = Object
            this.newTodo.priority = null
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