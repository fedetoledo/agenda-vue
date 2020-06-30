<template>
    <div class="columns filters" no-gutters justify="center">
        <div class="column is-10">
            <!-- @input will pass the selected item automatically to changeFilter -->
            <!-- <v-overflow-btn @input="changeFilter" label="Filtrar por prioridad" :items="filters">Prioridad</v-overflow-btn> -->
        </div>
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
    },

    data() {
        return {
            filters: ['todas','baja','media','alta']
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