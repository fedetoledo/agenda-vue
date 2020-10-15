<template>
  <div class="card todo">
    <div class="todo-header">
      <div class="todo-top">
        <SubjectTag :subject="todo.subject"/>
        <div class="actions">
          <b-icon class="pencil-icon" @click.native="editMode = !editMode" icon="pencil-outline"></b-icon>
          <b-icon class="bin-icon" @click.native="deleteTodo(todo.id)" icon="delete"></b-icon>
        </div>
      </div>
      <div @click="showDescription = !showDescription" class="todo-title">
        <div v-if="editMode" class='edit-mode' v-on:keyup.enter='doneEdit'>
          <!-- <b-input class='input-title-edit' type='text' v-model="title"></b-input> -->
          <input type="text" class='input-title-edit' v-model='title'>
          <b-button class='save-button' @click="doneEdit()">Guardar</b-button>
        </div>
        <div v-else>
          <!-- <b-input readonly custom-class='input-title' v-model="title"></b-input> -->
          <input type="text" readonly class='input-title' v-model="title">
            <!-- <span>{{title}}</span> -->
        </div>
          <PriorityTag :priority="todo.priority"/>
      </div>
    </div>
      <hr>
      <b-collapse v-show="showDescription">
        <div class="todo-item-desc">
          <p>{{description}}</p>
        </div>
      </b-collapse>
  </div>
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
      editMode: false,
      data: false,
      showDescription: false,
      id: this.todo.id,
      title: this.todo.title,
      description: this.todo.description,
      completed: this.todo.completed,
      priority: this.todo.priority,
      subject: this.todo.subject
    }
  },

  methods: {
    testing() {
      alert('this works')
    },
    deleteTodo(id) {
      this.$store.dispatch('deleteTodo', id)
    },
    doneEdit() {
      if(this.title.trim() == '') {
        alert('El titulo no puede estar vacio')
        this.title = 'No puede estar vacio'
        return
      }
      this.editMode = false
      this.$store.dispatch('updateTodo', {
        'id': this.id,
        'title': this.title,
        'description': this.description,
        'completed': this.completed,
        // 'subject': this.subject,
        // 'priority': this.priority
      })
    },
  },

}
</script>

<style scoped>

.bin-icon:hover {
  color: #dd2c00;
}

.pencil-icon:hover {
  color: #fdd835;
}

.todo {
  margin: 10px 0;
}

.todo:hover {
  cursor: pointer;
}

.todo-header {
  padding: 10px;
}

.todo-top {
  margin-bottom: 0.4em;
  display: flex;
  justify-content: space-between;
}

.overline {
  text-align: left;
}

.todo-title {
  display:flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  padding: 0;
  font-size: 1.15em;
}

.input-title {
    border: none;
    padding-top: 2px;
    font-size: 1em;
}

.input-title-edit {
  font-size: 1em;
}

.edit-mode {
  display: flex;
  justify-content: space-between;
}

.edit-mode .save-button {
  margin-left: 10px;
  box-shadow: 10;
  color: white;
  background: #02cc3f;
  border: none;
  font-weight: 700;
}

.title {
  margin-right: 5px;
}

.todo-item-desc {
  margin-bottom:20px;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.todo-item-desc p {
  color: #676767;
}

.completed {
  text-decoration: line-through;
  color: #aaa;
}

.todo .actions {
  visibility: hidden;
}

.todo:hover .actions {
  visibility: visible;
}
</style>