<template>
    <section
        class="v-project-slug"
    >
        <app-page
            :header-cover="headerCover"
            :title-content="bodyTitle"
            :body-content="bodyContent"
            :path="true"
            :header-size="'small'"
            :header-text="headerText"
            :category="category"
            :date_start="dateStart"
            :is_project_with_duration="isProjectWithDuration"
            :date_end="dateEnd"
        />
        <app-page-footer/>
    </section>
</template>





<script setup lang="ts">
import {defineProps, Ref, UnwrapRef} from 'vue'
import AppPage from "~/components/AppPage.vue";
import {ApiProjectType, IApiBody} from "~/composable/adminApi/apiDefinitions";
import {ApiFetchPage} from "~/composable/adminApi/apiFetch";

const headerCover: Ref<UnwrapRef<undefined | string>> = ref(undefined)
const headerText: Ref<UnwrapRef<undefined | string>> = ref(undefined)

const bodyTitle: Ref<UnwrapRef<undefined | string>> = ref(undefined)
const bodyContent: Ref<UnwrapRef<undefined | IApiBody>> = ref(undefined)

const category: Ref<UnwrapRef<ApiProjectType | undefined>> = ref(undefined)

const dateStart: Ref<UnwrapRef<undefined | string>>              = ref(undefined)
const isProjectWithDuration: Ref<UnwrapRef<undefined | string>>  = ref(undefined)
const dateEnd: Ref<UnwrapRef<undefined | string>>                = ref(undefined)

onMounted(async () => {
    const slug = useRoute()?.params?.slug

    if(typeof slug !== 'string') return

    const pageData = await ApiFetchPage(`projects/${slug}`)

    console.log(pageData)

    headerCover.value = pageData.options.headerImage?.mediaUrl
    headerText.value = pageData?.title?.value

    bodyTitle.value = pageData.options.headerTitle
    bodyContent.value = pageData.body

    category.value = pageData.options.category

    dateStart.value = pageData.options.dateStart
    isProjectWithDuration.value = pageData.options.isProjectWithDuration
    dateEnd.value = pageData.options.dateEnd
})
</script>





<style lang="scss" scoped >
.v-project-slug {
}
</style>
