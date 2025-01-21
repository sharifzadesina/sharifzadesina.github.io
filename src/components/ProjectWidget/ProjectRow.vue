<template>
  <div class="lg:flex">
    <div class="lg:flex-none lg:w-2/6"></div>
    <div>
      <h2 class="font-semibold text-lg print:text-base">
        <a :href="github" target="_blank">
          {{ title }}<i class="fa-brands fa-github ms-2 align-middle"></i>
        </a>
      </h2>
      <p class="font-light">{{ subtitle }}</p>
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string,
  subtitle: string,
  github: string,
}
defineProps<Props>();
</script>
