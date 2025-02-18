<template>
    <form class="app-form-declic-mobility">
        <div v-for="question in visibleQuestions" :key="question.id" class="app-form__section">
            <h1 style="width: 100%; margin-bottom: 0; margin-top: 10rem;">{{ question.type }}</h1>
            <label>{{ question.text }}</label>
            
            <!-- Select -->
            <div v-if="question.type === 'select'">
                <select v-model="responses[question.id]">
                    <option v-for="option in question.options" :key="option" :value="option">
                        {{ option }}
                    </option>
                </select>
            </div>



            <!-- Input (texte) -->
            <div v-else-if="question.type === 'input'">
                <input v-model="responses[question.id]" type="text" :placeholder="question.placeholder" />
            </div>



            <!-- Input (nombre) -->
            <div    v-else-if="question.type === 'number'">
                <input v-model="responses[question.id]" type="number" :placeholder="question.placeholder" />
            </div>



            <!-- Checkbox -->
            <div    v-else-if="question.type === 'checkbox'"
                    class="app-form__section__subsections"
            >
                <div v-for="option in question.options" :key="option">
                    <input  type="checkbox" 
                            :value="option" 
                            v-model="responses[question.id]"
                            />
                    <label>{{ option }}</label>
                </div>
            </div>


            <!-- Textarea -->
            <div v-else-if="question.type === 'textarea'">
                <textarea v-model="(responses[question.id] as string | number | string[] | undefined)" :placeholder="question.placeholder"></textarea>
            </div>
        </div>

        <button type="submit" @click.prevent="submitForm">Envoyer</button>
    </form>
</template>

<script setup lang="ts">
// Définir les interfaces
interface Question {
    id: number;
    text: string;
    type: "select" | "input" | "checkbox" | "textarea" | "number";
    placeholder?: string;
    conditions?: {
        dependsOn: number;
        value: string | number | boolean | ((dependentValue: any) => boolean);
    };
}

interface Question_select extends Question {
    type: 'select';
    options: string[];
}

interface Question_input extends Question {
    type: 'input';
}

interface Question_checkbox extends Question {
    type: 'checkbox';
    options: string[];
}

interface Question_textarea extends Question {
    type: 'textarea';
}

interface Question_number extends Question {
    type: "number";
}

interface Responses {
    [key: number]: string | number | string[] | boolean | undefined;
}

type QuestionType =
    Question_select
    | Question_input
    | Question_checkbox
    |  Question_textarea
    | Question_number

// Données des questions
const questions: QuestionType[] = [
    {
        id: 1,
        text: "Dans quelle commune votre domicile principal est-il situé ?",
        type: "select",
        options: ["carouge", "geneve", "autre"],
    },
    {
        id: 2,
        text: "Depuis combien de temps résidez-vous dans cette commune ?",
        type: "checkbox",
        options: ["moins2", "2-5", "5-10", "plus10"],
        conditions: { dependsOn: 1, value: "carouge" }, // Exemple de condition
    },
    {
        id: 3,
        text: "3.\tQuelles est la structure de votre ménage ?",
        type: "textarea",
        conditions: { dependsOn: 1, value: "carouge" }, // Exemple de condition
    },
    {
        id: 4,
        text: "nom",
        type: "input",
        conditions: { dependsOn: 1, value: "carouge" }, // Exemple de condition
    },
    {
        id:     5,
        text: "prénom",
        type: "input",
        conditions: { dependsOn: 1, value: "carouge" }, // Exemple de condition
    },
    {
        id: 10,
        text: "Combien de personnes composent votre ménage ?",
        type: "number",
        placeholder: "Nombre total de personnes",
    },
    {
        id: 11,
        text: "Personnes de 65 ans et plus",
        type: "number",
        placeholder: "Nombre de personnes de 65 ans et plus",
        conditions: { dependsOn: 10, value: (total) => total > 0 },
    },
    {
        id: 12,
        text: "Personnes de 26 à 64 ans",
        type: "number",
        placeholder: "Nombre de personnes de 26 à 64 ans",
        conditions: { dependsOn: 10, value: (total) => total > 1 },
    },
    {
        id: 13,
        text: "Personnes de 18 à 25 ans",
        type: "number",
        placeholder: "Nombre de personnes de 18 à 25 ans",
        conditions: { dependsOn: 10, value: (total) => total > 2 },
    },
    {
        id: 14,
        text: "Personnes de 16 à 17 ans",
        type: "number",
        placeholder: "Nombre de personnes de 16 à 17 ans",
        conditions: { dependsOn: 10, value: (total) => total > 0 },
    },
    {
        id: 15,
        text: "Personnes de moins de 16 ans",
        type: "number",
        placeholder: "Nombre de personnes de moins de 16 ans",
        conditions: { dependsOn: 10, value: (total) => total > 0 },
    },
];

// État des réponses
const responses = ref<Responses>({});

// Initialiser les réponses pour les questions de type checkbox
questions.forEach((question) => {
    if (question.type === 'checkbox') {
        responses.value[question.id] = []; // Tableau vide pour stocker les options cochées
    }
});

const visibleQuestions = computed(() => {
    return questions.filter((question) => {
        if ( !question.conditions ) return true;

        const { dependsOn, value } = question.conditions;
        const dependentValue = responses.value[dependsOn];

        // Si la condition est une fonction, on l'exécute
        if (typeof value === "function") {
            return value(dependentValue);
        }

        // Sinon, on compare directement les valeurs
        return dependentValue === value;
    });
});

// Validation du formulaire
const isFormValid = computed(() => {
    return visibleQuestions.value.every((question) => {
        return responses.value[question.id] !== undefined && responses.value[question.id] !== "";
    });
});

// Soumission du formulaire
const submitForm = () => {
    if (isFormValid.value) {
        console.log("Formulaire soumis :", responses.value);
    } else {
        alert("Veuillez remplir toutes les questions obligatoires.");
    }
};
</script>