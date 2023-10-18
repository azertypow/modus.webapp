<template>
    <section
        class="v-app-header"
    >
        <div
            class="v-app-header__signature"
        ><strong>modus.</strong> au service de la transition de la mobilité</div>
    </section>
</template>





<script lang="ts" setup>
defineProps<{
}>()

</script>





<style lang="scss" scoped >
.v-app-header {
    background: linear-gradient(to right, var(--app-color-main), var(--app-color-main--dark));
    width: 100%;
    height: calc(100vh - var(--app-nav__height));
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
}

.v-app-header__signature {
    height: var(--app-header__signature-height);
    background: white;
    display: flex;
    align-items: center;
}
</style>
