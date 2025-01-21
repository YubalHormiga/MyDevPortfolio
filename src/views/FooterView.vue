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
  display: flex;
  flex-direction: column;
  font-size: large;
  margin: 2rem 0;
}

.about-section {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 2rem;
}

.footer-credit h3 {
  display: flex;
  font-size: large;
  justify-content: center;
  color: var(--primary);
}

.footer-credit h3::before {
  content: '©';
  font-size: large;
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
  .footer-credit h3,
  .footer-credit h3::before {
    font-size: 2.4rem;
  }
}
</style>
