<template>
  <section class="error">
    <h2 class="error__title">{{ error?.statusCode }}</h2>
    <p class="error__desc">{{ error?.message }}</p>
    <button class="error__btn" @click="handleError">Go Back Home</button>
    <svg
      class="error__svg"
      enable-background="new 0 0 512 512"
      version="1.1"
      viewBox="0 0 512 512"
      xml:space="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g>
        <path
          clip-rule="evenodd"
          d="M256,0L256,0c140.799,0,256,115.199,256,256l0,0   c0,140.801-115.201,256-256,256l0,0C115.199,512,0,396.801,0,256l0,0C0,115.199,115.199,0,256,0z"
          fill="#FFCB06"
          fill-rule="evenodd"
        />
        <path
          clip-rule="evenodd"
          d="M255.998,0C396.836,0,512,115.164,512,256S396.836,512,256,512   C115.162,512,0,396.841,0,256.005C0,115.164,115.162,0,255.998,0L255.998,0z M256,18.551C125.402,18.551,18.549,125.403,18.549,256   l0,0c0,130.599,106.854,237.453,237.451,237.453l0,0c130.598,0,237.449-106.854,237.449-237.453l0,0   C493.449,125.403,386.598,18.551,256,18.551L256,18.551z"
          fill="#010101"
          fill-rule="evenodd"
        />
        <path
          clip-rule="evenodd"
          d="M268.334,297.794L296,325.457l27.664-27.663   c4.674-4.676,12.297-4.676,16.971,0c4.672,4.671,4.672,12.296,0,16.969l-27.664,27.663l27.664,27.664   c4.672,4.676,4.672,12.297,0,16.974c-4.676,4.671-12.297,4.671-16.971,0L296,359.398l-27.664,27.665   c-4.674,4.671-12.297,4.671-16.969,0c-4.674-4.677-4.674-12.298-0.002-16.974l27.664-27.664l-27.664-27.663   c-4.674-4.673-4.674-12.298,0-16.969C256.037,293.118,263.662,293.118,268.334,297.794z"
          fill="#010101"
          fill-rule="evenodd"
        />
        <g>
          <path
            clip-rule="evenodd"
            d="M189.807,119.684c43.201,0,78.221,37.297,78.221,83.302    c0,46.007-35.02,83.305-78.221,83.305c-43.197,0-78.219-37.298-78.219-83.305C111.588,156.98,146.609,119.684,189.807,119.684z"
            fill="#010101"
            fill-rule="evenodd"
          />
          <path
            clip-rule="evenodd"
            d="M189.807,139.685c-34.045,0-58.219,30.543-58.219,63.301    c0,32.761,24.174,63.304,58.219,63.304c34.047,0,58.221-30.538,58.221-63.304C248.027,170.223,223.854,139.685,189.807,139.685z"
            fill="#FFFFFF"
            fill-rule="evenodd"
          />
          <path
            clip-rule="evenodd"
            d="M189.809,173.938c-15.623,0-26.719,14.016-26.719,29.051    c0,15.032,11.096,29.047,26.719,29.047s26.717-14.015,26.717-29.047C216.525,187.953,205.432,173.938,189.809,173.938z"
            fill="#010101"
            fill-rule="evenodd"
          />
          <path
            clip-rule="evenodd"
            d="M402.189,119.684c43.201,0,78.221,37.297,78.221,83.302    c0,46.007-35.02,83.305-78.221,83.305c-43.197,0-78.217-37.298-78.217-83.305C323.973,156.98,358.992,119.684,402.189,119.684z"
            fill="#010101"
            fill-rule="evenodd"
          />
          <path
            clip-rule="evenodd"
            d="M402.189,139.685c-34.045,0-58.219,30.543-58.219,63.301    c0,32.761,24.174,63.304,58.219,63.304c34.049,0,58.221-30.538,58.221-63.304C460.41,170.223,436.236,139.685,402.189,139.685z"
            fill="#FFFFFF"
            fill-rule="evenodd"
          />
          <path
            clip-rule="evenodd"
            d="M402.191,173.938c-15.623,0-26.717,14.016-26.717,29.051    c0,15.032,11.094,29.047,26.717,29.047s26.717-14.015,26.717-29.047C428.908,187.953,417.814,173.938,402.191,173.938z"
            fill="#010101"
            fill-rule="evenodd"
          />
          <path
            clip-rule="evenodd"
            d="M189.809,173.938c-15.623,0-26.719,14.016-26.719,29.051    c0,15.032,11.096,29.047,26.719,29.047s26.717-14.015,26.717-29.047C216.525,187.953,205.432,173.938,189.809,173.938z"
            fill="#010101"
            fill-rule="evenodd"
          />
        </g>
      </g>
    </svg>
  </section>
</template>

<script setup lang="ts">
interface ErrorPage {
  error: {
    statusCode: number;
    message: string;
  };
}
defineProps<ErrorPage>();

const handleError = () => clearError({ redirect: '/' });
</script>

<style lang="scss" scoped>
.error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: rem(40) rem(10);

  &__btn {
    padding: #{fluid(10px, 20px)} #{fluid(20px, 40px)};
    border-radius: #{fluid(5px, 10px)};
    background-color: $secondary-color;
    color: $neutral-color-2;
    font-size: #{fluid(20px, 40px)};
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border: 1px solid $neutral-color-2;
    margin-bottom: #{fluid(15px, 30px)};

    &:hover {
      background: $neutral-color-2;
      color: $secondary-color;
      border-color: $secondary-color;
      box-shadow: rem(4) rem(4) 0 $secondary-color;
    }
  }

  &__desc {
    font-size: #{fluid(20px, 40px)};
    text-align: center;
    margin-bottom: #{fluid(10px, 20px)};
  }

  &__title {
    font-size: #{fluid(40px, 100px)};
  }

  &__svg {
    max-width: #{fluid(300px, 600px)};
  }
}
</style>
