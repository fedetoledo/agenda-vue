<template>
  <b-navbar class="menu">
    <template slot="brand">
      <b-navbar-item class="titulo" tag="router-link" :to="{ path: '/dashboard' }">College Agenda</b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="div">
        <template v-if="user.loggedIn">
          <span class="greeting">Hola, {{user.data.displayName}} </span> <b-button @click="signOut">Cerrar Sesion</b-button>
        </template>
        <div class="buttons" v-else>
          <router-link class='button is-dark' to='/login'>Sign in</router-link>
          <router-link class='button is-light' to='/register'>Sign up</router-link>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import firebase from "firebase/app";
export default {
  computed: {
    user() {
      return this.$store.getters.user
    }
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$store.dispatch('logout')
          this.$router.replace({
            name: "login"
          });
        });
    }
  }
};
</script>

<style scoped>
  .menu {
    box-shadow: 0 0 3px 0.2px #565656;  
    display: flex;
    align-items: center;
  }

.titulo {
  font-size: 2em;
}

.greeting {
  margin-right: 10px;
  font-weight: 700;
  font-style: italic;
}

</style>