<template>
  <div
    v-for="item in event"
    :key="item._uid"
    class="event"
    :class="`event--${item.category}`"
  >
    <p class="event__time" :class="`event__time--${item.category}`">
      {{ item.time }} {{ item.ampm }}
    </p>
    <p class="event__title">{{ item.title }}</p>
  </div>
</template>
<script lang="ts" setup>
interface EventProps {
  event?: {
    _uid: symbol;
    category: string;
    time: string;
    ampm: string;
    title: string;
  }[];
}
defineProps<EventProps>();
</script>

<style lang="scss" scoped>
.event {
  border-radius: rem(11);
  padding: rem(10) rem(8);
  display: flex;
  flex-flow: column nowrap;
  gap: rem(15);

  &--adultsJj {
    background: $event-dark-blue;
  }

  &--adultsKb {
    background: $event-dark-red;
  }

  &--allAges {
    background: $event-dark-all-ages;
  }

  &--boxing {
    background: $event-light-orange;
  }

  &--kidsJj {
    background: $event-light-blue;
  }

  &--kidsKb {
    background: $event-light-red;
  }

  &--openMat {
    background: $event-light-white;
  }

  &--wrestling {
    background: $event-light-gray;
  }

  &__time {
    font-size: rem(12);
    color: $neutral-color-2;
    width: max-content;
    border-radius: rem(50);
    padding: rem(5) rem(14);

    &--adultsJj {
      background: $event-light-blue;
    }

    &--adultsKb {
      background: $event-light-red;
    }

    &--allAges {
      background: $event-light-all-ages;
    }

    &--boxing {
      background: $event-dark-orange;
    }

    &--kidsJj {
      background: $event-dark-blue;
    }

    &--kidsKb {
      background: $event-dark-red;
    }

    &--openMat {
      background: $event-dark-white;
    }

    &--wrestling {
      background: $event-dark-gray;
    }
  }

  &__title {
    font-size: rem(16);
    color: $neutral-color-2;
  }
}
</style>
