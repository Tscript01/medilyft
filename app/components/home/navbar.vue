<template>
   <nav 
        :class="{ 
            'fixed top-0 w-full z-50 bg-white shadow-lg border-b border-gray-100 py-2': scrolled,
            'relative ': !scrolled,
        }"
        class="transition-all duration-300"
    >
        <div class=" mx-auto px-5">
            <header class="flex justify-between items-center h-full">
                
                <div 
                    :class="{ 
                        'w-32 h-10 md:w-40 md:h-12 lg:h-14': scrolled,
                        // Large height when relative (Bolder logo)
                        'w-40 h-16 md:w-48 md:h-20 lg:w-60 lg:h-28': !scrolled,
                    }"
                    class="relative transition-all duration-300"
                >
                    <NuxtLink to="/" class="block w-full h-full">
                        <img class="object-contain h-full w-full" src="/images/MediLyft.png" alt="MediLyft Logo"/>
                    </NuxtLink>
                </div>
                
                <!-- Navigation Area -->
                <nav class="flex h-full font-sans">
                    
                    <!-- Menu Toggler -->
                    <button @click="toggleMobileNav()" type="button" class="flex md:hidden focus:outline-none self-center">
                        <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current text-[#0A2540]">
                            <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                        </svg>
                    </button>

                    <!-- Desktop Menu -->
                    <ul class="flex space-x-8 items-center hidden md:flex text-sm font-medium text-gray-700">
                        <li class="uppercase hover:text-red-600 transition duration-200">
                            <NuxtLink to="#about">About</NuxtLink>
                        </li>
                        <li class="uppercase hover:text-red-600 transition duration-200">
                            <NuxtLink to="#services">Services</NuxtLink>
                        </li>
                        <li class="uppercase hover:text-red-600 transition duration-200">
                            <NuxtLink to="/faq">FAQ</NuxtLink>
                        </li>
                        <li class="uppercase hover:text-red-600 transition duration-200">
                            <NuxtLink to="/pricing">Pricing</NuxtLink>
                        </li>
                        <!-- CTA Button -->
                        <li class="bg-red-600 px-6 py-3 text-white rounded-lg shadow-md hover:bg-red-700 cursor-pointer transition duration-200">
                            <NuxtLink to="#quote">Request a Ride</NuxtLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
        
        <!-- Mobile Menu Overlay (Commented out, but ready for implementation) -->
        <!-- <div v-show="mobileNav" class="fixed inset-0 z-40 bg-[#0A2540] p-5">...</div> -->
    </nav>
</template>

<script setup>
    import { ref, onMounted, onUnmounted } from 'vue'; 

    // --- Navigation State ---
    let mobileNav = ref(false);
    let scrolled = ref(false); 
    const SCROLL_THRESHOLD = 80; 

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