<template>
  <div class="flex border-b-4 border-gray-800">
    <div class="bg-gray-800 text-white py-2 px-3 flex items-center">
      <i :class="[icon, 'text-xl']"></i>
    </div>
    <div class="py-2 px-4">
      <h4 class="text-2xl print:text-xl font-semibold">{{ label }}</h4>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  icon: string,
  label?: string,
}
defineProps<Props>();
</script>
