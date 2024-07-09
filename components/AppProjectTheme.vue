<template>
    <section class="v-app-project-theme"
    >

        <div class="v-app-project-theme__header"
        >
            <img class="v-app-project-theme__header__img"
                 alt="project cover"
                 :src="imgSrc"
            />
            <div class="v-app-project-theme__header__bottom">
                <img class="v-app-project-theme__header__icon"
                     alt="project icon"
                     :src="`/project_type_icons/${iconUrl}`"
                />
                <h4 class="v-app-project-theme__header__type"
                >{{ apiProjectMap[projectType] }}</h4>
            </div>
        </div>

        <div class="v-app-project-theme__body child-remove-margin"
        >
            <h4 class="v-app-project-theme__title">{{title}}</h4>
            <div class="v-app-project-theme__content child-remove-margin"
                 v-html="content"
            />
        </div>
        <div class="v-app-project-theme__bottom">
            <nuxt-link class="app-button app-button--small"
                       :href="`projects?q=${projectType}`"
            >Découvrir les projets</nuxt-link>
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
const imgSrc    = computed(() => `/images_dispositifs/${imgSrcMap[props.projectType]}` )

</script>





<style lang="scss" scoped >
.v-app-project-theme {
    background: white;
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

.v-app-project-theme__header {
    box-sizing: border-box;
    width: 50%;
    top: 0;
    left: 0;
    position: absolute;
    height: 100%;

    @media (max-width: 900px) {
        position: relative;
        height: auto;
        width: 100%;
    }
}

.v-app-project-theme__header__img {
    display: block;
    width: 100%;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    background-color: #D3DABF;
    height: 100%;
    object-fit: cover;

    @media (max-width: 900px) {
        aspect-ratio: 1/1;
    }
}

.v-app-project-theme__header__bottom {
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    gap: var(--app-gutter);
    box-sizing: border-box;
    padding: var(--app-gutter);
    align-items: center;
}

.v-app-project-theme__header__type {
    color: white;
    margin: 0;
}

.v-app-project-theme__header__icon {
    display: block;
    width: 4rem;
}

.v-app-project-theme__body {
    box-sizing: border-box;
    padding: 3rem var(--app-gutter);
    width: 100%;
    padding-left: calc(50% + var(--app-gutter));

    @media (max-width: 900px) {
        padding-left: var(--app-gutter);
    }
}

.v-app-project-theme__bottom {
    padding-left: var(--app-gutter);
    padding-right: var(--app-gutter);
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: flex-end;
}
</style>
