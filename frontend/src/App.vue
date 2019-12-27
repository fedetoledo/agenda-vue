<template>
  <v-app>
  <v-container fluid class="back-blue">
    <v-row cols="12">
      <v-col sm="4">
          <TodoList/>
      </v-col>
      <v-col sm="4">
          <MateriaList/>
      </v-col>
      <v-col sm="4">

      </v-col>
    </v-row>
  </v-container>
  </v-app>
</template>

<script>
import TodoList from './components/TodoList';
import MateriaList from './components/MateriaList';

export default {
  name: 'App',

  components: {
    TodoList,
    MateriaList,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
  .back-blue {
    background-color: #0079bf;
  }
</style>
