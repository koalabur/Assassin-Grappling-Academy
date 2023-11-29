<template>
  <div class="spacer"></div>
</template>
<script lang="ts" setup>
import type { SpacerData } from '@/types/components/Spacer';

const props = defineProps<SpacerData>();
const data = computed(() => props);

const { blok } = data.value;

const desktopHeight = computed(() => `${blok.desktop}px`);
const mobileHeight = computed(() => `${blok.mobile}px`);
</script>

<style lang="scss" scoped>
.spacer {
  height: v-bind(mobileHeight);

  @include mq(lg) {
    height: v-bind(desktopHeight);
  }
}
</style>
