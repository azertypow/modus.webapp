<template>
    <nav class="v-app-nav">
        <a
            class="v-app-nav__item"
            v-for="section of pageSections"
            :href="section.anchor"
        >
            {{ section.name }}
        </a>
        <div
            class="v-app-nav__item"
        >burger</div>
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
    background: white;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
    height: var(--app-nav__height);
}

.v-app-nav__item {
    text-decoration: none;
    color: var(--app-color-main--dark);
}

</style>
