<template>
  <div class="wrapper">
      <h3>Materias</h3>
      <ol>
          <li v-for="m in materias" :key=m.id>
              {{m.nombre}}
              {{m.color}} 
          </li>
      </ol>
      hola mundo
  </div>
</template>

<script>
import axios from 'axios';
export default {

    data: () => ({
        materias: [],
    }),

    methods: {
        getMaterias() {
            const path = 'http://localhost:8000/api/materias/';
            axios.get(path).then(response => {
                this.materias = response.data
            })
            .catch(error => {
                console.log(error)
            })
        }
    },

    created() {
        this.getMaterias()
    }
}
</script>

<style>

</style>