<template>
  <div class="wrapper">
      <div class="section-styled">
        <h3>Materias</h3>
        <div class="materias-list">
            <MateriaItem
                v-for="materia in getMaterias"
                :key="materia.id"
                :materia="materia"
            />
        </div>
      </div>
  </div>
</template>

<script>
import MateriaItem from './MateriaItem'
// import draggable from 'vuedraggable'

export default {

    components: {
        MateriaItem,
        // draggable
    },

    created() {
        this.$store.dispatch('retrieveMaterias')
    },

    computed: {
        getMaterias() {
            return this.$store.getters.getMaterias
        }
    }

}
</script>

<style scoped>

.materias-list {
    min-height: 12em;
    display: flex;
    flex-wrap: no-wrap;
    align-items: flex-end;
    overflow-x: scroll;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}



</style>