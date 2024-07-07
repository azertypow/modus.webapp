<template>
    <main
        class="v-app-page"
    >
      <div
        class="v-app-page__header"
      >
        <template v-if="headerCover">
          <template v-if="useRoute().path === '/'">
            <app-header-home
              :text="headerText"
              :bg-image="headerCover"
            />
          </template>
          <template v-else>
            <app-header
                    :text="headerText"
                    :bg-image="headerCover"
            />
          </template>
        </template>
        <template v-else>
          Chargement du header…
        </template>
      </div>

      <div class="v-app-page__content app-show-background-on-nav">
        <div class="v-app-page__content__grid">
          <template v-if="bodyContent">

            <template v-for="bodyContentItem of bodyContent">

              <template v-if="bodyContentItem.content.type === 'mdheading'">

                <template v-if="bodyContentItem.content.content.level === 'h2'">
                  <div class="v-app-page__section">
                    <app-citation
                      :text="bodyContentItem.content.content.text"
                    />
                  </div>
                </template>

                <template v-else-if="bodyContentItem.content.content.level === 'h3'">
                  <div class="v-app-page__section">
                    <h3>{{bodyContentItem.content.content.text}}</h3>
                  </div>
                </template>

              </template>


              <template v-else-if="bodyContentItem.content.type === 'simpleText'">
                <div class="v-app-page__section">
                  <app-text-content
                    :text="bodyContentItem.content.content.text"
                    variant="yellow-block"
                  />
                </div>
              </template>


              <template v-else-if="bodyContentItem.content.type === 'profiles'">
                <div class="v-app-page__section v-app-page__section--full">
                  <app-profiles
                    :profiles-data="bodyContentItem.content.content"
                  />
                </div>
              </template>

              <template v-else-if="bodyContentItem.content.type === 'internalLink'">
                <div class="v-app-page__section"
                     :class="{'v-app-page__section--full': bodyContentItem.content.content.width === 'true'}"
                >
                  <app-internal-link
                    :src="bodyContentItem.image[0].resize.reg"
                    :title="bodyContentItem.content.content.linktitle"
                    :description="bodyContentItem.content.content.text"
                    :href="bodyContentItem.content.content.link"
                    :style-design="bodyContentItem.content.content.style"
                    :is-full="bodyContentItem.content.content.width === 'true'"
                  />
                </div>
              </template>

            </template>
          </template>

          <template v-else>
            chargement du contenu…
          </template>
        </div>
      </div>





    </main>
</template>





<script setup lang="ts">
import { defineProps } from 'vue'
import {useIsIntersected} from "~/composable/main";
import {IApiBody} from "~/composable/adminApi/apiDefinitions";
import AppProfiles from "~/components/AppProfiles.vue";

const props = defineProps<{
  headerText?: string
  headerCover?: string
  bodyContent?: IApiBody
}>()


nextTick(() => {
  const elementsToSetBackgroundNav = document.querySelectorAll('.app-show-background-on-nav')

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log('L\'élément est en intersection avec la fenêtre')
        useIsIntersected().value = true
      } else {
        console.log('L\'élément n\'est plus en intersection avec la fenêtre')
        useIsIntersected().value = false
      }
    })
  }, {
    rootMargin: `0px 0px ${window.innerHeight * -1}px 0px`
  })

  elementsToSetBackgroundNav.forEach((value) => {
    observer.observe(value)
  })
})

</script>





<style lang="scss" scoped >
.v-app-page {
  padding-top: var(--app-header-height);
}

.v-app-page__header {
  background: white;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--app-header-height);
  position: fixed;

  @media (max-width: 900px) {
    height: calc(var(--app-header-height) + 8rem);
  }
}

.v-app-page__content {
  background: var(--app-color-grey);
  position: relative;
  z-index: 10;
  width: 100%;
}

.v-app-page__content__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  box-sizing: border-box;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  gap: 2rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: var(--app-gutter);
  padding-right: var(--app-gutter);
}

.v-app-page__section {
  box-sizing: border-box;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  width: 100%;

  @media (max-width: 900px) {
    grid-column: span 2;
  }

  &.v-app-page__section--full {
    grid-column: span 2;
  }

  &.v-app-page__section--no-padding {
    padding-top: 0;
    padding-bottom: 0;
  }

  &.v-app-page__section--no-margin {
    padding-left: 0;
    padding-right: 0;
  }

  &.v-app-page__section--intro {
    box-sizing: content-box;
    position: relative;

    p:nth-child(1n + 1) {
      color: var(--app-color-main);
    }

    p:nth-child(2n + 1) {
      color: var(--app-color-main--dark);
    }
  }

  .v-app-page__section__graphic-items {
    position: absolute;

    @media (max-width: 900px) {
      display: none;
    }
  }

  .v-app-page__section__graphic-items--m {
    top: 0;
    left: 0;
    transform: translate(-100%, 0%);
    height: 16vw;
    max-height: 298px;
  }

  .v-app-page__section__graphic-items--o {
    bottom: 0;
    left: 0;
    transform: translate(-100%, 0%);
    height: 8vw;
    max-height: 148px;
  }

  .v-app-page__section__graphic-items--du {
    top: 0;
    right: 0;
    transform: translate(90%, -10%);
    height: 20vw;
    max-height: 372px;
  }

  .v-app-page__section__graphic-items--s {
    bottom: 0;
    right: 0;
    transform: translate(100%, 0%);
    height: 12vw;
    max-height: 224px;
  }
}
</style>
