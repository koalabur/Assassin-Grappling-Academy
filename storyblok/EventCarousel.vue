<template>
  <section class="carousel">
    <Carousel ref="carousel" :wrap-around="false" :breakpoints="breakpoints">
      <Slide
        v-for="item in blok.items"
        :key="item._uid"
        ref="slides"
        class="carousel__slide"
      >
        <NuxtImg
          class="carousel__img"
          :src="item.image.filename"
          :alt="item.image.alt"
          :width="useGetAssetWidth(item.image.filename)"
          :height="useGetAssetHeight(item.image.filename)"
        />
        <div class="carousel__content">
          <p v-if="item.subtitle" class="carousel__subtitle">
            {{ item.subtitle }}
          </p>
          <h3 class="carousel__title">{{ item.title }}</h3>
          <RichText class="carousel__body" :content="item.body.content" />
          <FancyButton
            :text="item.buttonText"
            :link="item.buttonLink.url || item.buttonLink.story?.url"
            size="sm"
            :window="item.buttonLink.target"
          />
        </div>
      </Slide>
    </Carousel>
    <div class="carousel__wrapper">
      <button class="carousel__btn carousel__btn--prev" @click="prev">
        <svg
          width="39"
          height="38"
          viewBox="0 0 39 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M38.0164 19.0082C38.0164 13.9284 36.05 9.14361 32.445 5.57138C28.7417 1.86806 23.8585 1.78358e-05 19.0082 1.74117e-05C14.125 1.69848e-05 9.27467 1.86806 5.57136 5.57138C1.96636 9.17638 -9.33969e-06 13.9284 -9.78378e-06 19.0082C-1.02279e-05 24.088 1.96636 28.8728 5.57135 32.445C12.978 39.8517 25.0384 39.8517 32.445 32.445C36.05 28.8728 38.0164 24.088 38.0164 19.0082ZM19.0082 36.05C14.6494 36.05 10.2906 34.3786 6.94781 31.0686C3.73608 27.8241 1.96636 23.5636 1.96636 19.0082C1.96636 14.4528 3.73608 10.1923 6.94781 6.94783C13.6007 0.294969 24.4157 0.29497 31.0358 6.94784C34.2803 10.1923 36.05 14.4528 36.05 19.0082C36.05 23.5636 34.2803 27.8241 31.0685 31.0686C27.7257 34.3786 23.3669 36.05 19.0082 36.05Z"
            fill="#FF0126"
          />
          <path
            d="M24.9073 18.025L14.8133 18.025L18.0578 14.7805C18.4511 14.3872 18.4511 13.7646 18.0578 13.4041C17.8612 13.2074 17.599 13.1091 17.3696 13.1091C17.1402 13.1091 16.878 13.2074 16.6814 13.4041L11.7655 18.32C11.3722 18.7132 11.3722 19.3359 11.7655 19.6964L16.6814 24.6123C17.0746 25.0056 17.6973 25.0056 18.0578 24.6123C18.4511 24.2191 18.4511 23.5964 18.0578 23.2359L14.8133 19.9914L24.9073 19.9914C25.4645 19.9914 25.8905 19.5653 25.8905 19.0082C25.8905 18.4511 25.4645 18.025 24.9073 18.025Z"
            fill="#FF0126"
          />
        </svg>
      </button>
      <button class="carousel__btn carousel__btn--next" @click="next">
        <svg
          width="39"
          height="38"
          viewBox="0 0 39 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.432617 18.9918C0.432617 24.0716 2.39898 28.8564 6.00398 32.4286C9.7073 36.1319 14.5904 38 19.4408 38C24.3239 38 29.1743 36.1319 32.8776 32.4286C36.4826 28.8236 38.449 24.0716 38.449 18.9918C38.449 13.912 36.4826 9.12721 32.8776 5.55498C25.471 -1.85166 13.4106 -1.85166 6.00398 5.55498C2.39898 9.12721 0.432617 13.912 0.432617 18.9918ZM19.4408 1.94998C23.7996 1.94998 28.1583 3.62139 31.5012 6.93143C34.7129 10.1759 36.4826 14.4364 36.4826 18.9918C36.4826 23.5472 34.7129 27.8077 31.5012 31.0522C24.8483 37.705 14.0333 37.705 7.41321 31.0522C4.16871 27.8077 2.39898 23.5472 2.39898 18.9918C2.39898 14.4364 4.16871 10.1759 7.38044 6.93143C10.7233 3.62139 15.082 1.94998 19.4408 1.94998Z"
            fill="#FF0126"
          />
          <path
            d="M13.5418 19.975H23.6358L20.3913 23.2195C19.998 23.6128 19.998 24.2354 20.3913 24.5959C20.5879 24.7926 20.8501 24.8909 21.0795 24.8909C21.3089 24.8909 21.5711 24.7926 21.7677 24.5959L26.6836 19.68C27.0769 19.2868 27.0769 18.6641 26.6836 18.3036L21.7677 13.3877C21.3745 12.9944 20.7518 12.9944 20.3913 13.3877C19.998 13.7809 19.998 14.4036 20.3913 14.7641L23.6358 18.0086H13.5418C12.9846 18.0086 12.5586 18.4347 12.5586 18.9918C12.5586 19.5489 12.9846 19.975 13.5418 19.975Z"
            fill="#FF0126"
          />
        </svg>
      </button>
    </div>
  </section>
</template>
<script lang="ts" setup>
import {
  useGetAssetWidth,
  useGetAssetHeight,
} from '@/composables/useGetAssetDimensions';
import type { EventCarouselData } from '@/types/components/EventCarousel';

const { $md } = useNuxtApp();

const props = defineProps<EventCarouselData>();

const carousel = ref();
const slides = ref<ComponentPublicInstance[] | null>();

const breakpoints = ref({
  1: {
    itemsToShow: 1,
    snapAlign: 'start',
  },
  768: {
    itemsToShow: 1.4,
    snapAlign: 'start',
  },
});

function next() {
  carousel.value.next();
}

function prev() {
  carousel.value.prev();
}

onMounted(() => {
  if (props.blok.items.length > 1 && !$md.value) {
    const slideHeights: number[] = [];

    slides.value!.forEach((slide) => {
      slideHeights.push(slide.$el.clientHeight);
    });

    const tallestSlide = Math.max(...slideHeights);

    for (let i = 0; i < slides.value!.length; i += 1) {
      slides.value![i].$el.style.minHeight = `${tallestSlide}px`;
    }
  }
});
</script>

<style lang="scss" scoped>
.carousel {
  @include mq(md) {
    width: 100%;
    max-width: #{fluid(530px, 1724px)};
    margin-right: 0;
    margin-left: auto;

    @include mq(2000px) {
      @include page-width;
    }
  }

  &__body {
    text-align: left;
  }

  &__btn {
    background: transparent;
    border: none;
    cursor: pointer;
    margin-right: rem(17);
    margin-top: rem(10);

    &:hover,
    &:focus {
      svg {
        path {
          fill: $secondary-color;
        }
      }
    }

    &--next {
      margin-right: 0;
    }

    svg {
      path {
        transition: 0.2s ease-in-out;
      }
    }
  }

  &__content {
    display: flex;
    flex-flow: column nowrap;
    gap: rem(15);
    align-items: flex-start;
    height: 100%;
  }

  &__img {
    max-width: 100%;
    height: rem(276);
    object-fit: cover;
    display: flex;

    @include mq(md) {
      height: auto;
    }
  }

  &__slide {
    display: flex;
    background: $neutral-color-4;
    white-space: normal;
    padding: #{fluid(10px, 30px)};
    gap: rem(29);
    flex-flow: column wrap;
    align-self: flex-start;
    justify-content: flex-start;
    border-left: rem(4) solid $neutral-color-2;
    border-right: rem(4) solid $neutral-color-2;

    @include mq(md) {
      width: rem(800);
      height: rem(435);
      margin-right: rem(21);
      flex-flow: row nowrap;
      border-radius: rem(14);
      border: none;
    }
  }

  &__subtitle {
    color: $primary-color;
    font-weight: 700;
  }

  &__title {
    @extend %h1;
    text-align: left;
  }

  &__wrapper {
    display: flex;
    align-items: flex-start;
    @include edge-padding;
    @include std-bot-spacing;

    @include mq(md) {
      padding: 0;
    }
  }
}
</style>
~/types/components/EventCarousel
