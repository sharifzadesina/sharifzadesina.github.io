<template>
  <table class="w-full whitespace-nowrap text-left [&_td]:pb-2 [&_td:first-child]:w-full [&_td:last-child]:text-right">
    <tbody>
      <tr>
        <td>Persian</td>
        <td><SkillRate :score="5" /></td>
      </tr>
      <tr>
        <td>Azerbaijani</td>
        <td><SkillRate :score="5" /></td>
      </tr>
      <tr>
        <td>English</td>
        <td><SkillRate :score="4" /></td>
      </tr>
      <tr>
        <td>Turkish</td>
        <td><SkillRate :score="3" /></td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import SkillRate from '@/components/SkillWidget/SkillRate.vue';
</script>
