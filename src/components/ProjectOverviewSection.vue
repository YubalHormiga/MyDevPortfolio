<script setup>
import { useRouter } from 'vue-router'
import ContactSection from './ContactSection.vue'

const router = useRouter()

const navigateToProject = (projectName) => {
  router.push({ path: '/project/' + projectName })
}
</script>

<template>
  <section class="projectsSection compactPadding">
    <h2 class="sectionTitle">Proyectos</h2>
    <h2 class="sectionTitle details">Detalles</h2>
  </section>

  <section class="projectsSection">
    <h2 class="projectTitle" @click="navigateToProject('canineconnect')">CanineConnect</h2>
    <div class="projectDescription">
      <p>
        Plataforma web que conecta a amantes de los perros con refugios para facilitar adopciones y
        reportar mascotas perdidas.
      </p>
    </div>
  </section>
  <section class="projectsSection">
    <h2 class="projectTitle" @click="navigateToProject('watersportworld')">WaterSportWorld</h2>
    <div class="projectDescription">
      <p>Proyecto Full Stack para la gestión de reservas de actividades acuáticas.</p>
    </div>
  </section>
  <section class="projectsSection">
    <h2 class="projectTitle" @click="navigateToProject('techmix')">TechMix</h2>
    <div class="projectDescription">
      <p>
        Ecosistema de proyectos y ejercicios diseñados para aprender y dominar Vue.js, desde
        componentes básicos hasta gestión avanzada de estados y estructuras complejas.
      </p>
    </div>
  </section>

  <ContactSection />
</template>

<style scoped>
.projectsSection {
  display: grid;
  grid-template-columns: 5fr 4fr;
  padding: 4rem 0;
  align-items: center;
  gap: 2rem;
  border-bottom: 2px solid var(--secundary-dark);
  margin: 0 auto;
}

.projectsSection.compactPadding {
  padding: 3rem 0 2rem 0;
}

.sectionTitle {
  font-family: 'Wendy One', serif;
  letter-spacing: 2px;
}

@media (max-width: 1200px) {
  .projectsSection {
    grid-template-columns: 1fr;
  }
  .details {
    display: none;
  }
}

.projectTitle {
  font-size: 7rem;
  cursor: pointer;
  font-family: 'Wendy One', serif;
  margin-bottom: 0.5rem;
  color: var(--primary-dark);
  transition: color 0.3s ease;
  padding-left: 3px;
}

.projectTitle:hover {
  color: var(--tertiary-dark);
}

[data-theme='light'] .projectTitle:hover {
  color: var(--primary-ligth);
}

@media (max-width: 768px) {
  .projectTitle {
    font-size: 4rem;
  }
}
</style>
