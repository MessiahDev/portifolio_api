<template>
  <nav class="navbar">
    <div class="logoContainer">
      <div class="logo">
        <h1>Alex</h1>
      </div>
      <div class="div-select-lang">
        <select class="select-lang">
          <option selected value="br">BR</option>
          <option value="us">US</option>
        </select>
      </div>
    </div>
    <div class="menuList">
      <ul class="list" v-for="(item, index) in menuItems" :key="index">
        <li class="listItem">
          <a class="links" href="#">{{ item }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
    name: 'Navbar',

    data() {
    return {
      menuItems: ['Início', 'Writing', 'Trabalhos', 'Skills', 'Sobre']
    };
  },

  mounted() {
    this.observeLogo();
  },

  methods: {
    observeLogo() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        const cards = document.querySelectorAll('.logo');
        cards.forEach(card => {
            observer.observe(card);
        });
    },
  }
}
</script>
<style>
.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  letter-spacing: 1px;
  width: 100%;
  z-index: 100;
  height: 120px;
}

.list {
  width: 7em;
  height: 100%;
}

.listItem {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  transition: background-color 0.5s ease-in-out, flex-grow 0.5s ease-in-out;
  cursor: pointer;
}

.menuList {
  display: flex;
  justify-content: center;
  height: 100%;
}

.links {
  display: flex;
  position: relative;
}

.links:hover::after {
  width: 100%;
  left: 0%;
}

.links::after {
  content: '';
  position: absolute;
  bottom: -0.4rem;
  width: 0%;
  left: 50%;
  height: 0.2rem;
  background: #fafafa;
  transition: all 300ms ease-in-out;
}

.links {
  font-family: 'Open Sans Medium', sans-serif;
  text-decoration: none;
  color: #fafafa;
}

.logoContainer {
  display: flex;
}

.logo {
  display: flex;
  justify-content: end;
  align-items: center;
  font-family: 'Hello Valentica', sans-serif;
  color: hsl(240, 33%, 77%);
  margin: 0px 0px 5px 0px;
  padding: 0px 7px 0px 0px;
  font-size: 35px;
  text-align: end;
  cursor: pointer;
  transform: translateY(-100%);
  transition: all 1s ease-in-out;
}

.logo.show {
  transform: translateY(0);
  transition: all 1s ease-in-out;
}

.div-select-lang {
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #fafafa;
  margin: 20px 0px 25px 5px;
  padding: 10px 0px 10px 7px;
}

.select-lang {
  font-family: 'Mosk Ultra Bold', sans-serif;
  background-color: transparent;
  color: #fafafa;
  border: 0;
  cursor: pointer;
}

.select-lang option {
  background: #29272a;
  color: #fafafa;
}

.select-lang:focus {
  outline: none;
}
</style>