<template>
  <Widget>
    <WidgetTitle label="Experience" icon="fa-solid fa-briefcase" />
    <WidgetBody>
      <ExperienceRow title="Freelancer" subtitle="Full Stack Web Developer" from="2014" to="present">
        During the days of my study, I were also working on various projects.
        Most of them were Blockchain and Cryptocurrency related.
        You can find some of them in my <a href="https://github.com/sharifzadesina" target="_blank" class="underline">Github</a> page.
      </ExperienceRow>
    </WidgetBody>
  </Widget>
</template>

<script setup lang="ts">
import Widget from '@/components/Widget/Widget.vue';
import WidgetTitle from '@/components/Widget/WidgetTitle.vue';
import WidgetBody from '@/components/Widget/WidgetBody.vue';
import ExperienceRow from './ExperienceRow.vue';
</script>
