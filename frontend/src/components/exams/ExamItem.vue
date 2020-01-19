<template>
  <v-card class="my-3">
      <v-card-title>
          <p>{{subject}}</p>
      </v-card-title>
      <v-card-text>
          <p>Fecha - {{getFormatedDate}}</p>
      </v-card-text>
  </v-card>
</template>

<script>
export default {
    props: {
        exam: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            id: this.exam.id,
            nota: this.exam.nota,
            fecha: this.exam.fecha,
            subject: this.exam.subject
        }
    },

    computed: {
        getFormatedDate() {
            let timestamp = this.fecha.toDate().toLocaleString()
            return timestamp
        }
    }
}
</script>

<style scoped>

   
</style>