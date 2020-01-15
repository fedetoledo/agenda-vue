<template>
  <v-btn small outlined block class="mt-3"
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
    .clear-btn {
        font-size: 0.8em;
        border-radius: 2px;
        background: #ddd;
    }
</style>