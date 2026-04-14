<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

useHead({
  link: [
    {
      rel: "preload",
      as: "image",
      href: "/images/hero-background.jpg",
      imagesrcset:
        "/images/hero-background-mobile.jpg 768w, /images/hero-background.jpg 2072w",
      imagesizes: "100vw",
    },
    {
      rel: "preload",
      as: "image",
      href: "/images/hero1.jpg",
      media: "(min-width: 1024px)",
    },
    {
      rel: "preload",
      as: "image",
      href: "/images/hero-staff.jpg",
      media: "(min-width: 1024px)",
    },
    {
      rel: "preload",
      as: "image",
      href: "/images/hero-vehicle.jpg",
      media: "(min-width: 1024px)",
    },
  ],
});

const scrolled = ref(false);

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const formData = ref({
  pickup: "",
  dropoff: "",
  date: "",
  time: "",
});

const handleSubmit = () => {
  // In a real application, you would send this data to an API endpoint
  console.log("Booking request:", formData.value);
  alert(
    `Thank you for your request! We will contact you regarding your trip on ${formData.value.date} at ${formData.value.time}.`,
  );
};
</script>

<template>
  <main class="">
    <div
      :class="{ 'pt-16 md:pt-20 lg:pt-32': !scrolled, 'pt-20': scrolled }"
      class="transition-all duration-300"
    ></div>

    <div
      id="quote"
      class="relative min-h-[700px] xl:min-h-[600px] overflow-hidden -mt-20 md:-mt-24 lg:-mt-32"
    >
      <picture class="absolute inset-0">
        <source
          srcset="/images/hero-background-mobile.jpg"
          media="(max-width: 767px)"
        />
        <img
          src="/images/hero-background.jpg"
          srcset="
            /images/hero-background-mobile.jpg 768w,
            /images/hero-background.jpg 2072w
          "
          sizes="100vw"
          fetchpriority="high"
          decoding="async"
          alt=""
          aria-hidden="true"
          class="absolute inset-0 h-full w-full object-cover"
        />
      </picture>
      <div class="absolute inset-0 bg-primary opacity-70"></div>
      <div
        class="absolute inset-0 bg-linear-to-r from-primary via-primary/60 to-transparent"
      ></div>
      <section
        class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[700px] xl:min-h-[600px] flex items-center"
      >
        <div class="relative z-10 sm:px-6 lg:px-8 py-24 sm:py-20 lg:py-12">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div
              class="lg:col-span-7 text-white space-y-6 text-center lg:text-left"
            >
              <div
                class="inline-block bg-white/30 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/40 shadow-lg"
              >
                <span class="text-base font-bold tracking-widest text-white"
                  >MEDILYFT</span
                >
              </div>

              <h1
                class="text-3xl sm:text-4xl lg:text-5xl font-sora font-extrabold leading-tight"
              >
                Reliable & Compassionate <br />
                <span class="text-red-500">Medical Transportation</span>
              </h1>
              <p
                class="text-md sm:text-lg text-gray-300 max-w-xl lg:mx-0 mx-auto"
              >
                Safe, timely, and professional non-emergency medical transport
                tailored to your needs, 24/7.
              </p>
              <div class="pt-4 md:block">
                <NuxtLink
                  to="https://api.whatsapp.com/send?phone=2349164777775&text=hi"
                  class="px-8 py-3 bg-secondary text-white font- rounded-lg shadow-xl hover:bg-[#0a9ba3ca] transition duration-300 uppercase tracking-wider"
                >
                  Schedule a Ride
                </NuxtLink>
                <br>
                
                 <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdh2OemTAtZsvjts2RJUIHrrabPHW00A4gDpdZH5r92JvYFRQ/viewform?usp=sharing&ouid=106453463441964523506"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center my-6 border border-white  gap-2 bg-[#0A2540] hover:bg-[#0d2f50] text-white font-semibold text-sm px-6 py-3 rounded-xl transition duration-200 shadow-md hover:shadow-lg"
            >
              Sign Up to Drive
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
              </div>
            </div>

            <div
              class="lg:col-span-5 hidden lg:block w-full relative h-[600px] items-center justify-center"
            >
              <div
                class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -z-10"
              ></div>

              <div class="relative w-full h-full">
                <div
                  class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-80 h-80 rounded-full border-[6px] border-white shadow-2xl overflow-hidden group"
                >
                  <div
                    class="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition duration-500"
                  ></div>
                  <img
                    src="/images/hero1.jpg"
                    alt="Medical transport specialist helping senior patient"
                    loading="eager"
                    decoding="async"
                    class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                  />
                </div>

                <div
                  class="absolute top-[10%] right-[5%] z-10 w-56 h-56 rounded-full border-[6px] border-white shadow-xl overflow-hidden"
                  style="animation: float 6s ease-in-out infinite"
                >
                  <img
                    src="/images/hero-staff.jpg"
                    alt="Smiling medical staff member"
                    loading="eager"
                    decoding="async"
                    class="w-full h-full object-cover"
                  />
                </div>

                <div
                  class="absolute bottom-[15%] left-[0%] z-30 w-48 h-48 rounded-full border-[6px] border-white shadow-xl overflow-hidden"
                  style="animation: float 5s ease-in-out infinite reverse"
                >
                  <img
                    src="/images/hero-vehicle.jpg"
                    alt="Modern medical transport vehicle interior"
                    loading="eager"
                    decoding="async"
                    class="w-full h-full object-cover"
                  />
                </div>

                <!-- Decorative Floating Badge -->
                <div
                  class="absolute bottom-[25%] -right-4 z-40 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 animate-bounce max-w-[150px]"
                >
                  <div class="flex items-center gap-2 mb-1">
                    <div class="flex -space-x-2">
                      <div
                        class="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-[10px]"
                      >
                        ⭐
                      </div>
                      <div
                        class="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-[10px]"
                      >
                        ⭐
                      </div>
                      <div
                        class="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-[10px]"
                      >
                        ⭐
                      </div>
                    </div>
                    <span class="text-xs font-bold text-slate-800">4.9/5</span>
                  </div>
                  <p class="text-[10px] text-slate-500 leading-tight">
                    Trusted by 500+ families this month.
                  </p>
                </div>

                <!-- Decorative Dots -->
                <svg
                  class="absolute top-10 left-10 -z-10 text-blue-200"
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="currentColor"
                >
                  <pattern
                    id="dots"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="2" cy="2" r="2"></circle>
                  </pattern>
                  <rect width="100" height="100" fill="url(#dots)"></rect>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
@keyframes float {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-15px);
  }

  100% {
    transform: translateY(0px);
  }
}
</style>
