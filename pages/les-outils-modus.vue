<template>
    <section
        class="v-les-outils-modus"
    >
        <app-page
            :header-cover="headerCover"
            :header-text="headerText"
            :body-content="bodyContent"
        />

        <app-page-footer/>
    </section>
</template>





<script setup lang="ts">
import {defineProps, Ref, UnwrapRef} from 'vue'
import AppPage from "~/components/AppPage.vue";
import {IApiBody} from "~/composable/adminApi/apiDefinitions";
import {ApiFetchPage} from "~/composable/adminApi/apiFetch";

// const props = defineProps<{
//     message?: string
// }>()


useHead({
    title: 'les outils modus',
    meta: [
        {
            name: 'description',
            content: 'modus. pour une mobilité durable à Genève',
        }
    ],
})

const headerCover: Ref<UnwrapRef<undefined | string>> = ref(undefined)
const headerText: Ref<UnwrapRef<undefined | string>> = ref(undefined)

const bodyContent: Ref<UnwrapRef<undefined | IApiBody>> = ref(undefined)

onMounted(async () => {
    const pageData = await ApiFetchPage('les-outils-modus')

    headerCover.value = pageData.options.headerImage?.resize.large
    headerText.value = pageData.options.headerTitle

    bodyContent.value = pageData.body
})



</script>





<style lang="scss" scoped >
.v-les-outils-modus {
}
</style>
