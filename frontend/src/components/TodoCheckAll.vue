<template>
    <div>
        <label>
            <input type="checkbox" :checked="!anyRemaining" @change="checkAll"> 
            Check All
        </label>
    </div>
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

<style>

</style>