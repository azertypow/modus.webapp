<template>
    <section class="v-app-profiles child-remove-margin"
    >
      <h3 v-if="profilesData" class="v-app-profiles__title">{{profilesData.title}}</h3>

      <div class="v-app-profiles__content">
        <template v-for="profileImageItem of profilesImagesData">
              <div class="v-app-profiles__content__coll">
                <div class="v-app-profiles__item child-remove-margin">
                  <a class="v-app-profiles__item__linkedin"
                     v-if="profileImageItem.content.link"
                     :href="profileImageItem.content.link"
                     target="_blank"
                  >
                    <svg height="72" viewBox="0 0 72 72" width="72" xmlns="http://www.w3.org/2000/svg">
                      <g fill="none" fill-rule="evenodd">
                        <path d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z"
                              style="fill: var(--app-color-main)"/>
                        <path d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"
                              fill="#FFF"/>
                      </g>
                    </svg>
                  </a>
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
  position: relative;
}

.v-app-profiles__item__linkedin {
  position: absolute;
  top: 1rem;
  right: 1rem;

  svg {
    height: 2em;
    width: auto;
    display: block;
  }
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
