<template>
        <label>
            <input type="checkbox" @change="checkAll" :checked="!anyRemaining" label="Check All"/>
            Check All
        </label>
</template>

<script>
export default {
    computed: {
        anyRemaining() {
            return this.$store.getters.anyRemaining
        }
    },

    methods: {
        checkAll() {
            this.$store.dispatch('checkAll', event.target.checked)
        }
    }
}
</script>

<style scoped>
</style>