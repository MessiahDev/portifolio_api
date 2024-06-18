<template>
    <section class="sectionAbout">
        <div class="contentAbout">
            <div class="aboutIntro">
                <div class="introColums1">
                    <h2 class="aboutMe">I little About Me.</h2>
                    <p>No início eu tinha muita vontade de trabalhar com desenvolvimento, mas tinha medo da complexidade dos códigos. 
                        Não desisti, e não tenho mais medo.
                    </p>
                    <p>
                        Então, naturalmente, levei muitas "surras" do código até saber o que sei hoje. Certamente ainda tenho muitas coisas 
                        para aprender e sigo no meu rítimo. Mas as vezes ainda assusta.
                    </p>
                </div>
                <div class="introColums2">
                    <img src="../assets/img/alex2.png" alt="" srcset="">
                </div>
            </div>
            <div v-for="(item, index) in articles" :key="index">
                <article class="article1">
                    <div class="topc1">
                        <p>{{ item.name }}</p>
                    </div>
                    <div class="lineTopc"></div>
                    <div class="topcText1">
                        <p>Text</p>
                        <p>{{ item.text }}</p>
                        <p>{{ item.text }}</p>
                        <p>{{ item.text }}</p>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Trabalhos',
    
    data() {
        return {
            articles: [
                { name: 'C#', text: 'fthsbdsghsg' },
                { name: 'JavaScript', text: 'dhrhshshh' },
                { name: 'TypeScript', text: 'hszgvghhh' },
                { name: 'Vue', text: 'sxfghghgr' },
                { name: 'React', text: 'sxfghghgr' },
            ],
        };
    },


}
</script>

<style>
.sectionAbout {
    color: #f0f0f0;
    background: #2C2A32;
    display: flex;
    justify-content: center;
    height: 230vh
}

.contentAbout {
    margin: 100px 0px;
    width: 60vw;
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
    display: flex;
    justify-content: center;
    align-items: center;
}

.introColums2 img {
    width: 300px;
    height: 300px;
    border: 2px solid #fafafa;
    box-shadow: 10px 10px 0px #fafafa;
}

.article1 {
    display: grid;
    grid-template-columns: 0.2fr 1fr 1.8fr;
    margin: 50px 0px;
}

.topc1 {
    height: 250px;
}

.lineTopc {
    content: '';
    height: 2px;
    width: 50%;
    margin: 10px 20px;
    background: #fafafa;
    justify-self: flex-end;
}

.topcText1 {
    display: flex;
    flex-direction: column;
    height: 250px;
    justify-content: space-between;
}

</style>