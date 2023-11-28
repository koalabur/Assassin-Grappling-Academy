<template>
  <section class="contact-block">
    <div
      class="contact-block__col"
      :class="{ 'contact-block__col--single': !blok.useForm }"
    >
      <h1 class="contact-block__title">{{ blok.title }}</h1>
      <p class="contact-block__text contact-block__text--subtitle">
        <strong>{{ blok.subtitle }}</strong>
      </p>
      <p class="contact-block__text">
        <strong
          >Phone:
          <NuxtLink :to="`tel:${blok.phoneNumber}`">
            {{ blok.phoneNumber }}
          </NuxtLink>
        </strong>
      </p>
      <p class="contact-block__text">
        <strong
          >Email:
          <NuxtLink :to="`mailto:${blok.email}`">
            {{ blok.email }}
          </NuxtLink>
        </strong>
      </p>
      <p class="contact-block__text">
        <strong
          >Address:
          <NuxtLink :to="blok.googleMapsLink" target="_blank">
            {{ blok.address }}
          </NuxtLink>
        </strong>
      </p>
      <hr class="contact-block__divider" />
      <h2 class="contact-block__title contact-block__title--business">
        Business Hours:
      </h2>
      <p v-if="blok.monday" class="contact-block__text">
        Mon: {{ blok.monday }}
      </p>
      <p v-if="blok.tuesday" class="contact-block__text">
        Tue: {{ blok.tuesday }}
      </p>
      <p v-if="blok.wednesday" class="contact-block__text">
        Wed: {{ blok.wednesday }}
      </p>
      <p v-if="blok.thursday" class="contact-block__text">
        Thu: {{ blok.thursday }}
      </p>
      <p v-if="blok.friday" class="contact-block__text">
        Fri: {{ blok.friday }}
      </p>
      <p v-if="blok.saturday" class="contact-block__text">
        Sat: {{ blok.saturday }}
      </p>
      <p v-if="blok.sunday" class="contact-block__text">
        Sun: {{ blok.sunday }}
      </p>
      <div class="contact-block__socials">
        <p class="contact-block__socials-title">Follow us on social media:</p>
        <div class="contact-block__socials-links">
          <NuxtLink
            v-for="item in blok.socialMedia"
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
    <div v-if="blok.useForm" class="contact-block__col">
      <client-only>
        <ContactForm />
      </client-only>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ContactBlockData } from '@/types/components/ContactBlock';

defineProps<ContactBlockData>();
</script>

<style lang="scss" scoped>
.contact-block {
  margin-top: #{fluid(30px, 92px)};
  @include page-width;
  @include edge-padding;
  @include std-bot-spacing;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  gap: rem(50);

  @include mq(md) {
    flex-flow: row nowrap;
  }

  &__col {
    max-width: 100%;
    width: 100%;

    @include mq(md) {
      max-width: 50%;
    }

    &--single {
      max-width: 100%;
    }
  }

  &__divider {
    border-color: $neutral-color-4;
    margin-top: rem(35);
    margin-bottom: rem(30);
  }

  &__socials {
    margin-top: rem(40);

    &-links {
      display: flex;
      flex-flow: row nowrap;
      gap: rem(30);
    }

    &-title {
      font-weight: 700;
      font-size: #{fluid(18px, 22px)};
      margin-bottom: rem(10);
    }
  }

  &__text {
    margin-bottom: rem(3);

    &--subtitle {
      margin-bottom: rem(15);
      max-width: rem(309);
    }
  }

  &__title {
    @extend %h1;
    margin-bottom: rem(25);

    &--business {
      margin-bottom: rem(3);
      font-size: #{fluid(22px, 26px)};
    }
  }
}
</style>
