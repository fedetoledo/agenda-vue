<template>
<div class="wrapper">
    <div class="section-styled">
        <div class="cards-header">
            <h3 class="title">Examenes</h3>
            <b-button @click.stop="showNewExamModal=true" outlined class="add-btn">Agregar Examen</b-button>
        </div>
        <template>
            <div v-if="$store.state.exams.loading" class="lds-facebook"><div></div><div></div><div></div></div>
           
            <b-table class="exams-table" :data="getExams">
                <template slot-scope="props">
                    <!-- <b-table-column field="subject" label="Materia" >
                        {{props.row.subject.name}}
                    </b-table-column> -->
                    <b-table-column field="subject" label="Materia">
                        {{props.row.subject.name}}
                    </b-table-column>
                    <template v-for="col in columns">
                        <b-table-column :key="col.field.id" :field="col.field" :label="col.label">
                            {{props.row[col.field]}}
                        </b-table-column>
                    </template>
                    <b-table-column centered field="actions" custom-key="actions" label="Acciones">
                        <b-button type="is-text" @click="getExamData(props.row)">
                            <b-icon type="is-warning" icon="pencil" size="is-small"></b-icon>
                        </b-button>
                        <b-button type="is-text" @click="deleteExam(props.row.id)">
                            <b-icon type="is-danger" icon="delete" size="is-small"></b-icon>
                        </b-button>
                    </b-table-column>
                </template>
            </b-table>
           
        </template>
    </div>

    <!-- Nuevo Examen Modal -->
    <b-modal :active.sync="showNewExamModal"
        has-modal-card
        trap-focus
        :destroy-on-hide="false"
        aria-role="dialog"
        aria-modal>
        <form action="">
            <div class="modal-card" style="width:600px">
                <header class="modal-card-head primary-color">
                    <p class="modal-card-title">Agregar nuevo examen</p>
                </header>
                <section class="modal-card-body">
                    <div class="columns is-centered">
                        <div class="column is-9">
                            <b-field label="Materia">
                                <b-select v-model="newExam.subject" placeholder="Materia">
                                    <option
                                        v-for="subject in getSubjects"
                                        v-bind:value="subject"
                                        v-bind:key="subject.id"                       
                                    >{{subject.name}}
                                    </option>
                                </b-select>
                            </b-field>
                        </div>
                    </div>
                    <div class="columns is-centered">
                        <div class="column is-5">
                            <b-field label="Dia">
                                <b-input type="text" v-model="newExam.date" placeholder="Fecha" required></b-input>
                            </b-field>
                        </div>
                        <div class="column is-4">
                            <b-field label="Hora">
                                <b-input type="text" v-model="newExam.time" placeholder="Hora" required></b-input>
                            </b-field>
                        </div>
                    </div>
                    <div class="columns is-centered">
                        <div class="column is-6">
                            <b-field label="Tipo de examen">
                                <b-select v-model="newExam.typeOf" placeholder="Tipo de examen">
                                    <option v-for="option in typeOfList" 
                                        :key="option"
                                        :value="option">
                                        {{option}}
                                    </option>
                                </b-select>
                            </b-field>
                        </div>
                        <div class="column is-3">
                            <b-field label="Nota">
                                <b-input type="number" v-model="newExam.grade" placeholder="Nota"></b-input>
                            </b-field>
                        </div>
                    </div>
                    <div class="columns is-centered">
                        <b-button @click="showNewExamModal=false; addExam()" class="add-btn">Crear Examen</b-button>
                    </div>
                </section>
            </div>
        </form>
    </b-modal>
    
    <!-- Editar Examen Modal -->
    <b-modal :active.sync="showEditModal"
        v-if="editedExam.subject"
        has-modal-card
        trap-focus
        :destroy-on-hide="false"
        aria-role="dialog"
        aria-modal>
        <form action="">
            <div class="modal-card" style="width:600px">
                <header class="modal-card-head primary-color">
                    <p class="modal-card-title">Editar examen de {{editedExam.subject.name}}</p>
                </header>
                <section class="modal-card-body">
                    <div class="columns is-centered">
                        <div class="column is-9">
                            <b-field label="Materia">
                                <b-input disabled v-model="editedExam.subject.name"></b-input>
                            </b-field>
                        </div>
                    </div>
                    <div class="columns is-centered">
                        <div class="column is-9">
                            <b-field label="Fecha">
                                <b-input type="text" v-model="editedExam.date" placeholder="Fecha" required></b-input>
                            </b-field>
                        </div>
                    </div>
                    <div class="columns is-centered">
                        <div class="column is-6">
                            <b-field label="Tipo de examen">
                                <b-select v-model="editedExam.typeOf" placeholder="Tipo de examen">
                                    <option v-for="option in typeOfList" 
                                        :key="option"
                                        :value="option">
                                        {{option}}
                                    </option>
                                </b-select>
                            </b-field>
                        </div>
                        <div class="column is-3">
                            <b-field label="Nota">
                                <b-input type="number" v-model="editedExam.grade" placeholder="Nota"></b-input>
                            </b-field>
                        </div>
                    </div>
                    <div class="columns is-centered">
                        <b-button @click="showEditModal=false; updateExam(editedExam)" class="add-btn">Crear Examen</b-button>
                    </div>
                </section>
            </div>
        </form>
    </b-modal>
</div>
</template>

<script>
export default {

    data() {
        return {
            showEditModal: false,
            showNewExamModal: false,
            newExam: {
                date: '',
                time: '',
                subject: null,
                grade: 0,
                typeOf: ''
            },
            columns: [
                // {field: 'id', label: 'ID', width:40, numeric: true},
                // {field: 'subject', label: 'Materia'}, //La saco porque no puedo usar objetos
                {field: 'date', label: 'Fecha'},
                {field: 'time', label: 'Hora'},
                {field: 'grade', label: 'Nota'},
                {field: 'typeOf', label: 'Tipo'},
            ],
            editedExam: {
                date: '',
                time: '',
                subect: Object,
                grade: 0,
                typeOf: '',
            },
            typeOfList: ['Parcial', 'Final']
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

.modal-card-title {
    color: #fff;
}

.custom-button {
    color: #fff;
}

</style>