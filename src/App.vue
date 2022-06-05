<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/layout/Navbar.vue'
</script>

<template>
  <Navbar />
  <RouterView />
</template>

<style>
@import '@/assets/base.css';

.container {
  max-width: 1280px;
  margin: 0 auto;
}

a {
  text-decoration: none;
}
</style>
