<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <div class="footer-container">
    <div class="footer-wrapper">
      <div class="about-section">
        <RouterLink to="/about" class="link"> About </RouterLink>
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
  font-size: 2.4rem;
  margin-top: 3rem;
  color: var(--text-secondary);
}

.about-section {
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 2rem;
}

.footer-credit h3 {
  display: flex;
  font-size: 2.4rem;
  justify-content: center;
}

.footer-credit h3::before {
  content: '©';
  font-size: 3rem;
  margin-right: 0.5rem;
}

a {
  text-decoration: none;
  color: var(--secondary);
}

a:hover {
  color: var(--tertiary);
}

@media (min-width: 768px) {
  .footer-container {
    flex-direction: row;
    justify-content: space-between;
  }
  .about-section {
    align-items: center;
  }
}
</style>
