<template>
    <section class="v-app-profiles child-remove-margin"
    >
      <h3 class="v-app-profiles__title">{{profilesData.title}}</h3>

      <div class="v-app-profiles__content">
        <template v-for="profileItem of profilesData?.profiles">
          <div class="v-app-profiles__content__coll">
            <div class="v-app-profiles__item child-remove-margin">
              <img class="v-app-profiles__item__cover"
                   :src="profileItem.image[0]"
                   alt="profiles image"
                   v-if="profileItem.image[0]"
              />
              <div class="v-app-profiles__item__cover"
                   v-else
              />
              <div class="v-app-profiles__item__bottom">
                <div class="v-app-profiles__item__name"
                >{{profileItem.name}}</div>
                <div class="v-app-profiles__item__description"
                >{{profileItem.description}}</div>
              </div>
            </div>
          </div>
        </template>
      </div>

    </section>
</template>





<script setup lang="ts">
import { defineProps } from 'vue'
import {IApiProfiles} from "~/composable/adminApi/apiDefinitions";

const props = defineProps<{
    profilesData?: IApiProfiles
}>()
</script>





<style lang="scss" scoped >
.v-app-profiles {
  box-sizing: border-box;
  width: 100%;
  padding: 2rem var(--app-gutter);
  border: solid var(--app-color-main) 2px;
  border-radius: 2rem;
}

.v-app-profiles__item__cover {
  display: block;
  background: #C4C4C4;
  width: 100%;
  aspect-ratio: 1/1;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
}

.v-app-profiles__content {
  display: flex;
  flex-wrap: wrap;
  gap: var(--app-gutter);
}

.v-app-profiles__content__coll {
  width: 100%;
  max-width: 20rem;
}

.v-app-profiles__item {
  background: var(--app-color-green-light);
  border-bottom-right-radius: 2rem;
  border-bottom-left-radius: 2rem;
}

.v-app-profiles__item__bottom {
  box-sizing: border-box;
  width: 100%;
  padding: 1rem var(--app-gutter);
}

.v-app-profiles__item__name {
  color: var(--app-color-main--dark);
    font-weight: 700;
}

.v-app-profiles__item__description {
  color: var(--app-color-main);
}
</style>
