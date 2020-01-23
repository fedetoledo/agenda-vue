<template>
    <v-row no-gutters justify="center" class="filters">
        <v-col cols="10">
            <!-- @input will pass the selected item automatically to changeFilter -->
            <v-overflow-btn @input="changeFilter" label="Filter by priority" :items="filters">Priority</v-overflow-btn>
        </v-col>
    </v-row>
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
    },

    data() {
        return {
            filters: ['all','low','middle','high']
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