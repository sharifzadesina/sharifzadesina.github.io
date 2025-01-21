<template>
  <div class="p-32">
    <h1 class="text-3xl mb-8 text-center">Welcome to my resume web page, I am <b>Sina Sharifzade</b>.</h1>
    <ul class="flex justify-center">
      <li>
        <RouterLink to="fullstack">View Full-Stack version</RouterLink>
      </li>
      <li class="mx-4">
        <span>or</span>
      </li>
      <li>
        <RouterLink to="backend">View Backend version</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>
