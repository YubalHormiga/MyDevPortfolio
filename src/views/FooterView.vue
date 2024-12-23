<script setup></script>

<template>
  <div>
    <RouterLink to="/about">
      <h2 class="link">About</h2>
    </RouterLink>
  </div>
</template>

<style scoped>
.link {
  cursor: pointer;
  color: #007bff;
  text-decoration: underline;
}

.link:hover {
  color: #0056b3;
}
</style>
