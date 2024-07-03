<template>
    <section
        class="v-app-cookie"
    >
        <div>
            Pour améliorer votre expérience, nous intégrons des vidéos qui utilisent des cookies. En cliquant sur « Accepter » vous validez leur utilisation.
        </div>
        <div>
            <button
                @click="cookieIsValidate().value = true"
            >Accepter</button>
        </div>
    </section>
</template>





<script setup lang="ts">
import { defineProps } from 'vue'
import {cookieIsValidate} from "~/composable/main";

const props = defineProps<{
    message?: string
}>()
</script>





<style lang="scss" scoped >
.v-app-cookie {
    position: relative;
    width: 100%;
    background: var(--app-color-main);
    color: white;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
    font-weight: 500;
    align-items: center;
    line-height: 1.15em;
    box-sizing: border-box;
    padding: .5rem;

    @media (max-width: 800px) {
        flex-direction: column;
        gap: .5rem;
    }
}

button {
    font-size: 1rem;
    padding: .5em;
    line-height: 1em;
    background: var(--app-color-main--dark);
    color: white;
}
</style>
