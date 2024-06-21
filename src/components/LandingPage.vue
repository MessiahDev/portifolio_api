<template>
  <Navbar />
  <Home />
  <Writing />
  <About />
  <FooterContact />
  <div class="scrollTop" :class="{ show: showScrollTopButton }">
    <button class="btnScroll" @click="navigate()"><i class="mdi mdi-arrow-up"></i></button>
  </div>
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
  data() {
    return {
      showScrollTopButton: false
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.$nextTick(() => {
      this.observeBtsScroll();
    });
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    navigate() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },

    observeBtsScroll() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          this.showScrollTopButton = !entry.isIntersecting;
        });
      });

      const logo = document.querySelector('.logo');
      if (logo) {
        observer.observe(logo);
      }
    }
  }
}
</script>

<style>
.scrollTop {
  position: fixed;
  bottom: 20px;
  right: 20px;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  display: none;
}

.scrollTop.show {
  display: flex;
}

.btnScroll {
  background: var(--text-primary-color);
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 25px;
  color: var(--accent-color);
  font-size: 24px;
  font-weight: bolder;
  cursor: pointer;
}
</style>
