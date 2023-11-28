<template>
  <section class="feature-list">
    <h2 class="feature-list__title">{{ blok.title }}</h2>
    <div class="feature-list__container">
      <div
        v-for="feat in blok.feature"
        :key="feat._uid"
        class="feature-list__single"
      >
        <h3 class="feature-list__single-title">{{ feat.title }}</h3>
        <RichText :content="feat.body.content" />
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
import type { FeatureListData } from '@/types/components/FeatureList';

defineProps<FeatureListData>();
</script>

<style lang="scss" scoped>
.feature-list {
  @include edge-padding;
  @include page-width;
  @include std-bot-spacing;

  &__container {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    gap: rem(20);

    @include mq(md) {
      flex-flow: row nowrap;
    }
  }

  &__single {
    flex: 1;

    &-title {
      font-size: #{fluid(28px, 32px)};
      margin-bottom: rem(10);
      color: $primary-color;
    }
  }

  &__title {
    @extend %h2;
    margin-bottom: #{fluid(30px, 50px)};
  }
}
</style>
