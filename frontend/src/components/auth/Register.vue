<template>
  <div class="container is-fluid">
    <div class="columns is-centered">
      <div class="column is-8">
        <div class="card">
          <div class="card-header">
            <div class="card-header-title">
              Sign Up
            </div>
          </div>
          <div class="card-content">
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <form action="#" @submit.prevent="submit">
              <div class="field">
                <label for="name" class="label">Name</label>

                <div class="control">
                  <input
                    id="name"
                    type="name"
                    class="input"
                    name="name"
                    value
                    required
                    autofocus
                    v-model="form.name"
                  />
                </div>
              </div>

              <div class="field">
                <label for="email" class="label">Email</label>

                <div class="control">
                  <input
                    id="email"
                    type="email"
                    class="input"
                    name="email"
                    value
                    required
                    autofocus
                    v-model="form.email"
                  />
                </div>
              </div>

              <div class="field">
                <label for="password" class="label">Password</label>

                <div class="control">
                  <input
                    id="password"
                    type="password"
                    class="input"
                    name="password"
                    required
                    v-model="form.password"
                  />
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <button type="submit" class="button is-link">Register</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.name
            })
            .then(() => {
              this.$router.replace({name: 'Dashboard'})
            });
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>