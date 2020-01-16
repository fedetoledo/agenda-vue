<template>
  <v-app>
  <v-container fluid class="back-blue">
    <v-row>
      <v-col>
        <TodoList/>
      </v-col>
      <v-col>
        <MateriaList/>
      </v-col>
      <v-col>
        <ParcialList/>
      </v-col>
    </v-row>
  </v-container>
  </v-app>
</template>

<script>
import TodoList from './components/todos/TodoList';
import MateriaList from './components/materias/MateriaList'
import ParcialList from './components/parciales/ParcialList'

export default {
  name: 'App',

  components: {
    TodoList,
    MateriaList,
    ParcialList
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
