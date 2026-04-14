<script setup lang="ts">
definePageMeta({
  title: "MediLyft - Reliable Medical Transportation Services | Home",
});

const { organizationSchema, serviceSchema, setStructuredData } =
  useStructuredData();

useHead({
  title: "MediLyft - Medical Transportation Services",
  meta: [
    {
      name: "description",
      content:
        "Professional medical transportation services offering safe, reliable rides for healthcare appointments and patient transfers. Trusted by hospitals and medical facilities in Ekiti State, Nigeria.",
    },
    {
      name: "keywords",
      content:
        "medical transportation, patient transport, healthcare rides, medical appointments, ambulance services",
    },
    {
      property: "og:title",
      content: "MediLyft - Medical Transportation Services",
    },
    {
      property: "og:description",
      content:
        "Professional medical transportation services offering safe, reliable rides for healthcare appointments and patient transfers in Ekiti State, Nigeria.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://www.medilyfthelp.com",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://www.medilyfthelp.com",
    },
  ],
});

// Set structured data
setStructuredData(organizationSchema);
setStructuredData(serviceSchema);
</script>

<template>
  <div class="bg-white">
    <HomeHeader />
    <HomeHero />
    <HomeAbout />
    <HomeDriver />
    <HomeServices />
    <HomeFaq />
    <HomeContact />
    <HomePricingfaq />

    <HomeFooter />
  </div>
</template>
