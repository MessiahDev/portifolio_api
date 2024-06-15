<template>
  <nav class="navbar">
    <div class="logoContainer">
      <div class="logo">
        <h1>Portifólio</h1>
        <p>by Alex Alle</p>
      </div>
      <div class="div-select-lang">
        <select class="select-lang">
          <option selected value="br">BR</option>
          <option value="us">US</option>
        </select>
      </div>
    </div>
    <ul>
      <li v-for="(item, index) in menuItems" :key="index">
        <a href="#">{{ item }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
    name: 'Navbar',

    data() {
    return {
      menuItems: ['Início', 'Projetos', 'Trabalhos', 'Skills', 'Sobre']
    };
  },

  methods: {
  }
}
</script>
<style>
.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  letter-spacing: 1px;
  width: 100%;
  z-index: 100;
}

.navbar ul {
  display: flex;
  list-style: none;
  width: 40rem;
  align-items: center;
  margin: 0px 50px;
}

.navbar ul li {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-grow: 1;
  transition: background-color 0.5s ease-in-out, flex-grow 0.5s ease-in-out;
  cursor: pointer;
}

.navbar ul li:hover {
  flex-grow: 2;
}

.navbar ul li:not(:hover) {
  flex-grow: 0.5;
}

.navbar ul li:hover > a {
  color: #fafafa;
  font-family: 'Mosk Ultra Bold', sans-serif;
}

.navbar ul li::selection {
  flex-grow: 2;
}

.navbar ul li a {
  font-family: 'Mosk Ultra Bold', sans-serif;
  text-decoration: none;
  color: #fafafa;
}

.logoContainer {
  display: flex;
}

.logo {
  font-family: 'Mosk Ultra Bold', sans-serif;
  color: #fafafa;
  margin: 2px 0px 2px 3px;
  padding: 5px 5px 5px 0px;
  text-align: end;
  cursor: pointer;
}

.logo p:nth-child(2) {
  font-family: 'Mosk Ultra Bold', sans-serif;
  font-size: 0.7rem;
  letter-spacing: 2px;
}

.div-select-lang {
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #fafafa;
  margin: 5px 0px 5px 5px;
  padding: 10px 0px 10px 5px;
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