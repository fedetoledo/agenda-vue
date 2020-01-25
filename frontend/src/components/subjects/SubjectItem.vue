<template>
  <v-card :color="color" class="subject-item">
      <v-card-title class="subject-header">
          <span class="name">
              {{name}}
          </span>
            <v-spacer></v-spacer>
           <v-menu bottom left>
            <template v-slot:activator="{ on }">
                <v-btn v-on="on" icon small>
                    <v-icon color="white">mdi-dots-horizontal</v-icon>
                </v-btn>
            </template>

            <v-list>
              <v-list-item @click.stop="showEditModal=true">
                  <v-list-item-title>Edit</v-list-item-title>
              </v-list-item>
              <v-list-item @click="deleteSubject(subject.id)">
                  <v-list-item-title>Delete</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
      </v-card-title>
      <hr>
      <v-card-text class="card-text">
          <v-row>
              <v-col class="schedule">
                  <p class="schedule-title">Horario</p>
                  <p>{{schedule1}}</p>
                  <p>{{schedule2}}</p>
              </v-col>
          </v-row>
      </v-card-text>
      <!-- Edit modal -->
       <v-row justify="center">
            <v-dialog v-model="showEditModal" persistent max-width="600px">
                <v-card>
                    <v-card-title>
                        <span class="headline">Edit subject</span>
                    </v-card-title>
                    <v-card-text class="card-text">
                        <v-container>
                            <v-row>
                            <v-col cols="6">
                                <v-text-field v-model="name" label="name*" required></v-text-field>
                            </v-col>
                            <v-col cols="6">
                                <v-select v-model="color" placeholder="Color" :items="getColors" item-text="text" item-value="value"></v-select>
                            </v-col>
                             <v-col cols="6">
                                <v-text-field v-model="schedule1"  placeholder="Lun-20:00 a 22:00" label="Horario 1"></v-text-field>
                            </v-col>
                             <v-col cols="6">
                                <v-text-field v-model="schedule2"  placeholder="Mar-20:00 a 22:00" label="Horario 2"></v-text-field>
                            </v-col>
                            </v-row>
                        </v-container>
                        <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="showEditModal = false">Close</v-btn>
                        <!-- VER update method -->
                        <v-btn color="blue darken-1" text @click="showEditModal = false; updateSubject()">Save</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            </v-row>
  </v-card>
</template>

<script>
export default {

    props: {
        subject: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            id: this.subject.id,
            name: this.subject.name,
            schedule1: this.subject.schedule1,
            schedule2: this.subject.schedule2,
            color: this.subject.color,
            showMenu: false,
            showEditModal: false,
        }
    },

    computed: {
        getColors() {
            return this.$store.getters.getColors
        }
    },

    methods: {

        deleteSubject(id) {
            console.log(id)
            this.$store.dispatch('deleteSubject', id)
        },

        updateSubject() {
            this.$store.dispatch('updateSubject', {
                id: this.id,
                name: this.name,
                schedule1: this.schedule1,
                schedule2: this.schedule2,
                color: this.color,
            })
        }        
    }
}
</script>

<style scoped>

    .subject-item {
        min-height: 10em;
        min-width: 13em;
        margin-right: 10px;
    }

    .subject-header {
        display: flex;
        justify-content: space-between;
    }

    .subject-menu {
        display: flex;
        flex-direction: column;
    }

    .name {
        font-size: 0.8em;
        color: #fff;
    }

    .edit-icon {
        color: #fff;
    }

    .card-text {
        background: #fff !important;
    }

    .schedule {
        text-align: left;
    }

    .schedule-title {
        text-decoration: underline;
    }

    .card-text {
        padding: 0 0 0 10px;
    }

    p {margin: 0 !important;}
   
</style>