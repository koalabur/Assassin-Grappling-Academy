<template>
  <NuxtLink
    class="fancy-button"
    :class="{
      'fancy-button--naked': size === 'naked',
      'fancy-button--secondary': type === 'secondary',
    }"
    :to="link"
    :target="window"
  >
    <span :class="`fancy-button__text fancy-button__text--${size}`">
      {{ text }}
    </span>
    <div :class="fancyButtonIconClass">
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.3125 13C0.3125 16.3906 1.625 19.5844 4.03125 21.9688C6.50313 24.4406 9.7625 25.6875 13 25.6875C16.2594 25.6875 19.4969 24.4406 21.9688 21.9688C24.375 19.5625 25.6875 16.3906 25.6875 13C25.6875 9.60938 24.375 6.41563 21.9688 4.03125C17.025 -0.912497 8.975 -0.912497 4.03125 4.03125C1.625 6.41563 0.3125 9.60938 0.3125 13ZM13 1.625C15.9094 1.625 18.8188 2.74063 21.05 4.95C23.1938 7.11563 24.375 9.95938 24.375 13C24.375 16.0406 23.1938 18.8844 21.05 21.05C16.6094 25.4906 9.39062 25.4906 4.97187 21.05C2.80625 18.8844 1.625 16.0406 1.625 13C1.625 9.95938 2.80625 7.11563 4.95 4.95C7.18125 2.74063 10.0906 1.625 13 1.625Z"
          fill="white"
        />
        <path
          d="M9.0625 13.6562H15.8L13.6344 15.8219C13.3719 16.0844 13.3719 16.5 13.6344 16.7406C13.7656 16.8719 13.9406 16.9375 14.0938 16.9375C14.2469 16.9375 14.4219 16.8719 14.5531 16.7406L17.8344 13.4594C18.0969 13.1969 18.0969 12.7812 17.8344 12.5406L14.5531 9.25938C14.2906 8.99687 13.875 8.99687 13.6344 9.25938C13.3719 9.52188 13.3719 9.9375 13.6344 10.1781L15.8 12.3437H9.0625C8.69062 12.3437 8.40625 12.6281 8.40625 13C8.40625 13.3719 8.69062 13.6562 9.0625 13.6562Z"
          fill="white"
        />
      </svg>
    </div>
  </NuxtLink>
</template>
<script setup lang="ts">
interface FancyButtonData {
  text: string;
  link: string | undefined;
  window?: string;
  size: 'lg' | 'sm' | 'naked';
  lightOrDarkIcon?: 'light' | 'dark';
  type?: 'primary' | 'secondary';
}

const props = withDefaults(defineProps<FancyButtonData>(), {
  window: '_self',
  lightOrDarkIcon: 'light',
  type: 'primary',
});

const fancyButtonIconClass = computed(() => ({
  'fancy-button__icon': true,
  'fancy-button__icon--light': props.lightOrDarkIcon === 'light',
  'fancy-button__icon--dark': props.lightOrDarkIcon === 'dark',
  'fancy-button__icon--naked': props.size === 'naked',
  'fancy-button__icon--secondary': props.type === 'secondary',
}));
</script>

<style scoped lang="scss">
.fancy-button {
  background: $primary-color;
  color: $neutral-color-2;
  text-decoration: none;
  display: inline-flex;
  flex-flow: row nowrap;
  max-width: fit-content;
  transition: 0.2s ease-in-out;

  &:hover &__icon {
    background: $primary-color;
  }

  &--secondary {
    background: $neutral-color-2;
    color: $secondary-color;
    border: rem(1) solid $primary-color;

    &:hover {
      border-color: $secondary-color;
      .fancy-button__icon--secondary {
        background: $secondary-color;
      }
    }
  }

  &--naked {
    background: transparent;
    align-items: center;
    border-bottom: rem(1) solid transparent;

    &:hover {
      border-color: $primary-color;
    }

    &:hover .fancy-button__icon--naked {
      background: transparent;
    }
  }

  &__icon {
    transition: 0.2s ease-in-out;
    background: $secondary-color;
    display: flex;
    align-items: center;
    padding: rem(14);

    &--dark {
      svg {
        path {
          fill: $secondary-color;
        }
      }
    }

    &--light {
      svg {
        path {
          fill: $neutral-color-2;
        }
      }
    }

    &--naked {
      background: transparent;
      padding: rem(8);
    }

    &--secondary {
      background: $primary-color;
    }
  }

  &__text {
    padding: rem(18) rem(32);
    font-weight: 700;

    &--lg {
      font-size: #{fluid(16px, 24px)};
    }

    &--naked {
      font-size: #{fluid(16px, 18px)};
      color: $primary-color;
      padding: 0;
    }

    &--sm {
      font-size: #{fluid(13px, 14px)};
      padding: rem(14) rem(28);
      align-items: center;
      display: inline-flex;
    }
  }
}
</style>
