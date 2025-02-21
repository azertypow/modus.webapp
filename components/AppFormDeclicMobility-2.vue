<template>
    <form class="app-form-declic-mobility">
        <div v-for="question in visibleQuestions" :key="question.id" class="app-form__section">
            <label>{{ question.text }}</label>

            {{ isQuestionVisible(question) }}

            <!-- Afficher le message si la question est bloquée -->
            <div v-if="question.messageIfCurrentQuestionIsBlocked && !isQuestionVisible(question)"
                class="app-form__section__message">
                {{ question.messageIfCurrentQuestionIsBlocked }}
            </div>

            <!-- Select -->
            <template v-if="question.type === 'select'">
                <select v-model="responses[question.id]">
                    <option v-for="option in question.options" :key="option" :value="option">
                        {{ option }}
                    </option>
                    <!-- Option "autre" -->
                    <option v-if="question.hasOtherOption" value="autre">Autre</option>
                </select>

                <!-- Textarea pour "autre" -->
                <textarea   v-if="question.hasOtherOption && responses[question.id] === 'autre'"
                            v-model="responses[`${question.id}_other`]"
                            placeholder="Précisez votre réponse"
                            ></textarea>
            </template>



            <!-- Input (texte) -->
            <template v-else-if="question.type === 'input'">
                <input v-model="responses[question.id]" type="text" :placeholder="question.placeholder" />
            </template>



            <!-- Input (nombre) -->
            <template v-else-if="question.type === 'number'">
                <input v-model="responses[question.id]" type="number" :placeholder="question.placeholder" />
            </template>



            <!-- Checkbox -->
            <template v-else-if="question.type === 'checkbox'">
                <div v-for="option in question.options" :key="option" class="app-form__section__subsections">
                    <input type="checkbox" :value="option" v-model="responses[question.id]" />
                    <label>{{ option }}</label>
                </div>
            </template>


            <!-- Textarea -->
            <template v-else-if="question.type === 'textarea'">
                <textarea v-model="responses[question.id]" :placeholder="question.placeholder"></textarea>
            </template>
        </div>

        <button type="submit" @click.prevent="submitForm">Envoyer</button>
    </form>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";


interface QuestionConditions {
    isBlocking?: boolean; // Si true, bloque les questions suivantes
    dependsOn: number;
    value: string | number | boolean | ((dependentValue: any) => boolean);
}

interface Question {
    id: number;
    text: string;
    type: "select" | "input" | "checkbox" | "textarea" | "number";
    placeholder?: string;
    conditions?: QuestionConditions;
    messageIfCurrentQuestionIsBlocked?: string;
}

interface Question_select extends Question {
    type: 'select';
    options: string[];
    hasOtherOption?: boolean; // Indique si une option "autre" est disponible
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
    [key: number | string]: string | number | string[] | boolean | undefined;
}

type QuestionType =
    Question_select
    | Question_input
    | Question_checkbox
    | Question_textarea
    | Question_number

// Données des questions
const questions: QuestionType[] = [
    {
        id: 1,
        text: "Dans quelle commune votre domicile principal est-il situé ?",
        type: "select",
        options: ["carouge", "geneve", "autre"],
    },
    {
        id: 2,
        text: "Depuis combien de temps résidez-vous dans cette commune ?",
        type: "checkbox",
        options: ["moins2", "2-5", "5-10", "plus10"],
        conditions: {
            isBlocking: true,
            dependsOn: 1,
            value: dependentValue => dependentValue === "carouge" || dependentValue === "geneve",
        },
        messageIfCurrentQuestionIsBlocked: `
            <p>Vous résidez hors du territoire couvert par l’initiative « Déclic mobilité » qui se tiendra au printemps 2025. Si vous connaissez des personnes qui résident dans la commune de Genève ou de Carouge, n’hésitez pas à leur partager l’information.</p>
            <p>Par ailleurs et si vous souhaitez être recontacté pour participer à la seconde phase de l’initiative « Déclic mobilité » qui se tiendra à l’automne 2025 sur tout le Canton de Genève et la Région de Nyon, merci de nous envoyer un message par email en cliquant ici.</p>
        `,
    },
    {
        id: 3,
        text: "Quelles est la structure de votre ménage ?",
        type: "select",
        hasOtherOption: true,
        options: [
            "Personne seule",
            "Couple sans enfant(s)",
            "Couple avec enfant(s)",
            "Personne seule avec enfant(s)",
            "Colocation",
        ]
    },
    {
        id: 4,
        text: "Combien de personnes composent votre ménage ?",
        type: "number",
        placeholder: "Nombre total de personnes",
    },
    {
        id:     5,
        text: "prénom",
        type: "input",
    },
    {
        id: 6,
        text: 'exemple pour une teste avec texte area a autre',
        type: 'select',
        options: ['premier', "seconde"],
        hasOtherOption: true,
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
    // Ajoute d'autres questions ici...
];

// État des réponses
const responses = ref<Responses>({});

// Initialiser les réponses pour les questions de type checkbox
questions.forEach((question) => {
    if (question.type === 'checkbox') {
        responses.value[question.id] = [];
    }
});

// Fonction pour vérifier si une question est visible
const isQuestionVisible = (question: QuestionType): boolean => {
    if (!question.conditions) return true;

    const { dependsOn, value } = question.conditions;
    const dependentValue = responses.value[dependsOn];

    // Si la condition est une fonction, on l'exécute
    return typeof value === "function" ? value(dependentValue) : dependentValue === value;
};

// Calculer les questions visibles
const visibleQuestions = computed(() => {
    const visible: QuestionType[] = [];
    let isBlocked = false; // Indicateur de blocage

    for (const question of questions) {
        if (isBlocked) break; // Dès qu'une question bloque, on arrête tout

        // Vérifier si la question a une condition
        if (question.conditions) {
            const { dependsOn, value, isBlocking } = question.conditions;
            const dependentValue = responses.value[dependsOn];

            const conditionMet = typeof value === "function" ? value(dependentValue) : dependentValue === value;

            // Si la question est bloquante et sa condition échoue, bloquer toutes les suivantes
            if (!conditionMet && isBlocking) {
                isBlocked = true;
                break;
            }

            if (!conditionMet) continue; // Si non bloquante mais condition échouée, ne pas afficher
        }

        visible.push(question);
    }

    return visible;
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

<style lang="scss">

form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    gap: 8rem;
    counter-reset: section;
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

.app-form__section {
    > label::before {
        counter-increment: section;
        content: counter(section) ". ";
        font-weight: bold;
        margin-right: 5px;
    }
}

.app-form__section__message {
    color: red;
    margin-top: 10px;
}
</style>