<template>
  <section id="2" class="sectionAbout">
    <div class="contentAbout">
      <div class="aboutIntro">
        <div class="introColums1">
          <h2 class="aboutMe">{{ $t('about.title') }}</h2>
          <p>{{ $t('about.p1') }}</p>
          <p>{{ $t('about.p2') }}</p>
        </div>
        <div class="introColums2">
          <div class="infoImage">Rio de Janeiro</div>
          <img src="../assets/img/alex2.png" alt="Alex">
        </div>
      </div>
      <div v-for="index in articlesCount" :key="index">
        <article class="article">
          <div class="topc">
            <p>{{ $t(`about.articles.article${index}.tecnology`) }}</p>
          </div>
          <div class="lineTopc"></div>
          <div class="topcContent">
            <p>{{ $t(`about.articles.article${index}.header`) }}</p>
            <p>{{ $t(`about.articles.article${index}.p1`) }}</p>
            <p>{{ $t(`about.articles.article${index}.p2`) }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue';
import Langs from '../locales/en.json';

export default {
  name: 'About',

  setup() {
    const articlesCount = ref(0);

    onMounted(() => {
      articlesCounter();
    });

    function articlesCounter() {
      const articles = Langs.about.articles;
      articlesCount.value = Object.keys(articles).length;
    }

    return {
      articlesCount,
    };
  },
};
</script>

<style>
.sectionAbout {
    color: var(--text-primary-color);
    background: var(--background-color-tertiary);
    display: flex;
    justify-content: center;
    height: 230vh;
    width: 100vw;
}

.contentAbout {
    margin: 100px 0px;
    width: 50vw;
}

.aboutIntro {
    display: grid;
    grid-template-columns: 1.2fr 1fr;
}

.introColums1 {
    height: 400px;
    font-family: 'Open Sans Light', sans-serif;
}

.aboutMe {
    height: 13%;
    font-family: 'Mosk Ultra Bold', sans-serif;
    font-size: 50px;
    margin: 30px 0px;
}

.aboutIntro .introColums1 p  {
    margin: 30px 0px;
    font-size: 1.1em;
    line-height: 30px;
}

.introColums2 {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

.infoImage {
  position: absolute;
  width: 150px;
  height: 35px;
  background: var(--accent-color);
  font-family: 'Mosk Bold', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 2em;
  left: 6em;
  border: 2px solid var(--text-primary-color);
  box-shadow: 5px 5px 0px var(--text-primary-color);
}

.introColums2 img {
    width: 300px;
    height: 300px;
    border: 2px solid var(--text-primary-color);
    box-shadow: 5px 5px 0px var(--text-primary-color);
}

.article {
    display: grid;
    grid-template-columns: 0.4fr 1fr 2fr;
    margin: 50px 0px;
}

.topc {
    height: 250px;
    font-family: 'Hello Valentica', sans-serif;
    font-size: 1.6em;
    letter-spacing: 1px;
    margin-top: 15px;
    transform: rotate(354deg);
}

.lineTopc {
    content: '';
    height: 2px;
    width: 50%;
    margin: 25px 20px;
    background: var(--text-primary-color);
    justify-self: flex-end;
}

.topcContent {
    display: flex;
    flex-direction: column;
    height: 250px;
}

.topcContent p:first-child {
    font-family: 'Mosk Ultra Bold';
    font-size: 2.5em;
}

.topcContent p:nth-child(2), .topcContent p:nth-child(3) {
    font-family: 'Open Sans Light', sans-serif;
    margin-top: 20px;
    line-height: 30px;
    font-size: 1.2em;
}

</style>