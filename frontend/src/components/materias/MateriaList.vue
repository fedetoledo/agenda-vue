<template>
  <div class="wrapper">
      <div class="wrapper-style elevation-10">
        <h3>Materias</h3>
        <draggable
            ghost-class="ghost"
            :move="checkMove"
            @start="dragging = true"
            @end="dragging = false"
        >
        <MateriaItem
            class="materia-item"
            v-for="materia in getMaterias"
            :key="materia.id"
            :materia="materia"
        />
        </draggable>
      </div>
  </div>
</template>

<script>
import MateriaItem from './MateriaItem'
import draggable from 'vuedraggable'

export default {

    components: {
        MateriaItem,
        draggable
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

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.materia-item:hover {
    cursor: move;
}

</style>