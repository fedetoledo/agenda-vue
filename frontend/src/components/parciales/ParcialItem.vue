<template>
  <v-card class="my-3">
      <v-card-title>
         Parcial de nombre - fecha
      </v-card-title>
  </v-card>
</template>

<script>
export default {
    props: {
        parcial: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            id: this.parcial.id,
            nota: this.parcial.nota,
            fecha: this.parcial.fecha,
            materia: this.parcial.materia
        }
    }
}
</script>

<style scoped>

   
</style>