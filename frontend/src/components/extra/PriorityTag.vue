<template>
  <v-chip small outlined label :color="priorityColorCode">{{verbosePriority}}</v-chip>
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
      return this.priority == 0 ? '#61bd4f': this.priority == 1 ? '#f2d600': '#eb5a46'
    },

    verbosePriority() {
      return this.priority == 0 ? 'Low': this.priority == 1 ? 'Middle': 'High'
    }
  },

}
</script>

<style>

</style>