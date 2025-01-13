<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { projectDetails } from '../data/projectData'

const router = useRouter()
const route = useRoute()

const projectNames = Object.keys(projectDetails)
const currentIndex = computed(() => projectNames.indexOf(route.params.projectName))

const goToPreviousProject = () => {
  const prevIndex = (currentIndex.value - 1 + projectNames.length) % projectNames.length
  router.push({ name: 'project-detail', params: { projectName: projectNames[prevIndex] } })
}

const goToNextProject = () => {
  const nextIndex = (currentIndex.value + 1) % projectNames.length
  router.push({ name: 'project-detail', params: { projectName: projectNames[nextIndex] } })
}
</script>

<template>
  <div class="project-navigation">
    <button @click="goToPreviousProject" class="navigation-button">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="m7.825 13l4.9 4.9q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-6.6-6.6q-.15-.15-.213-.325T4.426 12t.063-.375t.212-.325l6.6-6.6q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712L7.825 11H19q.425 0 .713.288T20 12t-.288.713T19 13z"
        />
      </svg>
      Anterior
    </button>
    <button @click="goToNextProject" class="navigation-button">
      Siguiente
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
        <path fill="currentColor" d="M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8l-8 8l-1.425-1.4z" />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.project-navigation {
  display: inline-flex;
  justify-content: space-around;
  gap: 2rem;
  margin-top: 2rem;
}

.navigation-button {
  background-color: var(--button-color);
  color: var(--button-text-color);
  padding: 0.5rem 1rem;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.navigation-button:hover {
  background-color: var(--button-hover-color);
}
</style>
