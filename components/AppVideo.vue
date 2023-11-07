<template>
    <div class="v-app-video" >
        <iframe
                width="720"
                height="405"
                :src="`https://www.youtube.com/embed/vhK6o26OV4Q?si=Cl6GSYXWJGR9EyDI${youtubeEmbedParams}`"
                frameborder="0"
                allowfullscreen
                v-if="youtubeEmbed"
                @load="playerLoaded"
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
defineProps<{
    link: string,
}>()

const youtubeEmbed = ref(false)

const youtubeEmbedParams = '?autoplay=1&enablejsapi=0&color=white&iv_load_policy=3'

function playerLoaded(e: Event) {
    const iframeElement = e.target

    if(! (iframeElement instanceof HTMLIFrameElement) ) return

    console.log( iframeElement )

    const iframeContent = iframeElement.contentDocument

    console.log( iframeContent?.readyState )

    if( ! iframeContent ) return

    console.log( iframeContent )

    const youtubePlayerButton = iframeContent.querySelector('#player')


    // if(! youtubePlayerButton) return
    //
    // const clickEvent = new MouseEvent('click', {
    //     bubbles: true,
    //     cancelable: true,
    //     view: window,
    // })
    //
    // console.log( youtubePlayerButton )
    //
    // youtubePlayerButton.dispatchEvent(clickEvent)

}

</script>





<style lang="scss" scoped >
.v-app-video {
    position: relative;
    background: linear-gradient(to right, var(--app-color-main), var(--app-color-main--dark));
    width: 100%;
    padding-top: 56.25%;
}

img {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20%;
    height: auto;
    cursor: pointer;
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
