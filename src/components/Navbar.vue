<template>
  <nav>
    <div class="logo">
      <div>Portifólio</div>
      <div>by Alex Alle</div>
    </div>
    <div class="div-select-lang">
      <select class="select-lang">
        <option selected value="br">BR</option>
        <option value="us">US</option>
      </select>
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
nav {
  display: flex;
  position: fixed;
  letter-spacing: 2px;
  width: 100%;
  background: linear-gradient(35deg, orange, red, blue);
}

nav ul {
  display: flex;
  list-style: none;
  width: 40rem;
  align-items: center;
  margin: 0px 50px;
}

nav ul li {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-grow: 1;
  transition: background-color 0.5s ease-in-out, flex-grow 0.5s ease-in-out;
  cursor: pointer;
}

nav ul li:hover {
  background-color: #f0f0f0;
  flex-grow: 2;
}

nav ul li:not(:hover) {
  flex-grow: 0.5;
}

nav ul li:hover > a {
  color: #0f0f0f;
  font-family: 'Open Sans Medium', sans-serif;
}

nav ul li::selection {
  flex-grow: 2;
}

nav ul li a {
  font-family: 'Open Sans Light', sans-serif;
  text-decoration: none;
  color: #f0f0f0;
}

.logo {
  font-family: 'Open Sans Medium', sans-serif;
  color: #f0f0f0;
  width: 20rem;
  margin: 3px 0px 2px 200px;
  padding: 5px 5px 5px 0px;
  text-align: end;
}

.logo div:nth-child(2) {
  font-family: 'Open Sans Light', sans-serif;
  font-size: 0.7rem;
}

.div-select-lang {
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #f0f0f0;
  margin: 10px 0px 10px 5px;
  padding: 10px 0px 10px 5px;
}

.select-lang {
  font-family: 'Open Sans Light', sans-serif;
  background-color: transparent;
  color: #f0f0f0;
  border: 0;
  cursor: pointer;
}

.select-lang option {
  background-color: #0f0f0f;
  color: #f0f0f0;
}

.select-lang:focus {
  outline: none;
}
</style>