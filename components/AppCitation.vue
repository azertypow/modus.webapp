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
  padding-top: 4rem;
  padding-bottom: 4rem;
  border-radius: var(--app-radius-small) var(--app-radius-reg) var(--app-radius-reg) var(--app-radius-large);
}
</style>
