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
const marginTop = computed(() => `${blok.marginTop || 0}px`);
const marginTopMobile = computed(() => `${blok.marginTopMobile || 0}px`);
</script>

<style lang="scss" scoped>
.spacer {
  height: v-bind(mobileHeight);
  margin-top: v-bind(marginTopMobile);

  @include mq(lg) {
    height: v-bind(desktopHeight);
    margin-top: v-bind(marginTop);
  }
}
</style>
