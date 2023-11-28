<template>
  <section class="image-gallery">
    <div
      v-for="(item, index) in blok.images"
      :key="item.id"
      class="image-gallery__item"
    >
      <NuxtImg
        class="image-gallery__img"
        :src="item.filename"
        :alt="item.alt || `Image ${index + 1}`"
        width="289"
        height="225"
        loading="lazy"
        @click="openModal(item.filename, item.alt || `Image ${index + 1}`)"
      />
    </div>
    <ImageModal
      :image="modal.image"
      :alt="modal.alt"
      :open-trigger="modal.openTrigger"
    />
  </section>
</template>

<script lang="ts" setup>
import type { ImageGalleryData } from '@/types/components/ImageGallery';

defineProps<ImageGalleryData>();

const modal = ref({ image: '', alt: '', openTrigger: false });

function openModal(image: string, alt: string) {
  modal.value.openTrigger = !modal.value.openTrigger;
  modal.value.image = image;
  modal.value.alt = alt;
}
</script>

<style lang="scss" scoped>
.image-gallery {
  @include page-width;
  @include edge-padding;
  @include std-bot-spacing;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-columns: 1fr;
  gap: #{fluid(5px, 25px)};

  @include mq(md) {
    grid-template-columns: repeat(4, 1fr);
  }

  &__item {
    border-radius: rem(15);
  }

  &__img {
    max-width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    cursor: crosshair;
  }
}
</style>
