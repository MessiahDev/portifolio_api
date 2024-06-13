<template>
    <section class="section">
        <div class="apresentacao">
            <p>Olá,</p>
            <p>Eu sou Alex!</p>
            <p>Atualmente Desenvolvedor FullStack</p>
        </div>
        <div class="dois"></div>
        <div class="tres"></div>
    </section>
</template>

<script>
export default {
    name: 'Inicio',

    data () {
        return {}
    }
}
</script>

<style>
.apresentacao {
    grid-area: 'apresentacao';
    border: 1px solid #f0f0f0;
    grid-column: 1;
    grid-row: 1 / 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    color: #f0f0f0;
    padding: 0em 2em;
    font-family: 'Montserrat Extra Bold', sans-serif;
}

.apresentacao p:nth-child(1), p:nth-child(2) {
    font-size: 6rem;
    letter-spacing: 5px;
}

.dois {
    grid-area: 'dois';
    border: 1px solid #f0f0f0;
}

.tres {
    grid-area: 'tres';
    border: 1px solid #f0f0f0;
}

.section {
    display: grid;
    grid-template-columns: 35em 1fr;
    grid-template-rows: 30em 1fr;
    width: 70rem;
    height: 100vh;
    grid-template-areas:
            'apresentacao' 'dois'
            'apresentacao' 'tres';
}

</style>