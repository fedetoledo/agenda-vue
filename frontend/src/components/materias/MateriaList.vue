<template>
  <div class="wrapper">
      <div class="section-styled upper-section">
        <div class="cards-header">
            <h3 class="inline-h3">Materias</h3>
            <v-btn @click.stop="dialog=true" outlined class="add-materia-btn">Agregar Materia</v-btn>

        </div>
        <div class="materias-list">
            <MateriaItem
                v-for="materia in getMaterias"
                :key="materia.id"
                :materia="materia"
            />
        </div>
      </div>
        <!-- New Materia Modal -->
        <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="600px">
                <!-- <template v-slot:activator="{ on }"> -->
                <!-- </template> -->
                <v-card>
                    <v-card-title>
                        <span class="headline">Add Materia</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                            <v-col cols="12">
                                <v-text-field :rules="rules" v-model="newMateria.nombre" label="Nombre*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="newMateria.horarios[0]"  placeholder="Lun-20:00 a 22:00" label="Horario 1" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="newMateria.horarios[1]"  placeholder="Mar-20:00 a 22:00" label="Horario 2" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="newMateria.horarios[3]"  placeholder="Mie-20:00 a 22:00" label="Horario 3" required></v-text-field>
                            </v-col>
                            </v-row>
                        </v-container>
                        <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                        <v-btn color="blue darken-1" text @click="dialog = false; addMateria()">Save</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            </v-row>
  </div>
</template>

<script>
import MateriaItem from './MateriaItem'
// import draggable from 'vuedraggable'

export default {

    data() {
        return {
            dialog: false,
            newMateria: {
                id: 6,
                nombre: '',
                horarios: [
                ],
            },
            rules: [
                value => !!value || 'Required',
            ]
        }
    },

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
    },

    methods: {

        addMateria() {
            if(this.newMateria.nombre.trim().length == 0) {
                this.dialog = true
                return
            }

            this.$store.dispatch('addMateria', {
                id: this.idForMateria,
                nombre: this.newMateria.nombre,
                horarios: this.newMateria.horarios,
            })

            this.newMateria.id++
            this.newMateria.nombre = ''
            this.newMateria.horarios = []
        }
    }

}
</script>

<style scoped>

.cards-header {
    display: flex;
    justify-content: space-between;
    margin: 0 10px;
}

.add-materia-btn {
    display: inline-block;
    background-color: #0079bf;
    color: #fff;
    margin-top: 10px;
}

.inline-h3 {
    display: inline;
}

.materias-list {
    min-height: 13em;
    display: flex;
    flex-wrap: no-wrap;
    align-items: flex-end;
    overflow-x: scroll;
    margin: 0 10px;
    padding-bottom: 10px;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}



</style>