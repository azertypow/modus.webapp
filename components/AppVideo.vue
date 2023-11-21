<template>
    <div
        class="v-app-video"
        :class="{
            'youtube-embed': youtubeEmbed
        }"
    >
        <iframe
                width="720"
                height="405"
                :src="`https://www.youtube.com/embed/F7WWwnNUOmI?si=8xTpxx30jTTE8jrZ${youtubeEmbedParams}`"
                frameborder="0"
                allowfullscreen
                v-if="youtubeEmbed"
        />
        <img
            v-else
            src="../assets/play_circle_FILL0_wght400_GRAD0_opsz24.svg"
            alt="icon pour lancer la lecture d'une video YouTube"
            @click="youtubeEmbed = true"
        >
    </div>
</template>





<script lang="ts" setup>
import {declareExportAllDeclaration} from "@babel/types";

const props = defineProps<{
    link: string,
}>()

const youtubeEmbed = ref(false)

const youtubeEmbedParams = '?autoplay=1&enablejsapi=0&color=white&iv_load_policy=3'

onMounted(() => {
    nextTick(() => {
        onYouTubeIframeAPIReady()
    })
})

declare const YT: any
let player
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: props.link, // Remplace VIDEO_ID par l'ID de ta vidéo YouTube
        playerVars: {
            autoplay: 0, // 1 pour démarrer automatiquement la vidéo
            controls: 1,
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
        },
        events: {
            'onReady': () => {console.log("youtube ready")},
        },
    })

    console.log(player)
}

</script>





<style lang="scss" scoped >
.v-app-video {
    position: relative;
    background: linear-gradient(to right, var(--app-color-main), var(--app-color-main--dark));
    width: 100%;
    padding-top: 56.25%;
    overflow: hidden;
    cursor: pointer;

    transition: border-radius 1s cubic-bezier(.42, 0, 0, 1);
    border-radius: 1rem;

    &.youtube-embed {
        background: transparent;
        border-radius: .25rem;
    }

    img {
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
