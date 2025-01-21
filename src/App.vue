<template>
  <Header />
  <main class="mb-8">
    <div class="container">
      <div class="grid grid-cols-12 gap-8">
        <div class="col-span-8">
          <Summary class="mb-8" />
          <ExperienceWidget class="mb-8" />
          <ProjectWidget class="mb-8" />
          <EducationWidget />
        </div>
        <div class="col-span-4">
          <PersonalWidget class="mb-8" />
          <SkillWidget class="mb-8" />
          <LanguageWidget />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import Header from '@/components/TheHeader.vue';
import Summary from '@/components/Summary.vue';
import ExperienceWidget from '@/components/ExperienceWidget/ExperienceWidget.vue';
import EducationWidget from '@/components/EducationWidget/EducationWidget.vue';
import PersonalWidget from '@/components/PersonalWidget/PersonalWidget.vue';
import SkillWidget from '@/components/SkillWidget/SkillWidget.vue';
import LanguageWidget from '@/components/LanguageWidget/LanguageWidget.vue';
import ProjectWidget from '@/components/ProjectWidget/ProjectWidget.vue';
</script>
