<template>
    <section
        class="v-app-internal-link"
    >
        <div class="v-app-internal-link__img"
        >
            <img alt="image du project"
                 :src="src"
                 class="v-app-internal-link__img"
            />
        </div>

        <div class="v-app-internal-link__content"
        >
            <h4 class="v-app-internal-link__content__title"
            >{{title}}</h4>
            <div class="v-app-internal-link__content__desc"
                 v-if="description"
                 v-html="description"
            />
            <div style="display: flex; justify-content: flex-end">
                <nuxt-link class="app-button app-button--small" :href="href">en savoir plus +</nuxt-link>
            </div>
        </div>

    </section>
</template>





<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
    src: string
    href: string
    title: string
    description?: string
}>()
</script>





<style lang="scss" scoped >
.v-app-internal-link {
    display: flex;
    flex-direction: column;
    background: var(--app-color-green-light);
    border-radius: var(--app-radius-small);
    box-sizing: border-box;
    box-shadow: 0 2px 0 0 var(--app-color-main--dark);
}

.v-app-internal-link__img {
    display: block;
    background: rebeccapurple;
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: var(--app-radius-small) var(--app-radius-small) var(--app-radius-large) var(--app-radius-large);
}

.v-app-internal-link__content {
    box-sizing: border-box;
    padding: 0 1rem 1rem;
}

.v-app-internal-link__content__desc {
    color: var(--app-color-main);
}
</style>
