<template>
  <section class="calendar">
    <SectionTitle :title="blok.title" />
    <div class="calendar__container">
      <div class="calendar__row">
        <div class="calendar__col calendar__col--monday">
          <p class="calendar__title">Monday</p>
          <div class="calendar__content">
            <Event :event="blok.monday" />
          </div>
        </div>
        <div class="calendar__col calendar__col--tuesday">
          <p class="calendar__title">Tuesday</p>
          <div class="calendar__content">
            <Event :event="blok.tuesday" />
          </div>
        </div>
        <div class="calendar__col calendar__col--wednesday">
          <p class="calendar__title">Wednesday</p>
          <div class="calendar__content">
            <Event :event="blok.wednesday" />
          </div>
        </div>
        <div class="calendar__col calendar__col--thursday">
          <p class="calendar__title">Thursday</p>
          <div class="calendar__content">
            <Event :event="blok.thursday" />
          </div>
        </div>
        <div class="calendar__col calendar__col--friday">
          <p class="calendar__title">Friday</p>
          <div class="calendar__content">
            <Event :event="blok.friday" />
          </div>
        </div>
        <div class="calendar__col calendar__col--saturday">
          <p class="calendar__title">Saturday</p>
          <div class="calendar__content">
            <Event :event="blok.saturday" />
          </div>
        </div>
        <div class="calendar__col calendar__col--sunday">
          <p class="calendar__title">Sunday</p>
          <div class="calendar__content">
            <Event :event="blok.sunday" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { CalendarData } from '@/types/components/Calendar';

defineProps<CalendarData>();
</script>

<style lang="scss" scoped>
.calendar {
  @include edge-padding;
  @include page-width;
  @include std-bot-spacing;

  &__col {
    border: 1px solid $neutral-color-3;
    display: flex;
    flex-flow: column nowrap;

    &--sunday {
      grid-area: 4 / 1 / 5 / 3;

      @include mq(lg) {
        grid-area: auto;
      }
    }
  }

  &__container {
    background: $neutral-color-1;
  }

  &__content {
    gap: rem(20);
    display: flex;
    flex-flow: column nowrap;
    padding: 0 rem(5) rem(35) rem(5);
  }

  &__row {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);

    @include mq(lg) {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      grid-template-rows: 1fr;
    }
  }

  &__title {
    font-size: #{fluid(24px, 18px)};
    font-weight: 700;
    text-align: center;
    padding: rem(11) 0;
    border-bottom: 1px solid $neutral-color-3;
    margin-bottom: rem(23);
  }
}
</style>
