<template>
    <div class="card subject-item" v-bind:style="{ background: color }">
        <div class="card-header">
            <span class="card-header-title name subject-header">
                {{name}}
                <b-dropdown aria-role="list">
                    <b-icon class="acciones" slot="trigger" icon="dots-horizontal-circle"></b-icon>
                    <b-dropdown-item @click="showEditModal=true" aria-role="listitem">Editar</b-dropdown-item>
                    <b-dropdown-item @click="deleteSubject(subject.id)" aria-role="listitem">Eliminar</b-dropdown-item>
                </b-dropdown>
            </span>
        </div>
        <hr>
        <div class="card-content card-text">
            <div class="schedule">
                <p class="schedule-title">Horario</p>
                <p>{{schedule1}}</p>
                <p>{{schedule2}}</p>
            </div>
        </div>

        <b-modal :active.sync="showEditModal"
            has-modal-card
            class="edit-modal"
            trap-focus
            :destroy-on-hide="false"
            aria-role="dialog"
            aria-modal>
            <form action="">
                <div class="modal-card">
                    <header class="modal-card-head primary-color">
                        <p class="modal-card-title">Editar {{name}}</p>
                    </header>
                    <section class="modal-card-body">
                        <div class="columns is-centered">
                            <div class="column is-10">
                                <b-field label="Nombre">
                                    <b-input type="text" v-model="name" placeholder="Nombre de la materia" required></b-input>
                                </b-field>
                            </div>
                        </div>
                        <div class="columns horarios">
                            <div class="column is-4">
                                <b-field label="Horario 1">
                                    <b-input type="text" v-model="schedule1" placeholder="Horario"></b-input>
                                </b-field>
                            </div>
                            <div class="column is-4">
                                <b-field label="Horario 2">
                                    <b-input type="text" v-model="schedule2" placeholder="Horario" ></b-input>
                                </b-field>
                            </div>
                        </div>
                        <div class="columns is-centered">
                            <div class="column is-10">
                                <b-field label="Elegi un color:">
                                    <swatches
                                            class="swatch"
                                            :colors="getColors"
                                            v-model="color"
                                            inline
                                        />
                                </b-field>
                            </div>
                        </div>
                        <div class="columns is-centered">
                            <b-button @click="showEditModal=false; updateSubject()" class="add-btn">Guardar cambios</b-button>
                        </div>
                    </section>
                </div>
            </form>
        </b-modal>
    </div>
</template>

<script>
import Swatches from 'vue-swatches'
export default {

    components: {
        Swatches
    },
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

    hr {
        padding: 0;
        margin: 0;
    }

    .modal-background {
        background-color: #fff !important;
    }

    .edit-modal {
        text-align: left;
        white-space: normal;
    }

    .subject-item {
        border-radius: 4px 4px 2px 2px;
        display: inline-block;
        min-width: 12em;
        min-height:8em;
        margin: 0 5px;
    }

    .modal-card-title {
    color: #fff;
}

    .subject-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .subject-header .acciones:hover {
        cursor: pointer;
    }

    .subject-menu {
        display: flex;
        flex-direction: column;
    }

    .name {
        font-size: 0.9em;
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

    .swatch {
        border: none;
        outline: none;
        overflow: hidden;
        text-align:center;
    }

    .horarios {
        display: flex;
        justify-content: space-around;
    }
  
</style>