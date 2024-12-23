<script setup>
import { ref, onMounted } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
import FooterView from './views/FooterView.vue'
import MainView from './views/MainView.vue'

const route = useRoute()

const hasScrolled = ref(false)

const handleScroll = () => {
  if (window.scrollY > 100) {
    hasScrolled.value = true
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="container">
    <header>
      <NavigationBar />
    </header>
    <Transition name="slide-left">
      <RouterView />
    </Transition>
    <div v-show="!hasScrolled" class="spacer"></div>

    <Transition name="slide-left">
      <main v-if="route.name === 'home' && hasScrolled" class="main">
        <MainView />
      </main>
    </Transition>

    <footer v-if="hasScrolled">
      <FooterView />
    </footer>
  </div>
</template>

<style scoped>
.container {
  display: grid;
  min-height: 100dvh;
  grid-template-rows: auto 1fr auto;
  overflow-y: hidden;
}

.slide-left-enter-active,
.slide-left-leave-active {
  transition: transform 1s ease-out;
}

.slide-left-enter-from {
  transform: translateX(-100%);
}

.slide-left-enter-to {
  transform: translateX(0);
}

.slide-left-leave-from {
  transform: translateX(0);
}

.slide-left-leave-to {
  transform: translateX(-100%);
}

.spacer {
  height: 100rem;
  width: 100%;
}
</style>
