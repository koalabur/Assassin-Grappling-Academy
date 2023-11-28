<template>
  <footer class="footer">
    <div class="footer__row">
      <NuxtImg
        class="footer__logo"
        :src="story.logo.filename"
        :alt="story.logo.alt"
        :width="useGetAssetWidth(story.logo.filename)"
        :height="useGetAssetHeight(story.logo.filename)"
      />
      <div
        v-if="story.phone || story.email || story.address"
        class="footer__col"
      >
        <p v-if="story.phone" class="footer__text">
          <strong>
            Phone:
            <NuxtLink :to="`tel:${story.phone}`">{{ story.phone }}</NuxtLink>
          </strong>
        </p>
        <p v-if="story.email" class="footer__text">
          <strong>
            Email:
            <NuxtLink :to="`mailto:${story.email}`" target="_blank">
              {{ story.email }}
            </NuxtLink>
          </strong>
        </p>
        <p v-if="story.address" class="footer__text">
          <strong>
            Address:
            <NuxtLink :to="story.googleMapsLink" target="_blank">
              {{ story.address }}
            </NuxtLink>
          </strong>
        </p>
        <div class="footer__socials">
          <h4 class="footer__socials-title">Follow us on social media:</h4>
          <div class="footer__socials-links">
            <NuxtLink
              v-for="item in story.socialMedia"
              :key="item._uid"
              :href="item.link.url"
              target="_blank"
            >
              <NuxtImg
                :src="item.icon.filename"
                :width="useGetAssetWidth(item.icon.filename)"
                :height="useGetAssetHeight(item.icon.filename)"
                :alt="item.icon.alt"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
      <client-only>
        <div v-if="$lg" class="footer__divider" />
      </client-only>
      <div class="footer__col footer__col--business">
        <h3 class="footer__title">Business Hours:</h3>
        <p v-if="story.monday" class="footer__text">Mon: {{ story.monday }}</p>
        <p v-if="story.tuesday" class="footer__text">
          Tue: {{ story.tuesday }}
        </p>
        <p v-if="story.wednesday" class="footer__text">
          Wed: {{ story.wednesday }}
        </p>
        <p v-if="story.thursday" class="footer__text">
          Thu: {{ story.thursday }}
        </p>
        <p v-if="story.friday" class="footer__text">Fri: {{ story.friday }}</p>
        <p v-if="story.saturday" class="footer__text">
          Sat: {{ story.saturday }}
        </p>
        <p v-if="story.sunday" class="footer__text">Sun: {{ story.sunday }}</p>
      </div>
      <NuxtLink
        class="footer__google"
        to="https://www.google.com/maps/place/Assassin+Grappling+Academy/@36.1572747,-115.060334,15z/data=!4m8!3m7!1s0x80c8db7aebe9762b:0x5c6e6fcaee5ea54f!8m2!3d36.1572747!4d-115.060334!9m1!1b1!16s%2Fg%2F11swm1t9qs?entry=ttu"
        target="_blank"
      >
        <NuxtImg
          src="/img/google-reviews.png"
          width="171"
          height="89"
          loading="lazy"
        />
      </NuxtLink>
    </div>
    <p class="footer__text footer__text--copyright">
      © {{ new Date().getFullYear() }} Assassin Grappling Academy. <br />All
      Rights Reserved.
    </p>
  </footer>
</template>

<script setup lang="ts">
import {
  useGetAssetWidth,
  useGetAssetHeight,
} from '@/composables/useGetAssetDimensions';
import type { Footer } from '@/types/components/Footer';

const { $lg } = useNuxtApp();

const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get('cdn/stories/default-layout', {
  version: 'draft',
  resolve_links: 'url',
});
const story = ref<Footer>(data.story.content.footer[0]);
</script>

<style lang="scss" scoped>
.footer {
  background: $secondary-color;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  margin-top: rem(95);
  padding-top: rem(45);
  padding-bottom: rem(45);
  gap: rem(30);
  @include edge-padding;

  &__col {
    display: flex;
    flex-flow: column nowrap;

    &--business {
      @include mq(lg) {
        margin-right: rem(25);
      }
    }
  }

  &__divider {
    height: auto;
    width: rem(1);
    background: $neutral-color-2;
  }

  &__google {
    width: rem(171);
  }

  &__logo {
    width: rem(150);
    height: 100%;
    margin: 0 auto rem(15) auto;

    @include mq(lg) {
      margin: auto rem(45) auto 0;
    }
  }

  &__row {
    display: flex;
    flex-flow: column nowrap;
    gap: rem(30);

    @include mq(lg) {
      gap: rem(50);
      justify-content: center;
      flex-flow: row nowrap;
    }
  }

  &__socials {
    display: flex;
    flex-flow: column nowrap;
    margin-top: rem(30);
    gap: rem(5);

    @include mq(lg) {
      margin-top: auto;
    }

    &-links {
      display: flex;
      flex-flow: row nowrap;
      gap: #{fluid(15px, 50px)};
      align-items: center;

      img {
        width: #{fluid(25px, 40px)};
        height: auto;

        &:hover {
          filter: invert(29%) sepia(99%) saturate(7283%) hue-rotate(359deg)
            brightness(89%) contrast(127%);
        }
      }
    }

    &-title {
      font-size: #{fluid(18px, 22px)};
      color: $neutral-color-1;
      margin-bottom: rem(10);
    }
  }

  &__text {
    font-size: #{fluid(15px, 20px)};
    color: $neutral-color-1;
    margin-bottom: #{fluid(10px, 5px)};

    &--copyright {
      text-align: center;
    }

    &:last-child {
      margin-bottom: 0;
    }

    a {
      color: $neutral-color-2;
    }
  }

  &__title {
    font-size: #{fluid(22px, 30px)};
    color: $neutral-color-1;
    margin-bottom: rem(15);
  }
}
</style>
