<template>
  <div class="main-wrapper">
    <navbar></navbar>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import navbar from './components/Navbar'
export default {
  name: 'App',
  components: {
    navbar
  }
};
</script>

<style>
</style>