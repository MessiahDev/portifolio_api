<template>
  <Navbar />
  <Inicio />
  <Projetos />
  <Trabalhos />

</template>

<script>
import Navbar from './Navbar.vue'
import Inicio from './Inicio.vue'
import Projetos from './Projetos.vue'
import Trabalhos from './Trabalhos.vue'

export default {
  name: 'LandingPage',
  components: {
    Navbar,
    Inicio,
    Projetos,
    Trabalhos,
  },
}
</script>

<style>
html,
body {
  width: 100vw;
  overflow-x: hidden;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

.parallax {
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #0d1b2a;
    background-attachment: fixed;
    height: 100vh;
}
</style>