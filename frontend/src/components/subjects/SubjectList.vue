<template>
    <div class="wrapper">
        <div class="section-styled upper-section">
            <div class="cards-header">
                <h3 class="title">Materias</h3>
                <b-button @click.stop="showNewSubjectModal=true" outlined class="add-btn">Agregar Materia</b-button>
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
      
        <!-- Nueva Materia Modal -->
        <b-modal :active.sync="showNewSubjectModal"
            has-modal-card
            trap-focus
            :destroy-on-hide="false"
            aria-role="dialog"
            aria-modal>
            <form action="">
                <div class="modal-card" style="width:600px">
                    <header class="modal-card-head primary-color">
                        <p class="modal-card-title">Agregar nueva materia</p>
                    </header>
                    <section class="modal-card-body">
                        <div class="columns is-centered">
                            <div class="column is-10">
                                <b-field label="Nombre">
                                    <b-input type="text" v-model="newSubject.name" placeholder="Nombre de la materia" required></b-input>
                                </b-field>
                            </div>
                        </div>
                        <div class="columns horarios">
                            <div class="column is-4">
                                <b-field label="Horario 1">
                                    <b-input type="text" v-model="newSubject.schedule1" placeholder="Horario"></b-input>
                                </b-field>
                            </div>
                            <div class="column is-4">
                                <b-field label="Horario 2">
                                    <b-input type="text" v-model="newSubject.schedule2" placeholder="Horario" ></b-input>
                                </b-field>
                            </div>
                        </div>
                        <div class="columns is-centered">
                            <div class="column is-10">
                                <b-field label="Elegi un color:">
                                    <swatches
                                            class="swatch"
                                            :colors="getColors"
                                            v-model="newSubject.color"
                                            inline
                                        />
                                </b-field>
                            </div>
                        </div>
                        <div class="columns is-centered">
                            <b-button @click="showNewSubjectModal=false; addSubject()" class="add-btn">Crear Examen</b-button>
                        </div>
                    </section>
                </div>
            </form>
        </b-modal>
    </div>
</template>

<script>
import SubjectItem from './SubjectItem'
import Swatches from 'vue-swatches'

export default {

    data() {
        return {
            showNewSubjectModal:false,
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

.modal-card-title {
    color: #fff;
}

.subjects-list {
    white-space: nowrap;
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
    text-align: center;
    overflow: hidden;
}

.horarios {
    display: flex;
    justify-content: space-around;
}

</style>