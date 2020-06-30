<template>
    <section class="section">
        <div class="columns"> <!-- main row -->
          <div class="column is-4">
            <TodoList/>
          </div>
          <div class="column is-8">
            <div class="columns">
              <div class="column is-12">
                <SubjectList/>
              </div>
            </div>
            <div class="columns">
              <div class="column is-12">
                <ExamList/>
              </div>
            </div>
          </div>
        </div>
    </section>
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

<style >

.section {
  padding: 1rem;
}

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