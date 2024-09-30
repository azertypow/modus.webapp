<template>
    <section
        class="v-projects"
    >
      <app-page
        :header-cover="headerCover"
        :header-text="headerText"
        :without-body="true"
      />

      <div class="v-project__content app-show-background-on-nav">
        <div class="v-project__content__grid">
          <div class="v-project__section v-project__section--full" >
            <div style="display: flex; align-items: center; justify-content: center">
              <div class="v-project__filter"
                   @click="router.push({ query: {} })"
                   v-if="activeFilterIcon"
              >
                <div class="v-project__filter__text">
                  {{activeFilterIcon}}
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
                </svg>
              </div>

              <div v-else style="display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center">
                <template v-for="(value, key) of apiProjectMap">
                  <div class="app-button app-button--small"
                          @click="router.push({ query: {
                      q: key
                  } })"
                  >{{value}}
                  </div>
                </template>
              </div>

            </div>
          </div>

          <template v-if="filteredProjects"
          >
            <template v-if="filteredProjects.length > 0">
              <div class="v-project__section"
                   v-for="projectItem of filteredProjects"
              >
                <app-project-item
                        :title="projectItem.content.title"
                        :content="projectItem.content.headertitle"
                        :project-type="projectItem.content.device"
                        :img_src="projectItem.headerImage[0].resize.reg"
                        :slug="projectItem.slug"
                        :date_start="projectItem.content.datestart"
                        :is_project_with_duration="projectItem.content.isprojectwithduration"
                        :date_end="projectItem.content.dateend"
                />
              </div>
            </template>
            <template v-else>
              <div class="v-project__section v-project__section--full">
                <div style="min-height: 50vh; display: flex; align-items: center; justify-content: center; width: 100%">
                  <h4 v-if="typeof filter === 'string' && isApiProjectType(filter)"
                      style="text-align: center">Il n'y a pas encore de projet pour
                    <span class="app-button app-button--small"
                          @click="router.push({ query: {q: ''} })"

                    >{{apiProjectMap[filter]}}</span>
                  </h4>
                </div>
              </div>
            </template>
          </template>
          <template v-else >
            <div class="v-project__section"
                 v-for="projectItem of projects"
            >
              <app-project-item
                      :title="projectItem.content.title"
                      :content="projectItem.content.headertitle"
                      :project-type="projectItem.content.device"
                      :img_src="projectItem.headerImage[0].resize.reg"
                      :slug="projectItem.slug"
                      :date_start="projectItem.content.datestart"
                      :is_project_with_duration="projectItem.content.isprojectwithduration"
                      :date_end="projectItem.content.dateend"
              />
            </div>
          </template>
        </div>
      </div>

      <app-page-footer/>
    </section>
</template>





<script setup lang="ts">
import {ComputedRef, defineProps, Ref, UnwrapRef} from 'vue'
import AppPage from "~/components/AppPage.vue";
import {LocationQueryValue} from "vue-router";
import {
    ApiProjectMap,
    apiProjectMap, ApiProjectType,
    IApiSingleProject, imageUrlMap, isApiProjectType
} from "~/composable/adminApi/apiDefinitions";
import {ApiFetchProjects} from "~/composable/adminApi/apiFetch";



const route = useRoute()
const router = useRouter()

const headerCover: Ref<UnwrapRef<undefined | string>> = ref(undefined)
const headerText: Ref<UnwrapRef<undefined | string>> = ref(undefined)

const projects: Ref<UnwrapRef<undefined | {[key: string]: IApiSingleProject}>> = ref(undefined)

const filteredProjects: ComputedRef<UnwrapRef<null | IApiSingleProject[]>> = computed(() => {
    if( !filter.value ) return null
    if( !projects.value ) return null

    return Object.values( projects.value ).filter(project => {
        return project.content.device === filter.value
    })
})

onMounted(async () => {
    const pageData = await ApiFetchProjects('projects')

    headerCover.value = pageData.options.headerImage?.resize.large
    headerText.value = pageData.options.headerTitle
    projects.value = pageData.children
})

const filter: Ref<UnwrapRef<string | LocationQueryValue[] | null>> = ref( route.query.q || null)

const activeFilterIcon: ComputedRef<string | null> = computed(() => {
    if (filter.value === null) return null
    if (typeof filter.value !== 'string') return null
    if(isApiProjectType(filter.value)) return apiProjectMap[filter.value]
    return null
})

watch(() => route.query.q, (newSearch) => {
    filter.value = newSearch
})

const iconUrl: ComputedRef<string | null> = computed(() => {

    if (filter.value === null) return null
    if (typeof filter.value !== 'string') return null
    if(isApiProjectType(filter.value)) return imageUrlMap[filter.value]
    return null
})

</script>





<style lang="scss" scoped >
.v-project__filter {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-radius: 5rem;
  flex-wrap: nowrap;
  border: solid 2px var(--app-color-main);
  box-sizing: border-box;
  padding: 1rem;
  user-select: none;
  cursor: pointer;

  .v-project__filter__img {
    display: block;
    height: 2rem;
    width: auto;
  }
}

.v-project__content {
  background: var(--app-color-grey);
  position: relative;
  z-index: 10;
  width: 100%;
}

.v-project__content__grid {
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

.v-project__section {
  box-sizing: border-box;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  width: 100%;

  @media (max-width: 900px) {
    grid-column: span 2;
  }

  &.v-project__section--full {
    grid-column: span 2;
  }

  &.v-project__section--no-padding {
    padding-top: 0;
    padding-bottom: 0;
  }

  &.v-project__section--no-margin {
    padding-left: 0;
    padding-right: 0;
  }

  &.v-project__section--intro {
    box-sizing: content-box;
    position: relative;

    p:nth-child(1n + 1) {
      color: var(--app-color-main);
    }

    p:nth-child(2n + 1) {
      color: var(--app-color-main--dark);
    }
  }

  .v-project__section__graphic-items {
    position: absolute;

    @media (max-width: 900px) {
      display: none;
    }
  }

  .v-project__section__graphic-items--m {
    top: 0;
    left: 0;
    transform: translate(-100%, 0%);
    height: 16vw;
    max-height: 298px;
  }

  .v-project__section__graphic-items--o {
    bottom: 0;
    left: 0;
    transform: translate(-100%, 0%);
    height: 8vw;
    max-height: 148px;
  }

  .v-project__section__graphic-items--du {
    top: 0;
    right: 0;
    transform: translate(90%, -10%);
    height: 20vw;
    max-height: 372px;
  }

  .v-project__section__graphic-items--s {
    bottom: 0;
    right: 0;
    transform: translate(100%, 0%);
    height: 12vw;
    max-height: 224px;
  }
}
</style>
