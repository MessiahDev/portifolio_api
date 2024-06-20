<template>
  <Navbar />
  <Home />
  <Writing />
  <About />
  <FooterContact />

</template>

<script>
import Navbar from './Navbar.vue'
import Home from './Home.vue'
import About from './About.vue'
import Writing from './Writing.vue'
import FooterContact from './FooterContact.vue'

export default {
  name: 'LandingPage',
  components: {
    Navbar,
    Home,
    Writing,
    About,
    FooterContact
  },
}
</script>

<style>

</style>