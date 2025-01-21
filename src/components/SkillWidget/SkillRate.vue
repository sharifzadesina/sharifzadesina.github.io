<template>
  <ul class="flex space-x-1">
    <li v-for="i in score" class="size-4 print:size-3 bg-gray-800"></li>
    <li v-for="i in (5 - score)" class="size-4 print:size-3 bg-gray-400"></li>
  </ul>
</template>

<script setup lang="ts">
interface Props {
  score: number,
}
defineProps<Props>();
</script>
