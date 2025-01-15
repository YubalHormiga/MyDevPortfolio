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
        <li v-for="(item, index) in profileData.education" :key="index">{{ item }}</li>
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
  margin-bottom: 1rem;
  color: var(--heading);
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

.about-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  color: var(--text-color);
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

@media (min-width: 768px) {
  .profile-photo-container {
    flex-direction: row;
    align-items: center;
  }
}
</style>
