<template>
  <form class="contact-form" @submit.prevent="submitForm">
    <label class="contact-form__label" for="name">Name</label>
    <input
      id="name"
      v-model.lazy="form.name"
      type="text"
      class="contact-form__input"
      required
    />
    <label class="contact-form__label" for="phone">Phone</label>
    <input
      id="phone"
      v-model.lazy="form.phone"
      type="tel"
      class="contact-form__input"
      required
    />
    <label class="contact-form__label" for="email">Email</label>
    <input
      id="email"
      v-model.lazy="form.email"
      type="email"
      class="contact-form__input"
      required
    />
    <label class="contact-form__label" for="subject">Subject</label>
    <select
      id="subject"
      v-model="form.subject"
      class="contact-form__input"
      required
    >
      <option disabled value="">Please select a subject.</option>
      <option>General Inquiry</option>
      <option>Question About Classes</option>
      <option>Question About Adult Programs</option>
      <option>Question About Kid Programs</option>
      <option>Question About Product</option>
      <option>Question About Event</option>
    </select>
    <label class="contact-form__label" for="message">Message</label>
    <textarea
      id="message"
      v-model.lazy="form.message"
      class="contact-form__input"
      rows="8"
      required
    ></textarea>
    <button type="submit" class="contact-form__btn">Send Email</button>
    <p
      v-if="submitStatus.status"
      class="contact-form__message"
      :class="`contact-form__message--${submitStatus.status}`"
      v-html="submitStatus.message"
    />
  </form>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig();

const form = ref({
  name: '',
  phone: '',
  email: '',
  subject: '',
  message: '',
});

const submitStatus = ref({ message: '', status: '' });

async function submitForm() {
  const { status } = await useFetch(
    `https://formspree.io/f/${config.public.formspree_api}`,
    {
      method: 'post',
      body: {
        name: form.value.name,
        phone: form.value.phone,
        email: form.value.email,
        subject: `${form.value.subject} from ${form.value.name}`,
        message: form.value.message,
      },
    },
  );

  if (status.value === 'error') {
    submitStatus.value.status = 'error';
    submitStatus.value.message =
      'There was an error submitting your form. If it persists, please email us directly at <strong>Agalv2021@gmail.com</strong>';
  } else if (status.value === 'success') {
    submitStatus.value.status = 'success';
    submitStatus.value.message =
      'Your form was submitted successfully! We will get back to you as soon as possible.';
    form.value.name = '';
    form.value.phone = '';
    form.value.email = '';
    form.value.subject = '';
    form.value.message = '';
  }
}
</script>

<style lang="scss" scoped>
.contact-form {
  border-radius: rem(12);
  background: $secondary-color;
  padding: rem(31) #{fluid(10px, 30px)};
  display: flex;
  flex-flow: column nowrap;

  &__btn {
    background: $primary-color;
    border: none;
    padding: rem(12.5) rem(30);
    width: max-content;
    margin-left: auto;
    margin-right: auto;
    color: $neutral-color-2;
    font-size: #{fluid(18px, 22px)};
    font-weight: 700;
    cursor: pointer;
    border: 1px solid transparent;
    transition: 0.2s ease-in-out;

    &:hover {
      border-color: $neutral-color-2;
    }
  }

  &__input {
    border-radius: rem(6);
    width: 100%;
    border: rem(1) solid #3a3a3a;
    padding: rem(10) rem(15);
    margin-bottom: rem(20);
    font-size: #{fluid(14px, 17px)};
    background: #1a1a1a;
    color: $neutral-color-2;
  }

  &__label {
    color: $neutral-color-2;
    margin-bottom: rem(7);
    font-size: #{fluid(15px, 18px)};
  }

  &__message {
    margin-top: rem(20);
    font-size: #{fluid(14px, 17px)};
    text-align: center;
    background: $neutral-color-3;
    padding: rem(10);

    &--error {
      color: $neutral-color-2;
      background: $primary-color;
    }

    &--success {
      color: $secondary-color;
      background: $neutral-color-4;
    }
  }
}
</style>
