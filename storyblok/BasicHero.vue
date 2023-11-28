<template>
  <section class="basic-hero">
    <div class="basic-hero__content" :style="{ alignItems: alignment }">
      <h1 class="basic-hero__title">{{ blok.title }}</h1>
      <p class="basic-hero__subtitle">{{ blok.subtitle }}</p>
    </div>
    <NuxtImg
      class="basic-hero__bg"
      :src="blok.backgroundImage.filename"
      :alt="blok.backgroundImage.alt"
      :width="useGetAssetWidth(blok.backgroundImage.filename)"
      :height="useGetAssetHeight(blok.backgroundImage.filename)"
      loading="lazy"
    />
  </section>
</template>

<script lang="ts" setup>
import {
  useGetAssetWidth,
  useGetAssetHeight,
} from '@/composables/useGetAssetDimensions';
import type { BasicHeroData } from '@/types/components/BasicHero';

const props = defineProps<BasicHeroData>();
const { blok } = props;

const alignment = computed(() => {
  switch (blok.textPosition) {
    case 'left':
      return 'flex-start';
    case 'center':
      return 'center';
    case 'right':
      return 'flex-end';
    default:
      return 'flex-start';
  }
});
</script>

<style lang="scss" scoped>
.basic-hero {
  display: flex;
  flex-direction: column;
  position: relative;
  height: rem(240);
  @include std-bot-spacing;

  @include mq(md) {
    height: rem(460);
  }

  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    z-index: -1;
  }

  &__content {
    @include page-width;
    @include edge-padding;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    height: 100%;
  }

  &__subtitle {
    @extend %h4;
    color: $neutral-color-2;
    margin-bottom: rem(15);
    max-width: rem(550);
  }

  &__title {
    @extend %h1;
    color: $neutral-color-2;
    margin-bottom: rem(15);
  }
}
</style>
