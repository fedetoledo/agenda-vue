<template>
  <div class="todo-item">
    <div class="todo-item-left">
      <input type="checkbox" v-model="completed" @change="doneEdit">
      <div class="todo-item-label" :class="{completed: completed}">{{title}}</div>
      <span class="remove-item" @click="removeTodo(todo.id)">&times;</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    },
    checkAll: {
      type: Boolean,
      required: true
    }
  },

  data() {
    return {
      'id': this.todo.id,
      'title': this.todo.title,
      'description': this.todo.description,
      'completed': this.todo.completed,
      'priority': this.todo.priority
    }
  },

  methods: {
    removeTodo(id) {
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
        'completed': this.completed,
      })
    }
  },

  watch: {
    checkAll() {
      this.completed = this.checkAll ? true: this.todo.completed
    }
  },
}
</script>

<style>
  
</style>