<template>
    <section class="sectionInicio">
        <div class="logoInicio">
            <img src="../assets/img/alex.png" alt="Alex" srcset="">
        </div>
        <div class="textRightContainer">
            <div class="descricao">
                <p class="title"><span class="hand">👋</span> Olá, sou Alex</p>
                <h1>Sou desenvolvedor <span class="bordered-text">fullstack</span> e crio aplicações web, também sou viciado em <span class="bordered-text">café</span>.</h1>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Inicio',

    data() {
        return {}
    },

    mounted() {
        this.observeEvents();
    },

    methods: {
        observeEvents() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    } else {
                        entry.target.classList.remove('show');
                    }
                });
            });

            const elements = document.querySelectorAll('.hand');
            elements.forEach(element => {
                observer.observe(element);
            });
        },
    }
}
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
    background: linear-gradient(to left, #774069 65%, #29272a 35%);
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
    width: 300px;
    height: 300px;
    align-self: center;
    justify-self: center;
    box-shadow: 15px 15px 0px 0px #fafafa;
    border: 10px solid #fafafa;
}

.textRightContainer {
    grid-area: 'textRightContainer';
    grid-column: 2;
    height: 70vh;
    padding: 30px 0px;
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
    transition: all 0.6s ease-in-out;
}

@keyframes wave {
    0% { transform: rotate(30deg); }
    20% { transform: rotate(0deg); }
    40% { transform: rotate(30deg); }
    60% { transform: rotate(0deg); }
    80% { transform: rotate(30deg); }
    100% { transform: rotate(0deg); }
}

.hand {
    display: inline-block;
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

.links {
    display: flex;
    align-items: end;
}

.links div a {
    position: relative;
    text-transform: uppercase;
    text-decoration: none;
    font-family: 'Open Sans Light', sans-serif;
    transition: 0.5s ease-in-out;
    color: #fafafa;
    letter-spacing: 1px;
    margin: 0em 2em;
}

.links div a span::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    width: 0%;
    left: 50%;
    height: 0.1rem;
    background: #fafafa;
    transition: all 300ms ease-in-out;
}

.links div a span:hover:after {
    width: 95%;
    left: 3%;
}

@media (max-width: 1200px) {
    .apresentacao h2 {
        font-size: 5rem;
    }

    .descricao {
        padding: 0 15%;
    }
}

@media (max-width: 992px) {
    .apresentacao h2 {
        font-size: 4rem;
    }

    .descricao {
        padding: 0 10%;
    }
}

@media (max-width: 768px) {
    .apresentacao h2 {
        font-size: 3rem;
    }

    .descricao {
        padding: 0 5%;
    }

    .links div a {
        margin: 0em 1em;
    }
}

@media (max-width: 576px) {
    .apresentacao {
        padding-top: 5em;
    }

    .apresentacao h2 {
        font-size: 2.5rem;
    }

    .descricao {
        padding-bottom: 3em;
    }

    .links div {
        flex-direction: column;
        padding-bottom: 2em;
    }

    .links div a {
        display: block;
        padding-top: 1em;
    }

    .section {
        z-index: 99;
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: 40% 3fr 1fr;
        width: 100vw;
        height: 100vh;
        padding: 30px;
        grid-template-areas:
            'apresentacao'
            'descricao'
            'links';
    }
}

@media (max-width: 320px) {
    .apresentacao {
        padding-top: 1.5rem;
    }

    .apresentacao h2 {
        font-size: 2rem;
    }

    .descricao {
        padding-bottom: 3em;
        font-size: 0.8rem;
    }

    .links div {
        flex-direction: column;
        font-size: 0.9rem;
    }

    .links div a {
        display: block;
        padding-top: 0.3em;
    }

    .section {
        z-index: 99;
        display: grid;
        grid-template-columns: 100%;
        grid-template-rows: 40% 3fr 1fr;
        width: 100vw;
        height: 100vh;
        padding: 30px;
        grid-template-areas:
            'apresentacao'
            'descricao'
            'links';
    }
}
</style>
