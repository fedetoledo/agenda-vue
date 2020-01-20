<template>
<div class="wrapper">
    <div class="section-styled">
        <div class="cards-header">
            <h3 class="inline-h3">Examenes</h3>
            <v-btn @click.stop="dialog=true" outlined class="add-btn">Agregar Examen</v-btn>
        </div>
        <template>
            <v-data-table
                :headers="headers"
                :items="getExams"
                :items-per-page="5"
                class=" exams-table elevation-2">
                <template v-slot:item.action="{ item }">
                    <v-icon
                        small
                        class="mr-2"
                        @click="getExamData(item)"
                    >mdi-pencil
                    </v-icon>
                    <v-icon
                        small
                        @click="deleteExam(item.id)"
                        >mdi-delete
                    </v-icon>
                </template>
            </v-data-table>
        </template>
    </div>

    <!-- New exam Modal -->
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="600px">
            <v-card>
                <v-card-title>
                    <span class="headline">Add Exam</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-select item-text="name" :items="getSubjects" return-object v-model="newExam.subject" label="Materia*" required></v-select>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="newExam.date"  placeholder="19/09/2020 20:00" label="Fecha" required />
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="newExam.grade" label="Nota" required />
                            </v-col>
                        </v-row>
                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                    <v-btn color="blue darken-1" text @click="dialog = false; addExam()">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>

    <!-- Edit Exam Modal -->
    <v-row justify="center" v-if="editedExam.subject">
        <v-dialog v-model="showEditModal" persistent max-width="600px">
            <v-card>
                <v-card-title>
                    <span class="headline">Editar Examen</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12">
                                <v-text-field  disabled v-model="editedExam.subject.name" label="Materia*"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="editedExam.date"  placeholder="dia/mes/año hora" label="Fecha"></v-text-field>
                            </v-col>
                            <v-col cols="12">
                                <v-text-field v-model="editedExam.grade"  placeholder="Nota"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="showEditModal = false">Close</v-btn>
                    <v-btn color="blue darken-1" text @click="showEditModal = false; updateExam(editedExam)">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
    
</div>
</template>

<script>
export default {

    data() {
        return {
            showEditModal: false,
            dialog: false,
            newExam: {
                date: '',
                subject: Object,
                grade: 0,
            },
            headers: [
                {text: 'Materia', value: 'subject.name'},
                {text: 'Fecha', value: 'date'},
                {text: 'Nota', value: 'grade'},
                {text: 'Actions', value: 'action', sortable: false}
            ],
            editedExam: {
                date: '',
                subect: Object,
                grade: 0,
            }
        }
    },

    created() {
        this.$store.dispatch('retrieveExams')
    },

    computed: {
        getExams() {
            return this.$store.getters.getExams
        },

        getSubjects() {
            return this.$store.getters.getSubjects
        }
    },

    methods: {
        addExam() {
            this.$store.dispatch('addExam', this.newExam)
        },

          deleteExam(id) {
            this.$store.dispatch('deleteExam', id)
        },

        updateExam(exam) {
            this.$store.dispatch('updateExam', exam)
        },

        getExamData(exam) {
            console.log(exam)
            this.editedExam = exam
            this.showEditModal = true
        }
    }

}
</script>

<style scoped>

.exams-table {
    margin: 10px 5px;
}

</style>