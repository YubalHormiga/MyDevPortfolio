import canineConnectImage from '@/assets/images/canineConnect.webp'
import waterSportWorldImage from '@/assets/images/waterSportWorld.webp'
import techMixImage from '@/assets/images/techMix.webp'

export const projectDetails = {
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
    image: canineConnectImage,
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
    image: waterSportWorldImage,
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
    image: techMixImage,
  },
}
