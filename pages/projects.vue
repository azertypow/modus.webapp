<template>
    <section
        class="v-projects"
        @click="updateQuery('trois')"
    >
        hello
        {{filter}}
    </section>
</template>





<script setup lang="ts">
import {defineProps, Ref, UnwrapRef} from 'vue'

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
