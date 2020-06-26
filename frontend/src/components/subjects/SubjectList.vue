<template>
  <div class="wrapper">
      <div class="section-styled upper-section">
        <div class="cards-header">
            <h3 class="inline-h3">Materias</h3>
            <v-btn @click.stop="dialog=true" outlined class="add-btn">Agregar Materia</v-btn>

        </div>
        <div class="subjects-list">
            <div v-if="$store.state.exams.loading" class="lds-facebook"><div></div><div></div><div></div></div>
            <SubjectItem
                v-for="subject in getSubjects"
                :key="subject.id"
                :subject="subject"
            />
        </div>
      </div>
        <!-- New subject Modal -->
        <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="600px">
                <!-- <template v-slot:activator="{ on }"> -->
                <!-- </template> -->
                <v-card>
                    <v-card-title>
                        <span class="headline">Add Subject</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field :rules="rules" v-model="newSubject.name" label="Name*" required></v-text-field>
                                </v-col>
                                <!-- <v-col cols="6">
                                    <v-select v-model="newSubject.color" item-text="text" item-value="value" placeholder="Color" :items="getColors"></v-select>
                                </v-col> -->
                                <v-col cols="6">
                                    <v-text-field v-model="newSubject.schedule1"  placeholder="Lun-20:00 a 22:00" label="Horario 1" required></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="newSubject.schedule2"  placeholder="Mar-20:00 a 22:00" label="Horario 2" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <div class="color-picker">
                                        <strong>Elige un color: </strong>
                                        <swatches
                                            class="swatch"
                                            :colors="getColors"
                                            v-model="newSubject.color"
                                            inline
                                        />
                                    </div>
                                </v-col>
                            </v-row>
                        </v-container>
                        <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                        <v-btn color="blue darken-1" text @click="dialog = false; addSubject()">Save</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
            </v-row>
  </div>
</template>

<script>
import SubjectItem from './SubjectItem'
import Swatches from 'vue-swatches'
// import draggable from 'vuedraggable'

export default {

    data() {
        return {
            dialog: false,
            newSubject: {
                id: 0,
                name: '',
                schedule1: '',
                schedule2: '',
                color: '#ffeb3b',
            },
            rules: [
                value => !!value || 'Required',
            ],
        }
    },

    components: {
        SubjectItem,
        Swatches
        // draggable
    },

    created() {
        this.$store.dispatch('retrieveSubjects')
    },

    computed: {
        getSubjects() {
            return this.$store.getters.getSubjects
        },

        getColors() {
            return this.$store.getters.getColors
        }
    },

    methods: {

        addSubject() {
            if(this.newSubject.name.trim().length == 0) {
                this.dialog = true
                return
            }

            const subject = {
                id: this.newSubject.id,
                name: this.newSubject.name,
                schedule1: this.newSubject.schedule1,
                schedule2: this.newSubject.schedule2,
                color: this.newSubject.color,
            }

            if(subject.schedule1.trim().length == 0) {
                subject.schedule1 = "No first schedule"
            }

            if(subject.schedule2.trim().length == 0) {
                subject.schedule2 = "No second schedule"
            }
            
            this.$store.dispatch('addSubject', subject)

            this.newSubject.id++
            this.newSubject.name = ''
            this.newSubject.schedule1 = ''
            this.newSubject.schedule2 = ''
            this.newSubject.color = '#ffeb3b'
        }
    }

}
</script>

<style scoped>

.subjects-list {
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

.swatch {
    border: none;
    outline: none;
    /* max-height: 70px; */
    overflow: hidden;
}

</style>