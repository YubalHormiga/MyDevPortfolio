<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref, watch, computed } from 'vue'
const route = useRoute()
const router = useRouter()

// Detalles de los proyectos
const projectDetails = {
  canineconnect: {
    title: 'CanineConnect 🐶',
    description: `CanineConnect es una plataforma web diseñada para facilitar la conexión entre amantes de los perros, refugios y protectoras. Esta aplicación ofrece funcionalidades para gestionar adopciones, reportar mascotas perdidas, compartir historias inspiradoras y mucho más.`,
    summary:
      'Una comunidad en línea dedicada al bienestar animal, mejorando los procesos de adopción y rescate de perros.',
    features: [
      'Reportes de mascotas perdidas y encontradas',
      'Gestión de usuarios y roles',
      'Historias inspiradoras',
      'Chat en tiempo real',
      'Adopción de perros',
    ],
    technologies: {
      frontend: ['Vue.js', 'Pinia', 'Vue Router', 'CSS'],
      backend: ['Firebase', 'The Dog API'],
    },
    liveLink: 'https://canine-connect.netlify.app/',
    githubLink: 'https://github.com/YubalHormiga/Proyectos-Personales/tree/main/05_CanineConnect',
    image: '/src/assets/images/canineConnect.webp',
  },
  watersportworld: {
    title: 'WaterSportWorld 🌊',
    description: `WaterSportWorld es una aplicación integral para gestionar reservas de actividades acuáticas. Con un backend robusto en Node.js y un frontend dinámico en Vue.js, los usuarios pueden reservar actividades de deportes acuáticos de manera sencilla y segura.`,
    summary:
      'Gestión de reservas de deportes acuáticos con una experiencia fluida tanto para el usuario como para el administrador.',
    features: [
      'Reservas interactivas con selección de actividades',
      'Navegación intuitiva entre secciones clave',
      'Visualización de información de usuario',
      'Registro e inicio de sesión seguro',
      'Gestión de servicios acuáticos',
    ],
    technologies: {
      frontend: ['Vue.js', 'Pinia', 'Vue Router', 'CSS', 'PrimeVue', 'SweetAlert2'],
      backend: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'Nodemailer'],
    },
    liveLink: 'https://www.youtube.com/watch?v=Bje2UZDSICU',
    githubLink: 'https://github.com/YubalHormiga/Proyectos-Personales/tree/main/04_WaterSportWorld',
    image: '/src/assets/images/waterSportWorld.webp',
  },
  techmix: {
    title: 'TechMix Projects 💻',
    description: `TechMix es una colección de proyectos prácticos enfocados en aprender y dominar Vue.js. Con una estructura modular, cada proyecto tiene como objetivo mejorar las habilidades clave en el desarrollo web, utilizando Vue.js y otras herramientas modernas.`,
    summary:
      'Proyectos progresivos para reforzar el aprendizaje de Vue.js y mejorar las habilidades en desarrollo web.',
    features: [
      'Desarrollo con herramientas modernas como Vite, Tailwind CSS y ESLint',
      'Ejercicios lógicos y pruebas técnicas',
      'Proyectos enfocados en Vue.js',
      'Optimización de rendimiento',
      'Diseño modular y escalable',
    ],
    technologies: {
      frontend: ['Vue.js', 'Tailwind CSS', 'Vite', 'ESLint', 'Prettier'],
      backend: ['Se planea integrar backend en el futuro.'],
    },
    liveLink: 'https://techmixhub.netlify.app/',
    githubLink: 'https://github.com/YubalHormiga/TechMix',
    image: '/src/assets/images/techMix.webp',
  },
}

// Obtener el proyecto actual desde la ruta
const project = ref(projectDetails[route.params.projectName])

// Escuchar cambios en la ruta y actualizar los datos del proyecto
watch(() => {
  const projectName = route.params.projectName
  project.value = projectDetails[projectName]
})

// Obtener todos los nombres de proyectos en un array para navegar entre ellos
const projectNames = Object.keys(projectDetails)

// Función para obtener el índice del proyecto actual
const currentIndex = computed(() => {
  return projectNames.indexOf(route.params.projectName)
})

// Función para navegar al siguiente proyecto
const goToNextProject = () => {
  const nextIndex = (currentIndex.value + 1) % projectNames.length
  router.push({ name: 'project-detail', params: { projectName: projectNames[nextIndex] } })
}

// Función para navegar al proyecto anterior
const goToPreviousProject = () => {
  const prevIndex = (currentIndex.value - 1 + projectNames.length) % projectNames.length
  router.push({ name: 'project-detail', params: { projectName: projectNames[prevIndex] } })
}
</script>

<template>
  <section class="container">
    <div class="project-header">
      <div class="project-info">
        <h1 class="project-title">{{ project.title }}</h1>
        <p class="project-description">{{ project.description }}</p>
        <p class="project-description">{{ project.summary }}</p>
        <div class="projectDetailsContainer">
          <div class="image-container">
            <img :src="project.image" alt="Imagen de {{ project.title }}" class="project-image" />
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

    <!-- Botones de navegación -->
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
  color: var(--primary-dark);
}

.project-description {
  margin: 1rem 0;
  line-height: 1.4;
}

.projectDetailsContainer {
  display: flex;
  gap: 2rem;
  width: 100%;
  margin-top: 2rem;
}

.image-container {
  flex: 2; /* Toma 2/3 del ancho */
  max-width: 66.66%;
}

.container-links {
  flex: 1; /* Toma 1/3 del ancho */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
}

.project-image {
  width: 100%;
  height: auto; /* Ajusta la imagen manteniendo las proporciones */
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
  background-color: var(--background-primary);
  color: var(--text-secondary);
  padding: 0.5rem 1rem;
  text-decoration: none;
  border-radius: 3px;
  transition: background-color 0.3s;
}

.link-button:hover {
  background-color: var(--text-secondary);
  color: var(--text-primary);
}

.technologies {
  margin-top: 1rem;
  padding: 0 2rem;
}

h2 {
  text-align: center;
  color: var(--primary-dark);
  margin-bottom: 1rem;
}

h3 {
  margin-bottom: 1rem;
  font-weight: 500;
}

.technology-list {
  display: flex;
  justify-content: space-evenly;
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
  color: var(--paragraph);
  margin-bottom: 0.5rem;
}

.project-navigation {
  display: inline-flex;
  justify-content: space-around;
  gap: 2rem;
  margin-top: 2rem;
}

.navigation-button {
  background-color: var(--primary-dark);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.navigation-button:hover {
  background-color: var(--tertiary-dark);
}

@media (max-width: 768px) {
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

  .projectDetailsContainer {
    flex-direction: column;
    align-items: center;
  }

  .image-container {
    flex: 1; /* Ocupa todo el ancho */
    max-width: 100%;
  }

  .container-links {
    flex: 1; /* Ocupa todo el ancho */
    margin-top: 2rem;
  }

  .technology-list {
    flex-direction: column;
    gap: 2rem;
  }

  .technology-list div {
    width: 100%;
  }
}
</style>
