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
            <v-col cols="12" class="mr-2">
              <ExamList/>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>

import TodoList from './todos/TodoList'
import ExamList from './exams/ExamList'
import SubjectList from './subjects/SubjectList'

export default {
  components: {
    TodoList,
    ExamList,
    SubjectList
  },
};
</script>

<style>
.container {
    background-color: #0079bf;
    height: 100%;
  }

  /* CSS LOADING */
.lds-facebook {
  display: block;
  position: relative;
  width: 80px;
  height: 80px;
  margin: auto;
}
.lds-facebook div {
  display: inline-block;
  position: absolute;
  left: 8px;
  width: 16px;
  background: #0079bf;
  animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
}
.lds-facebook div:nth-child(1) {
  left: 8px;
  animation-delay: -0.24s;
}
.lds-facebook div:nth-child(2) {
  left: 32px;
  animation-delay: -0.12s;
}
.lds-facebook div:nth-child(3) {
  left: 56px;
  animation-delay: 0;
}
@keyframes lds-facebook {
  0% {
    top: 8px;
    height: 64px;
  }
  50%, 100% {
    top: 24px;
    height: 32px;
  }
}

</style>