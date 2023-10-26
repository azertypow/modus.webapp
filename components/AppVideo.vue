<template>
    <div class="v-app-video" >
        <img src="../assets/play_circle_FILL0_wght400_GRAD0_opsz24.svg"
             alt="icon pour lancer la lecture d'une video YouTube"
        >
    </div>
</template>





<script lang="ts" setup>
defineProps<{
    link: string,
}>()

</script>





<style lang="scss" scoped >
.v-app-video {
    position: relative;
    background: linear-gradient(to right, var(--app-color-main), var(--app-color-main--dark));
    width: 100%;
    padding-top: 50%;
}

img {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20%;
    height: auto;
}
</style>
