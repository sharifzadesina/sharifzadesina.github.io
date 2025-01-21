<template>
  <header>
    <div class="container">
      <div class="lg:flex items-end mb-4">
        <div>
          <img src="@/assets/avatar.jpg" class="size-32">
        </div>
        <div class="lg:ml-8 lg:mt-0 mt-4">
          <h1 class="text-6xl	font-bold">Sina Sharifzade</h1>
          <p>{{ subtitle }}</p>
        </div>
      </div>
      <Navbar />
    </div>
  </header>
</template>

<script setup lang="ts">
import Navbar from '@/components/TheNavbar.vue';

interface Props {
  subtitle: string,
}
defineProps<Props>();
</script>
