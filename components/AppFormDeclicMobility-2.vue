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

      <!-- Input -->
      <input
              v-else-if="question.type === 'input'"
              v-model="responses[question.id]"
              type="text"
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
    type: "select" | "input" | "checkbox" | "textarea";
    options?: string[];
    placeholder?: string;
    conditions?: {
        dependsOn: number;
        value: string | number | boolean;
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
        type: "select",
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
];

// État des réponses
const responses = ref<Responses>({});

// Questions visibles en fonction des réponses
const visibleQuestions = computed(() => {
    return questions.filter((question) => {
        if (!question.conditions) return true;
        const { dependsOn, value } = question.conditions;
        return responses.value[dependsOn] === value;
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