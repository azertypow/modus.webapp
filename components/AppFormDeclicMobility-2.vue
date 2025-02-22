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
                <div v-for="(option, key) in question.values" :key="option" class="app-form__section__subsections">
                    <label>{{ option }}</label>
                    <input v-model="responses[question.id][key]" type="number"/>
                </div>
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


            <!-- Message  -->
            <template v-else-if="question.type === 'message'">
                <div v-html="question.text"></div>
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

interface Question_message {
    id: number;
    text: string;
    type: 'message';
    conditions?: QuestionConditions;
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
    values: string[],
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
    | Question_message

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
        type: "select",
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
        values: [
            "Personnes de 65 ans et plus",
            "Personnes de 26 à 64 ans",
            "Personnes de 18 à 25 ans",
            "Personnes de 16 à 17 ans  (si structure ménage est « couple avec enfant(s) » ou « personne seule avec enfant(s) »)",
            "Personnes de moins de 16 ans (si structure ménage est « couple avec enfant(s) » ou « personne seule avec enfant(s) »)",
        ],
    },
    {
        id:     5,
        text: "De combien de moto/scooter disposez-vous au sein de votre ménage ? (Les véhicules électriques sont considérés au même titre que les véhicules thermiques)",
        type: "number",
        values: [
            "nombre de moto/scooter ",
        ],
    },
    {
        id:     6,
        text: "De combien de voiture disposez-vous au sein de votre ménage ? (Les véhicules électriques sont considérés au même titre que les véhicules thermiques)",
        type: "number",
        values: [
            "nombre de voiture ",
        ],
    },
    {
        id: 7,
        text: 'Avez-vous personnellement accès à l’un de ces véhicules ?',
        type: 'checkbox',
        options: ['Moto/scooter', "Voiture"],
    },
    {
        id: 8,
        text: 'A quelle fréquence vous déplacez-vous en moto/scooter ?',
        type: 'select',
        options: [
            'Tous les jours ou presque',
            'Une à plusieurs fois par semaine',
            'Moins d’une fois par semaine',
            ],
        conditions: {
            isBlocking: false,
            dependsOn: 5,
            value: dependentValue => dependentValue > 0,
        },
    },

    {
        id: 9,
        text: 'A quelle fréquence vous déplacez-vous en voiture ?',
        type: 'select',
        options: [
            'Tous les jours ou presque',
            'Une à plusieurs fois par semaine',
            'Moins d’une fois par semaine',
        ],
        conditions: {
            isBlocking: false,
            dependsOn: 6,
            value: dependentValue => dependentValue > 0,
        },
    },

    {
        id: 10,
        text: 'Quelle est votre année de naissance ?',
        type: 'select',
        options: [
            "1925", "1926", "1927", "1928", "1929", "1930", "1931", "1932", "1933", "1934", "1935", "1936", "1937", "1938", "1939", "1940", "1941", "1942", "1943", "1944", "1945", "1946", "1947", "1948", "1949", "1950", "1951", "1952", "1953", "1954", "1955", "1956", "1957", "1958", "1959", "1960", "1961", "1962", "1963", "1964", "1965", "1966", "1967", "1968", "1969", "1970", "1971", "1972", "1973", "1974", "1975", "1976", "1977", "1978", "1979", "1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006",
            "2007 ou plus"
        ],
    },


    {
        id: 11,
        text: 'Etes-vous une femme ou un homme ?',
        type: 'select',
        options: [
            'Une femme',
            'Un homme',
            'Autre / je ne souhaite pas répondre',
        ],
    },

    {
        id: 12,
        text: 'Quelle situation professionnelle vous correspond actuellement ?',
        type: 'select',
        hasOtherOption: true,
        options: [
            "Actif/active à temps plein",
            "Actif/active à temps partiel",
            "Sans emploi / au chômage",
            "Etudiant·e",
            "Retraité·e",
        ],
    },


    {
        id: 13,
        text: 'Avez-vous le permis de conduire ?',
        type: 'select',
        options: [
            "Oui",
            "Non",
            "Momentanément pas (par exemple retrait)",
        ],
    },


    {
        id: 14,
        text: 'De quel(s) abonnement(s) de transports publics disposez-vous?',
        type: 'select',
        hasOtherOption: true,
        options: [
            "Aucun",
            "Abonnement de zone unireso",
            "Abonnement de parcours CFF",
            "Abonnement demi-tarif",
            "Abonnement général (AG)",
        ],
    },



    {
        id: 15,
        text: 'Avez-vous personnellement accès à l’un de ces véhicules : (Veuillez mentionner uniquement le(s) véhicule(s) de votre ménage que vous pouvez utiliser.)',
        type: 'checkbox',
        options: [
            "Vélo à assistance électrique",
            "Vélo cargo",
            "Vélo conventionnel (mécanique)",
        ],
    },




    {
        id: 16,
        text: 'Souhaitez-vous faire évoluer vos pratiques de déplacement pour un mode de vie plus durable ?',
        type: 'select',
        options: [
            "Oui, tout à fait",
            "Plutôt oui",
            "Plutôt non",
            "Pas du tout",
        ],
    },


    {
        id: 16.1,
        type: 'message',
        conditions: {
            isBlocking: true,
            dependsOn: 3,
            value: (familyStructure) => {
                if(familyStructure === 'Colocation') return false

                return true
            },
        },
        text: 'Toutes les personnes de votre ménage doivent participer au défi. Merci de remplir les informations personnelles pour chaque participant.',
    },
















    ];

// État des réponses
const responses = ref<Responses>({});

// Initialiser les réponses pour les questions de type checkbox
questions.forEach((question) => {
    if (question.type === 'checkbox' || question.type === 'number') {
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