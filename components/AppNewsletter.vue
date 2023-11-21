<template>
    <section class="v-app-newsletter child-remove-margin" >
        <h2
            class="v-app-newsletter__title"
        >Rejoignez-nous<br>et proposez-nous vos&nbsp;projets</h2
        >

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
    padding: 2rem var(--app-gutter) 3rem;

    .v-app-newsletter__input {
        font-size: 1.5rem;
        line-height: 1.5rem;

        @media (max-width: 900px) {
            font-size: 1rem;
            line-height: 1rem;
        }
    }
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

    @media (max-width: 900px) {
        flex-direction: column;
        align-items: center;
    }
}

input[type='email'] {
    all: unset;
    font-family: inherit;
    background: white;
    height: 3rem;
    border-radius: 3rem;
    padding: 0 2rem;
    width: 100%;
    font-style: italic;
    box-sizing: border-box;

    &::placeholder {
        color: black;
        font-style: italic;
    }

    @media (max-width: 900px) {
        height: 2.5rem;
        padding: 0 1rem;
        width: 100%;
    }
}

button {
    background: linear-gradient(to right, var(--app-color-main), var(--app-color-main--dark));
    border: none;
    color: white;

    @media (max-width: 900px) {
        display: block;
        width: auto;
    }
}

</style>
