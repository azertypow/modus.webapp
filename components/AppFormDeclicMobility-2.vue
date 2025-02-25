<template>
    <form class="app-form-declic-mobility">
        <div v-for="question in visibleQuestions" :key="question.id" class="app-form__section">
            <label v-if="question.type !== 'message'">{{ question.text }}</label>

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
        text: "Dans quelle commune votre domicile principal est-il situé ?",
        type: "select",
        options: ["Vile de Carouge", "Ville de Genève", "autre"],
    },

    {
        id: 1.1,
        type: 'message',
        conditions: {
            isBlocking: true,
            dependsOn: 1,
            value: dependentValue => !dependentValue,
        },
        text: `<p>Sélectionnez une commune ci-dessus.</p>`,
    },
    {
        id: 1.2,
        type: 'message',
        conditions: {
            isBlocking: true,
            dependsOn: 1,
            value: dependentValue => dependentValue === "autre",
        },
        text: `
        <p>Vous résidez hors du territoire couvert par l’initiative « Déclic mobilité » qui se tiendra au printemps 2025. Si vous connaissez des personnes qui résident dans la commune de Genève ou de Carouge, n’hésitez pas à leur partager l’information.</p>
        <p>Par ailleurs et si vous souhaitez être recontacté pour participer à la seconde phase de l’initiative « Déclic mobilité » qui se tiendra à l’automne 2025 sur tout le Canton de Genève et la Région de Nyon, merci de nous envoyer un message par email en cliquant ici.</p>
        `,
    },

    {
        id: 2,
        text: "Depuis combien de temps résidez-vous dans cette commune ?",
        type: "select",
        options: [
            "moins de 2 ans",
            "2 à 5 ans",
            "5 à 10 ans",
            "plus de 10 ans",
        ],
    },
    {
        id: 4,
        text: "Combien de personnes composent votre ménage ?",
        type: "number",
        values: [
            "Personnes de 65 ans et plus",
            "Personnes de 26 à 64 ans",
            "Personnes de 18 à 25 ans",
            "Personnes de 16 à 17 ans",
            "Personnes de 0 à 15 ans",
        ],
    },
    {
        id:     5,
        text: "De combien de véhicules disposez-vous au sein de votre ménage ?",
        type: "number",
        values: [
            "nombre de moto/scooter ",
            "nombre de voiture ",
        ],
    },
    {
        id: 6,
        text: 'Avez-vous personnellement accès à l’un de ces véhicules ? -> supprimer [bug]',
        type: 'checkbox',
        options: ['Moto/scooter', "Voiture"],
    },
    {
        id: 7,
        text: 'A quelle fréquence vous déplacez-vous en moto/scooter en tant que conducteur.ices ?',
        type: 'select',
        options: [
            'Tous les jours ou presque',
            'Une à plusieurs fois par semaine',
            'Moins d’une fois par semaine',
            ],
        conditions: {
            isBlocking: false,
            dependsOn: 5,
            value: dependentValue => {
                if( !Array.isArray(dependentValue) ) return false
                return dependentValue[0] > 0
            },
        },
    },

    {
        id: 8,
        text: 'A quelle fréquence vous déplacez-vous en voiture en tant que conducteur.ices ?',
        type: 'select',
        options: [
            'Tous les jours ou presque',
            'Une à plusieurs fois par semaine',
            'Moins d’une fois par semaine',
        ],
        conditions: {
            isBlocking: false,
            dependsOn: 5,
            value: dependentValue => {
                if( !Array.isArray(dependentValue) ) return false
                return dependentValue[1] > 0
            },
        },
    },

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
            value: dependentValue => {
                if( !dependentValue ) return true
                return dependentValue === "2007 ou plus"
            },
        },
        text: `Ce défi s’adresse uniquement aux personnes majeures. Merci pour votre compréhension. N’hésitez pas à partager l’information auprès des personnes majeures de votre entourage.`,
    },


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

    {
        id: 11,
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
        id: 12,
        text: 'Avez-vous le permis de conduire ?',
        type: 'select',
        options: [
            "Oui",
            "Non",
            "Momentanément pas (par exemple retrait)",
        ],
    },


    {
        id: 13,
        text: 'De quel(s) abonnement(s) de transports publics disposez-vous?',
        type: 'checkbox',
        options: [
            "Aucun",
            "Abonnement de zone unireso TPG",
            "Abonnement de parcours CFF",
            "Abonnement demi-tarif CFF",
            "Abonnement général (AG) CFF",
        ],
    },



    {
        id: 14,
        text: 'Avez-vous personnellement accès à l’un de ces véhicules : (Veuillez mentionner uniquement le(s) véhicule(s) de votre ménage que vous pouvez utiliser.)',
        type: 'checkbox',
        options: [
            "Vélo à assistance électrique",
            "Vélo cargo",
            "Vélo conventionnel (mécanique)",
        ],
    },




    {
        id: 15,
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
        id: 15.1,
        type: 'message',
        conditions: {
            isBlocking: false,
            value: () => {

                const adultsNumber = responses.value[4] as undefined | string[]
                const vehiculsNumber = responses.value[5] as undefined | string[]

                console.log(vehiculsNumber)


                if( !adultsNumber ) return true
                if( adultsNumber.length === 0 ) return true

                if( !vehiculsNumber ) return true
                if( vehiculsNumber.length === 0 ) return true

                const totalAdults       = adultsNumber.slice(0,4).reduce((acc, cur) => acc + parseFloat(cur), 0)
                const totalVehiculs     = vehiculsNumber.reduce((acc, cur) => acc + parseFloat(cur), 0)

                console.log(
                    'totalAdults', totalAdults,
                    'totalVehiculs', totalVehiculs,
                )


                return totalAdults > totalVehiculs
            },
        },
        text: 'Toutes les personnes de votre ménage doivent participer au défi. Merci de remplir les informations personnelles pour chaque participant.',
    },


    /**
     *
        SECOND /////////////////////////
     *
     */
    {
        id: 15.2,
        type: 'message',
        conditions: {
            isBlocking: false,
            value: () => {

                const adultsNumber = responses.value[4] as undefined | string[]
                const vehiculsNumber = responses.value[5] as undefined | string[]

                if( !adultsNumber ) return true
                if( adultsNumber.length === 0 ) return true
                if( !vehiculsNumber ) return true
                if( vehiculsNumber.length === 0 ) return true

                const totalAdults           = adultsNumber.slice(0,4).reduce((acc, cur) => acc + parseFloat(cur), 0)
                const totalMoreThan18_Old   = adultsNumber.slice(0,3).reduce((acc, cur) => acc + parseFloat(cur), 0)
                const totalVehiculs         = vehiculsNumber.reduce((acc, cur) => acc + parseFloat(cur), 0)

                return totalAdults > totalVehiculs && totalMoreThan18_Old > 1
            },
        },
        text: 'Merci de remplir ces quelques questions complémentaires pour la <u>seconde</u> personne majeure de votre ménage. ',
    },



    {
        id: 16,
        text: 'Quelle situation professionnelle lui correspond actuellement ?',
        type: 'select',
        options: [
            "Actif/active à temps plein",
            "Actif/active à temps partiel",
            "Sans emploi / au chômage",
            "Etudiant·e",
            "Retraité·e",
            "Autres",
        ],
        conditions: {
            isBlocking: false,
            value: () => {

                const adultsNumber = responses.value[4] as undefined | string[]
                const vehiculsNumber = responses.value[5] as undefined | string[]

                if( !adultsNumber ) return true
                if( adultsNumber.length === 0 ) return true
                if( !vehiculsNumber ) return true
                if( vehiculsNumber.length === 0 ) return true

                const totalAdults           = adultsNumber.slice(0,4).reduce((acc, cur) => acc + parseFloat(cur), 0)
                const totalMoreThan18_Old   = adultsNumber.slice(0,3).reduce((acc, cur) => acc + parseFloat(cur), 0)
                const totalVehiculs         = vehiculsNumber.reduce((acc, cur) => acc + parseFloat(cur), 0)

                return totalAdults > totalVehiculs && totalMoreThan18_Old > 1
            }
        },
    },
    {
        id: 17,
        text: 'Possède-t-elle le permis de conduire ?',
        type: 'select',
        options: [
            "Oui",
            "Non",
            "Momentanément pas (par exemple retrait)",
        ],
        conditions: {
            isBlocking: false,
            value: () => {

                const adultsNumber = responses.value[4] as undefined | string[]
                const vehiculsNumber = responses.value[5] as undefined | string[]

                if( !adultsNumber ) return true
                if( adultsNumber.length === 0 ) return true
                if( !vehiculsNumber ) return true
                if( vehiculsNumber.length === 0 ) return true

                const totalAdults           = adultsNumber.slice(0,4).reduce((acc, cur) => acc + parseFloat(cur), 0)
                const totalMoreThan18_Old   = adultsNumber.slice(0,3).reduce((acc, cur) => acc + parseFloat(cur), 0)
                const totalVehiculs         = vehiculsNumber.reduce((acc, cur) => acc + parseFloat(cur), 0)

                return totalAdults > totalVehiculs && totalMoreThan18_Old > 1
            }
        },
    },
    {
        id: 18,
        text: 'A quelle fréquence se déplace-t-elle en moto/scooter ?',
        type: 'select',
        options: [
            "Tous les jours ou presque",
            "Une à plusieurs fois par semaine",
            "Moins d’une fois par semaine",
        ],
        conditions: {
            isBlocking: false,
            dependsOn: 5,
            value: (dependentValue) => {

                if( !Array.isArray(dependentValue) ) return false
                if( !dependentValue[0] || dependentValue[0] === 0 ) return false

                const adultsNumber = responses.value[4] as undefined | string[]
                const vehiculsNumber = responses.value[5] as undefined | string[]

                if( !adultsNumber ) return true
                if( adultsNumber.length === 0 ) return true
                if( !vehiculsNumber ) return true
                if( vehiculsNumber.length === 0 ) return true

                const totalAdults           = adultsNumber.slice(0,4).reduce((acc, cur) => acc + parseFloat(cur), 0)
                const totalMoreThan18_Old   = adultsNumber.slice(0,3).reduce((acc, cur) => acc + parseFloat(cur), 0)
                const totalVehiculs         = vehiculsNumber.reduce((acc, cur) => acc + parseFloat(cur), 0)

                return totalAdults > totalVehiculs && totalMoreThan18_Old > 1
            }
        },
    },

    {
        id: 19,
        text: 'A quelle fréquence se déplace-t-elle en voiture ?',
        type: 'select',
        options: [
            "Tous les jours ou presque",
            "Une à plusieurs fois par semaine",
            "Moins d’une fois par semaine",
        ],
        conditions: {
            isBlocking: false,
            dependsOn: 5,
            value: (dependentValue) => {

                if( !Array.isArray(dependentValue) ) return false
                if( !dependentValue[1] || dependentValue[1] === 0 ) return false

                const adultsNumber = responses.value[4] as undefined | string[]
                const vehiculsNumber = responses.value[5] as undefined | string[]

                if( !adultsNumber ) return true
                if( adultsNumber.length === 0 ) return true
                if( !vehiculsNumber ) return true
                if( vehiculsNumber.length === 0 ) return true

                const totalAdults           = adultsNumber.slice(0,4).reduce((acc, cur) => acc + parseFloat(cur), 0)
                const totalMoreThan18_Old   = adultsNumber.slice(0,3).reduce((acc, cur) => acc + parseFloat(cur), 0)
                const totalVehiculs         = vehiculsNumber.reduce((acc, cur) => acc + parseFloat(cur), 0)

                return totalAdults > totalVehiculs && totalMoreThan18_Old > 1
            }
        },
    },

    {
        id: 20,
        text: 'De quel(s) abonnement(s) de transports publics dispose-t-elle ?',
        type: 'checkbox',
        options: [
            "Aucun",
            "Abonnement de zone unireso",
            "Abonnement de parcours CFF",
            "Abonnement demi-tarif",
            "Abonnement général (AG)",
            "Autres : précisez [zone de texte]",
        ],
        conditions: {
            isBlocking: false,
            dependsOn: 5,
            value: (dependentValue) => {

                if( !Array.isArray(dependentValue) ) return false
                if( !dependentValue[1] || dependentValue[1] === 0 ) return false

                const adultsNumber = responses.value[4] as undefined | string[]
                const vehiculsNumber = responses.value[5] as undefined | string[]

                if( !adultsNumber ) return true
                if( adultsNumber.length === 0 ) return true
                if( !vehiculsNumber ) return true
                if( vehiculsNumber.length === 0 ) return true

                const totalAdults           = adultsNumber.slice(0,4).reduce((acc, cur) => acc + parseFloat(cur), 0)
                const totalMoreThan18_Old   = adultsNumber.slice(0,3).reduce((acc, cur) => acc + parseFloat(cur), 0)
                const totalVehiculs         = vehiculsNumber.reduce((acc, cur) => acc + parseFloat(cur), 0)

                return totalAdults > totalVehiculs && totalMoreThan18_Old > 1
            }
        },
    },

    {
        id: 21,
        text: 'A-t-elle personnellement accès à l’un de ces véhicules :',
        type: 'checkbox',
        options: [
            "Vélo à assistance électrique",
            "Vélo cargo",
            "Vélo conventionnel (mécanique)",

        ],
        conditions: {
            isBlocking: false,
            dependsOn: 5,
            value: (dependentValue) => {

                if( !Array.isArray(dependentValue) ) return false
                if( !dependentValue[1] || dependentValue[1] === 0 ) return false

                const adultsNumber = responses.value[4] as undefined | string[]
                const vehiculsNumber = responses.value[5] as undefined | string[]

                if( !adultsNumber ) return true
                if( adultsNumber.length === 0 ) return true
                if( !vehiculsNumber ) return true
                if( vehiculsNumber.length === 0 ) return true

                const totalAdults           = adultsNumber.slice(0,4).reduce((acc, cur) => acc + parseFloat(cur), 0)
                const totalMoreThan18_Old   = adultsNumber.slice(0,3).reduce((acc, cur) => acc + parseFloat(cur), 0)
                const totalVehiculs         = vehiculsNumber.reduce((acc, cur) => acc + parseFloat(cur), 0)

                return totalAdults > totalVehiculs && totalMoreThan18_Old > 1
            }
        },
    },



    /**
     *
     TROISIEME /////////////////////////
     *
     */
    {
        id: 21.1,
        type: 'message',
        conditions: {
            isBlocking: false,
            value: () => {

                const adultsNumber = responses.value[4] as undefined | string[]
                const vehiculsNumber = responses.value[5] as undefined | string[]

                if( !adultsNumber ) return true
                if( adultsNumber.length === 0 ) return true
                if( !vehiculsNumber ) return true
                if( vehiculsNumber.length === 0 ) return true

                const totalAdults           = adultsNumber.slice(0,4).reduce((acc, cur) => acc + parseFloat(cur), 0)
                const totalMoreThan18_Old   = adultsNumber.slice(0,3).reduce((acc, cur) => acc + parseFloat(cur), 0)
                const totalVehiculs         = vehiculsNumber.reduce((acc, cur) => acc + parseFloat(cur), 0)

                return totalAdults > totalVehiculs && totalMoreThan18_Old > 2
            },
        },
        text: 'Merci de remplir ces quelques questions complémentaires pour la <u>troisième</u> personne majeure de votre ménage. ',
    },



    {
        id: 22,
        text: 'Quelle situation professionnelle lui correspond actuellement ?',
        type: 'select',
        options: [
            "Actif/active à temps plein",
            "Actif/active à temps partiel",
            "Sans emploi / au chômage",
            "Etudiant·e",
            "Retraité·e",
            "Autres",
        ],
        conditions: {
            isBlocking: false,
            value: () => {

                const adultsNumber = responses.value[4] as undefined | string[]
                const vehiculsNumber = responses.value[5] as undefined | string[]

                if( !adultsNumber ) return true
                if( adultsNumber.length === 0 ) return true
                if( !vehiculsNumber ) return true
                if( vehiculsNumber.length === 0 ) return true

                const totalAdults           = adultsNumber.slice(0,4).reduce((acc, cur) => acc + parseFloat(cur), 0)
                const totalMoreThan18_Old   = adultsNumber.slice(0,3).reduce((acc, cur) => acc + parseFloat(cur), 0)
                const totalVehiculs         = vehiculsNumber.reduce((acc, cur) => acc + parseFloat(cur), 0)

                return totalAdults > totalVehiculs && totalMoreThan18_Old > 1
            }
        },
    },
    {
        id: 23,
        text: 'Possède-t-elle le permis de conduire ?',
        type: 'select',
        options: [
            "Oui",
            "Non",
            "Momentanément pas (par exemple retrait)",
        ],
        conditions: {
            isBlocking: false,
            value: () => {

                const adultsNumber = responses.value[4] as undefined | string[]
                const vehiculsNumber = responses.value[5] as undefined | string[]

                if( !adultsNumber ) return true
                if( adultsNumber.length === 0 ) return true
                if( !vehiculsNumber ) return true
                if( vehiculsNumber.length === 0 ) return true

                const totalAdults           = adultsNumber.slice(0,4).reduce((acc, cur) => acc + parseFloat(cur), 0)
                const totalMoreThan18_Old   = adultsNumber.slice(0,3).reduce((acc, cur) => acc + parseFloat(cur), 0)
                const totalVehiculs         = vehiculsNumber.reduce((acc, cur) => acc + parseFloat(cur), 0)

                return totalAdults > totalVehiculs && totalMoreThan18_Old > 1
            }
        },
    },
    {
        id: 24,
        text: 'A quelle fréquence se déplace-t-elle en moto/scooter ?',
        type: 'select',
        options: [
            "Tous les jours ou presque",
            "Une à plusieurs fois par semaine",
            "Moins d’une fois par semaine",
        ],
        conditions: {
            isBlocking: false,
            dependsOn: 5,
            value: (dependentValue) => {

                if( !Array.isArray(dependentValue) ) return false
                if( !dependentValue[0] || dependentValue[0] === 0 ) return false

                const adultsNumber = responses.value[4] as undefined | string[]
                const vehiculsNumber = responses.value[5] as undefined | string[]

                if( !adultsNumber ) return true
                if( adultsNumber.length === 0 ) return true
                if( !vehiculsNumber ) return true
                if( vehiculsNumber.length === 0 ) return true

                const totalAdults           = adultsNumber.slice(0,4).reduce((acc, cur) => acc + parseFloat(cur), 0)
                const totalMoreThan18_Old   = adultsNumber.slice(0,3).reduce((acc, cur) => acc + parseFloat(cur), 0)
                const totalVehiculs         = vehiculsNumber.reduce((acc, cur) => acc + parseFloat(cur), 0)

                return totalAdults > totalVehiculs && totalMoreThan18_Old > 1
            }
        },
    },

    {
        id: 25,
        text: 'A quelle fréquence se déplace-t-elle en voiture ?',
        type: 'select',
        options: [
            "Tous les jours ou presque",
            "Une à plusieurs fois par semaine",
            "Moins d’une fois par semaine",
        ],
        conditions: {
            isBlocking: false,
            dependsOn: 5,
            value: (dependentValue) => {

                if( !Array.isArray(dependentValue) ) return false
                if( !dependentValue[1] || dependentValue[1] === 0 ) return false

                const adultsNumber = responses.value[4] as undefined | string[]
                const vehiculsNumber = responses.value[5] as undefined | string[]

                if( !adultsNumber ) return true
                if( adultsNumber.length === 0 ) return true
                if( !vehiculsNumber ) return true
                if( vehiculsNumber.length === 0 ) return true

                const totalAdults           = adultsNumber.slice(0,4).reduce((acc, cur) => acc + parseFloat(cur), 0)
                const totalMoreThan18_Old   = adultsNumber.slice(0,3).reduce((acc, cur) => acc + parseFloat(cur), 0)
                const totalVehiculs         = vehiculsNumber.reduce((acc, cur) => acc + parseFloat(cur), 0)

                return totalAdults > totalVehiculs && totalMoreThan18_Old > 1
            }
        },
    },

    {
        id: 26,
        text: 'De quel(s) abonnement(s) de transports publics dispose-t-elle ?',
        type: 'checkbox',
        options: [
            "Aucun",
            "Abonnement de zone unireso",
            "Abonnement de parcours CFF",
            "Abonnement demi-tarif",
            "Abonnement général (AG)",
            "Autres : précisez [zone de texte]",
        ],
        conditions: {
            isBlocking: false,
            dependsOn: 5,
            value: (dependentValue) => {

                if( !Array.isArray(dependentValue) ) return false
                if( !dependentValue[1] || dependentValue[1] === 0 ) return false

                const adultsNumber = responses.value[4] as undefined | string[]
                const vehiculsNumber = responses.value[5] as undefined | string[]

                if( !adultsNumber ) return true
                if( adultsNumber.length === 0 ) return true
                if( !vehiculsNumber ) return true
                if( vehiculsNumber.length === 0 ) return true

                const totalAdults           = adultsNumber.slice(0,4).reduce((acc, cur) => acc + parseFloat(cur), 0)
                const totalMoreThan18_Old   = adultsNumber.slice(0,3).reduce((acc, cur) => acc + parseFloat(cur), 0)
                const totalVehiculs         = vehiculsNumber.reduce((acc, cur) => acc + parseFloat(cur), 0)

                return totalAdults > totalVehiculs && totalMoreThan18_Old > 1
            }
        },
    },

    {
        id: 27,
        text: 'A-t-elle personnellement accès à l’un de ces véhicules :',
        type: 'checkbox',
        options: [
            "Vélo à assistance électrique",
            "Vélo cargo",
            "Vélo conventionnel (mécanique)",

        ],
        conditions: {
            isBlocking: false,
            dependsOn: 5,
            value: (dependentValue) => {

                if( !Array.isArray(dependentValue) ) return false
                if( !dependentValue[1] || dependentValue[1] === 0 ) return false

                const adultsNumber = responses.value[4] as undefined | string[]
                const vehiculsNumber = responses.value[5] as undefined | string[]

                if( !adultsNumber ) return true
                if( adultsNumber.length === 0 ) return true
                if( !vehiculsNumber ) return true
                if( vehiculsNumber.length === 0 ) return true

                const totalAdults           = adultsNumber.slice(0,4).reduce((acc, cur) => acc + parseFloat(cur), 0)
                const totalMoreThan18_Old   = adultsNumber.slice(0,3).reduce((acc, cur) => acc + parseFloat(cur), 0)
                const totalVehiculs         = vehiculsNumber.reduce((acc, cur) => acc + parseFloat(cur), 0)

                return totalAdults > totalVehiculs && totalMoreThan18_Old > 1
            }
        },
    },






    /**
     *
     ENFANT ??? /////////////////////////
     *
     */
    {
        id: 27.1,
        type: 'message',
        conditions: {
            isBlocking: false,
            value: () => true,
        },
        text: 'Question pour enfant: Comment on calcule les enfants?',
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

    // todo: dependsOn can be undefined: for multi questions dependencies, dependOn logic has no sens
    const { dependsOn, value } = question.conditions;

    if(dependsOn) {
      const dependentValue = responses.value[dependsOn];
      return typeof value === "function" ? value(dependentValue) : dependentValue === value;
    }

    if(typeof value === "function") return value()

    console.error(`dependsOn is undefined and value is not a function.
    if dependsOn is not specified, value must be nu function to check a condition.`)

    return true
};

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
