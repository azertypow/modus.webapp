<template>
    <main
        class="v-index"
    >
        <div
            class="v-index__header"
        >
            <app-header/>
        </div>

        <div
            class="v-index__content app-show-background-on-nav"
        >
            <section
                class="v-index__section"
            >
                <div
                    class="v-index__grid__coll-full"
                >

                    <div
                        class="v-index__section__video_player"
                    >
                        <app-video link="hello"/>
                        <div class="v-index__section__video_player__title">Titre pour la première vidéo</div>
                    </div>
                    <div
                        class="v-index__section__video_player"
                    >
                        <app-video link="hello"/>
                        <div class="v-index__section__video_player__title">Titre pour la seconde vidéo, exemple avec quelque chose de plus long</div>
                    </div>
                </div>
            </section>
            <section
                class="v-index__section"
            >
                <div
                    class="v-index__grid__coll-full"
                >
                    <p>
                        Le 21e siècle sera marqué par le défi imposé par le changement clima- tique. En Suisse, le secteur des
                        transports représente aujourd’hui 31% des émissions contre 24% dans le monde. La mobilité constitue donc 30%
                        du problème mais également 30% de la solution. La Fondation Modus a pour vocation de participer à relever le
                        défi de la décarbo- nation en soutenant les acteurs de Genève pour atteindre l’objectif 0 carbone à
                        l’horizon 2050.
                    </p>
                    <p>
                        La Fondation Modus prend le parti d’agir à l’échelle locale en se po- sitionnant comme un accélérateur du
                        changement et un soutien aux acteurs déjà en place. Ce soutien se matérialise à travers des interven- tions
                        concrètes sur le territoire et auprès des habitant.e.s du Canton de Genève.
                    </p>
                </div>
            </section>

            <section
                class="v-index__section"
            >
                <div
                    class="v-index__section__content v-index__grid v-index__grid--wrap v-index__grid--with-gutter"
                >
                    <img
                        alt="schema"
                        src="../assets/231023_schema_1-modus.jpg"
                    >
                </div>

                <div
                    class="v-index__section__content v-index__grid v-index__grid--wrap v-index__grid--with-gutter"
                >
                    <img
                        alt="schema"
                        src="../assets/231023_schema_2-modus.jpg"
                    >
                </div>
            </section>

            <section
                class="v-index__section"
            >
                <div
                    class="v-index__section__title"
                >
                    <h2>Objectifs</h2>
                </div>

                <div
                    class="v-index__section__content v-index__section__content--sticky v-index__grid v-index__grid--with-gutter"
                >
                    <div
                        class="v-index__grid__coll-1-2"
                    >
                        <ul>
                            <li>Soutenir les acteurs de la mobilité dans leurs projets ;</li>
                            <li>Stimuler les interconnaissances entre les acteurs ;</li>
                            <li>Mettre à disposition des approches, des idées et des connaissances nouvelles ;</li>
                            <li>Proposer de nouveaux imaginaires et valeurs sociales de la mobilité ;</li>
                            <li>Documenter et disséminer le changement</li>
                        </ul>
                    </div>
                    <div
                        class="v-index__grid__coll-1-2"
                    >
                        <div
                            class="v-index__section__content--sticky__element-sticky"
                        >
<!--
                                src="/attachments/120.jpg"
                                src="/attachments/6.jpg"
-->
                            <img
                                src="/attachments/116.jpg"
                                alt="image de ville abstraite"
                            />
                        </div>
                    </div>
                </div>

            </section>

            <section
                class="v-index__section"
            >
                <div
                    class="v-index__section__title"
                >
                    <h2>Le collectif</h2>
                </div>

                <div
                    class="v-index__section__content v-index__grid v-index__grid--wrap v-index__grid--with-gutter"
                >
                    <div
                        class="v-index__grid__coll-1-4"
                    >
                        <h3>
                            L'équipe
                        </h3>
                        <app-image
                            src="photos-profiles/01.png"
                            name="Dr. Guillaume Drevon"
                            status="Secrétaire Général"
                        />
                    </div>
                    <div
                        class="v-index__grid__coll-3-4"
                    >
                        <h3>
                            Le conseil scientifique
                        </h3>
                        <div class="v-index__section__content v-index__grid v-index__grid--wrap v-index__grid--with-gutter" >
                            <div
                                class="v-index__grid__coll-1-3"
                            >
                                <app-image
                                    src="photos-profiles/02.png"
                                    name="Prof. Yves Delacrétaz"
                                    status="Expert scientifique"
                                />
                            </div>
                            <div
                                class="v-index__grid__coll-1-3"
                            >
                                <app-image
                                    src="photos-profiles/03.png"
                                    name="Prof. Vincent Kaufmann"
                                    status="Expert scientifique"
                                />
                            </div>
                            <div
                                class="v-index__grid__coll-1-3"
                            >
                                <app-image
                                    src="photos-profiles/04.png"
                                    name="Jenny Leuba"
                                    status="Expert scientifique"
                                />
                            </div>
                            <div
                                class="v-index__grid__coll-1-3"
                            >
                                <app-image
                                    name="Emmanuel Ravalet"
                                    status="Expert scientifique"
                                />
                            </div>
                            <div
                                class="v-index__grid__coll-1-3"
                            >
                                <app-image
                                    src="photos-profiles/05.png"
                                    name="Lisa Moussaoui"
                                    status="Experte scientifique"
                                />
                            </div>
                            <div
                                class="v-index__grid__coll-1-3"
                            >
                                <app-image
                                    src="photos-profiles/06.png"
                                    name="Jean Simos"
                                    status="Experte scientifique"
                                />
                            </div>
                        </div>
                    </div>


                    <div
                        class="v-index__grid__coll-full"
                    >
                        <h3>
                            Le conseil scientifique
                        </h3>
                        <div class="v-index__section__content v-index__grid v-index__grid--wrap v-index__grid--with-gutter" >

                        </div>
                    </div>

                </div>

            </section>
        </div>

        <footer class="v-index__footer">
            <app-newsletter/>
            <img
                    src="/attachments/166.jpg"
                class="v-index__bottom-image"
                alt="image d'architecture urbaine"
            />
        </footer>


        <div
            class="v-index__bottom"
        >
            <img
                alt="logo Modus fin de page"
                src="../assets/logo/logo_with_image.svg"
            />
        </div>

    </main>
</template>





<script lang="ts" setup>

import AppVideo from "~/components/AppVideo.vue";
import {arrayOfH2TitleIdInCurrentPage} from "~/composable/main";

const h2TitleIdInCurrentPage = arrayOfH2TitleIdInCurrentPage()

onMounted(() => {
    nextTick(() => {
        h2TitleIdInCurrentPage.value =
            Array.from(document.querySelectorAll('.v-index__section__title h2') )
                .map( (htmlHeadingElement) => {


                    if ( ! htmlHeadingElement.id)
                        htmlHeadingElement.id = encodeURIComponent( htmlHeadingElement.textContent || 'generateID' )

                    return {
                        anchor: htmlHeadingElement.id,
                        name: (htmlHeadingElement as HTMLElement).innerText,
                    }
                })
    })
})

</script>





<style lang="scss" scoped >
.v-index {
}

.v-index__section {
    box-sizing: border-box;
    padding-left: var(--app-gutter);
    padding-right: var(--app-gutter);
    max-width: 1300px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 2rem;
    padding-bottom: 2rem;
}

.v-index__section__video_player {
    max-width: 25rem;
    margin: auto;
    padding-top: 2rem;
}

.v-index__section__content {
    position: relative;

    > img {
        display: block;
        width: 100%;
    }

    .v-index__section__content--sticky__element-sticky {
        position: sticky;
        top: 0;

        > img {
            display: block;
            //width: 50vw;
            height: 50vw;
            transform-origin: top left;
            transform: translate(0, 75%) rotate(-90deg);
        }
    }
}


.v-index__section__title {
    display: flex;
    flex-direction: column;
    align-items: center;
    > * {
        margin-top: 0;
        margin-bottom: 2rem;
    }
}

.v-index__grid {
    display: flex;
    flex-wrap: nowrap;

    &.v-index__grid--with-gutter {
        gap: var(--app-gutter);
    }

    &.v-index__grid--wrap {
        flex-wrap: wrap;
    }

    &.v-index__grid--centred {
        justify-content: center;
    }
}

[class*="v-index__grid__coll"] {
    > *:first-child {
        margin-top: 0 !important;
    }
    > *:last-child {
        margin-top: 0 !important;
    }
}

.v-index__grid__coll-full {
    width: 100%;
}

.v-index__grid__coll-1-2 {
    width: 50%;

    .v-index__grid--with-gutter & {
        width: calc( ( (100% + var(--app-gutter) ) / 2) - var( --app-gutter ) );
    }

    @media (max-width: 900px) {
        width: 75%;

        .v-index__grid--with-gutter & {
            width: calc( ( (100% + var(--app-gutter) ) / 3) - var( --app-gutter ) );
        }
    }

    @media (max-width: 700px) {
        width: 100%;

        .v-index__grid--with-gutter & {
            width: 100%;
        }
    }
}

.v-index__grid__coll-1-4 {
    width: 25%;

    .v-index__grid--with-gutter & {
        width: calc( ( (100% + var(--app-gutter) ) / 4) - var( --app-gutter ) );
    }

    @media (max-width: 1200px) {
        width: calc(100% / 3);

        .v-index__grid--with-gutter & {
            width: calc( ( (100% + var(--app-gutter) ) / 3) - var( --app-gutter ) );
        }
    }

    @media (max-width: 900px) {
        width: 50%;

        .v-index__grid--with-gutter & {
            width: calc( ( (100% + var(--app-gutter) ) / 2) - var( --app-gutter ) );
        }
    }

    @media (max-width: 700px) {
        width: 100%;

        .v-index__grid--with-gutter & {
            width: 100%;
        }
    }
}

.v-index__grid__coll-1-3 {
    width: calc(100% / 3);

    .v-index__grid--with-gutter & {
        width: calc( ( (100% + var(--app-gutter) ) / 3) - var( --app-gutter ) );
    }

    @media (max-width: 900px) {
        width: 50%;

        .v-index__grid--with-gutter & {
            width: calc( ( (100% + var(--app-gutter) ) / 2) - var( --app-gutter ) );
        }
    }


    @media (max-width: 700px) {
        width: 100%;

        .v-index__grid--with-gutter & {
            width: 100%;
        }
    }
}

.v-index__grid__coll-3-4 {
    width: 75%;

    .v-index__grid--with-gutter & {
        width: calc( ( (100% + var(--app-gutter) ) / 4 * 3) - var( --app-gutter ) );
    }

    @media (max-width: 1200px) {
        width: 100%;

        .v-index__grid--with-gutter & {
            width: 100%;
        }
    }
}

.v-index__header {
    background: white;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    position: fixed;
}

.v-index__content {
    background: var(--app-color-grey);
    position: relative;
    z-index: 10;
    width: 100%;
}

.v-index__footer {
    background: white;
    position: relative;
    z-index: 10;
}

.v-index__bottom-image {
    display: block;
    width: 100%;
    height: 100vh;
    position: relative;
    z-index: 10;
    object-fit: cover;
}


.v-index__bottom {
    position: sticky;
    bottom: 0;
    z-index: 1;
    background: white;

    > img {
        padding-top: 2rem;
        padding-bottom: 2rem;
        width: 100%;
        height: auto;
        display: block;
    }
}
</style>
