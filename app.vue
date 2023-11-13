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

        </div>
        <nuxt-page/>
    </section>
</template>





<script lang="ts" setup>

const isIntersected = ref(false)

onMounted(() => {
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
    padding-top: 100vh;
}

.v-app__nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;

    .is-intersected & {
        background: white;
    }
}

</style>
