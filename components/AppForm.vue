<template>
    <form class="app-form"
        @submit.prevent="handleSubmit">
        <div class="app-form__group">
            <input type="text" id="nom" placeholder="Nom" v-model="formData.nom" required>
            <input type="text" id="prenom" placeholder="Prénom" v-model="formData.prenom" required>
        </div>
        <div class="app-form__group">
            <input type="text" id="institution" placeholder="Institution" v-model="formData.institution" required>
            <input type="email" id="email" placeholder="E-mail" v-model="formData.email" required>
        </div>
        <input type="text" id="nomProjet" placeholder="Titre du projet" v-model="formData.nomProjet" required>
        <textarea id="description"
                  v-model="formData.description"
                  required
                  maxlength="1250"
                  placeholder="Courte description du projet (objectifs, partenaires, etc./ 250 mots max)"
        ></textarea>
        <button class="app-button--small" type="submit">Envoyer</button>
    </form>
</template>

<script setup>
const formData = reactive({
    nom: "",
    prenom: "",
    email: "",
    institution: "",
    nomProjet: "",
    description: "",
});

const handleSubmit = async () => {
    // Envoyer les données du formulaire à votre API ou serveur
    console.log("Envoi du formulaire...");
    console.log(formData);

    // Exemple d'appel d'API (remplacer avec votre implémentation)
    // await fetch('/api/submit-form', {
    //   method: 'POST',
    //   body: JSON.stringify(formData),
    // });

    // Réinitialiser le formulaire
    formData.nom = "";
    formData.prenom = "";
    formData.email = "";
    formData.institution = "";
    formData.nomProjet = "";
    formData.description = "";
};
</script>

<style lang="scss">

form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    gap: .5rem;
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

.app-form__group {
    display: flex;
    justify-content: center;
    gap: .5rem;
    flex-wrap: nowrap;

    @media (max-width: 900px) {
        flex-wrap: wrap;
    }
}

input, textarea {
    box-sizing: border-box;
    width: 100%;
    display: block;
    color: inherit;
    font-size: inherit;
    line-height: inherit;
    font-family: inherit;
    padding: .5rem;
    resize: none;
    border: solid var(--app-color-main) 3px;

    &::placeholder {
        color: inherit;
        font-size: inherit;
        line-height: inherit;
        font-family: inherit;
    }
}

textarea {
    height: 5.5rem;
}

input {

}

</style>
