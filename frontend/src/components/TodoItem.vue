<template>
  <v-card
    :ripple="false"
    class="tarjeta"
  >
    <v-layout class="d-flex justify-center align-center main-card">
      <v-btn @click="toggleCheck" class="checked-task" icon>
        <v-icon>{{this.$props.checked ? 'mdi-close' : 'mdi-check'}}</v-icon>
      </v-btn>
      <div class="clicked-title" @click="show = !show"> 
        <span :class="{checked: this.$props.checked}">{{title}}</span>
        <v-icon class="float-right" :color="priorityColor(priority)">mdi-alert-circle</v-icon>
      </div>
    </v-layout>
    <v-expand-transition>
        <div v-show="show">
          <v-divider/>
          <v-card-subtitle>{{date}}
          </v-card-subtitle>
          <v-card-text><p>{{desc}} - {{id}}</p></v-card-text>
          <v-btn @click="deleteTodo" class="float-right" icon>
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </div>
    </v-expand-transition>
      
  </v-card>
</template>

<script>
import axios from 'axios';
export default {

  props: ['id','title','desc','date','priority','checked'],

  data: () => ({
    show: false,
  }),

  watch: {
    checked: function(nuevo, old) {
      console.log('new:'+nuevo + ", viejo: "+ old)
    }
  },

  methods: {

    toggleCheck() {
      this.$emit('update:checked', !this.$props.checked)
      // const path = 'http://localhost:8000/api/todos/'+this.$props.id+"/";
      // axios.patch(path, {checked: !this.$props.checked})
      // .then(() => {
      //   this.$emit('todoChanged', this.$props.id)
      // })
      // .catch((error) => {
      //   console.log(error)
      // })
    },

    deleteTodo() {
      const path = 'http://localhost:8000/api/todos/'+this.$props.id+'/';
      axios.delete(path)
      .then((response) => {
        alert(response.data.title + " deleted!")
      })
      .catch((error) => {
        console.log(error)
      })
    },
    
    priorityColor(p) {
      var color= undefined;
      switch(p) {
        case 2:
          color = '#F44336';
          break;
        case 1:
          color = '#FFEB3B';
          break;
        case 0: 
          color = '#4CAF50';
          break;
      }
      return color;
    },
  }

}
</script>

<style>

.tarjeta:hover {
  background: #ededed !important;
  transition: .2s;
}

.tarjeta:focus::before {
  opacity: 0 !important;
}

.tarjeta .main-card {
  height: 2.5em;
}

.clicked-title {
  width:87%;
  cursor: pointer;
  text-align: center;
}

.checked-task {
  width:10%;
}

.checked {
  text-decoration: line-through;
  color: #cbcbcb;
}


</style>