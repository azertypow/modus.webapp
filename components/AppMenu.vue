<template>
    <nav
        class="v-app-menu"
    >
    </nav>
</template>





<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
    message?: string
}>()
</script>





<style lang="scss" scoped >
.v-app-menu {
}
</style>
