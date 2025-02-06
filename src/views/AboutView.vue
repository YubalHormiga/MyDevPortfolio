<script setup>
import { ref } from 'vue'
import { profileData } from '@/data/profileData.js'
import profilePhoto from '@/assets/images/mi-foto.png'

const certificationsPerPage = 3
const currentPage = ref(0)

const nextPage = () => {
  if ((currentPage.value + 1) * certificationsPerPage < profileData.certifications.length) {
    currentPage.value++
  }
}

const prevPage = () => {
  if (currentPage.value > 0) {
    currentPage.value--
  }
}

const paginatedCertifications = () => {
  const start = currentPage.value * certificationsPerPage
  const end = start + certificationsPerPage
  return profileData.certifications.slice(start, end)
}
</script>

<template>
  <div class="about-container">
    <div class="profile-photo-container">
      <div class="profile-photo">
        <img :src="profilePhoto" alt="Foto de Yubal Hormiga" />
      </div>
      <div class="about-me">
        <h3>Sobre <span>mí</span></h3>
      </div>
    </div>

    <div class="bio">
      <p v-for="(paragraph, index) in profileData.bio" :key="index">{{ paragraph }}</p>
    </div>

    <div class="additional-info">
      <div class="education">
        <h4>Educación</h4>
        <p v-for="(item, index) in profileData.education" :key="index">{{ item }}</p>
      </div>

      <div class="certifications">
        <h4>Certificaciones</h4>
        <ul>
          <li v-for="(certification, index) in paginatedCertifications()" :key="index">
            <a :href="certification.link" target="_blank" class="certification-title">
              {{ certification.title }}
            </a>
            <p>Institución: {{ certification.institution }}</p>
            <p>Fecha: {{ certification.date }}</p>
            <p class="certification-description">{{ certification.description }}</p>
            <p>Habilidades: {{ certification.skills.join(', ') }}</p>
          </li>
        </ul>
        <div class="navigation">
          <button
            @click="prevPage"
            :disabled="currentPage === 0"
            :class="{ disabled: currentPage === 0 }"
          >
            Anterior
          </button>
          <span
            >{{ currentPage + 1 }} /
            {{ Math.ceil(profileData.certifications.length / certificationsPerPage) }}</span
          >
          <button
            @click="nextPage"
            :disabled="
              (currentPage + 1) * certificationsPerPage >= profileData.certifications.length
            "
            :class="{
              disabled:
                (currentPage + 1) * certificationsPerPage >= profileData.certifications.length,
            }"
          >
            Siguiente
          </button>
        </div>
      </div>

      <div class="tech-stack">
        <h4>Stack Tecnológico</h4>
        <ul>
          <li v-for="(tech, index) in profileData.techStack" :key="index">{{ tech }}</li>
        </ul>
      </div>
      <div class="learnings">
        <h4>En continuo aprendizaje</h4>
        <ul>
          <li v-for="(learnigItem, index) in profileData.learning" :key="index">
            <p>{{ learnigItem }}</p>
          </li>
        </ul>
      </div>
      <div class="skills">
        <h4>Habilidades</h4>
        <ul>
          <li v-for="(skill, index) in profileData.skills" :key="index">{{ skill }}</li>
        </ul>
      </div>

      <div class="languages">
        <h4>Idiomas</h4>
        <ul>
          <li>Español: {{ profileData.languages.spanish }}</li>
          <li>
            <a
              href="https://drive.google.com/file/d/1qiKdtHr5qrSFSrJiJ_SJYkDqmETvJryU/view"
              target="_blank"
            >
              Inglés: {{ profileData.languages.english }}
            </a>
          </li>
        </ul>
      </div>

      <div class="work-experience">
        <h4>Experiencia laboral</h4>
        <div v-for="(job, index) in profileData.workExperience" :key="index" class="job">
          <h5>{{ job.title }}</h5>
          <p>({{ job.period }})</p>
          <li v-for="(responsibility, i) in job.responsibilities" :key="i">{{ responsibility }}</li>
        </div>
      </div>

      <div class="download-cv">
        <a href="/YubalCV.pdf" download>Descargar CV en PDF</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
p {
  margin-bottom: 3rem;
}

h4 {
  font-weight: 500;
  margin-bottom: 1rem;
  font-size: 2rem;
}

h5 {
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: var(--subheading);
}

ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: var(--primary);
  text-decoration: underline;
}
a:hover {
  color: var(--li-hover-color);
}
a.see-more {
  color: var(--primary-light);
  font-weight: bold;
  text-decoration: none;
}

a.see-less {
  color: var(--primary-light);
  text-decoration: none;
}

a.see-more:hover,
a.see-less:hover {
  color: var(--highlight-light);
}

.about-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.profile-photo-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.profile-photo {
  display: flex;
  justify-content: center;
}

.about-me {
  display: flex;
  text-transform: uppercase;
}

.about-me h3,
.about-me span {
  display: block;
  font-size: 8rem;
  font-weight: bold;
  color: var(--primary);
}

.education,
.certifications,
.tech-stack,
.learnings,
.skills,
.languages,
.work-experience {
  margin-bottom: 3rem;
}

.education p,
.certifications p,
.learnings p,
.languages p,
.job p {
  margin-bottom: 0;
}
.certification-title {
  color: var(--tertiary);
}
.work-experience h5 {
  font-size: 1.6rem;
  color: var(--tertiary);
}
.work-experience p {
  color: var(--tertiary);
}

.additional-info {
  margin-top: 2rem;
}

.job {
  margin-bottom: 2rem;
}

.download-cv {
  text-align: center;
  margin-top: 3rem;
}

.navigation {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 1rem;
  gap: 2rem;
}

button {
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

button.disabled {
  background-color: var(--disabled);
  cursor: not-allowed;
}

@media (min-width: 768px) {
  .profile-photo-container {
    flex-direction: row;
    align-items: center;
  }
}
</style>
