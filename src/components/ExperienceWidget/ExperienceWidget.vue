<template>
  <Widget>
    <WidgetTitle label="Experience" icon="fa-solid fa-briefcase" />
    <WidgetBody>
      <slot></slot>
    </WidgetBody>
  </Widget>
</template>

<script setup lang="ts">
import Widget from '@/components/Widget/Widget.vue';
import WidgetTitle from '@/components/Widget/WidgetTitle.vue';
import WidgetBody from '@/components/Widget/WidgetBody.vue';
</script>
