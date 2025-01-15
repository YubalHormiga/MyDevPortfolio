<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import darkModeIcon from '@/assets/icons/dark_mode.svg'
import lightModeIcon from '@/assets/icons/light_mode.svg'

const isDarkMode = ref(localStorage.getItem('theme') !== 'light')

const themeIcon = computed(() => (isDarkMode.value ? darkModeIcon : lightModeIcon))

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
}

watch(isDarkMode, (newValue) => {
  const theme = newValue ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
})

onMounted(() => {
  const initialTheme = isDarkMode.value ? 'dark' : 'light'
  document.documentElement.setAttribute('data-theme', initialTheme)
  localStorage.setItem('theme', initialTheme)
})
</script>

<template>
  <button @click="toggleTheme" aria-label="Toggle Theme" aria-live="polite">
    <img :src="themeIcon" alt="Theme Icon" />
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
