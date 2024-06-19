<template>
    <section class="sectionInicio">
      <div class="logoInicio">
        <img src="../assets/img/alex.png" alt="Alex">
      </div>
      <div class="textRightContainer">
        <div class="descricao">
          <p class="title"><span class="hand">👋</span> {{ $t('home.greeting') }}</p>
          <h2>
            {{ $t('home.introduction1') }}
            <span class="bordered-text">{{ $t('home.fullstack') }}</span>
            {{ $t('home.introduction2') }}
            <span class="bordered-text">{{ $t('home.coffee') }}</span>
          </h2>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { onMounted } from 'vue';
  
  export default {
    name: 'Inicio',
  
    setup() {
      onMounted(() => {
        observeEvents();
      });
  
      function observeEvents() {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
            } else {
              entry.target.classList.remove('show');
            }
          });
        });
  
        const elements = document.querySelectorAll('.hand, .logoInicio img');
        elements.forEach(element => {
          observer.observe(element);
        });
      }
  
      return {};
    }
  };
  </script>
  
  <style>
body {
    font-family: 'Montserrat Extra Light', sans-serif;
}

.sectionInicio {
    z-index: 99;
    display: grid;
    grid-template-columns: 700px 700px;
    grid-template-rows: 1fr;
    width: 100vw;
    height: 100vh;
    padding: 0 15em;
    background: #669bbc;
    background: linear-gradient(to left, #774069 70%, #29272a 30%);
    grid-template-areas:
        'logoInicio' 'textRightContainer';
    justify-content: center;
    align-items: center;
}

.logoInicio {
    display: flex;
    grid-area: 'logoInicio';
    grid-column: 1;
    height: 100%;
    color: #fff;
    align-content: center;
    justify-content: center;
}

.logoInicio img {
    box-sizing: content-box;
    display: inline-block;
    width: 300px;
    height: 300px;
    align-self: center;
    justify-self: center;
    border-radius: 200px;
    border: 15px solid #fafafa;
}

.textRightContainer {
    grid-area: 'textRightContainer';
    grid-column: 2;
    height: 70vh;
    padding: 30px 0px;
    margin-top: 8em;
}

.descricao {
    position: relative;
    grid-area: 'descricao';
    align-items: center;
    font-family: 'Mosk Ultra Bold', sans-serif;
    text-align: left;
    line-height: 80px;
    font-size: 40px;
    letter-spacing: 1px;
    color: #fafafa;
    z-index: 1;
    transform: scaleY(1.1);
}

.title {
    font-size: 1.8rem;
    font-family: 'Hello Valentica', sans-serif;
    margin-left: -4px;
    transform: rotate(354deg);
}

.hand {
    display: inline-block;
    margin-right: 3px;
    transform-origin: 70% 70%;
    transition: all 1s ease-in-out;
}

.hand.show {
    animation: wave 2s ease-in-out 1;
}

.bordered-text {
    color: transparent;
    -webkit-text-stroke: 2px #fafafa;
}

.bordered-text:hover {
    color: #fafafa;
    -webkit-text-stroke: 0px;
}

.descricao h1 {
    margin: 25px 0;
}

@keyframes spin {
    0% { transform: rotateX(0deg); }
    100% { transform: rotateX(360deg); }
}

@keyframes wave {
    0% { transform: rotate(30deg); }
    20% { transform: rotate(0deg); }
    40% { transform: rotate(30deg); }
    60% { transform: rotate(0deg); }
    80% { transform: rotate(30deg); }
    100% { transform: rotate(0deg); }
}
</style>
