<template>
  <v-card @click="showDescription = !showDescription" class="todo">
    <div class="todo-header">
      <div class="overline d-flex justify-space-between">
        <SubjectTag :subject="todo.subject"/>
        <v-btn @click="showAlert('editmissing')" class="edit-pencil" icon small>
          <v-icon >mdi-pencil-outline</v-icon>
        </v-btn>
      </div>
      <v-card-title class="todo-title d-flex justify-space-between">
        <!-- <div @click="showDescription = !showDescription" :class="{completed: completed}"> -->
              <span>{{title}}</span><PriorityTag :priority="todo.priority"/>
        <!-- </div> -->
      </v-card-title>
    </div>
    <v-expand-transition>
      <div v-show="showDescription">
        <v-card-text class="todo-item-desc">
          {{description}} - <span @click="deleteTodo(todo.id)">X</span>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
import PriorityTag from '../extra/PriorityTag'
import SubjectTag from '../extra/SubjectTag'

export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
    checkAll: {
      type: Boolean,
      required: true
    },
  },
  
  components: {
    PriorityTag,
    SubjectTag,
  },

  data() {
    return {
      data: false,
      showDescription: false,
      'id': this.todo.id,
      'title': this.todo.title,
      'description': this.todo.description,
      'completed': this.todo.completed,
      'priority': this.todo.priority,
      'subject': this.todo.subject
    }
  },

  methods: {

    showAlert(msg) {
      alert(msg)
    },
    
    deleteTodo(id) {
      this.$store.dispatch('deleteTodo', id)
    },
    doneEdit() {
      if(this.title.trim() == '') {
        this.title = 'No puede estar vacio'
      }
      // this.editing = false
      this.$store.dispatch('updateTodo', {
        'id': this.id,
        'title': this.title,
        'description': this.description,
        'completed': this.completed,
        // 'subject': this.subject
      })
    },
  },

}
</script>

<style scoped>

.todo {
  margin: 5px 0;
}

.todo:hover {
  cursor: pointer;
}

.todo-header {
  padding: 10px;
}

.overline {
  text-align: left;
}

.todo-title {
  user-select: none;
  padding: 0;
  font-size: 1.15em;
}

.title {
  margin-right: 5px;
}

.completed {
  text-decoration: line-through;
  color: #aaa;
}

.todo .edit-pencil {
  visibility: hidden;
}

.todo:hover .edit-pencil {
  visibility: visible;
}
</style>