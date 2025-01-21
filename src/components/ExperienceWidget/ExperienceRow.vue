<template>
  <div class="lg:flex">
    <div class="lg:flex-none lg:w-2/6">
      <ul class="flex space-x-2 print:space-x-1">
        <li>{{ from }}</li>
        <li>-</li>
        <li>{{ to }}</li>
      </ul>
    </div>
    <div>
      <h2 class="font-semibold text-lg print:text-base">{{ title }}</h2>
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
  from: string,
  to: string,
}
defineProps<Props>();
</script>
