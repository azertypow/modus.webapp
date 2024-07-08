<template>
    <section class="v-app-list-points"
    >
      <app-citation
              :text="title"
      />
      <div class="v-app-list-points__content"
      >
        <div v-html="content" />
      </div>
    </section>
</template>





<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
    title: string
    content: string
}>()
</script>





<style lang="scss" >
.v-app-list-points__content {
  --v-app-list-points__content--font-size: 3vw;

  font-size: clamp(1.5rem, var(--v-app-list-points__content--font-size), 2rem);

  @media (max-width: 900px) {
    --v-app-list-points__content--font-size: 5vw;
  }
}
</style>
