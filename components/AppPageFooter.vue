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
                src="/modus-webapp-footer--web.jpeg"
            />
            <div
                :class="{'with-opacity-1': transformYValue > 92}"
                :style="`transform: translate(0, -${ (100 - transformYValue)}%) scale(${transformYValue / 100}, ${transformYValue / 100})`"
                class="v-app-page-footer__bottom__mailto"
            ><a href="mailto:info@modus-ge.ch" target="_blank">info@modus-ge.ch</a></div>
        </div>
    </section>
</template>


<script setup lang="ts">
import {defineProps} from 'vue'
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

.v-app-page-footer__bottom__mailto {
    margin: auto;
    text-align: center;
    width: 100%;
    max-width: none;
    padding-bottom: 1.5rem;
    transition: opacity 1s ease-in-out;
    opacity: 0;

    &.with-opacity-1 {
        opacity: 1;
    }

    > a {
        color: var(--app-color-main);
        display: block;
        text-decoration: none;
    }
}
</style>
