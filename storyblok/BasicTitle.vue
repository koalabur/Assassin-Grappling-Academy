<template>
  <div class="basic-title">
    <RichText :content="blok.title" />
    <div v-if="blok.useDivider" class="basic-title__divider"></div>
  </div>
</template>
<script lang="ts" setup>
import type { BasicTitleData } from '@/types/components/BasicTitle';

defineProps<BasicTitleData>();
</script>

<style lang="scss" scoped>
.basic-title {
  display: flex;
  flex-flow: column nowrap;
  @include edge-padding;
  @include page-width;
  margin-bottom: rem(32);

  &__divider {
    width: 100%;
    height: rem(2);
    background: $primary-color;
    margin-top: rem(15);
  }
}
</style>
