<script setup>
import { useRouter } from 'vue-router'
import ContactSection from './ContactSection.vue'

const router = useRouter()

const navigateToCanineConnect = () => {
  router.push({ name: 'canineconnect' })
}
</script>

<template>
  <section class="projectsSection compactPadding">
    <h2 class="sectionTitle">Proyectos</h2>
    <h2 class="sectionTitle details">Detalles</h2>
  </section>

  <section class="projectsSection">
    <h2 class="projectTitle" @click="navigateToCanineConnect">CanineConnect</h2>
    <div class="projectDescription">
      <p>
        Plataforma web que conecta a amantes de los perros con refugios para facilitar adopciones y
        reportar mascotas perdidas.
      </p>
    </div>
  </section>

  <ContactSection />
</template>

<style scoped>
.projectsSection {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 4rem 0;
  align-items: center;
  gap: 2rem;
  border-bottom: 1px solid var(--secundary-dark);
}

.projectsSection.compactPadding {
  padding: 2rem 0; /* Aplica padding más pequeño */
}

.sectionTitle {
  font-family: 'Wendy One', serif;
  letter-spacing: 2px;
}

@media (max-width: 768px) {
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
