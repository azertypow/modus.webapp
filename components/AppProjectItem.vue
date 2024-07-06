<template>
    <section class="v-app-project-item"
    >

        <div class="v-app-project-item__header"
        >
            <img class="v-app-project-item__header__img"
                 v-if="imgSrc"
                 alt="project cover"
                 :src="imgSrc"
            />
            <div class="v-app-project-item__header__img"
                 v-else
            />
            <div class="v-app-project-item__header__bottom">
                <img class="v-app-project-item__header__icon"
                     alt="project icon"
                     :src="`/project_type_icons/${iconUrl}`"
                />
                <h4 class="v-app-project-item__header__type"
                >{{ apiProjectMap[projectType] }}</h4>
            </div>
        </div>

        <div class="v-app-project-item__body"
        >
            <h4 class="v-app-project-item__title">{{title}}</h4>
            <div class="v-app-project-item__content child-remove-margin"
                 v-html="content"
            />
        </div>
        <div class="v-app-project-item__bottom">
            <nuxt-link class="app-button app-button--small"
                       :href="`projects?q=${projectType}`"
            >Découvrire les projets</nuxt-link>
        </div>
    </section>
</template>





<script setup lang="ts">
import { defineProps } from 'vue'
import {ApiProjectMap, apiProjectMap, ApiProjectType} from "~/composable/adminApi/apiDefinitions";

const props = defineProps<{
    imgSrc?: string
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

const iconUrl = computed(() => imageUrlMap[props.projectType])

</script>





<style lang="scss" scoped >
.v-app-project-item {
    background: white;
    box-sizing: border-box;
    width: 100%;
    padding-bottom: 2rem;
    border-bottom-right-radius: 2rem;
    border-bottom-left-radius: 2rem;
}

.v-app-project-item__header {
    position: relative;
    width: 100%;
}

.v-app-project-item__header__img {
    display: block;
    width: 100%;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    background-color: #D3DABF;
    aspect-ratio: 3/2;

    @media (max-width: 900px) {
        aspect-ratio: 1/1;
    }
}

.v-app-project-item__header__bottom {
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

.v-app-project-item__header__type {
    color: white;
    margin: 0;
}

.v-app-project-item__header__icon {
    display: block;
    width: 4rem;
}

.v-app-project-item__body {
    box-sizing: border-box;
    width: 100%;
    padding: var(--app-gutter);
}

.v-app-project-item__bottom {
    padding-left: var(--app-gutter);
    padding-right: var(--app-gutter);
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: flex-end;
}
</style>
