<template>
    <section
        class="v-app-header"
    >

        <div
            class="v-app-header__graphic-box"
        >
            <img
                alt="image d'architecture urbaine"
                src="https://source.unsplash.com/random/human"
            />
            <img
                alt="image d'architecture urbaine"
                src="https://source.unsplash.com/random/street"
            />
            <img
                alt="image d'architecture urbaine"
                src="https://source.unsplash.com/random/cars"
            />
            <img
                alt="image d'architecture urbaine"
                src="https://source.unsplash.com/random/new-york"
            />
            <img
                alt="image d'architecture urbaine"
                src="https://source.unsplash.com/random/rouge"
            />
            <img
                alt="image d'architecture urbaine"
                src="https://source.unsplash.com/random/blue"
            />
            <img
                alt="image d'architecture urbaine"
                src="https://source.unsplash.com/random/green"
            />
            <img
                alt="image d'architecture urbaine"
                src="https://source.unsplash.com/random/bonjour"
            />
            <img
                alt="image d'architecture urbaine"
                src="https://source.unsplash.com/random/train"
            />
            <img
                alt="image d'architecture urbaine"
                src="https://source.unsplash.com/random/new-york-city"
            />
        </div>
        <div
            class="v-app-header__graphic-box"
        >
            <img
                alt="image d'architecture urbaine"
                src="https://source.unsplash.com/random/human"
            />
            <img
                alt="image d'architecture urbaine"
                src="https://source.unsplash.com/random/street"
            />
            <img
                alt="image d'architecture urbaine"
                src="https://source.unsplash.com/random/cars"
            />
            <img
                alt="image d'architecture urbaine"
                src="https://source.unsplash.com/random/new-york"
            />
            <img
                alt="image d'architecture urbaine"
                src="https://source.unsplash.com/random/rouge"
            />
            <img
                alt="image d'architecture urbaine"
                src="https://source.unsplash.com/random/blue"
            />
            <img
                alt="image d'architecture urbaine"
                src="https://source.unsplash.com/random/green"
            />
            <img
                alt="image d'architecture urbaine"
                src="https://source.unsplash.com/random/bonjour"
            />
            <img
                alt="image d'architecture urbaine"
                src="https://source.unsplash.com/random/train"
            />
            <img
                alt="image d'architecture urbaine"
                src="https://source.unsplash.com/random/new-york-city"
            />
        </div>

        <div
            class="v-app-header__signature"
        ><strong>modus.</strong> pour une mobilité durable à Genève</div>
    </section>
</template>





<script lang="ts" setup>
// defineProps<{
// }>()

</script>





<style lang="scss" scoped >
.v-app-header {
    background: linear-gradient(to right, var(--app-color-main), var(--app-color-main--dark));
    width: 100%;
    height: calc(100vh - var(--app-nav__height));
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    position: relative;
    overflow: hidden;
}

.v-app-header__signature {
    height: var(--app-header__signature-height);
    background: white;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    padding: var(--app-gutter);
}

.v-app-header__graphic-box {
    position: absolute;
    top: 0;
    left: 0;
    height: 51vh;
    width: 195vh;;
    animation: scroll 50s linear infinite;

    > img {
        position: absolute;
        mask-repeat: no-repeat;
        object-fit: cover;
        mask-size: contain;

        &:nth-child(1) {
            mask-image: url('../assets/module_seperate/01.svg');
            width: 20vh;
            height: 25vh;
            top: 0;
            left: 0;
        }
        &:nth-child(2) {
            mask-image: url('../assets/module_seperate/02.svg');
            width: 37vh;
            height: 25vh;
            top: 26vh;
            left: 0;
        }
        &:nth-child(3) {
            mask-image: url('../assets/module_seperate/03.svg');
            width: 22vh;
            height: 25vh;
            top: 14vh;
            left: 22vh;
        }
        &:nth-child(4) {
            mask-image: url('../assets/module_seperate/04.svg');
            width: 38vh;
            height: 37vh;
            top: 7vh;
            left: 46vh;
        }
        &:nth-child(5) {
            mask-image: url('../assets/module_seperate/05.svg');
            width: 32vh;
            height: 22vh;
            top: -6vh;
            left: 89vh;
        }
        &:nth-child(6) {
            mask-image: url('../assets/module_seperate/06.svg');
            width: 20vh;
            height: 25vh;
            top: 20vh;
            left: 88vh;
        }
        &:nth-child(7) {
            mask-image: url('../assets/module_seperate/07.svg');
            width: 38vh;
            height: 37vh;
            top: 14vh;
            left: 111vh;
        }
        &:nth-child(8) {
            mask-image: url('../assets/module_seperate/08.svg');
            width: 24vh;
            height: 12vh;
            top: -3vh;
            left: 127vh;
        }
        &:nth-child(9) {
            mask-image: url('../assets/module_seperate/09.svg');
            width: 38vh;
            height: 37vh;
            top: 1vh;
            left: 154vh;
        }
        &:nth-child(10) {
            mask-image: url('../assets/module_seperate/10.svg');
            width: 20vh;
            height: 50vh;
            top: 28vh;
            left: 152vh;
        }
    }

    &:nth-child(2) {
        left: calc( 198vh );
    }
}

@keyframes scroll {
    0% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(-100%);
    }
}

.v-app-header__graphic-box__item {
    fill: #461818;
    position: absolute;
    width: 40vw;
    height: 40vw;

    &:nth-child(1) {
        top: 0;
        left: 0;
        transform: translate(-22vw, -4vw);
    }

    &:nth-child(2) {
        top: 0;
        left: 0;
        transform: translate(6.4vw, -12vw);
    }

    &:nth-child(3) {
        top: 50%;
        left: 0;
        transform: translate(38vw, calc(-50% + 2vw) ) rotate(-135deg);
    }

    &:nth-child(4) {
        top: 50%;
        left: 0;
        transform: translate(62vw, calc(-50% + 2vw) ) rotate(45deg);
    }

    &:nth-child(5) {
        bottom: 0;
        left: 0;
        transform: translate(15.2vw, 10vw);
    }
}
</style>
