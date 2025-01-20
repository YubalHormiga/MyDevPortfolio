<script setup>
import { ref, onMounted, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
import FooterView from './views/FooterView.vue'
import MainView from './views/MainView.vue'

const route = useRoute()

const hasScrolled = ref(false)

const handleScroll = () => {
  if (window.scrollY > 50) {
    hasScrolled.value = true
  }
}

watch(route, () => {
  window.scrollTo(0, 0)
})

onMounted(() => {
  // Detectar navegadores internos de redes sociales (LinkedIn, Facebook, etc.)
  const userAgent = navigator.userAgent || navigator.vendor || window.opera
  const isSocialMediaInAppBrowser = /LinkedIn|FBAN|FBAV|Instagram/.test(userAgent)

  if (isSocialMediaInAppBrowser) {
    // Redirigir al usuario hacia un navegador externo
    const redirectUrl = window.location.href
    alert(
      'Para la mejor experiencia, abre este enlace en un navegador externo como Chrome o Safari.',
    )
    window.location.href = `intent://${redirectUrl.replace(/^https?:\/\//, '')}#Intent;scheme=https;package=com.android.chrome;end;`
  }

  // Escuchar el evento de desplazamiento
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="header">
    <NavigationBar />
  </header>
  <div class="main-container container">
    <Transition name="slide-left">
      <RouterView />
    </Transition>
    <div v-show="!hasScrolled" class="spacer"></div>

    <Transition name="slide-left">
      <main v-if="route.name === 'home' && hasScrolled" class="main">
        <MainView />
      </main>
    </Transition>
  </div>
  <footer v-if="hasScrolled" class="footer">
    <FooterView />
  </footer>
</template>

<style scoped>
.header,
.footer {
  width: 95%;
  margin: 0 auto;
  max-width: var(--max-width);
}

.main-container {
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

a {
  text-decoration: none;
  color: var(--primary);
}

a:hover {
  color: var(--highlight);
}
</style>
