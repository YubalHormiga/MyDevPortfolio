<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { projectListData } from '../data/projectListData'
import ContactSection from './ContactSection.vue'

const router = useRouter()
const projects = ref(projectListData)

const navigateToProject = (projectName) => {
  router.push({ path: `/project/${projectName}` })
}
</script>

<template>
  <section class="projects-section compact-padding">
    <h2 class="section-title">Proyectos</h2>
    <h2 class="section-title details">Detalles</h2>
  </section>

  <section v-for="project in projects" :key="project.name" class="projects-section">
    <h2 class="project-title" @click="navigateToProject(project.name)">{{ project.title }}</h2>
    <div class="project-description">
      <p>{{ project.description }}</p>
      <p><span>Tecnologías usadas:</span> {{ project.technologies.join(', ') }}</p>
    </div>
  </section>

  <ContactSection />
</template>

<style scoped>
.projects-section {
  display: grid;
  grid-template-columns: 5fr 4fr;
  padding: 4rem 0;
  align-items: center;
  gap: 2rem;
  border-bottom: 2px solid var(--secondary);
  margin: 0 auto;
}

.projects-section.compact-padding {
  padding: 3rem 0 2rem 0;
}

.section-title {
  font-family: 'Wendy One', serif;
  letter-spacing: 2px;
  color: var(--text-color);
}

.project-description span {
  font-weight: bold;
  color: var(--button-color);
}

@media (max-width: 1200px) {
  .projects-section {
    grid-template-columns: 1fr;
  }
  .details {
    display: none;
  }
}

.project-title {
  font-size: 7rem;
  cursor: pointer;
  font-family: 'Wendy One', serif;
  margin-bottom: 0.5rem;
  color: var(--button-color);
  transition: color 0.3s ease;
  padding-left: 3px;
}

.project-title:hover {
  color: var(--title-hover-color);
}

@media (max-width: 768px) {
  .project-title {
    font-size: 4rem;
  }
}

@media (max-width: 360px) {
  .project-title {
    font-size: 2.8rem;
  }
}
</style>
