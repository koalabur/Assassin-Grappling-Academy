<template>
  <Teleport to="body">
    <div
      v-if="image"
      class="image-modal"
      :class="{ 'image-modal--open': isOpen }"
    >
      <div class="image-modal__overlay" @click="closeModal" />
      <div class="image-modal__content">
        <button v-if="image" class="image-modal__close" @click="closeModal">
          close image
        </button>
        <NuxtImg
          v-if="image"
          class="image-modal__img"
          :src="image"
          :alt="alt || 'Modal Image'"
          :width="useGetAssetWidth(image)"
          :height="useGetAssetHeight(image)"
          loading="lazy"
        />
      </div>
    </div>
  </Teleport>
</template>
<script lang="ts" setup>
import {
  useGetAssetWidth,
  useGetAssetHeight,
} from '@/composables/useGetAssetDimensions';

interface ImageModalProps {
  openTrigger: boolean;
  image: string;
  alt?: string;
}

const props = defineProps<ImageModalProps>();

const isOpen = ref(false);

watch(
  () => props.openTrigger,
  () => {
    if (props.image) {
      isOpen.value = true;
      document.body.style.overflow = 'hidden';
    }
  },
);

function closeModal() {
  isOpen.value = false;
  document.body.style.overflow = 'auto';
}
</script>

<style lang="scss" scoped>
.image-modal {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  opacity: 0;
  transition: 0.15s ease-in-out;
  @include edge-padding;

  &__close {
    position: absolute;
    top: #{fluid(40px, 80px)};
    right: #{fluid(10px, 200px)};
    cursor: pointer;
    background: $primary-color;
    border: none;
    color: $neutral-color-2;
    padding: #{fluid(8px, 10px)} rem(16);
    border-radius: rem(12);
    font-size: #{fluid(12px, 16px)};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 120%;
    gap: rem(5);
  }

  &--open {
    visibility: visible;
    opacity: 1;
  }

  &__img {
    border-radius: rem(12);
    height: auto;
    max-height: 90vh;
    width: 100%;
  }

  &__overlay {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    cursor: pointer;
  }
}
</style>
