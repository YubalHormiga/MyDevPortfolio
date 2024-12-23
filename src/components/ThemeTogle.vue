<script setup>
import { ref, onMounted } from 'vue'
import darkModeIcon from '@/assets/icons/dark_mode.svg'
import lightModeIcon from '@/assets/icons/light_mode.svg'

const isDarkMode = ref(localStorage.getItem('theme') !== 'light')

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  const theme = isDarkMode.value ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
}

onMounted(() => {
  document.documentElement.setAttribute('data-theme', isDarkMode.value ? 'dark' : 'light')
})
</script>

<template>
  <button @click="toggleTheme" aria-label="Toggle Theme">
    <img :src="isDarkMode ? darkModeIcon : lightModeIcon" alt="Theme Icon" />
  </button>
</template>

<style scoped>
button {
  background: none;
  border: none;
  cursor: pointer;
}

img {
  width: 44px;
  height: 24px;
}
</style>
