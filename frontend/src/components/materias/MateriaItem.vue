<template>
  <v-card class=" materia-item">
      <v-card-title class="materia-header">
          <span class="nombre">
              {{nombre}}
          </span>
            <v-spacer></v-spacer>
           <v-menu bottom left>
            <template v-slot:activator="{ on }">
                <v-btn v-on="on" icon small>
                    <v-icon>mdi-dots-horizontal</v-icon>
                </v-btn>
            </template>

            <v-list>
              <v-list-item @click.stop="showEditModal=true">
                  <v-list-item-title>Edit</v-list-item-title>
              </v-list-item>
              <v-list-item @click="deleteMateria(materia.id)">
                  <v-list-item-title>Delete</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
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
       <v-row justify="center">
            <v-dialog v-model="showEditModal" persistent max-width="600px">
                <v-card>
                    <v-card-title>
                        <span class="headline">Edit Materia</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                            <v-col cols="12">
                                <v-text-field v-model="nombre" label="Nombre*" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="horarios[0]"  placeholder="Lun-20:00 a 22:00" label="Horario 1" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="horarios[1]"  placeholder="Mar-20:00 a 22:00" label="Horario 2" required></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="horarios[2]"  placeholder="Mie-20:00 a 22:00" label="Horario 3" required></v-text-field>
                            </v-col>
                            </v-row>
                        </v-container>
                        <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="showEditModal = false">Close</v-btn>
                        <v-btn color="blue darken-1" text @click="showEditModal = false; updateMateria()">Save</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            </v-row>
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
            nombre: this.materia.nombre,
            horarios: this.materia.horarios,
            showMenu: false,
            showEditModal: false,
        }
    },

    methods: {

        deleteMateria(id) {
            this.$store.dispatch('deleteMateria', id)
        },

        updateMateria() {
            this.$store.dispatch('updateMateria', {
                id: this.id,
                nombre: this.nombre,
                horarios: this.horarios,
            })
        }        
    }
}
</script>

<style scoped>

    .materia-item {
        min-height: 10em;
        min-width: 13em;
        margin-right: 10px;
    }

    .materia-header {
        display: flex;
        justify-content: space-between;
    }

    .materia-menu {
        display: flex;
        flex-direction: column;
    }

    .nombre {
        font-size: 0.8em;
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