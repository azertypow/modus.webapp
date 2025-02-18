<template>
  <div>
    <div v-for="question in visibleQuestions" :key="question.id">
      <label>{{ question.text }}</label>
      <input
              v-if="!question.options.length"
              v-model="responses[question.id]"
              type="text"
      />
      <select v-else v-model="responses[question.id]">
        <option v-for="option in question.options" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
    </div>
    <button @click="submitForm" :disabled="!isFormValid">Soumettre</button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

// Définir des types pour les questions, conditions et les réponses
type Condition = {
    dependsOn: number;
    value: string;
};

type Question = {
    id: number;
    text: string;
    options: string[];
    conditions: Condition | null;
};

type Responses = Record<number, string>;

// Liste des questions avec typage
const questions: Question[] = [
    {
        id: 1,
        text: "Quel est votre moyen de transport ?",
        options: ["voiture", "moto", "vélo"],
        conditions: null,
    },
    {
        id: 2,
        text: "Quelle est la marque de votre voiture ?",
        options: [],
        conditions: { dependsOn: 1, value: "voiture" },
    },
    {
        id: 3,
        text: "Quelle est la cylindrée de votre moto ?",
        options: [],
        conditions: { dependsOn: 1, value: "moto" },
    },
];

// Utiliser une réponse typée
const responses = ref<Responses>({});

// Calculer les questions visibles
const visibleQuestions = computed(() => {
    return questions.filter((question) => {
        if (!question.conditions) return true;
        const { dependsOn, value } = question.conditions;
        return responses.value[dependsOn] === value;
    });
});

// Valider le formulaire pour vérifier que toutes les réponses obligatoires sont fournies
const isFormValid = computed(() => {
    return visibleQuestions.value.every((question) => {
        return responses.value[question.id] !== undefined && responses.value[question.id] !== "";
    });
});

// Soumettre le formulaire
const submitForm = () => {
    if (isFormValid.value) {
        console.log("Formulaire soumis :", responses.value);
    } else {
        alert("Veuillez remplir toutes les questions obligatoires.");
    }
};
</script>