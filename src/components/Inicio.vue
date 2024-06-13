<template>
    <section class="section">
        <div class="apresentacao">
            <h2>Olá, eu sou</h2>
            <h2><span>Alex.</span></h2>

        </div>
        <div class="descricao">
            <p>Um Desenvolvedor FullStack apaixonado por tecnologia. Sempre em busca de conhecimento e experiências.
                Curioso(a)? Entre em contato!</p>
        </div>
        <div class="links">
            <div>
                <a href="#"><span>contato</span></a>
                <a href="#"><span>Baixar CV</span></a>
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
}
</script>

<style>
.apresentacao {
    grid-area: 'apresentacao';
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 10%;
    color: #f0f0f0;
    font-family: 'Montserrat Medium', sans-serif;
}

.apresentacao h2 {
    font-size: 7rem;
    letter-spacing: 5px;
}

.apresentacao h2 span {
    background: linear-gradient(45deg, orange, red, blue);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    padding-left: 1rem;
}

.apresentacao div {
    display: flex;
    margin: auto 0px;
}

.descricao {
    grid-area: 'descricao';
    font-family: 'Montserrat Medium', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30%;
    letter-spacing: 2px;
    line-height: 2;
    font-size: 1em;
    color: #f0f0f0;
}

.links {
    grid-area: 'links';
    display: flex;
    justify-content: center;
    align-items: center;
}

.links div a {
    position: relative;
    text-transform: uppercase;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-family: 'Open Sans Light', sans-serif;
    transition: 0.5s ease-in-out;
    color: #f0f0f0;
    letter-spacing: 1px;
    margin: 0em 2em;
}

.links div a span::after {
    content: '';
    position: absolute;
    bottom: -0.4rem;
    width: 0%;
    left: 50%;
    height: 0.1rem;
    background: linear-gradient(50deg, orange, red);
    transition: all 300ms ease-in-out;
}

.links div a span:hover:after {
    width: 95%;
    left: 3%;
}

.section {
    z-index: 99;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 3fr 1fr 1fr;
    width: 75rem;
    height: 100vh;
    grid-template-areas:
        'apresentacao'
        'descricao'
        'tres';
}
</style>
