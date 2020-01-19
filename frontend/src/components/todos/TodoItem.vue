<template>
  <v-card class="todo">
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
            {{description}} - <span v-if="subject">{{subject.name}}</span>
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

.todo-title {
  user-select: none;
  padding: 5px 10px;
  font-size: 1em;
  cursor: pointer;
}

.completed {
  text-decoration: line-through;
  color: #aaa;
}

</style>