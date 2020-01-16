<template>
    <div class="filters">
        <v-btn class="mx-1" text x-small :class="{active: filter == 'all'}" @click="changeFilter('all')">All</v-btn>
        <v-btn class="mx-1" text x-small :class="{active: filter == 'active'}" @click="changeFilter('active')">Active</v-btn>
        <v-btn class="mx-1" text x-small :class="{active: filter == 'completed'}" @click="changeFilter('completed')">Completed</v-btn>
    </div>
</template>

<script>
export default {
    computed: {
        filter() {
            //$store.estado.nombreDeModulo.propiedad
            return this.$store.state.todos.filter
        }
    },
    methods: {
        changeFilter(filter) {
            this.$store.dispatch('changeFilter', filter)
        }
    }
}
</script>

<style scoped>

    .filters {
        margin: 5px 0;
    }

   .active {
       background-color: #0079bf;
       color: white;
   }

</style>