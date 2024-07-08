<template>
    <section
        class="v-les-outils-modus"
    >
        <app-page
            :header-cover="headerCover"
            :header-text="headerText"
            :body-content="bodyContent"
        />

        <div
            class="v-les-outils-modus__bottom_content"
        >
            <div class="v-les-outils-modus__bottom_content__section">
                <app-project-item
                    :img-src="null"
                    project-type="imaginaires"
                    title="Devenir un driver de communication pour le changement des imaginaires de la mobilité"
                    content="
                            <p>Dans la mesure où les comportements sont largement façonnés par les images et les valeurs sociales afférentes à la mobilité, il s’agit de proposer des alternatives en matière d’imaginaires dont Modus sera le véhicule.</p>
                            <p>La réponse à ce quatrième objectif se matérialise à travers une communication large et grand public ainsi que la production de contenus originaux pouvant toucher à la fois les experts et les citoyens et ainsi contribuer au renforcement de leurs connaissances et compétences.</p>
                            "
                />
            </div>

            <div class="v-les-outils-modus__bottom_content__section">
                <app-project-item
                    :img-src="null"
                    project-type="laboratoire"
                    title="Devenir un hub d’innovation à destination des autorités publiques et des partenaires locaux"
                    content="
                            <p>Le deuxième objectif de la Fondation Modus est d’introduire dans l’écosystème genevois de nouvelles approches pour la transition des comportements de mobilité.</p>
                            <p>Sur le plan des connaissances, il s’agit de développer une compréhension fine de la demande et des besoins en matière de mobilité. La compréhension de l’adhésion aux nouveaux services à la mobilité constitue également un horizon central pour Le Laboratoire.</p>
                            <p>D’un point de vue opérationnel, il s’agit d’identifier, implémenter et tester de nouvelles voies pour soutenir la transition de la mobilité à partir d’expérimentations de nouveaux services (coopératives de voitures, vélocargo électriques) et de nouvelles approches centrées sur l’usager (rewarding).</p>
                            <p>Concrètement, il s’agit de mettre à disposition des pouvoirs publics un répertoire de solutions qui auront fait l’objet d’une évaluation approfondie en amont par la fondation et ses partenaires.</p>
                            "
                />
            </div>

            <div class="v-les-outils-modus__bottom_content__section">
                <app-project-item
                    :img-src="null"
                    project-type="bibliotheque"
                    title="Devenir une source de connaissance incontournable sur la mobilité à Genève"
                    content="
                            <p>À travers la collecte des connaissances actuelles et la production de nouvelles recherche et études, la Fondation Modus présente un potentiel important de regroupement des informations et des connaissances propres à la mobilité à Genève.</p>
                            <p>Concrètement, il s’agit de constituer une base de connaissances ouvertes à destination de l’écosystème socio-économique, des acteurs publics, des associations, des citoyens et des ONG.</p>
                            "
                />
            </div>

            <div class="v-les-outils-modus__bottom_content__section">
                <app-project-item
                    :img-src="null"
                    project-type="plateforme"
                    title="Devenir une plateforme à disposition du système d’acteur de la mobilité à Genève"
                    content="
                            <p>Le premier objectif pour la Fondation Modus à l’horizon de 5 ans est de prendre une position de pivot au cœur du réseau des acteurs genevois dans le domaine de la mobilité. En disposant d’une position centrale, la Fondation poursuivra également un objectif d’intégration d’autres acteurs issus des sphères académique, privée mais également des ONG au sein et à l’extérieur du Canton de Genève.</p>
                            <p>Dans cette perspective, l’action concrète de Modus se matérialise à travers la mise en relation des secteurs privés, publics, académiques et associatifs.  </p>
                            <p>Principe : Animation de l’écosystème de la mobilité à Genève à partir de différentes actions d’animation et de mise en relation des acteurs.</p>
                            "
                />
            </div>

            <div class="v-les-outils-modus__bottom_content__section">
                <app-project-item
                    :img-src="null"
                    project-type="plantation"
                    title="Devenir un booster et un incubateur d’entreprises au service d’une nouvelle mobilité"
                    content="
                            <p>À partir de l’écosystème développé autour de la Fondation Modus, il s’agit de mettre en place un dispositif de soutien financier aux entreprises innovantes qui s’inscrivent dans les missions de Modus.</p>
                            <p>À cet égard, le quatrième objectif à 5 ans est de soutenir des startups et des entreprises engagées dans la transition des mobilités.</p>
                            "
                />
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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    box-sizing: border-box;
    padding-left: var(--app-gutter);
    padding-right: var(--app-gutter);

    @media (max-width: 900px) {
        padding-left: 0;
        padding-right: 0;
    }
}

.v-les-outils-modus__bottom_content__section {
    box-sizing: border-box;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    padding: var(--app-gutter);
    grid-column: span 2;

    @media (max-width: 1300px) {
        padding: 0;
    }
}
</style>
