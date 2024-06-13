<template>
  <Navbar />
  <div class="container">
    <Inicio />
  </div>
</template>

<script>
import Navbar from './Navbar.vue'
import Inicio from './Inicio.vue'

export default {
  name: 'LandingPage',
  components: {
    Navbar,
    Inicio,
  },
}
</script>

<style>
html,
body {
  background-color: #0f0f0f;
  width: 1200px;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  padding: 100px;
}

</style>