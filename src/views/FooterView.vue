<script setup>
const currentYear = new Date().getFullYear()
</script>

<template>
  <div class="footerContainer">
    <div class="footerWrapper">
      <div class="aboutSection">
        <div class="aboutLink">
          <RouterLink to="/about">
            <a class="link">About</a>
          </RouterLink>
        </div>
        <div class="linkedinLink">
          <a href="https://www.linkedin.com/in/yubal-hormiga/" target="_blank">Linkedin</a>
        </div>
        <div class="githubLink">
          <a href="https://github.com/YubalHormiga" target="_blank">GitHub</a>
        </div>
      </div>
    </div>
    <div class="footerCredit">
      <h3>Yubal Hormiga {{ currentYear }}</h3>
    </div>
  </div>
</template>

<style scoped>
.footerContainer {
  display: flex;
  flex-direction: column;
  font-size: 2.4rem;
  margin-top: 3rem;
}
@media (min-width: 768px) {
  .footerContainer {
    flex-direction: row;
    justify-content: space-between;
  }
}

.aboutSection {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 2rem;
}
@media (min-width: 768px) {
  .aboutSection {
    flex-direction: row;
    align-items: center;
  }
}
.footerCredit h3 {
  font-size: 2.4rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}
.footerCredit h3::before {
  content: '©';
  font-size: 3rem;
  margin-right: 0.5rem;
}

a {
  text-decoration: none;
}
</style>
