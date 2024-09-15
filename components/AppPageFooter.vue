<template>
    <section
        class="v-app-page-footer"
    >
        <footer class="v-app-page-footer__footer">

            <div class="v-app-page-footer__footer__mailto">
                <a class="v-app-page-footer__footer__mailto__link"
                   href="mailto:info@modus-ge.ch"
                >
                    <div class="v-app-page-footer__footer__mailto__link__text"
                    >
                        <div>Vous avez des questions&nbsp;?</div>
                        <div>Vous pouvez nous écrire à cette adresse&nbsp;</div>
                    </div>
                    <button class="app-button app-button--small">info@modus-ge.ch</button>
                </a>
            </div>

            <app-newsletter/>
            <img
                src="/images/166.jpg"
                class="v-app-page-footer__bottom-image"
                alt="image d'architecture urbaine"
            />
        </footer>


        <div
            class="v-app-page-footer__bottom"
        >
            <img
                alt="logo Modus fin de page"
                src="/modus-webapp-footer--web--v2.jpg"
            />
            <div
                :class="{'with-opacity-1': transformYValue > 92}"
                :style="`transform: translate(0, -${ (100 - transformYValue)}%) scale(${transformYValue / 100}, ${transformYValue / 100})`"
                class="v-app-page-footer__bottom__contact"
            >
                <a href="mailto:info@modus-ge.ch" target="_blank">info@modus-ge.ch</a>
                <div class="app__icon">
                    <a href="https://www.youtube.com/@modus-ge" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             class="bi bi-youtube"
                             viewBox="0 0 16 16">
                            <path
                                d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/fondation_modus/" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             class="bi bi-instagram" viewBox="0 0 16 16">
                            <path
                                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup lang="ts">
import {ComputedRef, defineProps} from 'vue'
import {bodyScrollInfo} from "~/composable/main";
import {getValueToPercent} from "~/utils/precent";

// const props = defineProps<{
//     message?: string
// }>()

const bodyScrollInfoStore = bodyScrollInfo()

const transformYValue: ComputedRef<number> = computed(() => {
    return getValueToPercent(bodyScrollInfoStore.value.top, document.body.scrollHeight - window.innerHeight)
})
</script>


<style lang="scss" scoped>
.v-app-page-footer {
    position: relative;
    padding-top: 10rem;
    background: var(--app-color-grey);

    @media (max-width: 900px) {
        padding-top: 2rem;
    }
}

.v-app-page-footer__footer {
    background: white;
    position: relative;
    z-index: 10;
}

.v-app-page-footer__footer__mailto__link {
    color: var(--app-color-main--dark);
    text-decoration: none;
    box-sizing: border-box;
    padding: var(--app-gutter);
    display: flex;
    align-items: flex-end;
    gap: var(--app-gutter);
    margin: auto;
    max-width: 1300px;
    justify-content: center;
    font-size: 1.5rem;
    line-height: 1.15em;

    @media(max-width: 900px) {
        flex-direction: column;
        align-items: center;
    }
}

.v-app-page-footer__footer__mailto__link__text {
    font-weight: 700;
}

.v-app-page-footer__bottom {
    position: sticky;
    bottom: 0;
    z-index: 1;
    background: white;

    > img {
        box-sizing: border-box;
        padding: 2rem 1rem 1.5rem;
        width: 100%;
        height: auto;
        display: block;
    }
}

.v-app-page-footer__bottom-image {
    display: block;
    width: 100%;
    height: 100vh;
    position: relative;
    z-index: 10;
    object-fit: cover;
}

.v-app-page-footer__bottom__contact {
    margin: auto;
    text-align: center;
    width: 100%;
    max-width: none;
    padding-bottom: 1.5rem;
    transition: opacity 1s ease-in-out;
    opacity: 0;
    color: var(--app-color-main);
    display: flex;
    justify-content: center;
    gap: 2rem;
    align-items: center;

    &.with-opacity-1 {
        opacity: 1;
    }

    > a {
        display: block;
        text-decoration: none;
    }

    .app__icon {
        svg {
            height: 1.5rem;
        }
    }
}
</style>
