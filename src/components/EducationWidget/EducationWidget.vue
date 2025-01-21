<template>
  <Widget>
    <WidgetTitle label="Education" icon="fa-solid fa-graduation-cap" />
    <WidgetBody>
      <ExperienceRow title="Computer Software Engineering" subtitle="Azad University of Tabriz" from="2015" to="2019">
        <p>Bachelor's Degree</p>
      </ExperienceRow>
    </WidgetBody>
  </Widget>
</template>

<script setup lang="ts">
import Widget from '@/components/Widget/Widget.vue';
import WidgetTitle from '@/components/Widget/WidgetTitle.vue';
import WidgetBody from '@/components/Widget/WidgetBody.vue';
import ExperienceRow from '@/components/ExperienceWidget/ExperienceRow.vue';
</script>
