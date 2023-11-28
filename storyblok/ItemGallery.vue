<template>
  <section class="item-gallery">
    <div v-for="item in blok.item" :key="item._uid" class="item-gallery__item">
      <NuxtImg
        v-if="item.image.filename"
        class="item-gallery__img"
        :src="item.image.filename"
        :alt="item.image.alt"
        width="300"
        height="300"
        loading="lazy"
      />
      <AgaLogo v-else class="item-gallery__img" />
      <p class="item-gallery__subtitle">{{ item.subtitle }}</p>
      <p class="item-gallery__title">{{ item.title }}</p>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ItemGalleryData } from '@/types/components/ItemGallery';

defineProps<ItemGalleryData>();
</script>

<style lang="scss" scoped>
.item-gallery {
  @include page-width;
  @include edge-padding;
  @include std-bot-spacing;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-columns: 1fr;
  gap: rem(32);

  @include mq(md) {
    grid-template-columns: repeat(3, 1fr);
  }

  &__item {
    background: $neutral-color-4;
    border-radius: rem(15);
    padding: rem(21);
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }

  &__img {
    max-width: rem(300);
    max-height: rem(300);
    width: 100%;
    height: 100%;
    display: block;
    margin: 0 auto;
    margin-bottom: rem(15);
  }

  &__subtitle {
    max-width: rem(300);
    width: 100%;
    color: $primary-color;
    @extend %h4;
    margin-bottom: rem(5);
  }

  &__title {
    max-width: rem(300);
    width: 100%;
    @extend %h2;
  }
}
</style>
