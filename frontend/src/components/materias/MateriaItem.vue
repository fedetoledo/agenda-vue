<template>
  <v-card class=" materia-item">
      <v-card-title>
          {{nombre}}
      </v-card-title>
      <hr>
      <v-card-text class="card-text">
          <v-row>
              <v-col class="horarios">
                  <p class="horarios-title">Horarios</p>
                  <p v-for="horario in materia.horarios" :key="materia.horarios.indexOf(horario)">{{horario}}</p>  
              </v-col>
          </v-row>
      </v-card-text>
  </v-card>
</template>

<script>
export default {
    props: {
        materia: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            id: this.materia.id,
            nombre: this.materia.nombre
        }
    }
}
</script>

<style scoped>

    .materia-item {
        max-height: 10em;
        min-width: 10em;
        margin-right: 10px;
    }

    .materia-item:hover {
    cursor: move;
    }

    .horarios {
        text-align: left;
    }

    .horarios-title {
        text-decoration: underline;
    }

    .card-text {
        padding: 0 0 0 10px;
    }

    p {margin: 0 !important;}
   
</style>