<template>
  <nav class="navbar">
    <div class="logoContainer">
      <div class="logo">
        <h1>Alex</h1>
      </div>
      <div class="div-select-lang">
        <select class="select-lang" v-model="currentLocale" @change="changeLanguage">
          <option
            v-for="optionLocale in supportLocales"
            :key="`locale-${optionLocale}`"
            :value="optionLocale">{{ optionLocale.toUpperCase() }}
          </option>
        </select>
      </div>
    </div>
    <div class="menuList">
      <ul class="list" v-for="(item, index) in menuItems" :key="index">
        <li class="listItem">
          <a class="links" href="#">{{ $t(item) }}</a>
        </li>
      </ul>
      <div class="btnSwitch">
        <label class="switch">
          <input checked="" @click="toggleTheme()" type="checkbox" class="toggle">
          <span class="slider"></span>
          <span class="card-side"></span>
        </label>
      </div>
    </div>
  </nav>
</template>

<script>
import { onMounted, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { SUPPORT_LOCALES, setI18nLanguage } from '../i18n';

export default {
  name: 'Navbar',

  setup() {
    const { locale } = useI18n({ useScope: 'global' });
    const currentLocale = ref(locale.value);
    const supportLocales = SUPPORT_LOCALES;

    const logoObserver = ref(null);

    function observeLogo() {
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

      logoObserver.value = observer;
    }

    onMounted(() => {
      observeLogo();
    });

    function changeLanguage(event) {
      currentLocale.value = event.target.value;
    }

    watch(currentLocale, (newLocale) => {
      locale.value = newLocale;
      setI18nLanguage(newLocale);
    });

    return {
      isDarkTheme: false,
      currentLocale,
      supportLocales,
      changeLanguage,
      menuItems: ref(['navbar.home', 'navbar.writing', 'navbar.about', 'navbar.contact'])
    };
  },

  methods: {
    toggleTheme() {
      this.isDarkTheme = !this.isDarkTheme;
      document.documentElement.classList.toggle('dark-theme', this.isDarkTheme);
    }
  }
};
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
  cursor: pointer;
}

.menuList {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 25%;
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
  background: var(--text-primary-color);
  transition: all 300ms ease-in-out;
}

.links {
  font-family: 'Mosk Bold';
  text-decoration: none;
  color: var(--text-primary-color);
}

.logoContainer {
  display: flex;
}

.logo {
  display: flex;
  justify-content: end;
  align-items: center;
  font-family: 'Hello Valentica', sans-serif;
  color: var(--color-logo);
  margin: 0px 0px 5px 0px;
  padding: 0px 7px 0px 0px;
  font-size: 35px;
  text-align: end;
  cursor: pointer;
  transform: translateY(-100%);
  transition: transform 800ms ease-in-out;
}

.logo.show {
  transform: translateY(0);
}

.div-select-lang {
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid var(--text-primary-color);
  margin: 20px 0px 25px 5px;
  padding: 10px 0px 10px 7px;
}

.select-lang {
  font-family: 'Ooen Sans Light', sans-serif;
  background-color: transparent;
  color: var(--text-primary-color);
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

.btnSwitch {
  width: 30%;
  margin: 0px 10px;
}

.switch {
  --input-focus: hsl(164, 61%, 65%);
  --bg-color: #fff;
  --bg-color-alt: #666;
  --main-color: #323232;
  --input-out-of-focus: #774069;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 70px;
  height: 36px;
  transform: translateX(calc(50% - 10px));
}

.toggle {
  opacity: 0;
}

.slider {
  box-sizing: border-box;
  border-radius: 100px;
  border: 2px solid var(--main-color);
  box-shadow: 4px 4px var(--main-color);
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--input-out-of-focus);
  transition: 0.3s;
}

.slider:before {
  content: "off";
  box-sizing: border-box;
  height: 30px;
  width: 30px;
  position: absolute;
  left: 2px;
  bottom: 1px;
  border: 2px solid var(--main-color);
  border-radius: 100px;
  background-color: var(--bg-color);
  color: var(--main-color);
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  line-height: 25px;
  transition: 0.3s;
}

.toggle:checked + .slider {
  background-color: var(--input-focus);
  transform: translateX(-32px);
}

.toggle:checked + .slider:before {
  content: "on";
  transform: translateX(32px);
}
</style>