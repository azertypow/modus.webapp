<template>
    <form class="app-form"
        @submit.prevent="handleSubmit">
        <div class="app-form__group">
            <input type="text" id="nom" placeholder="Nom" v-model="formData.nom" required>
            <input type="text" id="prenom" placeholder="Prénom" v-model="formData.prenom" required>
        </div>
        <div class="app-form__group">
            <input type="email" id="email" placeholder="e-mail" v-model="formData.email" required>
            <input type="tel" id="telephone" placeholder="Téléphone" v-model="formData.telephone" required>
        </div>
        <input type="text" id="nomProjet" placeholder="Titre" v-model="formData.nomProjet" required>
        <textarea id="description"
                  v-model="formData.description" required
                  placeholder="Courte description du projet"
        ></textarea>
    </form>
</template>

<script setup>
const formData = reactive({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
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
    formData.telephone = "";
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
