<template>
    <section
        class="v-app-header"
    >
        <div
            class="v-app-header__container"
            :style="`transform: translate(0, -${bodyScrollInfoStore.top / 4}px)`"
        >
            <div
                class="v-app-header__container__graphic-box"
            >
                <img
                    class="v-app-header__graphic-box__module_1"
                    alt="image graphique de ville pour habiller le header du site"
                    src="/header-images/modus-webapp-header@x2--web.jpeg"
                />
            </div>
            <div
                class="v-app-header__container__graphic-box"
            >
                <img
                    class="v-app-header__graphic-box__module_1"
                    alt="image graphique de ville pour habiller le header du site"
                    src="/header-images/modus-webapp-header@x2--web.jpeg"
                />
            </div>
        </div>

        <div
            class="v-app-header__signature"
            :style="`transform: translate(0, -${bodyScrollInfoStore.top / 1.05}px)`"
        >modus.<br>pour une mobilité durable à Genève</div>
    </section>
</template>





<script lang="ts" setup>
// defineProps<{
// }>()

import {bodyScrollInfo} from "~/composable/main";

const bodyScrollInfoStore = bodyScrollInfo()

</script>





<style lang="scss" scoped >
.v-app-header {
    background: white;
    width: 100%;
    height: var(--app-header-height);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    position: relative;


    @media (max-width: 700px) {
        height: calc( var(--app-header-height) + 8rem );
    }
}

.v-app-header__container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.v-app-header__signature {
    line-height: 1em;
    font-size: 5.65vw;
    letter-spacing: -.0125em;
    font-weight: 600;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    padding: var(--app-gutter);
    color: var(--app-color-main);
    z-index: 100;


    @media (max-width: 900px) {
        font-size: 10vw;
    }

    @media (max-width: 700px) {

        background: var(--app-color-grey);
    }
}

.v-app-header__container__graphic-box {
    position: absolute;
    top: 0;
    left: 0;
    height: var(--app-header-height);
    width: auto;
    animation: scroll 200s linear infinite;
}

.v-app-header__graphic-box__module_1 {
    position: relative;
    top: var(--app-nav__height);
    height: calc( 125% );

    @media (max-width: 700px) {
        height: calc( 110% );
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
