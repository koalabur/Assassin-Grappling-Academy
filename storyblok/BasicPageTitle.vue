<template>
  <section class="basic-page-title">
    <h1 class="basic-page-title__title">{{ blok.title }}</h1>
    <p class="basic-page-title__subtitle">{{ blok.subtitle }}</p>
  </section>
</template>
<script lang="ts" setup>
import type { BasicPageTitleData } from '@/types/components/BasicPageTitle';

const props = defineProps<BasicPageTitleData>();

const alignment = computed(() => props.blok.alignText);
</script>
<style lang="scss" scoped>
.basic-page-title {
  margin-top: #{fluid(30px, 92px)};
  display: flex;
  flex-flow: column nowrap;
  gap: rem(19);
  @include page-width;
  @include edge-padding;
  @include std-bot-spacing;

  &__subtitle {
    font-weight: 700;
    text-align: v-bind(alignment);
  }

  &__title {
    @extend %h1;
    text-align: v-bind(alignment);
  }
}
</style>
