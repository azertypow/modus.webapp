<template>
<!--    <form class="app-form-declic-mobility"-->
<!--        @submit.prevent="handleSubmit">-->
<!--        <div class="app-form-declic-mobility__group">-->
<!--            <input type="text" id="nom" placeholder="Nom" v-model="formData.nom" required>-->
<!--            <input type="text" id="prenom" placeholder="Prénom" v-model="formData.prenom" required>-->
<!--        </div>-->
<!--        <div class="app-form-declic-mobility__group">-->
<!--            <input type="text" id="institution" placeholder="Institution" v-model="formData.institution" required>-->
<!--            <input type="email" id="email" placeholder="E-mail" v-model="formData.email" required>-->
<!--        </div>-->
<!--        <input type="text" id="nomProjet" placeholder="Titre du projet" v-model="formData.nomProjet" required>-->
<!--        <textarea id="description"-->
<!--                  v-model="formData.description"-->
<!--                  required-->
<!--                  maxlength="1250"-->
<!--                  placeholder="Courte description du projet (objectifs, partenaires, montant du projet, etc./ 250 mots max)"-->
<!--        ></textarea>-->
<!--        <button class="app-button&#45;&#45;small"-->
<!--                v-if="status === 'nothing' || status === 'sending ERROR'"-->
<!--                type="submit"-->
<!--        >Envoyer</button>-->
<!--        <div style="text-align: center"-->
<!--                v-else-if="status === 'sending PROGRESS'"-->
<!--        >Envoie en cours…</div>-->

<!--        <div style="text-align: center"-->
<!--             v-if="responseMassage.length > 0"-->
<!--        >{{responseMassage}}</div>-->
<!--    </form>-->

  <form class="app-form-declic-mobility">

    <div class="app-form__section app-form__section--valid">
      <label>
        Dans quelle commune votre domicile principal est-il situé ?
      </label>
      <select name="commune"
              v-model="option_1"
      >
        <option value="carouge">Carouge</option>
        <option value="geneve">Genève</option>
        <option value="autre">Autre commune</option>
      </select>
    </div>



    <template v-if="option_1 === null"></template>
    <template v-else-if="option_1 === 'autre'">
      <p>Vous résidez hors du territoire couvert par l’initiative « Déclic mobilité » qui se tiendra au printemps 2025...</p>
    </template>
    <template v-else>

      <div class="app-form__section app-form__section--error">
        <label>Depuis combien de temps résidez-vous dans cette commune ?</label>
        <select name="duree_residence">
          <option value="moins2">Moins de 2 ans</option>
          <option value="2-5">Entre 2 et 5 ans</option>
          <option value="5-10">Entre 5 et 10 ans</option>
          <option value="plus10">Plus de 10 ans</option>
        </select>
      </div>

      <div class="app-form__section">
        <p>Combien de personnes composent votre ménage ?</p>
        <div class="app-form__section__subsections app-form__section__subsections--number">

        </div>
        <input type="number" name="adultes" placeholder="Nombre d'adultes">
        <input type="number" name="enfants_16_17" placeholder="Nombre d'enfants de 16 ou 17 ans">
        <input type="number" name="enfants_moins_16" placeholder="Nombre d'enfants de moins de 16 ans">
      </div>


      <div class="app-form__section">
        <label>De combien de véhicules disposez-vous au sein de votre ménage ?</label>
        <input type="number" name="motos" placeholder="Nombre de motos/scooters">
        <input type="number" name="voitures" placeholder="Nombre de voitures">
      </div>

      <div class="app-form__section">
        <label>A quelle fréquence vous déplacez-vous en moto/scooter ?</label>
        <select name="frequence_moto">
          <option value="quotidien">Tous les jours ou presque</option>
          <option value="hebdo">Une à plusieurs fois par semaine</option>
          <option value="moins">Moins d’une fois par semaine</option>
        </select>
      </div>

      <div class="app-form__section">
        <label>A quelle fréquence vous déplacez-vous en voiture ?</label>
        <select name="frequence_voiture">
          <option value="quotidien">Tous les jours ou presque</option>
          <option value="hebdo">Une à plusieurs fois par semaine</option>
          <option value="moins">Moins d’une fois par semaine</option>
        </select>
      </div>

      <div class="app-form__section">
        <label>Quelle est votre année de naissance ?</label>
        <input type="number" name="annee_naissance" placeholder="P.ex. 1983">
      </div>


      <div class="app-form__section">
        <label>Quel est votre genre ?</label>
        <select name="genre">
          <option value="femme">Une femme</option>
          <option value="homme">Un homme</option>
          <option value="autre">Autre / Je ne souhaite pas répondre</option>
        </select>
      </div>

      <div class="app-form__section">
        <p>Quelle situation professionnelle vous correspond actuellement ?</p>

        <div class="app-form__section__subsections">
          <input type="checkbox" name="emploi" value="temps_plein">
          <label>Actif/active à temps plein</label>
        </div>

        <div class="app-form__section__subsections">
          <input type="checkbox" name="emploi" value="temps_partiel">
          <label>Actif/active à temps partiel</label>
        </div>
        <div class="app-form__section__subsections">
          <input type="checkbox" name="emploi" value="chomage">
          <label>Sans emploi / au chômage</label>
        </div>
        <div class="app-form__section__subsections">
          <input type="checkbox" name="emploi" value="etudiant">
          <label>Étudiant·e</label>
        </div>
        <div class="app-form__section__subsections">
          <input type="checkbox" name="emploi" value="retraite">
          <label>Retraité·e</label>
        </div>
        <div class="app-form__section__subsections">
          <label>Autres</label>
          <input type="checkbox" name="emploi" value="autres">
        </div>





      </div>


      <div class="app-form__section">
        <label>Avez-vous le permis de conduire ?</label>
        <select name="permis">
          <option value="oui">Oui</option>
          <option value="non">Non</option>
          <option value="momentane">Momentanément pas (par exemple retrait)</option>
        </select>
      </div>

      <div class="app-form__section">
        <p>De quel(s) abonnement(s) de transports publics disposez-vous ?</p>

        <div class="app-form__section__subsections">
          <label>Abonnement de zone unireso</label>
          <input type="checkbox" name="abonnement" value="unireso">
        </div>

        <div class="app-form__section__subsections">
          <label>Abonnement de parcours CFF</label>
          <input type="checkbox" name="abonnement" value="cff">
        </div>

        <div class="app-form__section__subsections">
          <label>Abonnement demi-tarif</label>
          <input type="checkbox" name="abonnement" value="demi_tarif">
        </div>

        <div class="app-form__section__subsections">
          <label>Abonnement général (AG)</label>
          <input type="checkbox" name="abonnement" value="ag">
        </div>

        <div class="app-form__section__subsections">
          <label>Aucun</label>
          <input type="checkbox" name="abonnement" value="aucun">
        </div>

        <div class="app-form__section__subsections" style="width: 100%">
          <label>Autres (précisez)</label>
          <textarea type="text" name="abonnement_autres" placeholder="Autres (précisez)"></textarea>
        </div>


      </div>



<!--      <label>Avez-vous personnellement accès à l’un de ces véhicules ?</label>-->
<!--      <input type="checkbox" name="vehicule" value="vae"> Vélo à assistance électrique-->
<!--      <input type="checkbox" name="vehicule" value="velo_cargo"> Vélo cargo-->
<!--      <input type="checkbox" name="vehicule" value="velo"> Vélo conventionnel (mécanique)-->

<!--      <label>Souhaitez-vous faire évoluer vos pratiques de déplacement pour un mode de vie plus durable ?</label>-->
<!--      <select name="evolution_deplacement">-->
<!--        <option value="oui_tout">Oui, tout à fait</option>-->
<!--        <option value="plutot_oui">Plutôt oui</option>-->
<!--        <option value="plutot_non">Plutôt non</option>-->
<!--        <option value="pas_du_tout">Pas du tout</option>-->
<!--      </select>-->

      <button type="submit">Envoyer</button>
    </template>

  </form>
</template>

<script setup lang="ts">

import {UnwrapNestedRefs, UnwrapRef} from "vue";

let status: Ref<UnwrapRef<"sending PROGRESS" | "sending ERROR" | "sending OK" | "nothing">> = ref("nothing")
let responseMassage = ref('')

const formData: UnwrapNestedRefs<{
    [key: string]: any
    institution: string;
    nomProjet: string;
    description: string;
    nom: string;
    prenom: string;
    email: string
}> = reactive({
    nom: "",
    prenom: "",
    institution: "",
    email: "",
    nomProjet: "",
    description: "",
});

const handleSubmit = async () => {
    // Réinitialiser le formulaire
    // formData.nom = "";
    // formData.prenom = "";
    // formData.email = "";
    // formData.institution = "";
    // formData.nomProjet = "";
    // formData.description = "";

    sendMessageData()

};

async function sendMessageData() {
    status.value = "sending PROGRESS"
    responseMassage.value  = ''

    if(formData.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) === null) {
        status.value           = 'sending ERROR'
        responseMassage.value  = 'Adresse mail incorrecte'
        return
    }

    const contactUrl = new URL('https://modus-admin.sdrvl.ch/contact?')

    for(const itemKey in formData) {
        contactUrl.searchParams.append(itemKey, formData[itemKey] )
    }

    try {
        const response = await fetch(
            contactUrl.href,
            {
                method: 'POST',
            }
        )

        const jsonResponse = await response.json()

        console.log(jsonResponse)

        window.setTimeout(() => {

            if(jsonResponse.succes === false) {
                responseMassage.value  = 'Problème(s):'
                    + '-' + 'error: ' + jsonResponse.alert.error
                    + '-' + 'name: ' + jsonResponse.alert.name
                status.value           = 'sending ERROR'

            } else {
                responseMassage.value = "Votre message a bien été envoyé. Nous revenons vers vous au plus vite!\n"
                status.value           = 'sending OK'
            }

        }, 2500)


    } catch {
        responseMassage.value  = 'Erreur de connection, réesséyez…'
        status.value           = 'sending ERROR'
    }

}

const option_1 = ref(null)
</script>

<style lang="scss">

form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    gap: 8rem;
}

button {
    background: linear-gradient(to right, var(--app-color-main), var(--app-color-main--dark));
    border: none;
    color: white;
    max-width: 10rem;
    margin: auto;

    @media (max-width: 900px) {
        display: block;
        width: auto;
    }
}

.app-form-declic-mobility__group {
    display: flex;
    justify-content: center;
    gap: var(--app-gutter);
    flex-wrap: nowrap;

    @media (max-width: 900px) {
        flex-wrap: wrap;
    }
}

input {

}

</style>
