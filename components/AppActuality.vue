<template>
    <section
        class="v-app-actuality"
    >
        <div class="v-app-actuality__title">
            <h4>{{title}}</h4>
        </div>
        <div class="v-app-actuality__img"
        >
            <img alt="image du project"
                 :src="src"
                 class="v-app-actuality__img__img"
            />
        </div>

        <div class="v-app-actuality__content"
        >
            <h4 class="v-app-actuality__content__title"
            >Organisation d’un village durant le Tour de Romandie</h4>
            <div class="v-app-actuality__content__desc child-remove-margin"
                 v-if="description"
                 v-html="description"
            />
            <div class="v-app-actuality__content__bottom">
                <nuxt-link class="app-button app-button--small" href="projects">-> découvrir des projets</nuxt-link>
            </div>
        </div>

    </section>
</template>





<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
    src: string
    title: string
    description?: string
}>()
</script>





<style lang="scss" scoped >
.v-app-actuality {
    display: flex;
    flex-direction: row;
    background: var(--app-color-yellow);
    border-radius: var(--app-radius-small);
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
}

.v-app-actuality__title {
    padding-left: 1rem;
    padding-right: 1rem;
    width: 100%;
}

.v-app-actuality__img {
    box-sizing: border-box;
    width: 50%;
    padding: 0 var(--app-gutter) var(--app-gutter);

    @media (max-width: 900px) {
        width: 100%;
        padding: 0;
    }
}

.v-app-actuality__img__img {
    aspect-ratio: 1/1;
    display: block;
    background: lightgrey;
    border-radius: var(--app-radius-small) var(--app-radius-small) var(--app-radius-large) var(--app-radius-large);
    width: 100%;
}

.v-app-actuality__content {
    box-sizing: border-box;
    padding: 0 1rem 1rem;
    width: 50%;

    @media (max-width: 900px) {
        width: 100%;
    }
}

.v-app-actuality__content__title {
    margin-top: 1em;
    margin-bottom: .25em;
}

.v-app-actuality__content__desc {
    color: var(--app-color-main);
}


.v-app-actuality__content__bottom {
    display: flex;
    justify-content: flex-end;
    padding-top: 1rem;
}
</style>
