<script setup>
import { onMounted, ref } from 'vue'
import ThemeToggle from './ThemeTogle.vue'

const emailVisible = ref(false)
const copiedMessageVisible = ref(false)
const navVisible = ref(false)

const copyEmail = () => {
  navigator.clipboard.writeText('yubalhh@gmail.com')
  copiedMessageVisible.value = true
  setTimeout(() => {
    copiedMessageVisible.value = false
  }, 2000)
}

onMounted(() => {
  navVisible.value = true
})
</script>

<template>
  <Transition name="fade-scale" mode="out-in">
    <nav v-if="navVisible">
      <div class="logo">
        <RouterLink to="/">
          <span class="letter y">Y</span>
          <span class="letter h1">H</span>
          <span class="letter h2">H</span>
        </RouterLink>
      </div>

      <div class="ready-work" @mouseenter="emailVisible = true" @mouseleave="emailVisible = false">
        <span v-if="!emailVisible" class="fade-text">Ready to work!</span>
        <span v-else class="email fade-text" @click="copyEmail"> yubalhh@gmail.com </span>
        <Transition name="fade-opacity">
          <div v-if="copiedMessageVisible" class="copied-message">Copied!</div>
        </Transition>
      </div>

      <div>
        <ThemeToggle />
      </div>
    </nav>
  </Transition>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
  font-family: 'Bangers', serif;
  letter-spacing: 3px;
  padding: 0 0 0 3px;
}

.logo {
  position: relative;
  font-weight: 900;
  font-size: 5rem;
  display: inline-block;
  transition: color 0.3s ease;
}

.letter {
  display: inline-block;
  transition: color 0.3s ease;
}

.y {
  z-index: 1;
}

.h1 {
  position: absolute;
  left: 1.8rem;
  top: 0;
  z-index: 2;
}

.h2 {
  position: absolute;
  left: 3rem;
  top: 0;
  z-index: 3;
}

.ready-work {
  display: flex;
  gap: 1rem;
  cursor: pointer;
  padding: 1rem;
  font-weight: 700;
  transition:
    transform 0.3s ease,
    background-color 0.3s ease;
}

@media (max-width: 768px) {
  .ready-work {
    display: none;
  }
}

.ready-work:hover {
  transform: scale(1.05);
}

.copied-message {
  margin-left: 2rem;
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
  opacity: 1;
  transform: scale(1);
  color: var(--copied-message-color);
}

.copied-message:leave {
  opacity: 0;
  transform: scale(0.8);
}
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition:
    opacity 1.5s cubic-bezier(0.25, 1, 0.5, 1),
    transform 1.5s cubic-bezier(0.25, 1, 0.5, 1);
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.3);
}

.fade-opacity-enter-active,
.fade-opacity-leave-active {
  transition: opacity 0.5s ease;
}

.fade-opacity-enter-from,
.fade-opacity-leave-to {
  opacity: 0;
}

.fade-text {
  display: inline-block;
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}

.fade-text:hover {
  transform: scale(1.1);
  opacity: 0.8;
}
</style>
