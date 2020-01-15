<template>
  <v-app>
  <v-container fluid class="back-blue">
    <TodoList/>
  </v-container>
  </v-app>
</template>

<script>
import TodoList from './components/todos/TodoList';

export default {
  name: 'App',

  components: {
    TodoList,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
  .back-blue {
    background-color: #0079bf;
    height: 100%;
  }
</style>
