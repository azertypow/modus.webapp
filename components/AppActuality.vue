<template>
    <section
        class="v-app-actuality"
    >
        <div class="v-app-actuality__title">
            <h4>Actualité | les derniers projets modus</h4>
        </div>
        <div class="v-app-actuality__img"
        >
            <img alt="image du project"
                 :src="src"
                 class="v-app-actuality__img"
            />
        </div>

        <div class="v-app-actuality__content"
        >
            <h4 class="v-app-actuality__content__title"
            >{{title}}</h4>
            <div class="v-app-actuality__content__desc"
                 v-if="description"
                 v-html="description"
            />
            <div style="display: flex; justify-content: flex-end">
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
    flex-direction: column;
    background: var(--app-color-yellow);
    border-radius: var(--app-radius-small);
    box-sizing: border-box;
}

.v-app-actuality__title {
    padding-left: 1rem;
    padding-right: 1rem;
}

.v-app-actuality__img {
    display: block;
    background: rebeccapurple;
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: var(--app-radius-small) var(--app-radius-small) var(--app-radius-large) var(--app-radius-large);
}

.v-app-actuality__content {
    box-sizing: border-box;
    padding: 0 1rem 1rem;
}

.v-app-actuality__content__desc {
    color: var(--app-color-main);
}
</style>
