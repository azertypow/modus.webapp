<template>
    <section
        class="v-projects"
        @click="updateQuery('trois')"
    >
      <app-page
        :header-cover="null"
        :header-text="null"
        :body-content="null"
      />

      <app-page-footer/>
    </section>
</template>





<script setup lang="ts">
import {defineProps, Ref, UnwrapRef} from 'vue'
import AppPage from "~/components/AppPage.vue";

// const props = defineProps<{
//     message?: string
// }>()

const route = useRoute()
const router = useRouter()

const filter: Ref<UnwrapRef<string | null>> = ref( route.query.q || null)

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
</style>
