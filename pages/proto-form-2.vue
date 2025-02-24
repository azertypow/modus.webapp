<template>
  <section
          class="v-proto-form"
  >
    <app-page
            :header-cover="headerCover"
            :header-text="formHeaderText"
            :body-content="formBodyContent"
    />
    <div class="v-proto-form__bottom_content" >
      <div>
        <h3>Pour commencer, cochez la case ci-après.</h3>

        <div class="app-form__section app-form__section--valid">
          <input type="checkbox" v-model="isChecked">
          <label class="no-counter">Je confirme avoir plus de 18 ans et souhaiter participer à l'enquête</label>
        </div>

        <h6>En cliquant sur cette case, vous donnez votre consentement pour la collecte et l'utilisation des données selon les conditions évoquées ci-dessus (En savoir plus). Les démarches pour avoir accès à vos données personnelles, les modifier ou les supprimer s’effectuent par e-mail en cliquant ici.
          1 Loi sur l’information du public, l’accès aux documents et la protection des données personnelles, du 5 octobre 2001 (LIPAD; A 2 08) et règlement d'application de la loi sur l'information du public, l'accès aux documents et la protection des données personnelles, du 21 décembre 2011 (RIPAD; A 2 08.01).
        </h6>
      </div>
    </div>

    <div class="v-proto-form__bottom_content"
         v-if="isChecked"
    >
      <div class="v-proto-form__bottom_content__section">
        <app-form-declic-mobility2 />
      </div>
    </div>
    <app-page-footer/>
  </section>
</template>





<script setup lang="ts">
import {defineProps, Ref, UnwrapRef} from 'vue'
import AppPage from "~/components/AppPage.vue";
import {IApiBody, IApiImage} from "~/composable/adminApi/apiDefinitions";
import {ApiFetchPage} from "~/composable/adminApi/apiFetch";
import AppFormDeclicMobility2 from "~/components/AppFormDeclicMobility-2.vue";

// const props = defineProps<{
//     message?: string
// }>()

const headerCover: Ref<UnwrapRef<undefined | string>> = ref(undefined)
const headerText: Ref<UnwrapRef<undefined | string>> = ref(undefined)

const bodyContent: Ref<UnwrapRef<undefined | IApiBody>> = ref(undefined)

onMounted(async () => {
    const pageData = await ApiFetchPage('proposer-un-projet')

    headerCover.value = pageData.options.headerImage?.resize.xxl
    headerText.value = pageData.options.headerTitle

    bodyContent.value = pageData.body
})

const isChecked = ref(false)

const formHeaderText = "Questionnaire 1 Déclic Mobilité"

const formBodyContent: IApiBody = {
    'intro':         {
        "image": [],
        "content": {
            "content": {
                "text": `
<p>Merci pour votre intérêt pour l’initiative « Déclic Mobilité »</p>
<h3>Déclic Mobilité, c’est quoi ?</h3>
<p>Le concept est simple : vous stationnez (dans un parking prévu à cet effet) votre véhicule durant le mois de mai 2025 et vous recevez un accès gratuit à des alternatives de déplacement de votre choix parmi lesquelles un abonnement général CFF, un vélo/vélo électrique/vélo cargo, un abonnement Mobility, et bien d’autres services. </p>
<h3>Quelles sont les conditions de participation ?</h3>
<ul>
<li>Avoir 18 ans ou plus</li>
<li>Résider sur le territoire communal de Genève ou Carouge</li>
<li>Détenir un ou plusieur(s) véhicule(s) (voiture, moto ou scooter ; thermique ou électrique)</li>
<li>S’engager à ne pas utiliser son véhicule pendant un mois</li>
<li>Participer à la séance de lancement (samedi 3 mai matin) et de restitution (date, heure)</li>
</ul>
<h6>NB : les familles ou ménages composés de plusieurs personnes peuvent participer en groupe.</h6>
<h3>Comment s’inscrire ?</h3>
<p>Pour participer au défi « Déclic Mobilité », vous devez vous enregistrer en répondant à quelques questions (2 minutes) sur votre profil et vos habitudes de déplacement. Une sélection sera réalisée pour garantir une diversité des profils et les personnes sélectionnées seront recontactées par email avec toutes les informations nécessaires pour commencer l’aventure.</p>
<h3>Comment sont utilisées mes données personnelles ?</h3>
<p>L’enquête est effectuée sur la plateforme de sondage Qualtrics, hébergée sur un serveur sécurisé répondant à toutes les normes de sécurité en vigueur. Les données recueillies dans le cadre de cette enquête seront traitées de manière strictement confidentielle dans le respect des dispositions applicables en matière de protection des données1. Elles seront utilisées à des fins statistiques et d'évaluation de l’impact de la prise en charge des abonnements unireso. Elles ne seront pas transmises à des tiers et seront détruites à la fin de l’opération. </p>
  `
            },
            "id": "",
            "isHidden": false,
            "type": "body"
        }
    }

}


</script>





<style lang="scss" scoped >
.v-proto-form {
  min-height: calc(100vh);
}

.v-proto-form__bottom_content {
  background: var(--app-color-grey);
  position: relative;
  z-index: 10;
  width: 100%;
  padding-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.v-proto-form__bottom_content__section {
  box-sizing: border-box;
  max-width: 900px;
  margin: auto;
  padding: 0;
  width: 100%;

  @media (max-width: 900px) {
    padding-left: var(--app-gutter);
    padding-right: var(--app-gutter);
  }
}
</style>
