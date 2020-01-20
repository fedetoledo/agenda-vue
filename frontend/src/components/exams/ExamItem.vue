<template>
<v-card>
    <v-card-title class="exam-header">
        <span class="name">{{subject.name}}</span>
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
                <v-list-item @click="deleteExam(exam.id)">
                    <v-list-item-title>Delete</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-card-title>
    <v-card-text>
        <p>Fecha - {{date}}</p>
    </v-card-text>
</v-card>
</template>

<script>
export default {
    props: {
        exam: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            showEditModal: false,
            id: this.exam.id,
            grade: this.exam.grade,
            date: this.exam.date,
            subject: this.exam.subject
        }
    },

    methods: {

        deleteExam(id) {
            this.$store.dispatch('deleteExam', id)
        }
        
    },
}
</script>

<style scoped>

   
</style>