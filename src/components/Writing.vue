<template>
    <section id="1" class="backgroundWriting">
        <div class="cardsColums">
            <div class="container1">
                <div class="coding">
                    <h2>{{ $t('writing.title') }}</h2>
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
                                <p>{{ $t('writing.cardName') }}</p>
                            </article>
                        </div>
                        <div class="cardContent1">
                            <img src="@/assets/Car_Rental_IMG.png" alt="Car Rental" class="car-rental-img" />
                            <div class="icons-container">
                                <a href="https://github.com/MessiahDev/Car-Rental-Frontend" target="_blank" class="icon-button">
                                    <i class="mdi mdi-github" :title="$t('writing.goToGitHub')"></i>
                                </a>
                                <a href="https://carrental-demo.vercel.app/" target="_blank" class="icon-button">
                                    <i class="mdi mdi-web" :title="$t('writing.goToSite')"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="gitHubBtn">
                    <button @click="goToGitHub()">{{ $t('writing.btnGit') }}</button>
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
                                <p>{{ $t('writing.financial') }}</p>
                            </article>
                        </div>
                        <div class="cardContent2">
                            <img src="@/assets/Financial_IMG.png" alt="Financial Manager" class="car-rental-img" />
                            <div class="icons-container">
                                <a href="https://github.com/MessiahDev/financial-manager.git" target="_blank" class="icon-button">
                                    <i class="mdi mdi-github" :title="$t('writing.goToGitHubFront')"></i>
                                </a>
                                <a href="https://github.com/MessiahDev/FinancialManagerAPI.git" target="_blank" class="icon-button">
                                    <i class="mdi mdi-github" :title="$t('writing.goToGitHubBack')"></i>
                                </a>
                                <a href="https://financial-manager-psi.vercel.app/" target="_blank" class="icon-button">
                                    <i class="mdi mdi-web" :title="$t('writing.goToSite')"></i>
                                </a>
                            </div>
                        </div>
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
                                <p>Coming soon</p>
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
    name: 'Writing',

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

        goToGitHub() {
            const url = 'https://github.com/MessiahDev'
            window.open(url, '_blank');
        }
    }
}
</script>

<style>
.backgroundWriting {
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--background-color-secondary);
    width: 100vw;
    height: 100vh;
    color: var(--text-primary-color);
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
    background: var(--text-primary-color);
    width: 15px;
    height: 15px;
    border-radius: 50px;
}

.textHeader1 {
    font-family: 'Mosk Ultra Bold', sans-serif;
    font-size: 1.2em;
    font-weight: bold;
    letter-spacing: 1px;
    display: flex;
    width: 80%;
    height: 100%;
    color: var(--text-primary-color);
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
    border-bottom: 2px solid var(--text-primary-color);
}

.card1, .card2, .card3 {
    border: 2px solid var(--text-primary-color);
    width: 30em;
    height: 20em;
    border-radius: 20px;
    background: var(--background-color-cards);
}

.car-rental-img {
    width: 100%;
    height: auto;
}

.icons-container {
  display: flex;
  justify-content: center;
  gap: 25px;
  margin-top: 4px;
  font-size: 30px;
}

.icon-button {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: var(--text-primary-color);
}

.icon-button:hover {
    color: var(--background-color-primary);
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
    color: var(--text-primary-color);
    border-radius: 0px;
    border: 2px solid var(--text-primary-color);
    box-shadow: 5px 5px 0px 0px var(--text-primary-color);
    transition: all 200ms ease-in-out;
    background: var(--background-color-cards);
    cursor: pointer;
}

.gitHubBtn button:hover {
    margin-top: 10px;
    margin-left: 10px;
    box-shadow: none;
}

@media (max-width: 1200px) {
    .cardsColums {
        width: 90%;
        grid-template-columns: 1fr;
        grid-template-areas:
            'container1'
            'container2'
            'container3';
        grid-template-rows: auto;
        row-gap: 2em;
        height: auto;
    }

    .container1,
    .container2,
    .container3 {
        grid-area: auto;
    }

    .card1, .card2, .card3 {
        width: 100%;
        height: auto;
    }

    .cardContainer1,
    .cardContainer2,
    .cardContainer3 {
        justify-content: center;
        align-items: center;
    }

    .coding {
        font-size: 2em;
        text-align: center;
        margin-top: 60px;
    }

    .gitHubBtn {
        height: auto;
        margin-top: 1em;
    }

    .gitHubBtn button {
        width: 100%;
        max-width: 200px;
    }
}

@media (max-width: 600px) {
    .coding {
        font-size: 1.5em;
    }

    .textHeader1 {
        font-size: 1em;
    }

    .icons-container {
        flex-direction: column;
        gap: 10px;
    }

    .dot {
        width: 10px;
        height: 10px;
    }
}
</style>
