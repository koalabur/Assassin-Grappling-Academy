<template>
  <section class="vertical-cards">
    <div class="vertical-cards__line" />
    <div
      v-for="card in blok.cards"
      :key="card._uid"
      class="vertical-cards__card"
    >
      <div class="vertical-cards__card-wrapper">
        <NuxtImg
          v-if="card.image.filename"
          class="vertical-cards__card-img"
          :src="card.image.filename"
          :alt="card.image.alt"
          :width="useGetAssetWidth(card.image.filename)"
          :height="useGetAssetHeight(card.image.filename)"
        />
      </div>
      <div class="vertical-cards__card-content">
        <h3 class="vertical-cards__card-title">{{ card.title }}</h3>
        <p class="vertical-cards__card-subtitle">{{ card.subtitle }}</p>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import {
  useGetAssetWidth,
  useGetAssetHeight,
} from '@/composables/useGetAssetDimensions';
import type { VerticalCardsData } from '@/types/components/VerticalCards';

defineProps<VerticalCardsData>();
</script>
<style lang="scss" scoped>
.vertical-cards {
  display: flex;
  flex-flow: column nowrap;
  position: relative;
  align-items: center;
  gap: #{fluid(30px, 50px)};
  @include page-width;
  @include std-bot-spacing;
  @include edge-padding;

  &__card {
    display: flex;
    flex-flow: row nowrap;
    background: $secondary-color;
    border-radius: rem(10);
    padding: #{fluid(13px, 23px)};
    align-items: center;
    gap: #{fluid(17px, 30px)};

    &-content {
      display: flex;
      flex-flow: column nowrap;
      gap: rem(10);
    }

    &-img {
      width: #{fluid(65px, 115px)};
      height: #{fluid(65px, 115px)};
      object-fit: cover;
      border-radius: 50%;
      display: block;
    }

    &-subtitle {
      color: $neutral-color-2;
    }

    &-title {
      @extend %h3;
      color: $neutral-color-2;
    }

    &-wrapper {
      min-width: #{fluid(65px, 115px)};
      min-height: #{fluid(65px, 115px)};
      background: $neutral-color-3;
      border-radius: 50%;
    }
  }

  &__line {
    position: absolute;
    top: rem(-40);
    left: 50%;
    width: rem(3);
    height: 100%;
    background: $primary-color;
    transform: translateX(-50%);
    z-index: -1;

    @include mq(md) {
      top: rem(-70);
    }
  }
}
</style>
