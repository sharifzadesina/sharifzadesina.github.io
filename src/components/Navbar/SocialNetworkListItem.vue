<template>
  <li :class="{ 'flex-grow': !shrink }">
    <a :href="link" class="block py-2 px-8 print:px-4 text-center text-white">
      <i :class="[icon, { 'mr-2': !!label }]"></i>
      <span v-if="!!label">{{ label }}</span>
    </a>
  </li>
</template>

<script setup lang="ts">
interface Props {
  icon: string,
  link: string,
  label?: string,
  shrink?: boolean,
}
defineProps<Props>();
</script>
