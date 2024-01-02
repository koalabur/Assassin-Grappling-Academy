<template>
  <section class="staff-cards">
    <div
      v-for="staff in blok.staffCard"
      :key="staff._uid"
      class="staff-cards__card"
    >
      <NuxtImg
        v-if="staff.image?.filename"
        class="staff-cards__img"
        :src="staff.image?.filename"
        :alt="staff.image?.alt"
        :width="useGetAssetWidth(staff.image?.filename)"
        :height="useGetAssetHeight(staff.image?.filename)"
        loading="lazy"
      />
      <AgaLogo v-else class="staff-cards__img" />
      <div class="staff-cards__content">
        <h2 class="staff-cards__content-name">
          {{ staff.firstName }} <strong>{{ staff.lastName }}</strong>
        </h2>
        <RichText :content="staff.biography" />
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import {
  useGetAssetWidth,
  useGetAssetHeight,
} from '@/composables/useGetAssetDimensions';
import type { StaffCardsData } from '@/types/components/StaffCards';

defineProps<StaffCardsData>();
</script>

<style lang="scss" scoped>
.staff-cards {
  display: flex;
  flex-flow: column nowrap;
  gap: #{fluid(40px, 60px)};
  @include edge-padding;
  @include page-width;
  @include std-bot-spacing;

  &__card {
    display: flex;
    flex-flow: column nowrap;

    @include mq(md) {
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
      gap: rem(41);
    }
  }

  &__content {
    display: flex;
    flex-flow: column nowrap;
    max-width: rem(558);

    &-name {
      @extend %h2;
      margin-bottom: rem(10);
      text-align: center;

      @include mq(md) {
        text-align: left;
      }

      strong {
        color: $primary-color;
      }
    }
  }

  &__img {
    max-width: rem(212);
    max-height: rem(212);
    width: 100%;
    height: 100%;
    display: block;
    margin: 0 auto;
    margin-bottom: rem(15);

    @include mq(md) {
      margin: 0;
    }
  }
}
</style>
