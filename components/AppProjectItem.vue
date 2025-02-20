<template>
    <section class="v-app-project-item"
             @click="projectItemClicked"
    >
        <div class="v-app-project-item__header"
        >
            <img class="v-app-project-item__header__img"
                 alt="project cover"
                 :src="img_src"
            />
            <div class="v-app-project-item__header__date"
            >{{formatDateRange(date_start, date_end)}}</div>
        </div>

        <div class="v-app-project-item__body child-remove-margin"
        >
            <h4 class="v-app-project-item__title">{{title}}</h4>
            <div class="v-app-project-item__content child-remove-margin"
                 v-html="content"
            />
        </div>
        <div class="v-app-project-item__bottom">
            <div class="v-app-project-item__bottom__container">
                <div class="v-app-project-item__bottom__icon-box"
                     @click.stop="useRouter().push({ query: {'q': projectType} })"
                >
                    <img class="v-app-project-item__bottom__icon-box__img"
                         v-if="iconUrl"
                         alt="project icon"
                         :src="`/project_type_icons/${iconUrl}`"
                    />
                    <h4 class="v-app-project-item__header__type"
                        v-if="projectType"
                    >{{ apiProjectMap[projectType] }}</h4>
                </div>
            </div>
            <div class="v-app-project-item__bottom__container" >
                <div class="v-app-project-item__status-button"
                     style="
                            font-weight: 600;
                            font-size: .75rem;
                            border: solid 2px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            gap: .5rem;
                            border-radius: 2rem;
                            padding: .015rem .5rem .025rem;
                            min-width: 3rem;
                            text-align: center;
                          "
                     v-if="status"
                >{{status}}</div>
                <div class="v-app-project-item__bottom__container">
                    <nuxt-link class="app-button app-button--small"
                               :href="`/project/${slug}`"
                    >Découvrir</nuxt-link>
                </div>
            </div>
        </div>
    </section>
</template>





<script setup lang="ts">
import {ComputedRef, defineProps} from 'vue'
import {ApiProjectMap, apiProjectMap, ApiProjectType, imageUrlMap} from "~/composable/adminApi/apiDefinitions";
import {formatDateRange} from "~/utils/formatDateRange";

const props = defineProps<{
    projectType?: ApiProjectType
    title?: string
    content?: string
    img_src?: string
    slug?: string
    date_start: string,
    is_project_with_duration?: "true" | "false",
    date_end?: string,
}>()

const iconUrl: ComputedRef<string | null> = computed(() => props.projectType ? imageUrlMap[props.projectType] : null )

const status: ComputedRef<null | 'En cours' | 'Terminé'> = computed(() => {
    if(props.is_project_with_duration === 'false') return null

    if( props.date_end === undefined ) return 'En cours'

    return new Date(props.date_end).getTime() < new Date().getTime() ? 'Terminé' : 'En cours'
})

const statusColor: ComputedRef<'var(--app-color-orange)' | 'var(--app-color-main--dark)'> = computed(() => {
    return status.value === 'En cours' ? 'var(--app-color-orange)' : 'var(--app-color-main--dark)'
})

function projectItemClicked() {
    useRouter().push(`/project/${props.slug}`)
}

</script>





<style lang="scss" scoped >
.v-app-project-item {
    background: var(--app-color-green-light);
    box-sizing: border-box;
    width: 100%;
    padding-bottom: 2rem;
    border-radius: 2rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    position: relative;
    overflow: hidden;
    height: 100%;
    cursor: pointer;

    @media (max-width: 900px) {
        border-top-right-radius: 0;
        border-top-left-radius: 0;
    }
}

.v-app-project-item__status-button {
  color: white;
  background-color: v-bind(statusColor);
  border-color: v-bind(statusColor) !important;
}

.v-app-project-item__content {
    color: var(--app-color-main);
    font-weight: 600;
}

.v-app-project-item__header {
    box-sizing: border-box;
    top: 0;
    left: 0;
    position: relative;
    width: 100%;
}

.v-app-project-item__header__date {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: var(--app-color-main);
  border-radius: 1rem;
  color: white;
  padding: .25rem 1rem;
  font-size: .75rem;

}

.v-app-project-item__header__img {
    display: block;
    width: 100%;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    background-color: #D3DABF;
    object-fit: cover;
    aspect-ratio: 7/5;

    @media (max-width: 900px) {
    }
}

.v-app-project-item__bottom__icon-box {
    display: flex;
    gap: var(--app-gutter);
    box-sizing: border-box;
    align-items: center;
    border: solid 2px var(--app-color-main);
    border-radius: var(--app-radius-reg);
    padding: .5rem 1rem;
    user-select: none;
    cursor: pointer;
}

.v-app-project-item__bottom__icon-box__img {
    display: block;
    height: 2rem;
}

.v-app-project-item__header__type {
    margin: 0;
    font-size: .75rem;
    color: var(--app-color-main);
}

.v-app-project-item__body {
    box-sizing: border-box;
    padding: 3rem var(--app-gutter);
    width: 100%;

    @media (max-width: 700px) {
        padding-bottom: var(--app-gutter);
    }
}

.v-app-project-item__bottom {
    padding-left: var(--app-gutter);
    padding-right: var(--app-gutter);
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @media (max-width: 700px) {
        flex-direction: column;
        align-items: flex-end;
        gap: var(--app-gutter);
    }
}

.v-app-project-item__bottom__container {
  display: flex;
  gap: .5rem;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 700px) {
    flex-direction: row;
    align-items: flex-start;
  }
}



</style>
