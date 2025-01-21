<template>
  <Widget>
    <WidgetTitle label="Skills" icon="fa-solid fa-puzzle-piece" />
    <WidgetBody>
      <SkillTable />
    </WidgetBody>
  </Widget>
</template>

<script setup lang="ts">
import Widget from '@/components/Widget/Widget.vue';
import WidgetTitle from '@/components/Widget/WidgetTitle.vue';
import WidgetBody from '@/components/Widget/WidgetBody.vue';
import SkillTable from '@/components/SkillWidget/SkillTable.vue';
</script>
