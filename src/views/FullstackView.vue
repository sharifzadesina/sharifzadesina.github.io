<template>
  <Header subtitle="Full-Stack Web Developer" class="my-6" />
  <main>
    <div class="container">
      <div class="lg:grid grid-cols-12 gap-8">
        <div class="col-span-8">
          <FullstackSummary class="mb-6" />
          <FullstackExperienceWidget class="mb-6" />
          <ProjectWidget class="mb-6" />
          <EducationWidget class="mb-6" />
        </div>
        <div class="col-span-4">
          <PersonalWidget class="mb-6" />
          <FullstackSkillWidget class="mb-6" />
          <LanguageWidget class="mb-6" />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import Header from '@/components/TheHeader.vue';
import FullstackSummary from '@/components/Summary/FullstackSummary.vue';
import FullstackExperienceWidget from '@/components/ExperienceWidget/FullstackExperienceWidget.vue';
import EducationWidget from '@/components/EducationWidget/EducationWidget.vue';
import PersonalWidget from '@/components/PersonalWidget/PersonalWidget.vue';
import FullstackSkillWidget from '@/components/SkillWidget/FullstackSkillWidget.vue';
import LanguageWidget from '@/components/LanguageWidget/LanguageWidget.vue';
import ProjectWidget from '@/components/ProjectWidget/ProjectWidget.vue';
</script>
