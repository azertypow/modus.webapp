<template>
    <main class="v-index" >
        <app-header/>

        <section
            class="v-index__section"
        >
            <div>
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
                class="v-index__section__title"
            >
                <h2>Missions</h2>
            </div>

            <div
                class="v-index__section__content"
            >
                <div>
                    <p>
                        Le 21e siècle sera marqué par le défi imposé par le changement climatique. En Suisse, le secteur des transports représente aujourd’hui 31% des émissions contre 24% dans le monde. La mobili- té constitue donc 30% du problème mais égale- ment 30% de la solution. La Fondation Modus a pour vocation de participer à relever le défi de la décarbonation en soutenant les acteurs de Ge- nève pour atteindre l’objectif 0 carbone à l’hori- zon 2050.
                    </p>

                    <p>
                        La Fondation Modus prend le parti d’agir à l’échelle locale en se positionnant comme un accélérateur du changement et un soutien aux acteurs déjà en place. Ce soutien se matérialise à travers des interventions concrètes sur le ter- ritoire et auprès des habitant.e.s du Canton de Genève.
                    </p>

                    <p>
                        <strong>
                            Pour poursuivre cette ambition, la Fondation Modus s’est fixée 5 missions :
                        </strong>
                    </p>
                    <ul>
                        <li>Soutenir les acteurs de la mobilité dans leurs projets ;</li>
                        <li>Stimuler les interconnaissances entre les acteurs ;</li>
                        <li>Mettre à disposition des approches, des idées et des connaissances nouvelles ;</li>
                        <li>Proposer de nouveaux imaginaires et valeurs sociales de la mobilité ;</li>
                        <li>Documenter et disséminer le changement</li>
                    </ul>
                </div>
                <div>
                    ilustration à droite
                </div>
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
                class="v-index__section__content"
            >
                <div>
                    <p>
                        Le 21e siècle sera marqué par le défi imposé par le changement climatique. En Suisse,
                        le secteur des transports représente aujourd’hui 31% des émissions contre 24% dans le monde. La
                        mobilité constitue donc 30% du problème mais également 30% de la solution.
                    </p>

                    <app-list
                        title="SOuTEniR LES acTEuRS"
                        description="de la transition des mobilités à Genève"
                    />

                    <app-list
                        title="DéVELOPPER un huB D’innOVaTiOn"
                        description="à destination des autorités publiques et des partenaires locaux"
                    />

                    <app-list
                        title="EncOuRaGER LES EnTREPRiSES"
                        description="au service d’une nouvelle mobilité"
                    />

                    <app-list
                        title="cOnSTiTuER et DOcuMEnTER LES cOnnaiSSancES"
                        description="au sujet de la mobilité à Genève"
                    />

                    <app-list
                        title="DéVELOPPER unE cOMMunicaTiOn ORiGinaLE"
                        description="qui contribue au changement des imaginaires de la mobilité"
                    />
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

            <div>
<!--                todo ici-->
            </div>

        </section>


    </main>
</template>





<script lang="ts" setup>

</script>





<style lang="scss" scoped >
.v-index {
}

.v-index__section__title {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.v-index__section__content {
    display: flex;
    flex-wrap: nowrap;

    > * {
        width: 100%;
        //flex-shrink: 1;
        //flex-grow: 1;
    }
}
</style>
