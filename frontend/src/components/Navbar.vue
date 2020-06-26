<template>
  <nav class="navbar menu" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/dashboard">Agenda Vue</router-link>
      <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item" v-if="user.loggedIn">
          <div class="navbar-item">Hi, {{user.data.displayName}}</div>
            <a @click.prevent="signOut" class="navbar-item button is-dark">Logout</a>
        </div>
        <div class="navbar-item" v-else>
          <div class="buttons">
            <router-link to="login" class="button is-dark">
              <strong>Login</strong>
            </router-link>
            <router-link to="register" class="button is-light">
              Sign up
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import firebase from "firebase";
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
          this.$router.replace({
            name: "home"
          });
        });
    }
  }
};
</script>

<style scoped>
  .menu {
    box-shadow: 0 0 3px 2px #565656;  
  }
</style>