<template>
    <section class="v-app-project-item"
    >

        <div class="v-app-project-item__header"
        >
            <img class="v-app-project-item__header__img"
                 alt="project cover"
                 :src="img_src"
            />
        </div>

        <div class="v-app-project-item__body child-remove-margin"
        >
            <h4 class="v-app-project-item__title">{{title}}</h4>
            <div class="v-app-project-item__content child-remove-margin"
                 v-html="content"
            />
        </div>
        <div class="v-app-project-item__bottom">
            <div class="v-app-project-item__bottom__container" >
                <div class="v-app-project-item__bottom__icon-box">
                    <img class="v-app-project-item__bottom__icon-box__img"
                         alt="project icon"
                         :src="`/project_type_icons/${iconUrl}`"
                    />
                </div>
            </div>
            <div class="v-app-project-item__bottom__container">
                <nuxt-link class="app-button app-button--small"
                           :href="`/project/${slug}`"
                >Découvrir</nuxt-link>
            </div>
        </div>
    </section>
</template>





<script setup lang="ts">
import { defineProps } from 'vue'
import {ApiProjectMap, apiProjectMap, ApiProjectType} from "~/composable/adminApi/apiDefinitions";

const props = defineProps<{
    projectType?: ApiProjectType
    title?: string
    content?: string
    img_src?: string
    slug?: string
}>()

const imageUrlMap: ApiProjectMap = {
    'bibliotheque':   'img_bibliotheque.svg',
    'imaginaires':   'img_imaginaires.svg',
    'laboratoire': 'img_laboratoire.svg',
    'plantation':  'img_plantation.svg',
    'plateforme':  'img_plateforme.svg',
}

const imgSrcMap: ApiProjectMap = {
    'bibliotheque': '240603_Modus-bibliothque.jpg',
    'imaginaires':  '240603_Modus-fabriquedesimaginaires.jpg',
    'laboratoire':  '240603_Modus-laboratoire.jpg',
    'plantation':   '240603_Modus-plantation.jpg',
    'plateforme':   '240603_Modus-plateforme.jpg',
}

const iconUrl   = computed(() => imageUrlMap[props.projectType] )
// const imgSrc    = computed(() => `/images_dispositifs/${imgSrcMap[props.projectType]}` )

</script>





<style lang="scss" scoped >
.v-app-project-item {
    background: var(--app-color-green-light);
    box-sizing: border-box;
    width: 100%;
    padding-bottom: 2rem;
    border-radius: 2rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    position: relative;
    overflow: hidden;

    @media (max-width: 900px) {
        border-top-right-radius: 0;
        border-top-left-radius: 0;
    }
}

.v-app-project-item__title {
}

.v-app-project-item__content {
    color: var(--app-color-main);
    font-weight: 600;
}

.v-app-project-item__header {
    box-sizing: border-box;
    top: 0;
    left: 0;
    position: relative;
    height: auto;
    width: 100%;
}

.v-app-project-item__header__img {
    display: block;
    width: 100%;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    background-color: #D3DABF;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 7/5;

    @media (max-width: 900px) {
    }
}

.v-app-project-item__bottom__icon-box {
    display: flex;
    gap: var(--app-gutter);
    box-sizing: border-box;
    align-items: center;
    border: solid 2px var(--app-color-main);
    border-radius: var(--app-radius-reg);
    padding: .5rem 1rem;
}

.v-app-project-item__bottom__icon-box__img {
    display: block;
    height: 2rem;
}

.v-app-project-item__header__type {
    color: white;
    margin: 0;
}

.v-app-project-item__body {
    box-sizing: border-box;
    padding: 3rem var(--app-gutter);
    width: 100%;
}

.v-app-project-item__bottom {
    padding-left: var(--app-gutter);
    padding-right: var(--app-gutter);
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}

.v-app-project-item__bottom__container {
    display: flex;
}



</style>
