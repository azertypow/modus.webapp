<template>
    <main
        class="v-app-page"
    >
      <div
        class="v-app-page__header"
      >
        <template v-if="headerCover || headerText">
          <template v-if="useRoute().path === '/'">
            <app-header-home
              :text="headerText"
              :bg-image="headerCover"
            />
          </template>
          <template v-else>
            <app-header
                    :headerSize="headerSize"
                    :text="headerText"
                    :bg-image="headerCover"
                    :bg_focus="header_focus"
            />
          </template>
        </template>
        <template v-else>
            <div class="v-app-page__header__loading">

            </div>
        </template>
      </div>

        <div class="v-app-page__path"
             v-if="path"
        >
            <div class="v-app-page__path__content app-font-small">
                <nuxt-link href="/">Home</nuxt-link> / <nuxt-link href="/projects/">Les Projets Modus</nuxt-link> <span class="v-app-page__path__content__title">/ {{headerText?.split(' ').slice(0, 8).join(' ')}}…</span>
                <div style="padding-top: .5rem; display: flex; justify-content: space-between; flex-direction: row; gap: 1rem; flex-wrap: wrap"
                     v-if="category"
                >
                  <div style="
                          font-weight: 600;
                          font-size: .75rem;
                          border: solid;
                          display: block;
                          border-radius: 2rem;
                          padding: .15rem .5rem .25rem;
                          color: white;
                          background: var(--app-color-main--dark);
                        ">{{apiProjectMap[category]}}</div>
                  <div class="v-app-page__status-button"
                       style="
                          font-weight: 600;
                          font-size: .75rem;
                          border: solid 2px;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          gap: .5rem;
                          border-radius: 2rem;
                          padding: .015rem .5rem .025rem;
                          min-width: 3rem;
                          text-align: center;
                          "
                       v-if="status"
                  >{{status}}</div>
                </div>
            </div>
        </div>

      <div class="v-app-page__content app-show-background-on-nav"
           v-if="withoutBody !== true"
      >
        <div class="v-app-page__content__grid">
            <template v-if="titleContent">
                <div class="v-app-page__section v-app-page__section--full">
                    <h1>{{titleContent}}</h1>
                </div>
            </template>


          <template v-if="bodyContent">

            <template v-for="bodyContentItem of bodyContent">

              <template v-if="bodyContentItem.content.type === 'mdheading'">

                <template v-if="bodyContentItem.content.content.level === 'h2'">
                  <div class="v-app-page__section v-app-page__section--full">
                    <h2 v-html="bodyContentItem.content.content.text" />
                  </div>
                </template>

                <template v-else-if="bodyContentItem.content.content.level === 'h3'">
                  <div class="v-app-page__section v-app-page__section--full">
                    <h3 v-html="bodyContentItem.content.content.text" />
                  </div>
                </template>

              </template>

                <template v-else-if="bodyContentItem.content.type === 'mdimage'">
                    <div class="v-app-page__section v-app-page__section--full">
                        <div class="v-app-page__section__img">
                            <img class="v-app-page__section__img__item"
                                 :alt="bodyContentItem.image[0].alt || 'Pas de description pour cette image'"
                                 :src="bodyContentItem.image[0].resize.large"
                            />
                            <div class="v-app-page__section__img__caption"
                                 v-if="bodyContentItem.image[0].caption"
                            >{{bodyContentItem.image[0].caption}}</div>
                        </div>
                    </div>
                </template>


              <template v-else-if="bodyContentItem.content.type === 'simpleText'">
                <div class="v-app-page__section">
                  <app-text-content
                    :text="bodyContentItem.content.content.text"
                    variant="yellow-block"
                  />
                </div>
              </template>

              <template v-else-if="bodyContentItem.content.type === 'body'">
                <div class="v-app-page__section v-app-page__section--body v-app-page__section--full">
                  <div v-html="addIdsToH2(bodyContentItem.content.content.text)"/>
                </div>
              </template>


              <template v-else-if="bodyContentItem.content.type === 'profiles'">
                <div class="v-app-page__section v-app-page__section--full">
                  <app-profiles
                    :profiles-data="bodyContentItem.content.content"
                    :profiles-images-data="bodyContentItem.profilesImages"
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

              <template v-else-if="bodyContentItem.content.type === 'video'">
                <div class="v-app-page__section v-app-page__section--full" style="max-width: 60rem">
                  <app-video
                          :video_id="getIdParamInVideoYoutubeURL(bodyContentItem.content.content.url)"
                          :video_caption="bodyContentItem.content.content.caption"
                  />
                </div>
              </template>

              <template v-else-if="bodyContentItem.content.type === 'spotify'">
                <div class="v-app-page__section v-app-page__section--full" style="max-width: 60rem">
                  <app-spotify
                          :podcast_link="bodyContentItem.content.content.url"
                          :podcast_caption="bodyContentItem.content.content.caption"
                          :spotify-data="bodyContentItem.content"
                  />
                </div>
              </template>

              <template v-else-if="bodyContentItem.content.type === 'listPoints'">
                <div class="v-app-page__section">
                  <app-list-points
                          :title="bodyContentItem.content.content.titlecontent"
                          :content="bodyContentItem.content.content.text"
                  />
                </div>
              </template>

              <template v-else-if="bodyContentItem.content.type === 'actuality'">
                <div class="v-app-page__section v-app-page__section--full">
                  <app-actuality
                          :title="bodyContentItem.content.content.linktitle"
                          :url="bodyContentItem.content.content.link"
                          :description="bodyContentItem.content.content.text"
                          :src="bodyContentItem.image[0]"
                  />
                </div>
              </template>

              <template v-else-if="bodyContentItem.content.type === 'linksSection'">
                <div class="v-app-page__section v-app-page__section--full">
                  <app-link-section
                          :title="bodyContentItem.content.content.title"
                          :links="bodyContentItem.content.content.links"
                  />
                </div>
              </template>

              <template v-else-if="bodyContentItem.content.type === 'dropdown'">
                <div class="v-app-page__section v-app-page__section--full">
                  <app-drop-down
                          :title="bodyContentItem.content.content.title"
                          :dropdown_content="bodyContentItem.content.content.dropdown_content"
                          :dropdown_intro="bodyContentItem.content.content.dropdown_intro"
                  />
                </div>
              </template>


            </template>
          </template>

          <template v-else>
            chargement du contenu…
          </template>
        </div>


        <template v-if="power_subpages && power_subpages[0]">
          <div class="v-app-page__content__grid">
            <div v-for="subpage of power_subpages"
                 class="v-app-page__section v-app-page__section--full"
            >
              <AppPowerBISubSection
                      :url="subpage.url"
              />
            </div>
          </div>


          <div class="v-app-page__content__grid">
            <div class="v-app-page__section v-app-page__section--full v-app-page__section--power-bi">
              <nuxt-link class="app-button app-button--var-white v-app-page__subpage-button"
                         :href="`${parentSlug}/${power_subpages[0].slug}`"
              >
                <div>Tous les chiffres →</div>
                <svg width="106" height="83" viewBox="0 0 106 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="13.959" y="43.1216" width="19.1892" height="39.3784" fill="#009E3D" stroke="white"/>
                  <rect x="43.1211" y="0.5" width="19.1892" height="82" fill="#009E3D" stroke="white"/>
                  <rect x="72.2832" y="20.6892" width="19.1892" height="61.8108" fill="#009E3D" stroke="white"/>
                  <line x1="-8.37027e-08" y1="82" x2="105.432" y2="82" stroke="#009E3D" stroke-width="2"/>
                </svg>
                </nuxt-link>
            </div>
          </div>
        </template>
      </div>








    </main>
</template>





<script setup lang="ts">
import { defineProps } from 'vue'
import {useIsIntersected} from "~/composable/main";
import {
    apiProjectMap,
    ApiProjectMap,
    ApiProjectType,
    IApiBody,
    IApiPage__subpage
} from "~/composable/adminApi/apiDefinitions";
import AppProfiles from "~/components/AppProfiles.vue";
import AppListPoints from "~/components/AppListPoints.vue";
import {addIdsToH2} from "~/utils/addIdsToH2";
import {copyCurrentUrlToClipboard} from "~/utils/copyCurrentUrlToClipboard";
import AppDropDown from "~/components/AppDropDown.vue";
import {ApiFetchPage_powerBiSubPage} from "~/composable/adminApi/apiFetch";

const props = defineProps<{
  headerText?: string
  headerCover?: string
  header_focus?: string
  bodyContent?: IApiBody
  headerSize?: 'small'
  withoutBody?: boolean
  titleContent?: string
  path?: boolean
  category?: ApiProjectType
  date_start?: string,
  is_project_with_duration?: "true" | "false",
  date_end?: string,
  power_subpages?: IApiPage__subpage[]
}>()

const parentSlug = useRoute().path

function getIdParamInVideoYoutubeURL(url: string): string {
    return new URL(url).searchParams.get('v') || ''
}

const status: ComputedRef<null | 'En cours' | 'Terminé'> = computed(() => {
    if(props.is_project_with_duration === 'false') return null

    if( props.date_end === undefined ) return 'En cours'

    return new Date(props.date_end).getTime() < new Date().getTime() ? 'Terminé' : 'En cours'
})

const statusColor: ComputedRef< 'var(--app-color-orange)' | 'var(--app-color-main--dark)'> = computed(() => {
    return status.value ===  'En cours' ? 'var(--app-color-orange)' : 'var(--app-color-main--dark)'
})


nextTick(() => {
    window.setTimeout(() => {
        const elementsToSetBackgroundNav = document.querySelectorAll('.app-show-background-on-nav')

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                useIsIntersected().value = entry.isIntersecting;
            })
        }, {
            rootMargin: `0px 0px ${window.innerHeight * -1}px 0px`
        })

        elementsToSetBackgroundNav.forEach((value) => {
            observer.observe(value)
        })
    }, 2_000)
})

// onMounted(async () => {
//
//     if(props.bower_subpage && props.bower_subpage[0]) {
//
//         const bower_subpage = props.bower_subpage[0]
//
//         console.log( await ApiFetchPage_powerBiSubPage(`${bower_subpage.content.power_bi_pages_title}`) )
//     }
//
// })

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
    height: calc( var(--app-header-height) );
  }
}

.v-app-page__header__loading {
    background: var(--app-color-grey);
    width: 100%;
    height: 100%;
}

.v-app-page__content {
  background: var(--app-color-grey);
  position: relative;
  z-index: 10;
  width: 100%;

  @media (max-width: 900px) {
    box-shadow: 0 -5px 5px 0 var(--app-color-grey);
  }
}

.v-app-page__path {
    font-weight: 600;
    position: sticky;
    top: var(--app-nav__height);
    z-index: 100;
    box-sizing: border-box;
    width: 100%;
    background: var(--app-color-grey);
    box-shadow: 0 10px 10px 0 var(--app-color-grey);
}


.v-app-page__path__content {
    box-sizing: border-box;
    padding-left: var(--app-gutter);
    padding-right: var(--app-gutter);
    margin: auto;
    max-width: 1300px;
}

.v-app-page__path__content__title {
    @media (max-width: 900px) {
        display: none;
    }
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

.v-app-page__section__img {
    width: 100%;
}

.v-app-page__section__img__item {
    display: block;
    width: 100%;
    max-height: 80vh;
    margin: auto;
    object-fit: contain;
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

  &.v-app-page__section--body {
    &:deep(h2) {
      text-align: left;
    }

    &:deep(h2 a) {
      opacity: .5;
      text-decoration: none;
      position: relative;
      display: inline-block;
      transform: translate(-25%, 0) rotate(-15deg) scale(1.25);

      &:hover {
        opacity: 1;
      }
    }

    &:deep(ul),
    &:deep(ol) {
      box-sizing: border-box;
      max-width: 60rem;
      margin-left: auto;
      margin-right: auto;
    }
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

  &.v-app-page__section--power-bi {
    padding-bottom: 10rem;
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

.v-app-page__status-button {
  color: white;
  background-color: v-bind(statusColor);
  border-color: v-bind(statusColor) !important;
}

.v-app-page__subpage-button {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
  box-sizing: border-box;
  padding: 1.5rem 1rem;

  > svg {
    height: 3rem;
  }
}
</style>

<style lang="scss">
.v-app-page {
    h1 {
        margin-bottom: 0;
    }

    h2, h3 {
        color: var(--app-color-main);
        text-align: center;
    }

    h4, p {
        color: black;
    }

}
</style>
