<script setup></script>

<template>
  <div class="hero-section">
    <h1 class="hero-title">
      <span class="hero-title-name">Hi! I’m <span>Yubal</span>,</span>
      <span class="hero-title-role">
        a Junior Full Stack <br />
        Web Developer
      </span>
    </h1>
  </div>
</template>

<style scoped>
.hero-section {
  margin-top: 5rem;
  text-align: left;
  padding-left: 4px;
  font-family: 'Bangers', serif;
  letter-spacing: 3px;
}

.hero-title {
  font-size: 8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  line-height: 1.6;
  display: flex;
  flex-direction: column;
}

.hero-title-name,
.hero-title-role {
  display: block;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s forwards;
}

.hero-title-name {
  animation-delay: 0.2s;
}
.hero-title-name span {
  color: var(--text-color);
}

.hero-title-role {
  animation-delay: 0.5s;
}
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 4rem;
  }
  .hero-section {
    display: flex;
  }
}
</style>
