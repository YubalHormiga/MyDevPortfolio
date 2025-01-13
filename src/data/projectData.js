import canineConnectImage from '@/assets/images/canineConnect.webp'
import waterSportWorldImage from '@/assets/images/waterSportWorld.webp'
import techMixImage from '@/assets/images/techMix.webp'

export const projectDetails = {
  canineconnect: {
    title: 'CanineConnect 🐶',
    description: `Una plataforma diseñada para amantes de los perros, refugios y protectoras, que digitaliza y simplifica procesos relacionados con adopciones y reportes de mascotas perdidas.`,
    summary:
      'Crea una comunidad conectada dedicada al bienestar animal, con herramientas modernas para mejorar procesos de adopción y rescate.',
    features: [
      'Gestión de adopciones con perfiles detallados de perros.',
      'Reportes de mascotas perdidas/encontradas con geolocalización.',
      'Historias inspiradoras para fomentar la interacción de la comunidad.',
      'Chat en tiempo real para facilitar la comunicación entre usuarios y refugios.',
      'Panel administrativo para gestionar roles y publicaciones.',
    ],
    technologies: {
      frontend: ['Vue.js', 'Pinia', 'Vue Router', 'CSS'],
      backend: ['Firebase (Authentication, Firestore, Storage)', 'The Dog API'],
    },
    liveLink: 'https://canine-connect.netlify.app/',
    githubLink: 'https://github.com/YubalHormiga/Proyectos-Personales/tree/main/05_CanineConnect',
    image: canineConnectImage,
    challenges: [
      'Diseñar un sistema eficiente para gestionar grandes volúmenes de datos sobre adopciones y mascotas perdidas.',
      'Implementar un chat en tiempo real de manera fluida para múltiples usuarios.',
    ],
    solutions: [
      'Utilización de Firebase para aprovechar su capacidad de escalabilidad y funciones en tiempo real.',
      'Diseño modular del frontend con Vue.js para garantizar una experiencia de usuario fluida.',
    ],
    results: [
      'Proyecto diseñado para facilitar la adopción de perros, destacando por su estructura robusta y su experiencia de usuario optimizada.',
    ],
  },
  watersportworld: {
    title: 'WaterSportWorld 🌊',
    description: `Un sistema de reservas online para deportes acuáticos, diseñado para usuarios y administradores, con un flujo sencillo y seguro.`,
    summary:
      'Optimiza la gestión de actividades acuáticas mediante un sistema intuitivo y eficaz para reservas y administración.',
    features: [
      'Reservas interactivas con selección de actividades.',
      'Navegación intuitiva entre las principales secciones.',
      'Gestión de usuarios y registro seguro.',
      'Panel administrativo para servicios y actividades.',
    ],
    technologies: {
      frontend: ['Vue.js', 'PrimeVue', 'SweetAlert2', 'CSS'],
      backend: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Nodemailer'],
    },
    liveLink: 'https://www.youtube.com/watch?v=Bje2UZDSICU',
    githubLink: 'https://github.com/YubalHormiga/Proyectos-Personales/tree/main/04_WaterSportWorld',
    image: waterSportWorldImage,
    challenges: [
      'Diseñar un flujo de reservas intuitivo que permita a los usuarios seleccionar actividades y horarios con facilidad.',
      'Asegurar el manejo eficiente de datos de usuarios y reservas.',
    ],
    solutions: [
      'Implementación de MongoDB y Mongoose para una gestión óptima de los datos.',
      'Utilización de PrimeVue para mejorar la interfaz con componentes ricos e interactivos.',
    ],
    results: [
      'Flujo de reservas optimizado para garantizar una experiencia intuitiva y eficiente.',
      'Sistema seguro y preparado para ser escalado en entornos reales.',
    ],
  },
  techmix: {
    title: 'TechMix Projects 💻',
    description: `Un conjunto de proyectos prácticos diseñados para aprender y dominar Vue.js, desde conceptos básicos hasta técnicas avanzadas.`,
    summary:
      'Proyectos educativos que combinan diseño modular y enfoque progresivo para el aprendizaje de herramientas modernas.',
    features: [
      'Ejercicios técnicos y pruebas para desarrollar lógica de programación.',
      'Uso de herramientas modernas como Vite, Tailwind CSS y ESLint.',
      'Proyectos orientados a optimizar el rendimiento y la modularidad del código.',
    ],
    technologies: {
      frontend: ['Vue.js', 'Tailwind CSS', 'Vite', 'ESLint', 'Prettier'],
      backend: ['Planeado para futuras integraciones.'],
    },
    liveLink: 'https://techmixhub.netlify.app/',
    githubLink: 'https://github.com/YubalHormiga/TechMix',
    image: techMixImage,
    challenges: [
      'Diseñar proyectos educativos que combinen teoría y práctica en un flujo lógico.',
      'Optimizar la estructura del código para escalar y reutilizar componentes.',
    ],
    solutions: [
      'Uso de Tailwind CSS para acelerar el diseño y lograr estilos consistentes.',
      'Integración de ESLint y Prettier para mantener un código limpio y estándar.',
    ],
    results: [
      'Colección de proyectos educativos preparados para guiar a otros desarrolladores en su aprendizaje de Vue.js.',
      'Estructura modular y organizada que facilita la comprensión y el uso del código.',
    ],
  },
}
