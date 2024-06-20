<template>
    <section id="3" class="footerContainer">
        <footer class="footerContent">
            <div class="leftSide">
                <p>{{ $t('footer.title') }}</p>
                <h6>{{ $t('footer.content') }}</h6>
                <a href="http://www.linkedin.com/in/alex-alle/" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                    <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
                    </svg>
                </a>
            </div>
            <div class="rightSide">
                <img src="../assets/img/computer.svg" alt="Computer">
            </div>
        </footer>
        <h2 class="heyThere">{{ $t('footer.heyThere') }}</h2>
    </section>
</template>

<script>
export default {
    name: 'FooterContact',
    data () {
        return {}
    }
}
</script>

<style>
.footerContainer {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background: var(--background-color-primary);
}

.footerContent {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: var(--accent-color);
    height: 60vh;
    width: 70vw;
}

.leftSide {
    height: 100%;
    text-align: left;
    font-size: 2em;
    padding: 1.2em 3.5em;
    color: var(--text-primary-color);
    font-family: 'Open Sans Light', sans-serif;
    line-height: 50px;
    letter-spacing: 1px;
}

.leftSide p {
    font-family: 'Mosk Bold', sans-serif;
    line-height: 50px;
    padding-top: 80px;
}

.leftSide h6 {
    font-size: 0.6em
}

.leftSide a svg {
    width: 40px;
    height: 40px;
}

.rightSide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.rightSide img {
    width: 300px;
    height: 300px;
    color: red;
}

.heyThere {
    position: absolute;
    font-family: 'Mosk Ultra Bold', sans-serif;
    color: var(--text-primary-color);
    bottom: 150px;
    left: 400px;
    font-size: 100px;
}
</style>