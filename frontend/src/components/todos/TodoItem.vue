<template>
  <div class="card todo">
    <div class="todo-header">
      <div class="todo-top">
        <SubjectTag :subject="todo.subject"/>
        <!-- <b-button rounded @click="showAlert('editmissing')" class="edit-pencil"> -->
        <div class="actions">
          <b-icon class="lapiz" @click.native="showAlert('Edit missing')" icon="pencil-outline"></b-icon>
          <b-icon class="tacho" @click.native="deleteTodo(todo.id)" icon="delete"></b-icon>
        </div>
        <!-- </b-button> -->
      </div>
      <div @click="showDescription = !showDescription" class="todo-title">
              <span>{{title}}</span><PriorityTag :priority="todo.priority"/>
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

.tacho:hover {
  color: #dd2c00;
}

.lapiz:hover {
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
  user-select: none;
  padding: 0;
  font-size: 1.15em;
}

.title {
  margin-right: 5px;
}

.todo-item-desc {
  margin-bottom:20px;
  margin:0 10px;
  display: flex;
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