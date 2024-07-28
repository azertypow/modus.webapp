<template>
    <section
        class="v-app"
        :class="{
            'is-intersected': isIntersected,
        }"
    >
        <div class="v-app__menu"
             v-if="showMenu().value"
        >
          <template v-for="item of siteInfo().value?.children"
          >
            <nuxt-link class="v-app__menu__item"
                       v-if="item.showinnav.value === 'true'"
                       :href="item.slug === 'home' ? '/' : item.slug"
            >{{item.title.value}}</nuxt-link>
          </template>
        </div>

        <div class="v-app__cache"
             v-if="showMenu().value"
             @click="showMenu().value = false"
        />


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

import {bodyScrollInfo, cookieIsValidate, showMenu, siteInfo, useIsIntersected} from "~/composable/main";
import AppCookie from "~/components/AppCookie.vue";

const isIntersected = useIsIntersected()

onMounted(() => {
    window.addEventListener('scroll', () => {
        bodyScrollInfo().value = {top: window.scrollY }
    })
})

useRouter().beforeEach((to, from, next) => {
    showMenu().value = false
    next()
})

</script>





<style lang="scss" scoped >
.v-app__cache {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  background-color: rgba(0, 0, 0, .5);
  backdrop-filter: blur(10px);
  cursor: pointer;
}

.v-app__menu {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  background: var(--app-color-grey);
  box-sizing: border-box;
  padding: var(--app-gutter);

  @media (max-width: 900px) {
    padding: var(--app-nav__height) 0 0 0;
    width: 100%;
  }


  .v-app__menu__item {
    display: block;
    text-decoration: none;
    padding: var(--app-gutter);
    box-sizing: border-box;
    border-radius: 5em;
    font-size: 2rem;
    line-height: 1em;
    font-weight: 700;

    &:hover {
      color: var(--app-color-main);
    }

    @media (max-width: 900px) {
      font-size: 1.5rem;
    }
  }
}


.v-app__nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
  pointer-events: none;
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
