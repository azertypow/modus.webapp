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
        >modus.<br>pour une mobilité durable à Genève</div>
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
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    position: relative;
    overflow: hidden;
}

.v-app-header__signature {
    line-height: 4rem;
    font-size: 3.8rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    padding: var(--app-gutter);
    color: white;
    z-index: 100;
}

.v-app-header__graphic-box {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 253vh;
    animation: scroll 50s linear infinite;

    > img {
        position: absolute;
        mask-repeat: no-repeat;
        object-fit: cover;
        mask-size: contain;

        &:nth-child(1) {
            mask-image: url('../assets/module_seperate/01.svg');
            width: 28vh;
            height: 35vh;
            top: 10vh;
            left: 0;
        }
        &:nth-child(2) {
            mask-image: url('../assets/module_seperate/02.svg');
            width: 53vh;
            height: 35vh;
            top: 50vh;
            left: 0;
        }
        &:nth-child(3) {
            mask-image: url('../assets/module_seperate/03.svg');
            width: 37vh;
            height: 18vh;
            top: 25vh;
            left: 32vh;
        }
        &:nth-child(4) {
            mask-image: url('../assets/module_seperate/04.svg');
            width: 59vh;
            height: 57vh;
            top: 44vh;
            left: 65vh;
        }
        &:nth-child(5) {
            mask-image: url('../assets/module_seperate/05.svg');
            width: 53vh;
            height: 35vh;
            top: 1vh;
            left: 70vh;
        }
        &:nth-child(6) {
            mask-image: url('../assets/module_seperate/06.svg');
            width: 28vh;
            height: 35vh;
            top: -15vh;
            left: 131vh;
        }
        &:nth-child(7) {
            mask-image: url('../assets/module_seperate/07.svg');
            width: 59vh;
            height: 57vh;
            top: 27vh;
            left: 112.5vh;
        }
        &:nth-child(8) {
            mask-image: url('../assets/module_seperate/08.svg');
            width: 37vh;
            height: 18vh;
            top: 21vh;
            left: 160vh;
        }
        &:nth-child(9) {
            mask-image: url('../assets/module_seperate/09.svg');
            width: 59vh;
            height: 57vh;
            top: 32vh;
            left: 184vh;
        }
        &:nth-child(10) {
            mask-image: url('../assets/module_seperate/10.svg');
            width: 28vh;
            height: 35vh;
            top: 69vh;
            left: 176vh;
        }
    }

    &:nth-child(2) {
        left: 253vh;
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
