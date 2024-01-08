<template>
  <StoryblokComponent v-if="pending === false && story" :blok="story.content" />
</template>

<script setup>
const { slug } = useRoute().params;

const url = slug && slug.length > 0 ? slug.join('/') : 'home';

const isPreview = useRuntimeConfig().public.NODE_ENV !== 'production';

const { data: story, pending } = await useAsyncData(`en-${url}`, async () => {
  const { data } = await useStoryblokApi().get(
    `cdn/stories/${url.replace(/\/$/, '')}`,
    {
      version: isPreview ? 'draft' : 'published',
      resolve_links: 'url',
    },
  );

  return data?.story;
});

if (!story.value) {
  showError({ statusCode: 404, statusMessage: 'Page Not Found' });
}

onMounted(() => {
  if (story.value && story.value.id) {
    useStoryblokBridge(story.value.id, (evStory) => (story.value = evStory));
  }
});

useSeoMeta({
  index: story.value.content.enableSeo ? 'index' : 'none',
  title:
    `Assassin Grappling Academy | ${story.value.content.pageSeoTitle}` ||
    'Assassin Grappling Academy',
  ogTitle:
    `Assassin Grappling Academy | ${story.value.content.pageSeoTitle}` ||
    'Assassin Grappling Academy',
  description:
    story.value.content.pageSeoDescription || 'Assassin Grappling Academy',
  ogDescription:
    story.value.content.pageSeoDescription || 'Assassin Grappling Academy',
  ogImage:
    story.value.content.pageSeoImage.filename ||
    'https://a-us.storyblok.com/f/1017285/1200x630/aa866e7e0b/aga-default-seo.jpg',
});
</script>
