<template>
    <div
        class="v-index"
    >
      <app-page
        :header-cover="headerCover"
        :header-text="headerText"
        :body-content="bodyContent"
      />

      <app-page-footer/>
    </div>
</template>





<script setup lang="ts">
import {defineProps, Ref, UnwrapRef} from 'vue'
import AppPage from "~/components/AppPage.vue";
import {ApiFetchPage} from "~/composable/adminApi/apiFetch";
import {IApiBody} from "~/composable/adminApi/apiDefinitions";

// const props = defineProps<{
//     message?: string
// }>()

useHead({
  title: 'modus',
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
  const pageData = await ApiFetchPage('home')

  headerCover.value = pageData.options.headerImage?.resize.large
  headerText.value = pageData.options.headerTitle

  bodyContent.value = pageData.body
})

</script>





<style lang="scss" scoped >
.v-index {
}

</style>
