<template>
    <div class="mt-4">
        <div>
            <p class=" pa-0 ma-0 filter-text">Filter By</p>
            <v-btn class="mx-1" text x-small :class="{active: filter == 'all'}" @click="changeFilter('all')">All</v-btn>
            <v-btn class="mx-1" text x-small :class="{active: filter == 'active'}" @click="changeFilter('active')">Active</v-btn>
            <v-btn class="mx-1" text x-small :class="{active: filter == 'completed'}" @click="changeFilter('completed')">Completed</v-btn>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        filter() {
            return this.$store.state.filter
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

   .filter-text {
       font-size: 12px;
       text-align: center;
   }

   .active {
       background-color: #0079bf;
       color: white;
   }

</style>