<template>
  <v-card class="my-3">
      <v-card-title class="todo-title d-flex justify-space-between">
        <label>
          <input type="checkbox" v-model="completed" @change="doneEdit">
        </label>
        <span @click="showDescription = !showDescription" :class="{completed: completed}">{{title}}</span>
        <v-btn icon small @click="deleteTodo(todo.id)" >
          <v-icon small>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-expand-transition>
        <div v-show="showDescription">
          <v-card-text class="todo-item-desc">
            {{description}}
          </v-card-text>
        </div>
      </v-expand-transition>
  </v-card>
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
      showDescription: false,
      'id': this.todo.id,
      'title': this.todo.title,
      'description': this.todo.description,
      'completed': this.todo.completed,
      'priority': this.todo.priority
    }
  },

  methods: {
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
        'completed': this.completed,
      })
    },

  },

  watch: {
    checkAll() {
      this.completed = this.checkAll ? true: this.todo.completed
    }
  },
}
</script>

<style scoped>

.todo-title {
  padding: 5px 10px;
  font-size: 1em;
  cursor: pointer;
}

</style>