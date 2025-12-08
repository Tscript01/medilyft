<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

let mobileNav = ref(false);
let scrolled = ref(false);

const SCROLL_THRESHOLD = 50;

let toggleMobileNav = () => {
    mobileNav.value = !mobileNav.value
}

const handleScroll = () => {
    scrolled.value = window.scrollY > SCROLL_THRESHOLD;
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <div :class="{
        'fixed top-0 w-full z-50 bg-white shadow-md border-b border-gray-200 pb-': scrolled,
        'relative pb-2  ': !scrolled,
    }" class="transition-all duration-300">
        <div class="container mx-auto">
            <header class="flex  justify-between items-center h-full">
                <div :class="{
                    ' h-18 md:w-40 md:h-22 lg:h-22': scrolled,
                    ' h-18 md:w-40 md:h-22  lg:h-22 ': !scrolled,
                }" class="relative transition-all duration-300">
                    <NuxtLink to="/" class="block w-full h-full">
                        <img class="object-contain h-full w-full" src="/images/MediLyft.png" alt="MediLyft Logo" />
                    </NuxtLink>
                </div>

                <nav class=" hidden lg:flex h-full">
                    <ul class="flex space-x-10 items-center ">
                        <li class=" hover:text-theme-secondary transition duration-200">
                            <NuxtLink to="#about">About</NuxtLink>
                        </li>
                        <li class=" hover:text-theme-secondary transition duration-200">
                            <NuxtLink to="#services">Services</NuxtLink>
                        </li>
                        <li class=" hover:text-theme-secondary transition duration-200">
                            <NuxtLink to="#faq">FAQ</NuxtLink>
                        </li>
                        <li class=" hover:text-theme-secondary transition duration-200">
                            <NuxtLink to="/#pricing">Pricing</NuxtLink>
                        </li>

                        <li class=" hover:text-theme-secondary transition duration-200">
                            <NuxtLink to="#contact">Contact </NuxtLink>
                        </li>

                    </ul>

                </nav>


                <div class="hidden lg:block">
                    <NuxtLink to="https://api.whatsapp.com/send?phone=2348160791374&text=sup%20bro"  class="bg-secondary px-6 mr-3 py-3 truncate text-white font-semibold rounded-lg shadow-md hover:bg-[#0a9ba3ca] cursor-pointer transition duration-200">
                       
                        Book Now
          </NuxtLink>
                </div>
                <button @click="toggleMobileNav()" type="button" class="flex lg:hidden focus:outline-none self-center">
                    <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                        <path fill-rule="evenodd"
                            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                        </path>
                    </svg>
                </button>


                <!-- Mobile Navigation Menu -->
                <transition name="fade">

                    <div v-if="mobileNav" class="fixed inset-0 bg-[#000000b0] bg-opacity-40 z-40"
                        @click="toggleMobileNav()">

                    </div>
                </transition>
                <transition name="slide-fade">
                    <div v-if="mobileNav"
                        class="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg z-50 p-6 flex flex-col">
                        <section class="flex justify-between items-center mb-12">

                            <div class=" h-16 md:w-40 md:h-26">
                                <NuxtLink to="/" class="block w-full h-full">
                                    <img class="object-contain h-full w-full" src="/images/MediLyft.png"
                                        alt="MediLyft Logo" />
                                </NuxtLink>
                            </div>

                            <button @click="toggleMobileNav()" type="button" class="self-end mb-8 focus:outline-none">
                                <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                                    <path fill-rule="evenodd"
                                        d="M6.225 4.811a1 1 0 0 1 1.414 0L12 9.172l4.361-4.361a1 1 0 1 1 1.414 1.414L13.414 10.586l4.361 4.361a1 1 0 0 1-1.414 1.414L12 12l-4.361 4.361a1 1 0 0 1-1.414-1.414l4.361-4.361-4.361-4.361a1 1 0 0 1 0-1.414z">
                                    </path>
                                </svg>
                            </button>
                        </section>
                        <div class="flex flex-col justify-between h-full">


                        <ul class="flex flex-col space-y-6 px-7">
                            <li class="uppercase hover:text-theme-secondary transition duration-200">
                                <NuxtLink @click="toggleMobileNav()" to="#about">About</NuxtLink>
                            </li>
                            <hr>
                            <li class="uppercase hover:text-theme-secondary transition duration-200">
                                <NuxtLink @click="toggleMobileNav()" to="#services">Services</NuxtLink>
                            </li>
                            <hr>
                            <li class="uppercase hover:text-theme-secondary transition duration-200">
                                <NuxtLink @click="toggleMobileNav()" to="#faq">FAQ</NuxtLink>
                            </li>
                            <hr>
                            <li class="uppercase hover:text-theme-secondary transition duration-200">
                                <NuxtLink @click="toggleMobileNav()" to="#pricing">Pricing</NuxtLink>
                            </li>
                            <hr>
                            <li class="uppercase hover:text-theme-secondary transition duration-200">
                                <NuxtLink @click="toggleMobileNav()" to="#contact">Contact </NuxtLink>
                            </li>
                        </ul>
                       <NuxtLink to="https://api.whatsapp.com/send?phone=2348160791374&text=sup%20bro"  class="bg-secondary px-6 mr-3 py-3 truncate text-white font-semibold rounded-lg shadow-md hover:bg-[#0a9ba3ca] cursor-pointer transition duration-200">
                       
                        Book Now
          </NuxtLink>
                        </div>

                    </div>
                </transition>

            </header>
        </div>
    </div>
</template>

<style scoped>
/* Optional: Add custom smooth scroll behavior if not using a module */
html {
    scroll-behavior: smooth;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.slide-fade-enter-active {
    transition: all 0.1s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>