<script setup>
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import { projectDetails } from '../data/projectData'
import ProjectNavegation from './ProjectNavegation.vue'

const route = useRoute()

const project = ref(projectDetails[route.params.projectName] || {})

watch(
  () => route.params.projectName,
  (newProjectName) => {
    project.value = projectDetails[newProjectName] || {}
  },
)
</script>

<template>
  <section class="container">
    <div class="project-header">
      <div class="project-info">
        <h1 class="project-title">{{ project.title }}</h1>
        <p class="project-description">{{ project.description }}</p>
        <p class="project-description">{{ project.summary }}</p>
        <div class="project-details-container">
          <div class="image-container">
            <img
              :src="project.image"
              alt="Imagen de {{ project.title }}"
              class="project-image"
              loading="lazy"
            />
          </div>
          <div class="container-links">
            <div class="project-features">
              <h2>Características Principales</h2>
              <ul>
                <li v-for="(feature, index) in project.features" :key="index">{{ feature }}</li>
              </ul>
            </div>
            <div class="project-links">
              <a :href="project.liveLink" target="_blank" class="link-button">Explorar</a>
              <a :href="project.githubLink" target="_blank" class="link-button">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="project-insights">
      <h2>Retos enfrentados</h2>
      <ul>
        <li v-for="(challenge, index) in project.challenges" :key="index">{{ challenge }}</li>
      </ul>

      <h2>Soluciones encontradas</h2>
      <ul>
        <li v-for="(solution, index) in project.solutions" :key="index">{{ solution }}</li>
      </ul>

      <h2>Resultados</h2>
      <ul>
        <li v-for="(result, index) in project.results" :key="index">{{ result }}</li>
      </ul>
    </div>

    <div class="technologies">
      <h2>Tecnologías utilizadas</h2>
      <div class="technology-list">
        <div>
          <h3>Frontend:</h3>
          <ul>
            <li v-for="tech in project.technologies.frontend" :key="tech">{{ tech }}</li>
          </ul>
        </div>
        <div>
          <h3>Backend:</h3>
          <ul>
            <li v-for="tech in project.technologies.backend" :key="tech">{{ tech }}</li>
          </ul>
        </div>
      </div>
    </div>
    <ProjectNavegation />
  </section>
</template>
<style scoped>
.project-header {
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
}

.project-info {
  flex: 1;
}

.project-title {
  color: var(--title-color);
}

.project-description {
  margin: 1rem 0;
  color: var(--paragraph-color);
}

.project-details-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  margin-top: 2rem;
}

.container-links {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
}

.project-image {
  width: 100%;
  height: auto;
  max-height: 40rem;
  border-radius: 10px;
}

.project-features {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-links {
  display: flex;
  justify-content: space-around;
}

.link-button {
  background-color: var(--button-color);
  color: var(--button-text-color);
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 3px;
  transition: background-color 0.3s;
}

.link-button:hover {
  background-color: var(--tertiary);
  color: var(--text-secondary);
}

.technologies {
  margin-top: 1rem;
  padding: 0 2rem;
  color: var(--text-color);
}

h2 {
  text-align: center;
  color: var(--h2-color);
  margin-bottom: 1rem;
}

h3 {
  margin-bottom: 1rem;
  font-weight: 500;
  color: var(--h3-color);
}

.technology-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  margin-top: 1rem;
}

.technology-list div {
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
  margin-bottom: 0.5rem;
}

li {
  margin-bottom: 0.5rem;
  text-align: center;
}

@media (min-width: 768px) {
  .project-header {
    flex-direction: column;
    text-align: center;
  }

  .project-info {
    margin-top: 1rem;
  }

  .project-description {
    text-align: justify;
  }

  .project-details-container {
    flex-direction: row;
    align-items: flex-start;
  }

  .image-container {
    flex: 2;
    max-width: 100%;
  }

  .container-links {
    flex: 1;
    margin-top: 2rem;
  }

  .technology-list {
    flex-direction: row;
    gap: 2rem;
  }

  .technology-list div {
    width: 100%;
  }
}
</style>
