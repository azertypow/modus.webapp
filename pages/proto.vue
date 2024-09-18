<template>
    <section class="v-proto"
    >
      <div
              class="v-proto__header"
      >
        <h1>Titre de la page</h1>
      </div>

      <div class="v-proto__content app-show-background-on-nav"
      >
        <div class="v-proto__content__grid">
          <div class="v-proto__section v-proto__section--full"
          >
            <app-text-content
                    variant="regular"
                    text="
                    <h2>Consectetur adipisicing elit.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet, beatae cumque debitis deserunt dolorem ex explicabo ipsa laudantium molestias numquam perspiciatis placeat possimus quo reiciendis repellat rerum, sit temporibus?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet animi assumenda deleniti ducimus ipsam maxime non, nulla porro quam ratione. Ducimus explicabo laborum necessitatibus neque non quod reprehenderit sapiente ullam.</p>
                  "
            />
          </div>
        </div>
      </div>
      <div class="v-proto__embed"
      >
        <iframe src="https://app.powerbi.com/view?r=eyJrIjoiYWQ1YmEwYzQtODJlMS00OTRiLWFiZDctZmU0OTc1NGM3NWE0IiwidCI6IjU1NjY4Nzc3LTYwZTYtNDlkZC1iODY1LTYyZjg0YjZlNGRkYiJ9"
                class="v-proto__embed__iframe"
        ></iframe>
      </div>
    </section>
</template>





<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
    message?: string
}>()
</script>





<style lang="scss" scoped >
.v-proto__header {
  background: white;
  padding: var(--app-nav__height) var(--app-gutter);

  *:first-child {
    margin-top: 0;
  }

  *:last-child {
    margin-bottom: 0;
  }
}

.v-proto__content {
  background: var(--app-color-grey);
  position: relative;
  z-index: 10;
  width: 100%;

  @media (max-width: 900px) {
    box-shadow: 0 -5px 5px 0 var(--app-color-grey);
  }
}

.v-proto__content__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  box-sizing: border-box;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  gap: 2rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: var(--app-gutter);
  padding-right: var(--app-gutter);
}

.v-proto__section {
  box-sizing: border-box;
  max-width: 1300px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  width: 100%;

  @media (max-width: 900px) {
    grid-column: span 2;
  }

  &.v-proto__section--full {
    grid-column: span 2;
  }

  &.v-proto__section--no-padding {
    padding-top: 0;
    padding-bottom: 0;
  }

  &.v-proto__section--no-margin {
    padding-left: 0;
    padding-right: 0;
  }

  &.v-proto__section--intro {
    box-sizing: content-box;
    position: relative;

    p:nth-child(1n + 1) {
      color: var(--app-color-main);
    }

    p:nth-child(2n + 1) {
      color: var(--app-color-main--dark);
    }
  }

  .v-proto__section__graphic-items {
    position: absolute;

    @media (max-width: 900px) {
      display: none;
    }
  }

  .v-proto__section__graphic-items--m {
    top: 0;
    left: 0;
    transform: translate(-100%, 0%);
    height: 16vw;
    max-height: 298px;
  }

  .v-proto__section__graphic-items--o {
    bottom: 0;
    left: 0;
    transform: translate(-100%, 0%);
    height: 8vw;
    max-height: 148px;
  }

  .v-proto__section__graphic-items--du {
    top: 0;
    right: 0;
    transform: translate(90%, -10%);
    height: 20vw;
    max-height: 372px;
  }

  .v-proto__section__graphic-items--s {
    bottom: 0;
    right: 0;
    transform: translate(100%, 0%);
    height: 12vw;
    max-height: 224px;
  }
}

.v-proto__embed {
  display: block;
  width: calc(100% / 12 * 8);
  margin-left: auto;
  margin-right: auto;
  height: calc( 100vh / 5 * 4 );
  padding-top: 5rem;
  padding-bottom: calc(100vh / 5);
}

.v-proto__embed__iframe {
  display: block;
  width: 100%;
  height: 100%;
  border: solid 1px var(--app-color-main--dark);
  border-radius: .5rem;
  box-shadow: 0 20px 10px -10px rgba(1, 152, 59, .25);
}
</style>
