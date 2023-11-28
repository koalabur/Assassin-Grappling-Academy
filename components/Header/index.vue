<template>
  <header class="header">
    <client-only>
      <div v-if="$lg" class="header__sub">
        <div class="header__sub-inner">
          <NuxtLink
            :href="businessInfo.googleMapsLink"
            target="_blank"
            class="header__sub-link"
          >
            {{ businessInfo.address }}
          </NuxtLink>
          <NuxtLink
            :href="`tel:${businessInfo.businessNumber}`"
            target="_blank"
            class="header__sub-link"
          >
            {{ businessInfo.businessNumber }}
          </NuxtLink>
          <div v-if="$lg" :class="headerSocials">
            <NuxtLink
              v-for="item in socialMedia"
              :key="item._uid"
              :href="item.link.url"
              target="_blank"
              class="header__socials-link"
            >
              <NuxtImg
                :src="item.icon.filename"
                :alt="item.icon.alt"
                class="header__socials-icon"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </client-only>
    <div class="header__main">
      <NuxtLink to="/" no-rel class="header__logo">
        <NuxtImg
          :src="logo.filename"
          :alt="logo.alt"
          :width="useGetAssetWidth(logo.filename)"
          :height="useGetAssetHeight(logo.filename)"
          class="header__logo-icon"
        />
      </NuxtLink>
      <client-only>
        <div
          v-if="!$lg"
          :class="hamburgerClass"
          role="button"
          :aria-expanded="store.showNav"
          @click="toggleNav"
        >
          <span />
          <span />
          <span />
          <span />
        </div>
      </client-only>
      <client-only>
        <nav
          v-if="$lg"
          class="header__nav"
          role="navigation"
          aria-label="Main Menu"
        >
          <NuxtLink
            v-for="item in navMenu"
            :key="item._uid"
            :to="item.pageLink.story?.url"
            no-rel
            class="header__nav-link"
            active-class="header__nav-link--active"
          >
            {{ item.name || item.pageLink.story?.slug }}
          </NuxtLink>
        </nav>
      </client-only>
      <client-only>
        <NuxtLink
          v-if="
            (headerCta.url && headerCta.text && $lg) ||
            (headerCta.story.url && headerCta.text && $lg)
          "
          :to="headerCta.url || headerCta.story.url"
          :target="headerCta.target"
          no-rel
          class="header__cta"
          active-class="header__cta--active"
        >
          {{ headerCta.text }}
        </NuxtLink>
      </client-only>
    </div>
  </header>
  <client-only>
    <div v-if="!$lg" :class="mobileNavClass">
      <p class="mobile-nav__title">Menu:</p>
      <div class="mobile-nav__divider" />
      <nav role="navigation" aria-label="Main Menu" class="mobile-nav__nav">
        <NuxtLink
          v-for="item in navMenu"
          :key="item._uid"
          :to="item.pageLink.story?.url"
          no-rel
          class="mobile-nav__link"
          active-class="mobile-nav__link--active"
        >
          {{ item.name || item.pageLink.story?.name }}
        </NuxtLink>
      </nav>
      <NuxtLink
        v-if="
          (headerCta.url && headerCta.text && !$lg) ||
          (headerCta.story.url && headerCta.text && !$lg)
        "
        :to="headerCta.url || headerCta.story.url"
        :target="headerCta.target"
        no-rel
        class="mobile-nav__cta"
        active-class="mobile-nav__link--active"
      >
        {{ headerCta.text }}
      </NuxtLink>
      <div class="mobile-nav__lower">
        <div class="mobile-nav__socials">
          <NuxtLink
            v-for="item in socialMedia"
            :key="item._uid"
            :href="item.link.url"
            target="_blank"
          >
            <NuxtImg
              :src="item.icon.filename"
              :alt="item.icon.alt"
              class="mobile-nav__socials-icon"
            />
          </NuxtLink>
        </div>
        <div class="mobile-nav__info">
          <NuxtLink
            :href="businessInfo.googleMapsLink"
            target="_blank"
            class="mobile-nav__info-link"
          >
            {{ businessInfo.address }}
          </NuxtLink>
          <NuxtLink
            :href="`tel:${businessInfo.businessNumber}`"
            target="_blank"
            class="mobile-nav__info-link"
          >
            {{ businessInfo.businessNumber }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </client-only>
</template>

<script setup lang="ts">
import {
  useGetAssetWidth,
  useGetAssetHeight,
} from '@/composables/useGetAssetDimensions';
import { useNavStore } from '@/stores/nav';
import type {
  Logo,
  NavMenu,
  SocialMedia,
  HeaderCta,
  BusinessInfo,
} from '@/types/components/Header';

const { $lg } = useNuxtApp();
const store = useNavStore();

const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get('cdn/stories/default-layout', {
  version: 'draft',
  resolve_links: 'url',
});
const story = ref(data.story.content.header[0]);

const logo = computed<Logo>(() => story.value.logo);
const navMenu = computed<NavMenu>(() => story.value.menu);
const socialMedia = computed<SocialMedia>(() => story.value.socialMedia);
const headerCta = computed<HeaderCta>(() => ({
  ...story.value.callToActionLink,
  text: story.value.callToActionText,
}));
const businessInfo = computed<BusinessInfo>(() => ({
  address: story.value.address,
  googleMapsLink: story.value.googleMapsLink,
  businessNumber: story.value.businessNumber,
}));

function toggleNav() {
  store.toggleNav();
  document.body.style.overflow = store.showNav ? 'hidden' : 'auto';
}

const hamburgerClass = computed(() =>
  store.showNav
    ? 'header__hamburger header__hamburger--open'
    : 'header__hamburger',
);

const mobileNavClass = computed(() =>
  store.showNav ? 'mobile-nav mobile-nav--open' : 'mobile-nav',
);

const headerSocials = computed(() =>
  store.showNav ? 'header__socials header__socials--open' : 'header__socials',
);
</script>

<style lang="scss" scoped>
.header {
  background: $secondary-color;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  z-index: 10;
  position: relative;

  &__cta {
    text-decoration: none;
    background: $primary-color;
    color: $neutral-color-2;
    font-weight: 700;
    padding: rem(10) rem(20);
    display: block;
    max-width: max-content;
    font-size: rem(16);
    transition: 0.2s ease-in-out;

    &--active,
    &:hover {
      background: $neutral-color-2;
      color: $primary-color;
    }
  }

  &__hamburger {
    width: rem(50);
    height: rem(41);
    position: relative;
    transform: rotate(0deg);
    transition: 0.5s ease-in-out;
    cursor: pointer;

    &--open {
      span {
        &:nth-child(1) {
          top: rem(18);
          width: 0%;
          left: 50%;
        }

        &:nth-child(2) {
          transform: rotate(45deg);
        }

        &:nth-child(3) {
          transform: rotate(-45deg);
        }

        &:nth-child(4) {
          top: rem(18);
          width: 0%;
          left: 50%;
        }
      }
    }

    span {
      display: block;
      position: absolute;
      height: rem(4);
      width: 100%;
      background: $primary-color;
      border-radius: rem(5);
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      transition: 0.25s ease-in-out;

      &:nth-child(1) {
        top: 0;
      }

      &:nth-child(2),
      &:nth-child(3) {
        top: rem(18);
      }

      &:nth-child(4) {
        top: rem(36);
      }
    }
  }

  &__logo {
    &-icon {
      width: #{fluid(54px, 145px)};
      height: auto;
    }
  }

  &__main {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding-top: rem(5);
    padding-bottom: rem(5);
    @include edge-padding;

    @include mq(lg) {
      gap: #{fluid(0px, 120px)};
      @include page-width;
    }
  }

  &__nav {
    display: none;
    visibility: hidden;

    @include mq(lg) {
      gap: rem(30);
      display: flex;
      flex-flow: row nowrap;
      visibility: visible;
    }

    &-link {
      font-size: #{fluid(14px, 17px)};
      font-weight: 700;
      color: $neutral-color-1;
      text-decoration: none;
      text-transform: capitalize;
      border-top: rem(2) solid transparent;
      padding: rem(5) 0;
      transition: 0.2s ease-in-out;

      &--active,
      &:hover {
        color: $neutral-color-2;
        border-color: $primary-color;
      }
    }
    &--open {
      position: fixed;
      height: 60%;
      width: 100%;
      display: block;
      visibility: visible;
      z-index: 10;
      background: blue;
    }
  }

  &__socials {
    display: flex;
    flex-flow: row nowrap;
    gap: rem(20);
    align-items: center;

    &-icon {
      width: rem(24);
      height: auto;
      filter: invert(100%) sepia(98%) saturate(0%) hue-rotate(327deg)
        brightness(104%) contrast(102%);

      &:hover {
        filter: invert(29%) sepia(99%) saturate(7283%) hue-rotate(359deg)
          brightness(89%) contrast(127%);
      }
    }

    &-link {
      display: flex;
    }
  }

  &__sub {
    background: $neutral-color-1;
    width: 100%;
    padding: rem(10) 0;

    &-inner {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-flow: row nowrap;
      @include edge-padding;
      @include page-width;
    }

    &-link {
      color: $secondary-color;
      margin-right: rem(31);
      font-size: rem(16);
      font-weight: 700;

      &:nth-child(2) {
        margin-right: rem(61);
      }
    }
  }
}

.mobile-nav {
  padding-top: rem(53);
  visibility: hidden;
  position: fixed;
  top: #{fluid(67px, 160px)}; // match with padding-bottom
  padding-bottom: #{fluid(67px, 160px)};
  left: 0;
  width: 100%;
  height: 100%;
  background: $secondary-color;
  z-index: 10;
  transition:
    visibility 0.25s ease-in-out,
    opacity 0.25s ease-in-out;
  opacity: 0;
  overflow-y: scroll;
  display: block;

  @include mq(lg) {
    display: none;
    visibility: hidden;
  }

  &__cta {
    text-decoration: none;
    background: $primary-color;
    color: $neutral-color-2;
    font-weight: 700;
    font-size: rem(16);
    padding: rem(10) rem(20);
    display: block;
    max-width: max-content;
    margin-bottom: rem(45);
    font-size: rem(22);
    transition: 0.2s ease-in-out;
    margin-left: #{fluid(12px, 20px)};

    &--active,
    &:hover {
      background: $neutral-color-2;
      color: $primary-color;
    }
  }

  &__divider {
    margin-bottom: rem(31);
    width: 92%;
    background: $primary-color;
    height: rem(1);
    margin-left: auto;
    margin-right: auto;
  }

  &__info {
    display: flex;
    flex-flow: column nowrap;
    gap: rem(13);
    align-items: flex-end;

    &-link {
      color: $secondary-color;
      font-weight: 700;
      font-size: rem(18);
      text-align: right;
    }
  }

  &__nav {
    display: flex;
    flex-flow: column nowrap;
    @include edge-padding;
  }

  &--open {
    visibility: visible;
    opacity: 1;
  }

  &__lower {
    display: flex;
    flex-flow: row nowrap;
    gap: rem(25);
    margin-top: rem(15);
    align-items: center;
    justify-content: space-between;
    padding: rem(40) 0;
    @include edge-padding;
    background: $neutral-color-1;
  }

  &__socials {
    display: flex;
    flex-flow: row nowrap;
    gap: rem(19);

    &-icon {
      width: rem(20);
      filter: invert(100%) sepia(98%) saturate(0%) hue-rotate(327deg)
        brightness(104%) contrast(102%);
    }
  }

  &__title {
    font-size: rem(46);
    color: $neutral-color-2;
    font-weight: 700;
    margin-bottom: rem(15);
    @include edge-padding;
  }

  &__link {
    font-size: rem(22);
    margin-bottom: rem(25);
    color: $neutral-color-1;
    font-weight: 700;
    text-decoration: none;

    &--active {
      color: $neutral-color-2;
    }
  }
}
</style>
