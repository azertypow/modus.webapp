<template>
    <div class="v-app-image" >
        <div
            class="v-app-image__image-container"
        >
            <img
                alt="portrait"
                class="v-app-image__img"
                v-if="src"
                :src="src"
            >
        </div>

        <span
            class="v-app-image__name"
        >{{name}}</span>
        <span
            class="v-app-image__status"
        >{{status}}</span>
    </div>
</template>





<script lang="ts" setup>
defineProps<{
    src?: string,
    name: string,
    status: string,
}>()

</script>





<style lang="scss" scoped >
.v-app-image {
}

.v-app-image__image-container {
    background: linear-gradient(to right, var(--app-color-main), var(--app-color-main--dark));
    padding-top: 125%;
}

.v-app-image__name {
    font-weight: 600;
    display: block;
    text-align: center;
}

.v-app-image__status {
    display: block;
    text-align: center;
}
</style>
