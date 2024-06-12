<template>
    <div
        class="v-app-video"
        :class="{
            'show-video': showVideo
        }"
    >
        <iframe
                ref="vimeoIframe"
                width="640"
                height="360"
                :src="`https://player.vimeo.com/video/${vimeoId}?h=2af64ba800`"
                frameborder="0"
                allowfullscreen
                title="vimeo-player"
                allow="autoplay"
        />
        <div
            class="v-app-video__cache"
            v-if='!showVideo'
            @click="showVideoUiClicked"
        >
            <img
                class="v-app-video__cache__img"
                src="../assets/play_circle_FILL0_wght400_GRAD0_opsz24.svg"
                alt="icon pour lancer la lecture d'une video YouTube"
            >
        </div>
    </div>
</template>





<script lang="ts" setup>
import {declareExportAllDeclaration} from "@babel/types";
import Player from "@vimeo/player";
import {Ref, UnwrapRef} from "vue";
import {cookieIsValidate} from "~/composable/main";

const props = defineProps<{
    vimeoId: string,
}>()

const vimeoIframe: Ref<UnwrapRef<null | HTMLIFrameElement>> = ref(null)

const showVideo = ref(false)

let player: Player | null = null

onMounted(() => {
    nextTick(() => {
        if(vimeoIframe.value) {
            player = new Player(vimeoIframe.value)
        }
    })
})

function showVideoUiClicked() {
    showVideo.value = true
    if( player ) player.play()
}

</script>





<style lang="scss" scoped >
.v-app-video {
    position: relative;
    background: transparent;
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
</style>
