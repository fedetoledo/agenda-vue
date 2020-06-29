<template>
  <b-icon icon="alert-circle" :type="priorityColorCode"></b-icon>
</template>

<script>
export default {

  props: {
      priority: {
          type: Number,
          required: true
      } 
  },

  computed: {
    priorityColorCode() {
      return this.priority == 0 ? 'is-success': this.priority == 1 ? 'is-warning': 'is-danger'
    },

    verbosePriority() {
      return this.priority == 0 ? 'Low': this.priority == 1 ? 'Middle': 'High'
    }
  },
}
</script>

<style>

</style>