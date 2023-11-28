<template>
  <div>
    <client-only>
      <MotifAgaLogo
        v-if="showOnMobile"
        class="floating-motif"
        :style="leftOrRight"
        :usage="blok.leftOrRight"
      />
    </client-only>
  </div>
</template>

<script lang="ts" setup>
import type { FloatingMotifData } from '@/types/components/FloatingMotif';

const props = defineProps<FloatingMotifData>();
const data = computed(() => props);
const { blok } = data.value;

const { $md } = useNuxtApp();
const showOnMobile = computed(() => blok.showOnMobile || $md.value);

const location = computed(
  () => `calc(${blok.location}${blok.usePercentOrPixel} + 5vw)`,
);
const mobileLocation = computed(() =>
  blok.useMobileLocation
    ? `${blok.mobileLocation}${blok.usePercentOrPixel}`
    : location.value,
);
const leftOrRight = computed(() =>
  blok.leftOrRight === 'left' ? 'left: 0' : 'right: 0',
);
</script>

<style lang="scss" scoped>
.floating-motif {
  width: max-content;
  position: absolute;
  top: v-bind(mobileLocation);
  z-index: -3;
  overflow: hidden;

  @include mq(md) {
    top: v-bind(location);
  }
}
</style>
