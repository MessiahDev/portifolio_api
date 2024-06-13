<template>
  <Navbar />
  <div class="fundo">
    <div class="container">
      <Inicio />
    </div>
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

.fundo {
  background: url('https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif') no-repeat center center / cover;
  width: 100vw;
  height: 100vh;
}

.fundo::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(15, 15, 15, 0.9);
}
</style>