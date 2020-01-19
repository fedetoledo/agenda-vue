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
            <SubjectList/>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col class="mr-2">
            <ExamList/>
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
import SubjectList from './components/subjects/SubjectList'
import ExamList from './components/exams/ExamList'

export default {
  name: 'App',

  components: {
    TodoList,
    SubjectList,
    ExamList
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
