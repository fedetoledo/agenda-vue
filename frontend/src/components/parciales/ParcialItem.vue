<template>
  <v-card class="my-3">
      <v-card-title>
         Parcial (Falta poder mostrar el nombre)
      </v-card-title>
      <v-card-text>
          Nota: {{nota}}
      </v-card-text>
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