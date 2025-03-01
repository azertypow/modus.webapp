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
          <p
                  style="
                    margin-top: 0;
                    text-align: center;
                    color: var(--app-color-main);
                    max-width: 24em;
                  "
          >Entrez votre e-mail si vous souhaitez recevoir un&nbsp;rappel le mardi 4 mars </p>
          <div class="app-form__section"
          >
            <input v-model="mailAddress" type="email" />
            <button class="app-button app-button--small"
                    @click="sendEmail"
            >envoyer</button>
          </div>
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


const mailAddress = ref('')

const sendEmail = async () => {
    if (!mailAddress.value) {
        alert('Veuillez entrer une adresse e-mail valide.');
        return;
    }

    try {
        // Envoyer une requête DELETE à l'API Deno
        const response = await $fetch('https://azertypow-mail-record-36.deno.dev/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: mailAddress.value }),
        });

        console.log('Réponse du serveur :', response);
    } catch (error) {
        // Gérer les erreurs
        console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
    }
};

const headerCover: Ref<UnwrapRef<undefined | string>> = ref(undefined)
const headerText: Ref<UnwrapRef<undefined | string>> = ref(undefined)

const bodyContent: Ref<UnwrapRef<undefined | IApiBody>> = ref(undefined)

onMounted(async () => {
    const pageData = await ApiFetchPage('proposer-un-projet')

    headerCover.value = '/25DECLIC_MOBILITE_banner.png'
    headerText.value = pageData.options.headerTitle

    bodyContent.value = pageData.body
})

const formHeaderText = ""

const formBodyContent: IApiBody = {
    'intro':         {
        "image": [
            {
                width: 1280,
                alt: '',
                caption: '',
                focus: '',
                height: 1280,
                link: '',
                mediaUrl: '',
                photoCredit: '',
                url: '/25DECLIC_MOBILITE_banner.png',
                resize: {
                    reg: '/25DECLIC_MOBILITE_banner.png',
                    large: '/25DECLIC_MOBILITE_banner.png',
                    small: '/25DECLIC_MOBILITE_banner.png',
                    tiny: '/25DECLIC_MOBILITE_banner.png',
                    xxl: '/25DECLIC_MOBILITE_banner.png',
                }
            }
        ],
        "content": {
            "content": {
                "text": `
                        <h1>Merci pour votre intérêt à participer au Déclic Mobilité.</h1>
                        <h2>Les inscriptions seront ouvertes à partir du <u>mardi 4 mars</u>. A très vite!</h2>
                `
            },
            "id": "",
            "isHidden": false,
            "type": "body",
        }
    }

}


</script>





<style lang="scss" >
.v-proto-form {
  h1 {
    text-align: center;
  }

  h2 {
    text-align: center !important;

    a {
      display: none !important;
    }
  }

  .v-app-header__graphic-box__module_1 {
    background: #e0d1c1 !important;
  }
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
  box-sizing: border-box;
  padding-left: var(--app-gutter);
  padding-right: var(--app-gutter);
}

.app-form__section {
  display: flex;
  justify-content: center;
}
</style>
