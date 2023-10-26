<template>
    <section class="v-app" >

        <div class="v-app__nav" >
            <app-nav/>
        </div>

        <div class="v-app__content" >

        </div>
        <nuxt-page/>
    </section>
</template>





<script lang="ts" setup>

</script>





<style lang="scss" scoped >
.v-app {
    padding-top: 100vh;
}

.v-app__nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
}

</style>
