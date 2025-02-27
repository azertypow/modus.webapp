<template>
  <section
          class="v-proto-form"
  >
    <app-page
            :header-cover="headerCover"
            :header-text="formHeaderText"
            :body-content="formBodyContent"
    />

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

    headerCover.value = '/25DECLIC_MOBILITE_banner.png'
    headerText.value = pageData.options.headerTitle

    bodyContent.value = pageData.body
})

const isChecked_moreThan18YearOld = ref(false)
const isChecked_readPolicy = ref(false)

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
</style>
