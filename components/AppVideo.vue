<template>
    <div
        class="v-app-video"
        id="media-anchor"
        :class="{
            'show-video': showVideo
        }"
    >
        <template v-if="cookieIsValidate().value" >

          <iframe width="560"
                  height="315"
                  :src="`https://www.youtube-nocookie.com/embed/${video_id}?si=SAxUi0YavSnxZa-b&amp;controls=0`"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
          ></iframe>
        </template>
        <div v-else
             class="v-app-video__cookie-msg"
        >
            <button @click="cookieIsValidate().value = true" style="max-width: none">Accepter les cookies</button>
        </div>
    </div>
</template>





<script lang="ts" setup>
import {declareExportAllDeclaration} from "@babel/types";
import Player from "@vimeo/player";
import {Ref, UnwrapRef} from "vue";
import {cookieIsValidate} from "~/composable/main";

const props = defineProps<{
    video_id: string,
    video_caption: string,
}>()

const vimeoIframe: Ref<UnwrapRef<null | HTMLIFrameElement>> = ref(null)

const showVideo = ref(false)

let player: Player | null = null

onMounted(() => {
    nextTick(() => {
        if(vimeoIframe.value) {
            vimeoIframe.value.src = ''
        }

        if(useRoute().query.target === 'media') navigateToMediaFile()
    })
})
</script>





<style lang="scss" scoped >
.v-app-video {
    position: relative;
    background: #DDDDDD;
    width: 100%;
    padding-top: 56.25%;
    overflow: hidden;
    transition: border-radius 1s cubic-bezier(.42, 0, 0, 1);
    border-radius: 1rem;

    &.show-video {
        background: transparent;
        border-radius: .25rem;
    }


    .v-app-video__cache {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
        background: linear-gradient(to right, var(--app-color-main), var(--app-color-main--dark));
        background-image: url(../assets/cache.jpeg);
        background-size: cover;
    }

    .v-app-video__cache__img {
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        width: 20%;
        height: auto;

        transition: transform 2s cubic-bezier(.42, 0, 0, 1);
        transform: translate(-50%, -50%);
    }

    &:hover {
        border-radius: .25rem;

        img {
            transform: translate(-50%, -50%) scale(1.25, 1.25);
        }
    }
}


iframe {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
}

.v-app-video__cookie-msg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: auto;
    box-sizing: border-box;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    button {
        //font-size: .5rem;
        //padding: .5em;
        //line-height: 1em;
    }
}
</style>
