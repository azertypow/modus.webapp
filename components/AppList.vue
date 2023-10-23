<template>
    <section class="v-app-list" >
        <div class="v-app-list__icon" ></div>
        <div
            class="v-app-list__content"
        >
            <h3
                class="v-app-list__content__title"
            >{{title}}</h3>
            <p
                class="v-app-list__content__desc"
            >{{description}}</p>
        </div>

    </section>
</template>





<script lang="ts" setup>
defineProps<{
    title: string,
    description: string,
}>()

</script>





<style lang="scss" scoped >
.v-app-list {
    --bullet-size: 1rem;
    display: flex;
    align-items: flex-start;
    padding-top: .5rem;
    padding-bottom: .5rem;
    gap: .5rem;
}

.v-app-list__icon {
    content: '';
    display: block;
    border-radius: var(--bullet-size);
    width: var(--bullet-size);
    height: var(--bullet-size);
    background: linear-gradient(to right, var(--app-color-main), var(--app-color-main--dark));
}

.v-app-list__content {
    > * {
        margin: 0;
    }
}

.v-app-list__content__title {
    text-transform: uppercase;
}

.v-app-list__content__desc {

}



p {
    color: var(--app-color-main);
}
</style>
