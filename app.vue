<template>
    <section
        class="v-app"
        :class="{
            'is-intersected': isIntersected
        }"
    >
        <div class="v-app__nav" >
            <app-nav/>
        </div>

        <div class="v-app__content" >
            <nuxt-page/>
        </div>

        <div class="v-app__cookie" v-if="!cookieIsValidate().value">
            <app-cookie/>
        </div>
    </section>
</template>





<script lang="ts" setup>

import {bodyScrollInfo, cookieIsValidate, useIsIntersected} from "~/composable/main";
import AppCookie from "~/components/AppCookie.vue";

const isIntersected = useIsIntersected()

onMounted(() => {
    window.addEventListener('scroll', () => {
        bodyScrollInfo().value = {top: window.scrollY }
    })
})

</script>





<style lang="scss" scoped >
.v-app {
}

.v-app__nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
}

.v-app__cookie {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 100;
}

</style>

<style lang="scss">
.page-enter-active, .page-leave-active {
    position: relative;
    transition: all .5s ease-in-out;
}

.page-enter-from {
    transform: translate3d(5vw, 0, 0);
    opacity: 0;
}

.page-enter-to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
}

.page-leave-from {
    transform: translate3d(0, 0, 0);
    opacity: 1;
}

.page-leave-to {
    transform: translate3d(-5vw, 0, 0);
    opacity: 0;
}
</style>
