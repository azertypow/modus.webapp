<template>
    <section class="v-app-profiles child-remove-margin"
    >
      <h3 v-if="profilesData" class="v-app-profiles__title">{{profilesData.title}}</h3>

      <div class="v-app-profiles__content">
        <template v-for="profileImageItem of profilesImagesData">
              <div class="v-app-profiles__content__coll">
                <div class="v-app-profiles__item child-remove-margin">
                    <template v-if="profileImageItem.image.length > 0">
                        <template v-for="profileItem of profileImageItem.image">
                          <img class="v-app-profiles__item__cover"
                               :src="profileItem.resize.large"
                               alt="profiles image"
                          />
                        </template>
                    </template>
                      <div class="v-app-profiles__item__cover"
                           v-else
                      />
                  <div class="v-app-profiles__item__bottom">
                    <div class="v-app-profiles__item__name"
                    >{{profileImageItem.content.name}}</div>
                    <div class="v-app-profiles__item__description"
                    >{{profileImageItem.content.description}}</div>
                    <div style="display: flex; justify-content: center; margin-top: .5rem">
                      <a class="app-button app-button--small"
                         v-if="profileImageItem.content.link"
                         :href="profileImageItem.content.link"
                         target="_blank"
                      >LinkedIn</a>
                    </div>
                  </div>
                </div>
              </div>
        </template>
      </div>

    </section>
</template>





<script setup lang="ts">
import { defineProps } from 'vue'
import {IApiProfiles, IApiProfilesImages} from "~/composable/adminApi/apiDefinitions";

const props = defineProps<{
    profilesData?: IApiProfiles
    profilesImagesData?: IApiProfilesImages[]
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

.v-app-profiles__title {
    text-align: left;
    color: var(--app-color-main--dark);
}

.v-app-profiles__item__cover {
  display: block;
  background: #C4C4C4;
  width: 100%;
  aspect-ratio: 2/3;
  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
    object-fit: cover;
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
