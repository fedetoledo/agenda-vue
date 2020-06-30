<template>
  <div>
    <navbar></navbar>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import navbar from './components/Navbar'
import "vue-swatches/dist/vue-swatches.css"

export default {
  name: 'App',
  components: {
    navbar
  }
};
</script>