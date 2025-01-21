<template>
  <table class="w-full whitespace-nowrap text-left [&_td]:pb-2 [&_td:first-child]:w-full [&_td:last-child]:text-right">
    <tbody>
      <tr>
        <td>PHP</td>
        <td><SkillRate :score="5" /></td>
      </tr>
      <tr>
        <td>Laravel</td>
        <td><SkillRate :score="5" /></td>
      </tr>
      <tr>
        <td>JavaScript</td>
        <td><SkillRate :score="5" /></td>
      </tr>
      <tr>
        <td>TypeScript</td>
        <td><SkillRate :score="4" /></td>
      </tr>
      <tr>
        <td>Node.js</td>
        <td><SkillRate :score="4" /></td>
      </tr>
      <tr>
        <td>Docker</td>
        <td><SkillRate :score="3" /></td>
      </tr>
      <tr>
        <td>SQL</td>
        <td><SkillRate :score="3" /></td>
      </tr>
      <tr>
        <td>Git</td>
        <td><SkillRate :score="3" /></td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import SkillRate from './SkillRate.vue';
</script>
