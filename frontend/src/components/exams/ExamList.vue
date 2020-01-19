<template>
  <div class="wrapper">
      <div class="section-styled">
        <h3>Parciales</h3>
        <ExamItem
            v-for="exam in getExams"
            :key="exam.id"
            :exam="exam"
        />
      </div>
  </div>
</template>

<script>
import ExamItem from './ExamItem'

export default {

    components: {
        ExamItem
    },

    created() {
        this.$store.dispatch('retrieveExams')
    },

    computed: {
        getExams() {
            return this.$store.getters.getExams
        }
    }

}
</script>

<style scoped>

</style>