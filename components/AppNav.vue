<template>
    <nav class="v-app-nav">
        <img
            class="v-app-nav__logo"
            src="../assets/logo/Logo_Modus_blanc_sd-20230913.svg"
            alt="logo"
        />


        <div
            class="v-app-nav__links font-small"
        >
            <a
                class="v-app-nav__links__item"
                v-for="section of pageSections"
                :href="section.anchor"
            >
                {{ section.name }}
            </a>
            <div
                class="v-app-nav__links__item"
            >
                <div
                    class="v-app-nav__burger"
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>

    </nav>
</template>





<script lang="ts" setup>

const pageSections = [
    {name: "Missions"          , anchor: '#'},
    {name: "Objectifs"         , anchor: '#'},
    {name: "Le collectif"      , anchor: '#'},
    {name: "Travaux en cours"  , anchor: '#'},
    {name: "Proposer un projet", anchor: '#'},
]

</script>





<style lang="scss" scoped >
.v-app-nav {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    height: var(--app-nav__height);
    box-sizing: border-box;
    padding: var(--app-gutter);
}



.v-app-nav__logo {
    height: calc( var(--app-nav__height) - ( var(--app-gutter) * 2 ) );
}

.v-app-nav__links {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.v-app-nav__links__item {
    text-decoration: none;
    color: white;
}

.v-app-nav__burger {
    --burger-icon-width: 2rem;
    --burger-icon-height: 1rem;

    cursor: pointer;
    height: var(--burger-icon-height);
    display: flex;
    flex-direction: column;
    justify-content: space-between;


    > * {
        background: white;
        width: var(--burger-icon-width);
        height: 3px;
    }
}

</style>
