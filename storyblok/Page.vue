<!-- eslint-disable vue/no-template-shadow -->
<template>
  <StoryblokComponent
    v-for="blok in blok.body"
    :key="blok._uid"
    v-editable="blok"
    :blok="blok"
  />
</template>

<script setup>
// eslint-disable-next-line vue/require-default-prop
defineProps({ blok: Object });
</script>
