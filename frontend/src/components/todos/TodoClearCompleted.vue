<template>
  <v-btn small outlined block
    class="clear-button"
    v-if="showClearCompletedButton" 
    @click="clearCompleted">
  Clear Completed
  </v-btn>
</template>

<script>
export default {
    computed: {
        showClearCompletedButton() {
            return this.$store.getters.showClearCompletedButton
        }
    },
    methods: {
        clearCompleted() {
            this.$store.dispatch('clearCompleted')
        }
    }
}
</script>

<style scoped>
</style>