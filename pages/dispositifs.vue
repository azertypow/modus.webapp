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
                <div class="v-les-outils-modus__bottom_content__section"
                     id="plateforme"
                >
                    <app-project-theme
                        :img-src="null"
                        project-type="plateforme"
                        title="Un espace à disposition de tout l’écosystème"
                        content="
                                <p>La Plateforme vise à faciliter la collaboration entre les acteurs de Genève. Elle cherche également à inviter d'autres intervenant.e.s régionaux et internationaux.</p>
                                <p>La Plateforme s'appuie notamment sur l'organisation d'événements réguliers comme les afterworks de la mobilité.</p>
                                <p>Modus aspire à servir et à réunir efficacement l’ensemble de l’écosystème pour contribuer à une mobilité plus intégrée et plus durable à Genève.</p>
                                "
                    />
                </div>
                <div class="v-les-outils-modus__bottom_content__section"
                     id="laboratoire"
                >
                    <app-project-theme
                        :img-src="null"
                        project-type="laboratoire"
                        title="Un lieu d'expérimentation à destination des partenaires"
                        content="
                                <p>Le Laboratoire expérimente des approches originales pour encourager la transition vers des comportements de mobilité plus durable. Elles se concentrent sur la compréhension approfondie des demandes et des besoins ainsi que sur l'acceptation de nouveaux systèmes.</p>
                                <p>Il s'agit de tester divers services et de pratiques. Ces initiatives visent à créer des connaissances précieuses qui, une fois évaluées, sont mises à la disposition des pouvoirs publics et des partenaires locaux.</p>
                                <p>Le Laboratoire s'engage à produire du savoir et à le diffuser largement, garantissant que toutes les parties prenantes en bénéficient et contribuent à une mobilité plus efficace et plus respectueuse de l'environnement à Genève.</p>
                                "
                    />
                </div>
                <div class="v-les-outils-modus__bottom_content__section"
                     id="bibliotheque"
                >
                    <app-project-theme
                        :img-src="null"
                        project-type="bibliotheque"
                        title="Un fonds de connaissances sur les mobilités"
                        content="
                                <p>La Bibliothèque constitue une source de connaissance essentielle sur les mobilités à Genève. Son objectif est de réunir, conserver et produire des informations pertinentes sur les mobilités et de les rendre accessibles à l'ensemble de l'écosystème socio-économique de la région, soit les acteurs publics, les associations, les citoyen·nes et les ONG.</p>
                                <p>Plusieurs types d'informations sont à disposition : archives en ligne de rapports et de publications, site centralisant les données et les études sur les mobilités et enfin la parution d’analyses détaillées sur les solutions innovantes identifiées.</p>
                                <p>La Bibliothèque compile les connaissances sur les mobilités passées, présentes et futures pour les diffuser aux acteurs concernés afin d’éclairer leurs décisions et engagements en matière de mobilité urbaine.</p>
                                "
                    />
                </div>
                <div class="v-les-outils-modus__bottom_content__section"
                     id="imaginaire"
                >
                    <app-project-theme
                        :img-src="null"
                        project-type="imaginaires"
                        title="Un vecteur de transformation des comportements"
                        content="
                                <p>La Fabrique des Imaginaires doit faire évoluer la perception et permettre de valoriser certaines pratiques de mobilité durable. Son objectif est de devenir un moteur de communication essentiel pour transformer les représentations et les valeurs sociales liées aux mobilités, tout en proposant des alternatives pour modifier en profondeur les comportements.</p>
                                <p>Ce dispositif s'appuie sur le déploiement d’une stratégie de diffusion étendue qui s'adresse à la fois aux experts et au grand public en produisant de contenus originaux et percutants qui visent à enrichir les connaissances, d'élargissement des perspectives et enfin de renforcement des compétences sur les enjeux de la mobilité.</p>
                                <p>En favorisant un changement de perception et en frappant les esprits, la Fabrique des Imaginaires encourage tout le monde à adopter de nouvelles valeurs de mobilité.</p>
                                "
                    />
                </div>
                <div class="v-les-outils-modus__bottom_content__section"
                     id="plantation"
                >
                    <app-project-theme
                        :img-src="null"
                        project-type="plantation"
                        title="Un catalyseur d'initiatives innovantes dans la mobilité"
                        content="
                                <p>La Plantation se positionne comme un catalyseur pour les initiatives innovantes qui participent à la transition vers de nouvelles formes de mobilité. Elle les soutient financièrement et accompagne leur croissance. Elle propose un accès à des ressources essentielles, à des réseaux d'expert·es et à des collaborations qui leur permettent de créer des solutions novatrices et durables. Elle joue un rôle clé dans la transformation et la promotion des mobilités.</p>
                                <p>Son principe directeur est de stimuler les initiatives dans les nouveaux services de mobilité.</p>
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

    await nextTick(() => {
      const idSection = useRoute().query.a

      if(typeof idSection === 'string') {
          window.setTimeout(() => document.querySelector(`#${idSection}`)?.scrollIntoView({ behavior: 'smooth' }), 1_000)
      }
    })
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
        padding-left: 0;
        padding-right: 0;
    }
}
</style>
