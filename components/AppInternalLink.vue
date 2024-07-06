<template>
    <section
        class="v-app-internal-link"
        :class="{
            'v-app-internal-link--circle': styleDesign === 'circle',
            'v-app-internal-link--full': isFull,
        }"
    >
        <div class="v-app-internal-link__img"
        >
            <img alt="image du project"
                 :src="src"
                 class="v-app-internal-link__img__img"
            />
        </div>

        <div class="v-app-internal-link__content"
        >
            <div>
                <h4 class="v-app-internal-link__content__title"
                >{{ title }}</h4>
                <div class="v-app-internal-link__content__desc child-remove-margin"
                     v-if="description"
                     v-html="description"
                />
            </div>
            <div style="display: flex; justify-content: flex-end">
                <nuxt-link class="app-button app-button--small" :href="href">En savoir plus +</nuxt-link>
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
    styleDesign?: "circle" | 'default',
    isFull?: boolean
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
    height: 100%;
    flex-wrap: nowrap;
    align-items: flex-start;
    overflow: hidden;

    &.v-app-internal-link--circle {
        border-top-left-radius:     300rem;
        border-top-right-radius:  300rem;

        &.v-app-internal-link--full {
            border-top-left-radius:     300rem;
            border-top-right-radius:  300rem;
            border-top-left-radius:     15rem;
            border-bottom-left-radius:  15rem;
            border-top-right-radius:    1rem;

            @media (max-width: 900px) {
                border-radius: var(--app-radius-small);
            }
        }

    }

    &.v-app-internal-link--full {
        flex-direction: row;

        @media (max-width: 900px) {
            flex-direction: column;
        }
    }
}

.v-app-internal-link__img__img {
    display: block;
    background: rebeccapurple;
    width: 100%;
    object-fit: cover;
    aspect-ratio: 1/1;
    border-radius: var(--app-radius-small) var(--app-radius-small) var(--app-radius-large) var(--app-radius-large);
    flex-shrink: 0;
}

.v-app-internal-link__content {
    box-sizing: border-box;
    padding: 0 1rem 1rem;
    width: 100%;
    height: 100%;
    flex-shrink: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.v-app-internal-link__content__title {
  margin-top: 1em;
  margin-bottom: .25em;
}

.v-app-internal-link__content__desc {
    color: var(--app-color-main);
}
</style>
