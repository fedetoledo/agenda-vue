<template>
  <div class="wrapper">
      <div class="section-styled">
        <h3>Parciales</h3>
        <ParcialItem
            v-for="parcial in getParciales"
            :key="parcial.id"
            :parcial="parcial"
        />
      </div>
  </div>
</template>

<script>
import ParcialItem from './ParcialItem'

export default {

    components: {
        ParcialItem
    },

    created() {
        this.$store.dispatch('retrieveParciales')
    },

    computed: {
        getParciales() {
            return this.$store.getters.getParciales
        }
    }

}
</script>

<style scoped>

</style>