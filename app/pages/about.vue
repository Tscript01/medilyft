<script setup lang="ts">
definePageMeta({
  title: "About MediLyft - Our Story & Mission",
});

useHead({
  title: "About MediLyft - Our Story & Mission",
  meta: [
    {
      name: "description",
      content:
        "Learn about MediLyft's mission to provide reliable medical transportation services. Discover our commitment to patient safety and healthcare excellence.",
    },
    {
      name: "keywords",
      content:
        "about us, medical transportation company, patient safety, healthcare services",
    },
    {
      property: "og:title",
      content: "About MediLyft - Our Story & Mission",
    },
    {
      property: "og:description",
      content:
        "Learn about MediLyft's mission to provide reliable medical transportation services.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://www.medilyfthelp.com/about",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://www.medilyfthelp.com/about",
    },
  ],
});
</script>

<template>
  <motion.div
    :whileHover="{ scale: 1.2 }"
    :whilePress="{ scale: 0.8 }"
    class="box"
  />
</template>

<style>
.box {
  width: 100px;
  height: 100px;
  background-color: #0d63f8;
  border-radius: 10px;
}
</style>
