<template>
    <section
        class="v-app-header"
        :class="{
            'v-app-header--small': headerSize === 'small',
            'v-app-header--no-bg': !bgImage,
            'v-app-header--no-signature-text': !text,
        }"
    >
        <div class="v-app-header__container"
            :style="`transform: translate(0, -${bodyScrollInfoStore.top / 4}px)`"
        >
            <div
                class="v-app-header__container__graphic-box"
            >
                <img
                    class="v-app-header__graphic-box__module_1"
                    alt="image graphique de ville pour habiller le header du site"
                    :src="bgImage ? bgImage : '/header--default.jpg'"
                    :style="{
                        objectPosition: props.bg_focus,
                    }"
                />
            </div>
        </div>

        <div class="v-app-header__signature"
             :style="`transform: translate(0, -${bodyScrollInfoStore.top / 1.05}px)`"
             v-if="text"
        >
            <div class="v-app-header__signature__content"
                 v-html="text"
            ></div>
        </div>
    </section>
</template>





<script lang="ts" setup>
const props = defineProps<{
  bgImage?: string,
  bg_focus?: string,
  text?: string,
  headerSize?: 'small',
}>()

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
    box-shadow: 0 10rem 0 10rem var(--app-color-grey);

    @media (max-width: 900px) {
        font-size: 10vw;
    }

    .v-app-header--small &,
    .v-app-header--no-bg & {
        background: var(--app-color-grey);
        padding-bottom: 5rem;
        padding-top: 5rem;
        font-size: 4.5rem;
        font-weight: 900;
        color: var(--app-color-main--dark);
        box-sizing: border-box;

        @media (max-width: 900px) {
            font-size: 2.5rem;
        }

        @media (max-width: 700px) {
            font-size: 2rem;
        }
    }
}

.v-app-header__signature__content {
    .v-app-header--small &,
    .v-app-header--no-bg & {
        max-width: 1300px;
        margin-left: auto;
        margin-right: auto;
    }
}

.v-app-header__container__graphic-box {
    position: absolute;
    top: 0;
    left: 0;
    height: var(--app-header-height);
    width: 100%;
}

.v-app-header__graphic-box__module_1 {
    position: relative;
    top: var(--app-nav__height);
    height: calc(100% - var(--app-nav__height));
    width: 100%;
    object-fit: cover;
    user-select: none;
    pointer-events: none;

  .v-app-header--no-signature-text & {
    width: 100%;
    height: 100%;
    object-fit: contain;
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
