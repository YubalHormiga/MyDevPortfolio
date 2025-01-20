<script setup>
import { computed } from 'vue'
const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <div class="footer-container">
    <div class="footer-wrapper">
      <div class="about-section">
        <RouterLink to="/about" class="link">About</RouterLink>
        <a
          href="https://www.linkedin.com/in/yubal-hormiga/"
          target="_blank"
          rel="noopener noreferrer"
          class="link"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/YubalHormiga"
          target="_blank"
          rel="noopener noreferrer"
          class="link"
        >
          GitHub
        </a>
      </div>
    </div>
    <div class="footer-credit">
      <h3>Yubal Hormiga {{ currentYear }}</h3>
    </div>
  </div>
</template>

<style scoped>
.footer-container {
  width: 95%;
  margin: 0 auto;
  max-width: var(--max-width);
  display: flex;
  flex-direction: column;
  font-size: medium;
  margin-top: 3rem;
  background-color: var(--background);
  color: var(--text-color);
  padding: 2rem;
  border-top: 2px solid var(--primary);
}

.about-section {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 2rem;
}

.footer-credit h3 {
  display: flex;
  font-size: medium;
  justify-content: center;
  color: var(--primary);
}

.footer-credit h3::before {
  content: '©';
  font-size: medium;
  margin-right: 0.5rem;
  color: var(--primary);
}

@media (min-width: 768px) {
  .footer-container {
    flex-direction: row;
    justify-content: space-between;
    font-size: 2.4rem;
  }
  .about-section {
    align-items: center;
  }
}
</style>
