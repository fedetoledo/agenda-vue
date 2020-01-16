<template>
  <v-app>
  <v-container fluid class="container">
    <v-row> <!-- main row -->
      <v-col cols="4">
        <TodoList/>
      </v-col>
      <v-col cols="8">
        <v-row no-gutters>
          <v-col>
            <MateriaList/>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col class="mr-2">
            <ParcialList/>
          </v-col>
          <v-col class="ml-2">
            Notas
          </v-col>
        </v-row>
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
  .container {
    padding: 5px 20px;
    min-height: 100%;
    background-color: #0079bf;
  }
</style>
