<template>
    <section class="backgroundProjects">
        <div class="cardsColums">
            <div class="container1">
                <div class="coding">
                    <h2>Writing.</h2>
                </div>
                <div class="cardContainer1">
                    <div class="card1">
                        <div class="headerDots">
                            <article class="dots">
                                <div class="dot"></div>
                                <div class="dot"></div>
                                <div class="dot"></div>
                            </article>
                            <article class="textHeader1">
                                <p>Card 1</p>
                            </article>
                        </div>
                        <div class="cardContent1"></div>
                    </div>
                </div>
                <div class="gitHubBtn">
                    <button>visite meu git...</button>
                </div>
            </div>

            <div class="container2">
                <div class="cardContainer2">
                    <div class="card2">
                        <div class="headerDots">
                            <article class="dots">
                                <div class="dot"></div>
                                <div class="dot"></div>
                                <div class="dot"></div>
                            </article>
                            <article class="textHeader1">
                                <p>Card 2</p>
                            </article>
                        </div>
                        <div class="cardContent2"></div>
                    </div>
                </div>
            </div>
            <div class="container3">
                <div class="cardContainer3">
                    <div class="card3">
                        <div class="headerDots">
                            <article class="dots">
                                <div class="dot"></div>
                                <div class="dot"></div>
                                <div class="dot"></div>
                            </article>
                            <article class="textHeader1">
                                <p>Card 3</p>
                            </article>
                        </div>
                        <div class="cardContent3"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Projetos',

    data() {
        return {

        };
    },

    mounted() {
        this.observeCards();
    },

    methods: {
        observeCards() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    } else {
                        entry.target.classList.remove('show');
                    }
                });
            });

            const cards = document.querySelectorAll('.coding, .gitHubBtn');
            cards.forEach(card => {
                observer.observe(card);
            });
        },
    }
}
</script>

<style>
.backgroundProjects {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4c3a69;
    width: 100vw;
    height: 100vh;
    color: #fafafa;
}

.cardsColums {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 1fr 1f;
    column-gap: 2em;
    row-gap: 2em;
    width: 70em;
    height: 100vh;
    grid-template-areas:
        'container1 container2'
        'container1 container3';
}

.container1 {
    grid-area: 'container1';
    grid-row: 1 / 3;
}

.container2 {
    grid-area: 'container2';
}

.container3 {
    grid-area: 'container3';
}

.dots {
    display: flex;
    width: 20%;
    justify-content: space-around;
    margin: 0px 5px;
}

.dot {
    content: '';
    background: #fafafa;
    width: 15px;
    height: 15px;
    border-radius: 50px;
}

.textHeader1 {
    display: flex;
    width: 80%;
    height: 100%;
    color: #fafafa;
    align-items: center;
    justify-content: center;
}

.coding {
    height: 13%;
    margin-top: 120px;
    font-family: 'Mosk Ultra Bold', sans-serif;
    font-size: 50px;
    filter: blur(3px);
    transform: translateX(-100%);
    transition: all 0.6s ease-in-out;
}

.coding.show {
    transform: translateX(0);
    filter: blur(0);
}

.cardContainer1 {
    display: flex;
    height: 35%;
    width: 100%;
}

.cardContainer2 {
    display: flex;
    justify-content: end;
    align-items: end;
    width: 100%;
    height: 100%;
}

.cardContainer3 {
    display: flex;
    width: 100%;
    height: 100%;
}

.headerDots {
    display: flex;
    align-items: center;
    height: 12%;
    width: 100%;
    border-bottom: 2px solid #fafafa;
}

.card1, .card2, .card3 {
    border: 2px solid #fafafa;
    width: 30em;
    height: 20em;
    border-radius: 20px;
}

.gitHubBtn {
    display: flex;
    height: 25%;
    justify-content: center;
    align-items: center;
    filter: blur(3px);
    transform: translateX(-100%);
    transition: all 0.6s ease-in-out;
}

.gitHubBtn.show {
    transform: translateX(0);
    filter: blur(0);
}

.gitHubBtn button {
    font-family: 'Mosk Ultra Bold', sans-serif;
    font-size: 1.2em;
    height: 45px;
    width: 150px;
    color: #fafafa;
    border-radius: 0px;
    border: 2px solid #fafafa;
    box-shadow: 5px 5px 0px 0px #fafafa;
    transition: all 200ms ease-in-out;
    background: #4c3a69;
}

.gitHubBtn button:hover {
    margin-top: 10px;
    margin-left: 10px;
    box-shadow: none;
}
</style>
