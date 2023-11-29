<template>
  <Teleport to="body">
    <div class="notice-modal" :class="{ 'notice-modal--open': showModal }">
      <div class="notice-modal__overlay" />
      <div class="notice-modal__content">
        <h2 class="notice-modal__subtitle">{{ notice.subtitle }}</h2>
        <h1 class="notice-modal__title">{{ notice.title }}</h1>
        <RichText class="notice-modal__body" :content="notice.body.content" />
        <button class="notice-modal__close" @click="closeModal">
          {{ notice.button }}
        </button>
      </div>
    </div>
  </Teleport>
</template>
<script lang="ts" setup>
import type { Notice } from '@/types/components/Notice';

const isPreview = useRuntimeConfig().public.NODE_ENV !== 'production';
const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get('cdn/stories/default-layout', {
  version: isPreview ? 'draft' : 'published',
  resolve_links: 'url',
});
const story = ref(data.story.content);

const notice = computed<Notice>(() => ({
  title: story.value.title,
  subtitle: story.value.subtitle,
  body: story.value.body,
  button: story.value.button,
  useNotice: story.value.useNotice,
}));

function closeModal() {
  showModal.value = false;
  document.body.style.overflow = 'auto';
  noticeCookie.value = 'seen';
}

const showModal = ref(false);

const noticeCookie = useCookie('aga_notice', {
  maxAge: 86400, // 24 hours
  sameSite: 'strict',
});

if (noticeCookie.value !== 'seen' && notice.value.useNotice) {
  noticeCookie.value = 'seen';
  showModal.value = true;
  if (process.client) {
    document.body.style.overflow = 'hidden';
  }
}
</script>

<style lang="scss" scoped>
.notice-modal {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  opacity: 0;
  transition: 0.15s ease-in-out;
  @include edge-padding;

  &--open {
    visibility: visible;
    opacity: 1;
  }

  &__body {
    max-width: rem(500);
    text-align: center;
    margin-bottom: rem(45);
  }

  &__close {
    @extend %h4;
    cursor: pointer;
    background: $neutral-color-1;
    border: none;
    color: $secondary-color;
    padding: #{fluid(8px, 10px)} #{fluid(20px, 50px)};
    border-radius: rem(4);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 120%;
    gap: rem(5);
    transition: 0.2s ease-in-out;

    &:hover {
      box-shadow: 0 rem(4) rem(6) rgba(0, 0, 0, 0.4);
    }
  }

  &__content {
    background: $neutral-color-2;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: #{fluid(30px, 50px)} #{fluid(20px, 45px)};
    border-radius: rem(12);
    width: 100%;
    max-width: #{fluid(600px, 750px)};
  }

  &__img {
    border-radius: rem(12);
  }

  &__overlay {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    cursor: not-allowed;
  }

  &__subtitle {
    @extend %h4;
    max-width: rem(500);
    color: $primary-color;
    margin-bottom: rem(22);
    text-align: center;
  }

  &__title {
    @extend %h2;
    max-width: rem(500);
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-bottom: rem(20);
  }
}
</style>
