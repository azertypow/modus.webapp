<template>
    <section
        class="v-app-header"
    >

        <div
            class="v-app-header__graphic-box"
        >
            <img
                class="v-app-header__graphic-box__module_1"
                alt="image d'architecture urbaine"
                src="../assets/module_seperate/incorporees/global--incorporees.svg"
            />
        </div>
        <div
            class="v-app-header__graphic-box"
        >
            <img
                class="v-app-header__graphic-box__module_1"
                alt="image d'architecture urbaine"
                src="../assets/module_seperate/incorporees/global--incorporees.svg"
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
    line-height: 1em;
    font-size: 5.65vw;
    letter-spacing: -.0125em;
    font-weight: 600;
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
    width: auto;
    animation: scroll 400s linear infinite;
}

[class*='v-app-header__graphic-box__module_'] {
    height: 209%;
    position: relative;
}

.v-app-header__graphic-box__module_1 {
    top: var(--app-nav__height);
    height: calc( 100% - var(--app-nav__height) );
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
