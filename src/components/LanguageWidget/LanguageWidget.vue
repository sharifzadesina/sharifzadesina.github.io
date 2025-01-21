<template>
  <Widget>
    <WidgetTitle label="Languages" icon="fa-solid fa-language" />
    <WidgetBody>
      <LanguageTable />
    </WidgetBody>
  </Widget>
</template>

<script setup lang="ts">
import Widget from '@/components/Widget/Widget.vue';
import WidgetTitle from '@/components/Widget/WidgetTitle.vue';
import WidgetBody from '@/components/Widget/WidgetBody.vue';
import LanguageTable from '@/components/LanguageWidget/LanguageTable.vue';
</script>
