<template>
  <section class="fancy-page-title">
    <div class="fancy-page-title__col">
      <h2 class="fancy-page-title__subtitle">{{ blok.subtitle }}</h2>
      <h1 class="fancy-page-title__title">{{ blok.title }}</h1>
    </div>
    <div class="fancy-page-title__divider" />
    <RichText :content="blok.body.content" />
  </section>
</template>
<script lang="ts" setup>
import type { FancyPageTitleData } from '@/types/components/FancyPageTitle';

defineProps<FancyPageTitleData>();
</script>
<style lang="scss" scoped>
.fancy-page-title {
  display: flex;
  flex-flow: column nowrap;
  margin-top: #{fluid(30px, 92px)};
  @include page-width;
  @include edge-padding;
  @include std-bot-spacing;

  @include mq(md) {
    flex-flow: row nowrap;
  }

  &__col {
    max-width: rem(400);
    width: 100%;
  }

  &__divider {
    background: $primary-color;
    width: 100%;
    height: rem(3);
    margin: rem(15) 0;

    @include mq(md) {
      height: auto;
      max-height: rem(300);
      width: rem(3);
      margin: 0;
      margin-right: rem(30);
      margin-left: #{fluid(30px, 45px)};
    }
  }

  &__subtitle {
    @extend %h4;
    color: $primary-color;
    margin-bottom: rem(10);
  }

  &__title {
    @extend %h1;
  }
}
</style>
