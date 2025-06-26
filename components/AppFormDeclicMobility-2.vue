<template>
    <form class="app-form-declic-mobility">
        <div v-for="question in visibleQuestions" :key="question.id" class="app-form__section">

            <p v-if="question.type === 'mail'" style="width: 100%; max-width: none"
            >Le questionnaire est presque terminé maintenant.
              <br>Pour que nous puissions vous recontacter si votre candidature est sélectionnée, merci de renseigner votre adresse email.
            </p>

            <label v-if="question.type !== 'message'"
                   v-html="question.text"
            />

            <!-- Afficher le message si la question est de type 'message' -->
            <template v-if="question.type === 'message'">
                <div class="app-form-declic-mobility__message"
                     v-html="question.text"
                ></div>
            </template>

            <!-- Select -->
            <template v-else-if="question.type === 'select'">
                <select v-model="responses[question.id]">
                    <option v-for="option in question.options" :key="option" :value="option">
                        {{ option }}
                    </option>
                    <!-- Option "autre" -->
                    <option v-if="question.hasOtherOption" value="autre">Autre</option>
                </select>

                <!-- Textarea pour "autre" -->
                <textarea
                    v-if="question.hasOtherOption && responses[question.id] === 'autre'"
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
                    <input v-model="responses[question.id][key]" type="number" />
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

            <!-- Mail -->
            <template v-else-if="question.type === 'mail'">
              <input v-model="responses[question.id]" type="email" :placeholder="question.placeholder" />
            </template>
        </div>

        <button type="submit" @click.prevent="submitForm">Envoyer</button>
    </form>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";


interface QuestionConditions {
    isBlocking?: boolean; // Si true, bloque les questions suivantes
    dependsOn?: number;
    value: string | number | boolean | ((dependentValue?: any) => boolean);
}

interface Question {
    id: number;
    text: string;
    type: "select" | "input" | "checkbox" | "textarea" | "number" | 'mail';
    placeholder?: string;
    conditions?: QuestionConditions;
    messageIfCurrentQuestionIsBlocked?: string;
}

interface Question_message {
    id: number;
    text: string;
    type: 'message';
    conditions?: QuestionConditions;
    messageIfCurrentQuestionIsBlocked?: string
}

interface Question_select extends Question {
    type: 'select';
    options: string[];
    hasOtherOption?: boolean;
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

interface Question_mail extends Question {
    type: 'mail';
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
    | Question_mail

// Données des questions
const questions: QuestionType[] = [
    /**
     * block 1
     */
    {
        id: 1,
        text: 'Avant toute chose, avez-vous un compte swisspass ?',
        type: "select",
        options: [
            'oui',
            'non',
        ],
    },

    {
        id: 1.2,
        type: 'message',
        conditions: {
            isBlocking: true,
            dependsOn: 1,
            value: dependentValue => dependentValue === undefined || dependentValue === "non",
        },
        messageIfCurrentQuestionIsBlocked: `Si vous n'avez pas de carte SwissPass, vous devez rapidement en commander une avant de procéder à votre enregistrement.`,
        text: `
          <p>Si vous n'avez pas de carte SwissPass, vous devez rapidement en commander une avant de procéder à votre enregistrement. En effet, l’accès aux abonnements et services offerts pendant le défi nécessite que vous ayez <a target='_blank' href="https://www.swisspass.ch/register/1">un&nbsp;compte swisspass</a>.</p>
          <p>Pour obtenir la carte SwissPass, vous pouvez en faire la demande auprès d’un point de vente des transports publics ou la commander via le site internet de Swisspass. Merci de faire cette commande et de revenir sur la page du questionnaire dans un second temps pour procéder à votre enregistrement.</p>
          <p>Merci de revenir très vite pour remplir ce formulaire une fois votre compte swisspass activé.</p>
        `,
    },





    /**
     * block 2
     */
    {
        id: 2,
        text: "Dans quel territoire résidez-vous ?",
        type: "select",
        options: ["Canton de Genève", "District de Nyon", "Autre"],
    },

    {
        id: 2.1,
        type: 'message',
        conditions: {
            isBlocking: true,
            dependsOn: 2,
            value: dependentValue => !dependentValue,
        },
        text: `<p>Sélectionnez un territoire ci-dessus.</p>`,
    },

    {
        id: 2.2,
        type: 'message',
        conditions: {
            isBlocking: true,
            dependsOn: 2,
            value: dependentValue => dependentValue === "Autre",
        },
        messageIfCurrentQuestionIsBlocked: 'Vous résidez hors du territoire couvert par l’initiative « Déclic mobilité ».',
        text: `
          <p>Vous résidez hors du territoire couvert par l’initiative « Déclic mobilité ».</p>
          <p>Si vous connaissez des personnes qui résident sur le territoire du Canton de Genève ou du district de Nyon, n’hésitez pas à leur partager l’information.</p>
        `,
    },





    /**
     * block 3
     */
    {
        id: 3,
        text: "Dans quelle commune de Nyon votre domicile est-il situé ?",
        type: "select",
        conditions: {
            dependsOn: 2,
            value: dependentValue => dependentValue === "District de Nyon",
        },
        options: [
            "Arnex-sur-Nyon",
            "Arzier-Le Muids",
            "Bassins",
            "Begnins",
            "Bogis-Bossey",
            "Borex",
            "Bursinel",
            "Bursins",
            "Burtigny",
            "Chavannes-de-Bogis",
            "Chavannes-des-Bois",
            "Chéserex",
            "Coinsins",
            "Commugny",
            "Coppet",
            "Crans",
            "Crassier",
            "Duillier",
            "Dully",
            "Essertines-sur-Rolle",
            "Eysins",
            "Founex",
            "Genolier",
            "Gilly",
            "Gingins",
            "Givrins",
            "Gland",
            "Grens",
            "La Rippe",
            "Le Vaud",
            "Longirod",
            "Luins",
            "Marchissy",
            "Mies",
            "Mont-sur-Rolle",
            "Nyon",
            "Perroy",
            "Prangins",
            "Rolle",
            "Saint-Cergue",
            "Saint-George",
            "Signy-Avenex",
            "Tannay",
            "Tartegnin",
            "Trélex",
            "Vich",
            "Vinzel",
        ],
    },


    /**
     * block 4
     */
    {
        id: 4,
        text: "Dans quelle commune de Genève votre domicile est-il situé ?",
        conditions: {
            dependsOn: 2,
            value: dependentValue => dependentValue === "Canton de Genève",
        },
        type: "select",
        options: [
            "Aire-la-Ville",
            "Anières",
            "Avully",
            "Avusy",
            "Bardonnex",
            "Bellevue",
            "Bernex",
            "Carouge",
            "Cartigny",
            "Céligny",
            "Chancy",
            "Chêne-Bougeries",
            "Chêne-Bourg",
            "Choulex",
            "Collex-Bossy",
            "Collonge-Bellerive",
            "Cologny",
            "Confignon",
            "Corsier",
            "Dardagny",
            "Genève",
            "Genthod",
            "Gy",
            "Hermance",
            "Jussy",
            "Laconnex",
            "Lancy",
            "Le Grand-Saconnex",
            "Meinier",
            "Meyrin",
            "Onex",
            "Perly-Certoux",
            "Plan-les-Ouates",
            "Pregny-Chambésy",
            "Presinge",
            "Puplinge",
            "Russin",
            "Satigny",
            "Soral",
            "Thônex",
            "Troinex",
            "Vandœuvres",
            "Vernier",
            "Versoix",
            "Veyrier",
        ],
    },


    /**
     * block 5
     * */
    {
        id: 5,
        type: 'select',
        text: 'Quelle est la structure de votre ménage ?',
        options: [
            'Personne seule',
            'Couple sans enfant(s)',
            'Couple avec enfant(s)',
            'Personne seule avec enfant(s)',
            'Colocation',
        ],
        hasOtherOption: true,
    },





    /**
     * block 6
     * */
    {
        id: 6.1,
        text: "Combien de personnes de 65 ans et plus composent votre ménage ?",
        type: "select",
        options: [
            "0",
            "1",
            "2",
            "3",
            "4",
        ],
    },


    {
        id: 6.2,
        text: "Combien de personnes de 26 à 64 ans composent votre ménage ?",
        type: "select",
        options: [
            "0",
            "1",
            "2",
            "3",
            "4",
        ],
    },

    {
        id: 6.3,
        text: "Combien de personnes de 18 à 25 ans composent votre ménage ?",
        type: "select",
        options: [
            "0",
            "1",
            "2",
            "3",
            "4",
        ],
    },

    {
        id: 6.4,
        text: "Combien de personnes de 16 à 17 ans composent votre ménage ?",
        type: "select",
        conditions: {
            dependsOn: 5,
            value: dependentValue =>
                dependentValue === "Couple avec enfant(s)"
                || dependentValue === "Personne seule avec enfant(s)"
            ,
        },
        options: [
            "0",
            "1",
            "2",
            "3",
            "4",
        ],
    },

    {
        id: 6.5,
        text: "Combien de personnes de personnes de moins de 16 ans composent votre ménage ?",
        type: "select",
        conditions: {
            dependsOn: 5,
            value: dependentValue =>
                dependentValue === "Couple avec enfant(s)"
                || dependentValue === "Personne seule avec enfant(s)"
            ,
        },
        options: [
            "0",
            "1",
            "2",
            "3",
            "4",
        ],
    },









    /**
     * block 7
     * */
    {
        id: 7,
        text: "De combien de voitures disposez-vous au sein de votre ménage ?",
        type: "select",
        options: [
            "0",
            "1",
            "2",
            "3",
            "4",
            "plus de 4",
        ],
    },





    /**
     * block 8
     * */
    {
        id: 8,
        text: "A quelle fréquence vous déplacez-vous en voiture ?",
        type: "select",
        conditions: {
            dependsOn: 7,
            value: dependentValue => dependentValue !==undefined && dependentValue !== "0"
            ,
        },
        options: [
            "Tous les jours ou presque",
            "Une à plusieurs fois par semaine",
            "Moins d’une fois par semaine",
        ],
    },





    /**
     * block 9
     * */
    {
        id: 9,
        text: 'Quelle est votre année de naissance ?',
        type: 'select',
        options: [
            "1925", "1926", "1927", "1928", "1929", "1930", "1931", "1932", "1933", "1934", "1935", "1936", "1937", "1938", "1939", "1940", "1941", "1942", "1943", "1944", "1945", "1946", "1947", "1948", "1949", "1950", "1951", "1952", "1953", "1954", "1955", "1956", "1957", "1958", "1959", "1960", "1961", "1962", "1963", "1964", "1965", "1966", "1967", "1968", "1969", "1970", "1971", "1972", "1973", "1974", "1975", "1976", "1977", "1978", "1979", "1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006",
            "2007 ou plus"
        ],
    },

    {
        id: 9.1,
        type: 'message',
        conditions: {
            isBlocking: true,
            dependsOn: 9,
            value: dependentValue => !dependentValue,
        },
        text: `Selectionnez une année`,
    },

    {
        id: 9.2,
        type: 'message',
        conditions: {
            isBlocking: true,
            dependsOn: 9,
            value: dependentValue => dependentValue === "2007 ou plus",
        },
        text: `Ce défi s’adresse uniquement aux personnes majeures. Merci pour votre compréhension. N’hésitez pas à partager l’information auprès des personnes majeures de votre entourage.`,
    },




    /**
     * block 10
     * */
    {
        id: 10,
        text: 'Etes-vous une femme ou un homme ?',
        type: 'select',
        options: [
            'Une femme',
            'Un homme',
            'Autre / je ne souhaite pas répondre',
        ],
    },





    /**
     * block 13
     * */
    {
        id: 13,
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






    /**
     * block 14
     * */
    {
        id: 14,
        text: 'Quel est votre niveau de formation ?',
        type: 'textarea',
        placeholder: 'Entrez votre niveau de formation',
    },




    /**
     * block 15
     * */
    {
        id: 15,
        text: 'Avez-vous le permis de conduire ?  ',
        type: 'select',
        options: [
            "Oui",
            "Non",
            "Momentanément pas (par exemple retrait)",
        ],
    },




    /**
     * block 16
     * */
    {
        id: 16,
        text: 'De quel(s) abonnement(s) de transports publics disposez-vous?',
        type: 'checkbox',
        options: [
            "Aucun",
            "Abonnement de zone unireso TPG",
            "Abonnement de parcours CFF",
            "Abonnement demi-tarif CFF",
            "Abonnement général (AG) CFF",
            "Autre",
        ],
    },




    /**
     * block 17
     * */
    {
        id: 17,
        text: `Avez-vous personnellement accès à l’un de ces véhicules :
              <br><span class="app-font-small">(Veuillez mentionner uniquement le(s) véhicule(s) de votre ménage que vous pouvez utiliser.)</span>`,
        type: 'checkbox',
        options: [
            "Vélo à assistance électrique",
            "Vélo cargo",
            "Vélo conventionnel (mécanique)",
            "Aucun",
        ],
    },



    /**
     * block 18
     * */
    {
        id: 18,
        text: 'Souhaitez-vous faire évoluer vos pratiques de déplacement pour un mode de vie plus durable ?',
        type: 'select',
        options: [
            "Oui, tout à fait",
            "Plutôt oui",
            "Plutôt non",
            "Pas du tout",
        ],
    },




    /**
     * block 19
     * */
    {
        id: 19,
        text: 'La voiture que vous n’utiliserez pas pendant le défi est-elle partagée avec d’autres adultes de votre ménage ?',
        type: 'select',
        conditions: {
            dependsOn: 7,
            value: dependentValue => {

                let personnes_de_65_ans_et_plus = responses.value[6.1] as undefined | string
                let personnes_de_26_a_64_ans    = responses.value[6.2] as undefined | string
                let personnes_de_18_a_25_ans    = responses.value[6.3] as undefined | string
                let personnes_de_16_a_17_ans    = responses.value[6.4] as undefined | string
                let personnes_de_0_a_15_ans     = responses.value[6.5] as undefined | string

                if( !personnes_de_65_ans_et_plus) personnes_de_65_ans_et_plus = '0'
                if( !personnes_de_26_a_64_ans)    personnes_de_26_a_64_ans    = '0'
                if( !personnes_de_18_a_25_ans)    personnes_de_18_a_25_ans    = '0'
                if( !personnes_de_16_a_17_ans)    personnes_de_16_a_17_ans    = '0'
                if( !personnes_de_0_a_15_ans)     personnes_de_0_a_15_ans     = '0'

                const totalAdults =
                      parseInt(personnes_de_65_ans_et_plus)
                    + parseInt(personnes_de_26_a_64_ans)
                    + parseInt(personnes_de_18_a_25_ans)

                if (dependentValue !== undefined && dependentValue === "0") return false
                if (dependentValue !== undefined && dependentValue === "plus de 4") return true
                if( dependentValue !== undefined && parseInt(dependentValue) > totalAdults) return true
                return false
            }
            ,
        },
        options: [
            "Oui, tout à fait",
            "Plutôt oui",
            "Plutôt non",
            "Pas du tout",
        ],
    },

    /**
     * block 20
     * */
    {
        id: 20,
        text: `Code famille :
          <span class="app-font-small">
            <br>Toutes les personnes de votre ménage doivent participer au défi.
            <br>Merci de demander aux autres utilisateurs de la voiture de remplir ce formulaire d’enregistrement.
            <br>
            <br>Définissez un code famille et renseignez-le ici pour que nous puissions faire le lien entre vos réponses (exemple de code famille : les trois premières lettres de votre nom de famille et 3 chiffres de votre choix).
          </span>
        `,
        type: 'input',
        conditions: {
            dependsOn: 7,
            value: dependentValue => {

                let personnes_de_65_ans_et_plus = responses.value[6.1] as undefined | string
                let personnes_de_26_a_64_ans    = responses.value[6.2] as undefined | string
                let personnes_de_18_a_25_ans    = responses.value[6.3] as undefined | string
                let personnes_de_16_a_17_ans    = responses.value[6.4] as undefined | string
                let personnes_de_0_a_15_ans     = responses.value[6.5] as undefined | string

                let voiture_patagee             = responses.value[19]  as undefined | string

                if( !personnes_de_65_ans_et_plus) personnes_de_65_ans_et_plus = '0'
                if( !personnes_de_26_a_64_ans)    personnes_de_26_a_64_ans    = '0'
                if( !personnes_de_18_a_25_ans)    personnes_de_18_a_25_ans    = '0'
                if( !personnes_de_16_a_17_ans)    personnes_de_16_a_17_ans    = '0'
                if( !personnes_de_0_a_15_ans)     personnes_de_0_a_15_ans     = '0'

                const totalAdults =
                    parseInt(personnes_de_65_ans_et_plus)
                    + parseInt(personnes_de_26_a_64_ans)
                    + parseInt(personnes_de_18_a_25_ans)

                if (dependentValue !== undefined && dependentValue === "0") return false
                if (dependentValue !== undefined && dependentValue === "plus de 4"          &&  (voiture_patagee === 'Oui, tout à fait' || voiture_patagee === 'Plutôt oui') ) return true
                if( dependentValue === undefined && parseInt(dependentValue) > totalAdults  &&  (voiture_patagee === 'Oui, tout à fait' || voiture_patagee === 'Plutôt oui') ) return true
                return false
            },
        },
        placeholder: "JOHN_1234",
    },








    /**
     * block 43
     * */
    {
        id: 43,
        text: "Pour être recontacté si votre candidature est sélectionnée, merci de renseigner votre adresse email,",
        type: "mail",
        placeholder: "Entrez votre adresse email",
    },





    /**
     * block 44
     * */
    {
        id: 44,
        text: "ainsi que votre adresse postale :",
        type: "textarea",
        placeholder: "Entrez votre adresse postale",
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

function clearResponse() {
    responses.value = {};

    // Initialiser les réponses pour les questions de type checkbox
    questions.forEach((question) => {
        if (question.type === 'checkbox' || question.type === 'number') {
            responses.value[question.id] = [];
        }
    });
}

// Calculer les questions visibles
const visibleQuestions: Ref<QuestionType[]> = ref([])


watch(responses, () => updateContent(), { deep: true });
onMounted(() => updateContent())

function updateContent() {

    const visible: QuestionType[] = [];
    let isBlocked = false; // Indicateur pour savoir si un bloc de type message a bloqué l'affichage

    for (const question of questions) {
        // Si un bloc de type message a bloqué l'affichage, masquer cette question
        if (isBlocked) {
            continue; // Passer à la question suivante
        }

        // Vérifier si la question actuelle a une condition
        if (question.conditions) {
            const { dependsOn, value } = question.conditions;

            if( dependsOn ) {
                const dependentValue = responses.value[dependsOn];
                const conditionMet = typeof value === "function" ? value(dependentValue) : dependentValue === value;

                if (!conditionMet) {
                    continue; // Passer à la question suivante
                }

                if (question.type === 'message' && conditionMet) {
                    isBlocked = question.conditions.isBlocking ? question.conditions.isBlocking : false
                }
            } else {

                if( typeof value !== "function" ) {
                    console.error(`dependsOn is undefined and value is not a function.
                    if dependsOn is not specified, value must be nu function to check a condition.`)

                    continue;
                }

                const conditionMet = value()

                if (!conditionMet) {
                    continue; // Passer à la question suivante
                }

                if (question.type === 'message' && conditionMet) {
                    isBlocked = question.conditions.isBlocking ? question.conditions.isBlocking : false
                }
            }
        }

        // Ajouter la question aux questions visibles
        visible.push(question);
    }

    visibleQuestions.value = visible;
}

// Validation du formulaire
const isFormValid: ComputedRef<{
    isValid: boolean,
    message: string,
}> = computed(() => {

    let msg: {
        isValid: boolean,
        message: string,
    } = {
        message: '',
        isValid: true,
    }

    for (const [index, question] of visibleQuestions.value.entries()) {

        if (question.type === 'message') {
            if(question.conditions?.isBlocking) {
                msg = {
                    isValid: false,
                    message: question.messageIfCurrentQuestionIsBlocked || question.text,
                }
            }
            continue
        }

        if (question.type === 'mail') {
            const email: string | number | string[] | boolean | undefined = responses.value[question.id]

            if( email === undefined )  {
              msg = {
                  isValid: false,
                  message: "oups, votre mail est vide",
              }
              break
            }

            else if(typeof email !== 'string') {
                msg = {
                    isValid: false,
                    message: "oups, votre mail n'est pas une chaine de caractère",
                }
                break
            }

            else if( ! /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ) {
                msg = {
                    isValid: false,
                    message: "oups, votre mail est mal formaté",
                }
                break
            }
        }

        else if( responses.value[question.id] === undefined
            || responses.value[question.id] === ""
        ) {
          msg = {
              isValid: false,
              message: `la question ${index + 1}, "${question.text}" est vide`
          }
          break
        }

        else if ( Array.isArray(responses.value[question.id]) && (responses.value[question.id] as string[]).length === 0 ) {
          msg = {
              isValid: false,
              message: `rien est selectionné pour la question ${index + 1}, "${question.text}"`
          }
          break
        }
    }

    return msg
});

// Soumission du formulaire
const submitForm = async () => {
    if (isFormValid.value.isValid) {

        const jsonData: {
            question: QuestionType,
            response: string | number | string[] | boolean | undefined,
        }[] = visibleQuestions.value.map((question) => {
            return {
                question: question,
                response: responses.value[question.id],
            }
        })

        // console.log("Formulaire soumis :", jsonData)

        const url = "https://azertypow-mail-record-36.deno.dev/data";

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(jsonData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();

            alert(`Formulaire soumis, merci!`)
            clearResponse()
            console.log("Réponse du serveur:", result);
        } catch (error) {
            console.error("Erreur lors de l'envoi de la requête POST:", error);

            alert(`Erreur lors de l'envoi de la requête POST: ${error}`)
        }

    } else {
        alert( isFormValid.value.message )
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

    > label.no-counter::before {
        content: none;
    }
}

.app-form__section__message {
    color: red;
    margin-top: 10px;
}

.app-form-declic-mobility__message {
    text-align: center;

    > * {
        text-align: center !important;
        max-width: none !important;
    }
}
</style>
