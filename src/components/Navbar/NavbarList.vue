<template>
  <ul class="lg:flex items-center">
    <SocialNetworkListItem
      class="bg-slate-600"
      icon="fa-solid fa-envelope"
      link="mailto:sharifzadesina@gmail.com"
      label="sharifzadesina@gmail.com"
    />
    <SocialNetworkListItem
      class="bg-cyan-600"
      icon="fa-solid fa-mobile"
      link="tel:+989146437614"
      label="+98-914-643-7614"
    />
    <SocialNetworkListItem
      class="bg-gray-800"
      icon="fa-brands fa-github"
      link="https://github.com/sharifzadesina"
      label="@sharifzadesina"
    />
    <SocialNetworkListItem
      class="bg-[#f97316] flex-grow-0"
      icon="fa-brands fa-stack-overflow"
      link="https://stackoverflow.com/users/3783664"
      shrink
    />
    <SocialNetworkListItem
      class="bg-[#3b82f6]"
      icon="fa-brands fa-linkedin"
      link="https://www.linkedin.com/in/sharifzadesina"
      shrink
    />
  </ul>
</template>

<script setup lang="ts">
import SocialNetworkListItem from './SocialNetworkListItem.vue';
</script>
