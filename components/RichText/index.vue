<template>
  <div :class="sbRichTextClass">
    <RichTextRenderer :document="content" />
  </div>
</template>

<script lang="ts" setup>
// eslint-disable-next-line import/no-extraneous-dependencies
import { RichTextRenderer } from '@marvr/storyblok-rich-text-vue-renderer';

interface RichTextProps {
  content: any;
  lightOrDark?: 'light' | 'dark';
}

const props = withDefaults(defineProps<RichTextProps>(), {
  lightOrDark: 'dark',
});

const sbRichTextClass = computed(() => ({
  'sb-rich-text': true,
  'sb-rich-text--light': props.lightOrDark === 'light',
  'sb-rich-text--dark': props.lightOrDark === 'dark',
}));
</script>

<style lang="scss">
.sb-rich-text {
  &--dark {
    p,
    h3 {
      color: $secondary-color;
    }
  }

  &--light {
    p,
    h3 {
      color: $neutral-color-2;
    }
  }

  h2 {
    @extend %h1;
    margin-bottom: rem(24);
  }

  h3 {
    @extend %h2;
    margin-bottom: rem(20);
  }

  p {
    @extend %body;
    margin-bottom: rem(16);

    &:last-child {
      margin-bottom: 0;
    }
  }

  .special-underline {
    border-bottom: rem(9) solid $primary-color;
  }
}
</style>
