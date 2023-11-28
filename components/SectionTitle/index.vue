<template>
  <div class="section-title">
    <h2 class="section-title__title">{{ title }}</h2>
    <div class="section-title__line"></div>
  </div>
</template>
<script setup lang="ts">
interface SectionTitleProps {
  title: string;
}
defineProps<SectionTitleProps>();
</script>

<style lang="scss" scoped>
.section-title {
  display: flex;
  margin-bottom: #{fluid(30px, 70px)};
  position: relative;

  &__line {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 85%;
    height: rem(2);
    background: $primary-color;
    z-index: -2;
  }

  &__title {
    margin-top: rem(19);
    @extend %h1;
    position: relative;
    border-top: rem(2) solid $primary-color;
    padding-right: rem(25);
    padding-top: rem(15);

    &:after {
      content: '';
      position: absolute;
      top: rem(-1.5);
      right: rem(-15);
      width: rem(2);
      height: 102%;
      background: $primary-color;
      transform: skew(25deg, 0deg);
    }

    &:before {
      content: '';
      position: absolute;
      bottom: rem(-1);
      right: rem(-14.1);
      width: 100%;
      height: 100%;
      background: $neutral-color-2;
      transform: skew(25deg, 0deg);
      z-index: -1;
    }
  }
}
</style>
