<template>
  <form class="app-form-declic-mobility">
    <div v-for="question in visibleQuestions" :key="question.id" class="app-form__section">
      <label>{{ question.text }}</label>

      <!-- Select -->
      <select
              v-if="question.type === 'select'"
              v-model="responses[question.id]"
      >
        <option v-for="option in question.options" :key="option" :value="option">
          {{ option }}
        </option>
      </select>

      <!-- Input (texte) -->
      <input
              v-else-if="question.type === 'input'"
              v-model="responses[question.id]"
              type="text"
              :placeholder="question.placeholder"
      />

      <!-- Input (nombre) -->
      <input
              v-else-if="question.type === 'number'"
              v-model="responses[question.id]"
              type="number"
              :placeholder="question.placeholder"
      />

      <!-- Checkbox -->
      <div v-else-if="question.type === 'checkbox'" class="app-form__section__subsections">
        <div v-for="option in question.options" :key="option">
          <input
                  type="checkbox"
                  :value="option"
                  v-model="responses[question.id]"
          />
          <label>{{ option }}</label>
        </div>
      </div>

      <!-- Textarea -->
      <textarea
              v-else-if="question.type === 'textarea'"
              v-model="responses[question.id]"
              :placeholder="question.placeholder"
      ></textarea>
    </div>

    <button type="submit" @click.prevent="submitForm">Envoyer</button>
  </form>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

// Définir les interfaces
interface Question {
    id: number;
    text: string;
    type: "select" | "input" | "checkbox" | "textarea" | "number";
    options?: string[];
    placeholder?: string;
    conditions?: {
        dependsOn: number;
        value: string | number | boolean | ((dependentValue: any) => boolean);
    };
}

interface Responses {
    [key: number]: string | number | boolean | string[];
}

// Données des questions
const questions: Question[] = [
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
        options: ["moins2", "2-5", "5-10", "plus10"],
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

// Questions visibles en fonction des réponses
const visibleQuestions = computed(() => {
    return questions.filter((question) => {
        if (!question.conditions) return true;
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