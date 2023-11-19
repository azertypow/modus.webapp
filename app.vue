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
            <div id="app-mailto" ></div>
        </div>
    </section>
</template>





<script lang="ts" setup>

import {bodyScrollInfo} from "~/composable/main";

const isIntersected = ref(false)

onMounted(() => {
    window.addEventListener('scroll', () => {
        bodyScrollInfo().value = {top: window.scrollY }
    })

    nextTick(() => {
        const elementsToSetBackgroundNav = document.querySelectorAll('.app-show-background-on-nav')

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log('L\'élément est en intersection avec la fenêtre')
                    isIntersected.value = true
                } else {
                    console.log('L\'élément n\'est plus en intersection avec la fenêtre')
                    isIntersected.value = false
                }
            })
        }, {
            rootMargin: `0px 0px ${window.innerHeight * -1}px 0px`
        })

        elementsToSetBackgroundNav.forEach((value) => {
            observer.observe(value)
        })
    })
})

</script>





<style lang="scss" scoped >
.v-app {
    padding-top: var(--app-header-height);
}

.v-app__nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
}

</style>
