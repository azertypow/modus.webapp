<template>
    <section class="v-app-newsletter child-remove-margin" >
        <h2
            class="v-app-newsletter__title"
        >Pour recevoir plus d’information sur modus</h2>

        <form>
            <input
                class="v-app-newsletter__input"
                type="email"
                placeholder="@"
            />
            <button>Envoyer</button>
        </form>
    </section>
</template>





<script lang="ts" setup>
// defineProps<{
// }>()

</script>





<style lang="scss" scoped >
.v-app-newsletter {
    background: linear-gradient(to right, var(--app-color-main), var(--app-color-main--dark));
    padding: 5rem var(--app-gutter);
}

.v-app-newsletter__title {
    color: white;
    background: transparent !important;
    text-align: left;
    padding: 0;
}

form {
    display: flex;
    gap: var(--app-gutter);
}

input[type='email'] {
    all: unset;
    font-family: inherit;
    background: white;
    height: 5rem;
    border-radius: 3rem;
    padding: 0 2rem;
    width: 100%;
    font-style: italic;

    &::placeholder {
        color: black;
        font-style: italic;
    }
}

button {
    background: linear-gradient(to right, var(--app-color-main), var(--app-color-main--dark));
    border: none;
    color: white;
}

</style>
