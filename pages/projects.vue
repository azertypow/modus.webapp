<template>
    <section
        class="v-projects"
        @click="updateQuery('trois')"
    >
      <app-page
        :header-cover="headerCover"
        :header-text="headerText"
        :without-body="true"
      />

      <div class="v-project__content app-show-background-on-nav">
        <div class="v-project__content__grid">
          <div class="v-project__section"
               v-for="projectItem of projects"
          >
            <app-project-item
                    :title="projectItem.content.title"
                    :content="projectItem.content.headertitle"
                    project-type="imaginaires"
                    :img_src="projectItem.headerImage[0].resize.reg"
                    :slug="projectItem.slug"
            />
          </div>
        </div>
      </div>

      <app-page-footer/>
    </section>
</template>





<script setup lang="ts">
import {defineProps, Ref, UnwrapRef} from 'vue'
import AppPage from "~/components/AppPage.vue";
import {LocationQueryValue} from "vue-router";
import {IApiBody, IApiProjects, IApiSingleProject} from "~/composable/adminApi/apiDefinitions";
import {ApiFetchPage, ApiFetchProjects} from "~/composable/adminApi/apiFetch";
import AppProfiles from "~/components/AppProfiles.vue";



const route = useRoute()
const router = useRouter()

const headerCover: Ref<UnwrapRef<undefined | string>> = ref(undefined)
const headerText: Ref<UnwrapRef<undefined | string>> = ref(undefined)

const projects: Ref<UnwrapRef<undefined | {[key: string]: IApiSingleProject}>> = ref(undefined)

onMounted(async () => {
    const pageData = await ApiFetchProjects('projects')

    headerCover.value = pageData.options.headerImage?.resize.large
    headerText.value = pageData.options.headerTitle
    projects.value = pageData.children
})

const filter: Ref<UnwrapRef<string | LocationQueryValue[] | null>> = ref( route.query.q || null)

watch(() => route.query.q, (newSearch) => {
    filter.value = newSearch
})

function updateQuery(q) {
    router.push({ query: { q } })
}

</script>





<style lang="scss" scoped >
.v-projects {
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
