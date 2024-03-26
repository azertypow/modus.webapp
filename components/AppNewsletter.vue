<template>
    <section class="v-app-newsletter child-remove-margin" >
        <h2
            class="v-app-newsletter__title"
        >Laissez vos coordonnées pour recevoir nos informations</h2
        >
        <form method="post"
              action="https://newsletter.infomaniak.com/external/submit"
              target="_blank"
        >
            <input type="email"
                   name="email"
                   style="display:none"
            />
            <input type="hidden"
                   name="key"
                   value="eyJpdiI6InNGaGhYV2owa1ltM3F4SXBZVCtucW9XSUlKc3lXcHJmQkljb0xTZHdcL1BjPSIsInZhbHVlIjoiQXVsaW9XUXZVMlFRa3dFUk1UMWVMYzFPRDhjeUN6eDVjRGkrWlM4RndZWT0iLCJtYWMiOiJiYWQ2OWYyYzVhYmI5MDQzN2FkNmUyYjZhNjAxNjc0M2ZjZDNlZDUyZTBiY2I0YmY0NTlkOWNiZmExOTdiNzg4In0="
            >
            <input type="hidden"
                   name="webform_id"
                   value="15587"
            >
            <input
                class="v-app-newsletter__input"
                name="inf[1]"
                data-inf-meta="1"
                type="email"
                placeholder="@"
                required="required"
                data-inf-error="Merci de renseigner une adresse email"
            />
            <button>Envoyer</button>
            <input class="app-button" type="submit" name="" value="Envoyer">
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

input[type='submit'] {
    background: linear-gradient(to right, var(--app-color-main), var(--app-color-main--dark));
    border: none;
    color: white;
    margin: auto;
    width: auto;

    @media (max-width: 900px) {
        display: block;
        width: auto;
    }
}

</style>
