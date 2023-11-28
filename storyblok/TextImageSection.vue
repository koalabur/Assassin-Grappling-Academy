<template>
  <section :id="blok.id" class="text-image-section">
    <SectionTitle v-if="blok.title" :title="blok.title" />
    <div :class="textImageSectionContainerClass">
      <div class="text-image-section__content">
        <RichText
          :content="blok.body.content"
          :light-or-dark="invertLightOrDark"
        />
        <client-only>
          <NuxtImg
            v-if="!$md"
            class="text-image-section__img"
            :src="blok.image.filename"
            :alt="blok.image.alt"
            :width="useGetAssetWidth(blok.image.filename)"
            :height="useGetAssetHeight(blok.image.filename)"
            loading="lazy"
          />
        </client-only>
        <div
          v-if="
            (blok.ctaText && blok.ctaLink.url) ||
            (blok.ctaText && blok.ctaLink.story?.url)
          "
          class="text-image-section__cta"
        >
          <FancyButton
            :link="blok.ctaLink.url || blok.ctaLink.story?.url"
            :text="blok.ctaText"
            size="naked"
            :light-or-dark-icon="invertLightOrDark"
          />
        </div>
      </div>
      <client-only>
        <NuxtImg
          v-if="$md"
          class="text-image-section__img"
          :src="blok.image.filename"
          :alt="blok.image.alt"
          :width="useGetAssetWidth(blok.image.filename)"
          :height="useGetAssetHeight(blok.image.filename)"
          loading="lazy"
        />
      </client-only>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {
  useGetAssetWidth,
  useGetAssetHeight,
} from '@/composables/useGetAssetDimensions';
import type { TextImageSectionData } from '@/types/components/TextImageSection';

const { $md } = useNuxtApp();

const props = defineProps<TextImageSectionData>();
const data = computed(() => props);
const { blok } = data.value;

const textImageSectionContainerClass = computed(() => ({
  'text-image-section__container': true,
  'text-image-section__container--light':
    blok.useLightOrDark === 'light' && blok.useBackgroundColor,
  'text-image-section__container--dark':
    blok.useLightOrDark === 'dark' && blok.useBackgroundColor,
  'text-image-section__container--reverse': blok.orientation,
}));

const invertLightOrDark = computed(() => {
  if (blok.useBackgroundColor) {
    if (blok.useLightOrDark === 'light') {
      return 'dark';
    }

    return 'light';
  }

  return 'dark';
});
</script>

<style lang="scss" scoped>
.text-image-section {
  @include edge-padding;
  @include page-width;
  @include std-bot-spacing;

  &__container {
    border-radius: rem(10);

    @include mq(md) {
      display: flex;
      align-items: center;
      gap: rem(45);
    }

    &--dark {
      background-color: $secondary-color;
      padding: #{fluid(20px, 35px)} #{fluid(15px, 40px)};
    }

    &--light {
      background-color: $neutral-color-4;
      padding: #{fluid(20px, 35px)} #{fluid(15px, 40px)};
    }

    &--reverse {
      @include mq(md) {
        flex-direction: row-reverse;
      }
    }
  }

  &__cta {
    margin-top: #{fluid(20px, 40px)};
  }

  &__img {
    max-width: 100%;
    height: auto;
    margin-top: rem(16);
    border-radius: rem(13);

    @include mq(md) {
      margin-top: 0;
    }
  }
}
</style>
