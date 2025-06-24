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
      <div class="v-proto-form__bottom_content__section">

        <template v-if=" ! (isChecked_moreThan18YearOld && isChecked_readPolicy) ">
          <h2 style="margin-top: 0; text-align: center;"
          >Pour commencer la procédure d’enregistrement,
            <br>cochez la case ci-après.</h2>

          <div class="app-form__section"
               :class="{'app-form__section--valid': isChecked_moreThan18YearOld}"
          >
            <input type="checkbox" v-model="isChecked_moreThan18YearOld">
            <label class="no-counter">Je confirme avoir plus de 18 ans et souhaiter répondre au questionnaire</label>
          </div>

          <div class="app-form__section"
               :class="{'app-form__section--valid': isChecked_readPolicy}"
               style="margin-top: 2rem"
          >
            <input type="checkbox" v-model="isChecked_readPolicy">
            <label class="no-counter">Je confirme comprendre et accepter la politique de protection des données</label>
          </div>
        </template>

        <template v-else>
          <h2 style="margin-top: 0; text-align: center;"
          >C'est parti!</h2>
        </template>

      </div>
    </div>

    <div class="v-proto-form__bottom_content"
         v-if="isChecked_moreThan18YearOld && isChecked_readPolicy"
    >
      <div class="v-proto-form__bottom_content__section">
        <app-form-declic-mobility2 />
      </div>
    </div>


    <div class="v-proto-form__bottom_mailto"
    >
      <div class="v-proto-form__bottom_mailto__content">
        <div class="v-proto-form__bottom_mailto__content__text"
        >
          <div>Vous avez des questions liées à l’initiative «Déclic Mobilité» ou au questionnaire&nbsp;?</div>
          <div>Contactez-nous par email ou par téléphone&nbsp;:</div>
        </div>
        <div class="v-proto-form__bottom_mailto__content__links">
          <a class="app-button app-button--small"
             href="mailto:info@declic-mobilite.ch"
          >info@declic-mobilite.ch</a>

          <a class="app-button app-button--small"
             href="tel:+41762403625"
          >076 240 36 25</a>
        </div>
      </div>
    </div>



    <app-page-footer
            :show-mail-to="false"
    />
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

    headerCover.value = '/250313MODUS_declic-mobilite_banner-web.png'
    headerText.value = pageData.options.headerTitle

    bodyContent.value = pageData.body
})

const isChecked_moreThan18YearOld = ref(false)
const isChecked_readPolicy = ref(false)

const formHeaderText = ""

const formBodyContent: IApiBody = {
    'intro':         {
        "image": [],
        "content": {
            "content": {
                "text": `
                        <h1>Déclaration d’intérêt pour participer à l’initiative « Déclic mobilité »
                        <br><span style="color: #5500b7">Automne 2025</span>
                        </h1>

                        <p>Merci pour votre intérêt !</p>

                        <h3>Déclic Mobilité, c’est quoi ?</h3>

                        <p>Le concept est simple : vous stationnez (dans un parking prévu à cet effet) votre véhicule pendant un mois 2025 et vous recevez un accès gratuit à des alternatives de déplacement de votre choix parmi lesquelles un abonnement transports publics, un vélo/vélo électrique/vélo cargo, un abonnement Mobility, et bien d’autres services.</p>



                        <h3>Quelles sont les conditions de participation ?</h3>

                        <ul>
                          <li>Avoir 18 ans ou plus</li>
                          <li>Résider sur le territoire du Canton de Genève ou de la Région de Nyon</li>
                          <li>Détenir un ou plusieur(s) véhicule(s) (voiture, moto ou scooter ; thermique ou électrique)</li>
                          <li>S’engager à ne pas utiliser son véhicule pendant un mois</li>
                          <li>Accepter de partager votre expérience avec les organisateurs</li>
                        </ul>
                        <h6>NB : les familles ou ménages composés de plusieurs personnes peuvent participer en groupe.</h6>

                        <h3>Comment s’inscrire ?</h3>

                        <p>Pour participer au défi « Déclic Mobilité », vous devez vous enregistrer en répondant à quelques questions (5 minutes environ) sur votre profil et vos habitudes de déplacement. Une sélection sera réalisée pour garantir une diversité des profils et les personnes sélectionnées seront recontactées par email dans le courant du mois d’août avec toutes les informations nécessaires pour commencer l’aventure.<p>


                        <h3>Comment sont utilisées mes données personnelles ?</h3>

                        <p>
                        L’enquête est organisée via le site internet de la Fondation Modus, hébergé en Suisse sur un serveur sécurisé répondant à toutes les normes de sécurité en vigueur.
                        </p>
                        <p>
                          Les données recueillies dans le cadre de cette enquête seront traitées de manière strictement confidentielle dans le respect des dispositions applicables en matière <a target="_blank" href="/notice_de_protection_des_donnees.pdf">de protection des données</a>.
                          <br>Elles seront utilisées pour la mise en place du recrutement des participants à l’initiative « Déclic Mobilité » et à des fins statistiques pour en évaluer les effets en matière de modifications des comportements de mobilité et de l’équipement en moyens de transports individuels motorisés.
                          <br>Elles ne seront pas transmises à des tiers et seront détruites à la fin de l’opération en Décembre 2026.
                        </p>
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

.v-proto-form__bottom_mailto {
  background: var(--app-color-grey);
  position: relative;
  z-index: 10;
  width: 100%;
  padding-bottom: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
}

.v-proto-form__bottom_mailto__content {
  color: var(--app-color-main--dark);
  text-decoration: none;
  box-sizing: border-box;
  padding: 2rem;
  border-radius: 2rem;
  display: flex;
  align-items: flex-end;
  gap: var(--app-gutter);
  margin: auto;
  max-width: 1300px;
  justify-content: center;
  font-size: 1.5rem;
  line-height: 1.15em;
  flex-direction: column;
  background: white;


  @media(max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
}

.v-proto-form__bottom_mailto__content__text {
  font-weight: 700;
  width: 100%;

  @media(max-width: 900px) {
    text-align: center;
  }
}

.v-proto-form__bottom_mailto__content__links {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 1rem;

  @media(max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
}


.v-proto-form__bottom_content__section {
  box-sizing: border-box;
  max-width: 900px;
  margin: auto;
  padding: 0;
  width: 100%;

  //@media (max-width: 900px) {
    padding-left: var(--app-gutter);
    padding-right: var(--app-gutter);
  //}
}
</style>

<style>
.v-proto-form {
    .v-app-header__container {
        //background: #e0d1c1;
    }

    h1 {
        color: #ff4d84;
    }

    h2, h3, h6 {
        color: #5500b7;
    }

    li {
        color: black;

        &:before {
            background: #ff4d84;
        }
    }
}
</style>
