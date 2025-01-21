<template>
  <Widget>
    <WidgetTitle label="Personal Info" icon="fa-solid fa-user-large" />
    <WidgetBody>
      <PersonalTable />
    </WidgetBody>
  </Widget>
</template>

<script setup lang="ts">
import Widget from '@/components/Widget/Widget.vue';
import WidgetTitle from '@/components/Widget/WidgetTitle.vue';
import WidgetBody from '@/components/Widget/WidgetBody.vue';
import PersonalTable from './PersonalTable.vue';
</script>
