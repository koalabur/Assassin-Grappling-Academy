<template>
  <section class="hero">
    <div class="hero__row">
      <div class="hero__col">
        <NuxtImg
          class="hero__bg"
          :src="blok.desktopBackgroundImage.filename"
          :alt="blok.desktopBackgroundImage.alt"
          :width="useGetAssetWidth(blok.desktopBackgroundImage.filename)"
          :height="useGetAssetHeight(blok.desktopBackgroundImage.filename)"
        />
        <client-only>
          <h1 v-if="!$md" class="hero__title">
            {{ blok.title }}
          </h1>
        </client-only>
      </div>
      <div class="hero__col hero__col--lower">
        <client-only>
          <h1 v-if="$md" class="hero__title">
            {{ blok.title }}
          </h1>
        </client-only>
        <h2 class="hero__subtitle">
          {{ blok.subtitle }}
        </h2>
        <div class="hero__buttons">
          <FancyButton
            :text="blok.buttonText"
            :link="blok.buttonLink.url || blok.buttonLink.story?.url"
            :window="blok.buttonLink.target || blok.buttonLink.story?.target"
            size="lg"
          />
          <FancyButton
            :text="blok.secondaryButtonText"
            :link="
              blok.secondaryButtonLink.url ||
              blok.secondaryButtonLink.story?.url
            "
            size="lg"
            type="secondary"
          />
        </div>
        <client-only>
          <MotifAgaLogo v-if="$md" class="hero__motif" />
        </client-only>
      </div>
    </div>
    <div v-if="blok.highlights!.length >= 1" class="hero__highlights">
      <div
        v-for="item in blok.highlights"
        :key="item._uid"
        class="hero__highlights-col"
      >
        <NuxtImg
          class="hero__highlights-img"
          :src="item.image.filename"
          :alt="item.image.alt"
          :width="useGetAssetWidth(item.image.filename)"
          :height="useGetAssetHeight(item.image.filename)"
        />
        <div class="hero__highlights-content">
          <h3 class="hero__highlights-title">{{ item.title }}</h3>
          <FancyButton
            :text="item.buttonText"
            :link="item.buttonLink.url || item.buttonLink.story?.url"
            size="sm"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import {
  useGetAssetWidth,
  useGetAssetHeight,
} from '@/composables/useGetAssetDimensions';
import type { HeroData } from '@/types/components/Hero';

defineProps<HeroData>();

const { $md } = useNuxtApp();
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: rem(73);

  &__bg {
    width: 100%;
    height: auto;
    object-fit: cover;
    height: #{fluid(230px, 400px)};
    max-width: 100%;

    @include mq(md) {
      clip-path: polygon(20% 0, 100% 0%, 100% 100%, 0% 100%);
      height: 100%;
    }
  }

  &__buttons {
    display: flex;
    flex-flow: column nowrap;
    gap: rem(21);

    @include mq(sm) {
      flex-flow: row nowrap;
    }
  }

  &__col {
    display: flex;
    flex-flow: column nowrap;
    position: relative;

    @include mq(md) {
      max-width: 50%;
      width: 100%;
      order: 2;
      justify-content: center;
    }

    &--lower {
      @include edge-padding;

      @include mq(md) {
        order: 1;
        align-items: last baseline;
      }
    }
  }

  &__highlights {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    gap: rem(21);
    margin-top: rem(21);
    @include page-width;

    @include mq(md) {
      flex-flow: row nowrap;
      margin-top: rem(-25);
      z-index: 1;
      @include edge-padding;
    }

    &-col {
      background: $neutral-color-2;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
      width: 100%;

      @include mq(md) {
        flex-flow: row nowrap;
        box-shadow: 0 0 rem(20) rgba(0, 0, 0, 0.15);
        justify-content: flex-start;
      }
    }

    &-content {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;

      @include mq(md) {
        align-items: flex-start;
        justify-content: center;
        padding: rem(20);
      }
    }

    &-img {
      width: 100%;
      object-fit: cover;
      height: rem(230);

      @include mq(md) {
        max-width: rem(250);
        height: 100%;
      }
    }

    &-title {
      @extend %h3;
      margin-bottom: #{fluid(8px, 22px)};
    }
  }

  &__row {
    display: flex;
    flex-flow: column nowrap;
    gap: rem(21);

    @include mq(md) {
      flex-flow: row nowrap;
      width: 100%;
      gap: 0;
      min-height: rem(425);
    }
  }

  &__motif {
    position: absolute;
    z-index: -1;
    left: rem(-140);
  }

  &__subtitle {
    @extend %h4;
    margin-bottom: #{fluid(17px, 30px)};
    max-width: rem(600);
  }

  &__title {
    color: $neutral-color-2;
    @extend %h1;
    @include edge-padding;
    z-index: 1;
    position: absolute;
    height: 100%;
    display: inline-flex;
    align-items: center;

    @include mq(md) {
      position: static;
      color: $secondary-color;
      height: auto;
      padding: 0;
      max-width: rem(544);
      margin-bottom: rem(20);
    }
  }
}
</style>
