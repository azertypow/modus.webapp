<template>
    <section
        class="v-citation"
    >
      <h2 class="v-citation__text">
        {{text}}
      </h2>
    </section>
</template>





<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
    text: string
}>()
</script>





<style lang="scss" scoped >
.v-citation {
  width: 100%;
  display: flex;
  justify-content: center;
}

.v-citation__text {
  padding: 4rem 3rem 4rem;
    width: 100%;
  border-radius: var(--app-radius-small) var(--app-radius-reg) var(--app-radius-reg) var(--app-radius-large);
}
</style>
