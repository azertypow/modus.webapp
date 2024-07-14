<template>
    <section
        class="v-les-outils-modus"
    >
        <app-page
            :header-cover="headerCover"
            :header-text="headerText"
            :body-content="bodyContent"
        />

        <div class="v-les-outils-modus__bottom_content"
             id="content"
        >
            <div class="v-les-outils-modus__bottom_content__flex">
                <div class="v-les-outils-modus__bottom_content__section">
                    <app-project-theme
                        :img-src="null"
                        project-type="plateforme"
                        title="Un pôle à disposition de tout l’écosystème"
                        content="
                                <p>La Plateforme doit devenir, d’ici cinq ans, le pivot des interactions de tous les acteurs genevois des mobilités (privés, publics, académiques et associatifs).</p>
                                <p>Cette position stratégique facilitera la collaboration et le partage de ressources, mais permettra d’inclure d'autres intervenants régionaux, voire internationaux. Cela passera par l'organisation d'événements variés, des mises en relation utiles, le soutien d’initiatives stimulant la coopération et l’innovation ainsi que la fourniture d'outils et de moyens adaptés à leurs besoins.</p>
                                <p>Modus aspire à servir et à réunir efficacement l’ensemble de l’écosystème pour contribuer à une mobilité plus intégrée et plus durable à Genève.</p>
                                "
                    />
                </div>
                <div class="v-les-outils-modus__bottom_content__section">
                    <app-project-theme
                        :img-src="null"
                        project-type="laboratoire"
                        title="Un centre d’innovation pour les autorités et les partenaires"
                        content="
                                <p>Le Laboratoire expérimente de nouvelles approches pour encourager la transition vers des comportements de mobilité plus durable. Nous nous concentrons sur la compréhension approfondie des demandes et des besoins ainsi que sur l'acceptation de nouveaux services.</p>
                                <p>Pour y parvenir, nous en testons une grande variété ainsi que des pratiques centrées sur l'utilisateur, comme les systèmes de récompenses. Ces initiatives visent à créer des connaissances précieuses qui, une fois évaluées, sont mises à la disposition des pouvoirs publics et des partenaires locaux.</p>
                                <p>Le Laboratoire s'engage à produire du savoir et à le diffuser largement, garantissant que toutes les parties prenantes en bénéficient et contribuent à une mobilité plus efficace et plus respectueuse de l'environnement à Genève.</p>
                                "
                    />
                </div>
                <div class="v-les-outils-modus__bottom_content__section">
                    <app-project-theme
                        :img-src="null"
                        project-type="bibliotheque"
                        title="Un fonds de connaissance sur les mobilités"
                        content="
                                <p>La Bibliothèque une source de connaissance essentielle sur les mobilités à Genève. Sa mission est de réunir, conserver et produire des informations pertinentes sur les mobilités et de les rendre accessibles à l'ensemble de l'écosystème socio-économique de la région, soit les acteurs publics, les associations, les citoyens et les ONG.</p>
                                <p>Plusieurs actions concrètes sont prévues comme les archives en ligne de rapports et de publications, le développement d’un site d'information centralisant les données et les études sur les mobilités en collaboration avec le SITG, la structuration de datas issues d'enquêtes de mobilité et enfin la publication régulière d’analyses détaillées sur les solutions innovantes identifiées.</p>
                                <p>En somme, La Bibliothèque compile les connaissances passées, présentes et futures sur les mobilités pour les mettre à disposition des acteurs concernés afin d’éclairer leurs décisions et engagements en matière de mobilité urbaine.</p>
                                "
                    />
                </div>
                <div class="v-les-outils-modus__bottom_content__section">
                    <app-project-theme
                        :img-src="null"
                        project-type="imaginaires"
                        title="Un vecteur de transformation des représentations"
                        content="
                                <p>La Fabrique des imaginaires doit révolutionner la perception et la valorisation des mobilités. Son objectif est de devenir un moteur de communication essentiel pour changer les représentations et les valeurs sociales liées aux mobilités, tout en proposant des alternatives pour modifier en profondeur les comportements.</p>
                                <p>La mise en œuvre d’une stratégie de diffusion étendue qui s'adresse à la fois aux experts et au grand public, la production de contenus originaux et percutants qui visent à enrichir les connaissances, à élargir les perspectives et à renforcer les compétences des individus sur les enjeux de la mobilité moderne vont permettre d’atteindre ces buts.</p>
                                <p>En favorisant un changement de perception et en frappant les imaginations, La Fabrique des imaginaires encourage tout le monde à adopter de nouvelles valeurs de mobilité plus adaptées aux défis contemporains.</p>
                                "
                    />
                </div>
                <div class="v-les-outils-modus__bottom_content__section">
                    <app-project-theme
                        :img-src="null"
                        project-type="plantation"
                        title="Un incubateur d’entreprises de mobilités innovantes"
                        content="
                                <p>La Plantation se positionne comme un catalyseur pour les entreprises innovantes de la mobilité. Elle sera un incubateur et un accélérateur du développement d'entreprises qui participent à la transition vers de nouvelles formes de mobilité en les soutenant financièrement et en accompagnant leur croissance. L’accès à des ressources essentielles, à des réseaux d'experts et à des occasions de collaboration qui leur permettent de créer des solutions novatrices et durables fera partie des prestations fournies. Elle jouera un rôle de premier plan dans la transformation des mobilités et dans leur promotion.</p>
                                <p>Le principe directeur de La Plantation est de stimuler l'entrepreneuriat dans les nouveaux services de mobilité</p>
                                "
                    />
                </div>

            </div>
        </div>


        <app-page-footer/>
    </section>
</template>





<script setup lang="ts">
import {defineProps, Ref, UnwrapRef} from 'vue'
import AppPage from "~/components/AppPage.vue";
import {IApiBody} from "~/composable/adminApi/apiDefinitions";
import {ApiFetchPage} from "~/composable/adminApi/apiFetch";

// const props = defineProps<{
//     message?: string
// }>()


useHead({
    title: 'les dispositifs modus',
    meta: [
        {
            name: 'description',
            content: 'modus. pour une mobilité durable à Genève',
        }
    ],
})

const headerCover: Ref<UnwrapRef<undefined | string>> = ref(undefined)
const headerText: Ref<UnwrapRef<undefined | string>> = ref(undefined)

const bodyContent: Ref<UnwrapRef<undefined | IApiBody>> = ref(undefined)

onMounted(async () => {
    const pageData = await ApiFetchPage('dispositifs')

    headerCover.value = pageData.options.headerImage?.resize.large
    headerText.value = pageData.options.headerTitle

    bodyContent.value = pageData.body
})



</script>





<style lang="scss" scoped >
.v-les-outils-modus {
}

.v-les-outils-modus__bottom_content {
    background: var(--app-color-grey);
    position: relative;
    z-index: 10;
    width: 100%;
    padding-bottom: 2rem;
    gap: 2rem;
    box-sizing: border-box;
    padding-left: var(--app-gutter);
    padding-right: var(--app-gutter);

    @media (max-width: 900px) {
        padding-left: 0;
        padding-right: 0;
    }
}

.v-les-outils-modus__bottom_content__flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 150rem;
    margin: auto;
}

.v-les-outils-modus__bottom_content__section {
    box-sizing: border-box;
    max-width: 900px;
    padding: var(--app-gutter);
    grid-column: span 2;

    @media (max-width: 1300px) {
        padding: 0;
    }
}
</style>
