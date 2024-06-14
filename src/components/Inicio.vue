<template>
    <section class="section">
        <div class="apresentacao">
            <h2>Olá, eu sou</h2>
            <h2>Alex.</h2>
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
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat Medium', sans-serif;
}

.apresentacao {
    grid-area: apresentacao;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding-top: 5%;
    color: #f0f0f0;
}

.apresentacao h2 {
    font-size: 7rem;
    letter-spacing: 5px;
}

.descricao {
    grid-area: descricao;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 35%;
    padding-top: 5em;
    letter-spacing: 2px;
    line-height: 2;
    font-size: 1em;
    color: #f0f0f0;
}

.links {
    grid-area: links;
    display: flex;
    justify-content: center;
    align-items: end;
}

.links div a {
    position: relative;
    text-transform: uppercase;
    text-decoration: none;
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
    grid-template-columns: 100%;
    grid-template-rows: 50% 3fr 1fr;
    width: 100vw;
    height: 100%;
    grid-template-areas:
        'apresentacao'
        'descricao'
        'links';
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
    .apresentacao h2 {
        font-size: 2.5rem;
    }
    .descricao {
        padding: 0 2%;
    }
    .links div {
        flex-direction: column;
    }
    .links div a {
        display: block;
        padding-top: 1em;
    }
}
</style>
