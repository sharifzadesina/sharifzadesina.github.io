<template>
  <Widget>
    <WidgetTitle label="Projects" icon="fa-solid fa-folder" />
    <WidgetBody class="space-y-4">
      <ProjectRow title="sanitizer" subtitle="Sanitization library for PHP and Laravel" github="https://github.com/sharifzadesina">
        This library is usable with both Laravel and pure PHP,
        It helps to filter request input before using them.
      </ProjectRow>
      <ProjectRow title="nwjs-vue" subtitle="Clean NW.js & Vue.js quick start boilerplate" github="https://github.com/sharifzadesina">
        Just a boilerplate and a starter point for desktop applications using NW.js and Vue.js.
      </ProjectRow>
      <ProjectRow title="pouch-js" subtitle="Library to work with various cryptocurrencies" github="https://github.com/sharifzadesina">
        An advanced library that supports multiple cryptocurrencies like BTC, ETH, XMR, TRON,
        using this library you can easily receive/send/mange your crypto money.
      </ProjectRow>
    </WidgetBody>
  </Widget>
</template>

<script setup lang="ts">
import Widget from '@/components/Widget/Widget.vue';
import WidgetTitle from '@/components/Widget/WidgetTitle.vue';
import WidgetBody from '@/components/Widget/WidgetBody.vue';
import ProjectRow from './ProjectRow.vue';
</script>
