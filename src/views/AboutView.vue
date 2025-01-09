<script setup>
import { profileData } from '@/data/profileData.js'
import profilePhoto from '@/assets/images/mi-foto.png'
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
      <div class="tech-stack">
        <h4>Stack Tecnológico</h4>
        <ul>
          <li v-for="(tech, index) in profileData.techStack" :key="index">{{ tech }}</li>
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
        <p>Español: {{ profileData.languages.spanish }}</p>
        <a
          href="https://drive.google.com/file/d/1qiKdtHr5qrSFSrJiJ_SJYkDqmETvJryU/view"
          target="_blank"
        >
          Inglés: {{ profileData.languages.english }}
        </a>
      </div>
      <div class="work-experience">
        <h4>Experiencia laboral</h4>
        <div v-for="(job, index) in profileData.workExperience" :key="index" class="job">
          <h5>{{ job.title }}</h5>
          <p>({{ job.period }})</p>
          <p v-for="(responsibility, i) in job.responsibilities" :key="i">{{ responsibility }}</p>
        </div>
      </div>
      <div class="download-cv">
        <a href="/public/YubalCV.pdf" download>Descargar CV en PDF</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
}

.education,
.tech-stack,
.skills,
.languages,
.work-experience {
  margin-bottom: 3rem;
}

.education p,
.languages p,
.job p {
  margin-bottom: 0;
}

.languages p,
.languages a {
  color: var(--text-secondary);
}

.work-experience p {
  font-size: 1.3rem;
}

p {
  margin-bottom: 3rem;
}

h4 {
  margin-bottom: 1rem;
  color: var(--primary-dark);
}

h5 {
  font-weight: 500;
  margin-bottom: 0.5rem;
}

ul {
  list-style-type: none;
  padding: 0;
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

a {
  color: var(--paragraph);
  text-decoration: underline;
}

a:hover {
  color: var(--tertiary-dark);
  text-decoration: underline;
  text-underline-offset: 0.3rem;
}

@media (min-width: 768px) {
  .profile-photo-container {
    flex-direction: row;
    align-items: center;
  }
}
</style>
