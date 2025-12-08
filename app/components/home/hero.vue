<template>
    <main class="">
        <div :class="{'pt-16 md:pt-20 lg:pt-32': !scrolled, 'pt-20': scrolled}" class="transition-all duration-300"></div>

        <div id="quote" class="relative h-full  xl:min-h-auto overflow-hidden -mt-20 md:-mt-24 lg:-mt-32">
            <div 
                class="absolute inset-0 bg-cover bg-center bg-no-repeat"
                :style="{backgroundImage: `url('https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=2072')`}"
            >
                <div class="absolute inset-0 bg-primary opacity-70"></div>
                <div class="absolute inset-0 bg-linear-to-r from-primary via-primary/60 to-transparent"></div>
            </div>
<section class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  ">

            <div class="relative z-10    sm:px-6 lg:px-8 py-10 sm:py-20 lg:py-6">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div class="lg:col-span-7 text-white space-y-6 text-center lg:text-left">
                        <div
                                class="inline-block bg-white/30 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/40 shadow-lg">
                                <span class="text-base font-bold tracking-widest text-white">MEDILYFT</span>
                            </div>

                        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-sora font-extrabold leading-tight">
                            Reliable & Compassionate <br> <span class="text-red-500">Medical Transportation</span>
                        </h1>
                        <p class="text-md sm:text-lg text-gray-300 max-w-xl lg:mx-0 mx-auto">
                            Safe, timely, and professional non-emergency medical transport tailored to your needs, 24/7.
                        </p>
                        <div class="pt-4  md:block">
                            <NuxtLink to="https://api.whatsapp.com/send?phone=2348160791374&text=sup%20bro" class="px-8 py-3 bg-secondary text-white font- rounded-lg shadow-xl hover:bg-[#0a9ba3ca] transition duration-300 uppercase tracking-wider">
                                 Schedule a Ride
                            </NuxtLink>
                        </div>
                    </div>

              <div class="lg:col-span-5 hidden lg:block w-full relative h-[600px]  items-center justify-center">
                    
                    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
                    
                    <div class="relative w-full h-full">
                        
                        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-80 h-80 rounded-full border-[6px] border-white shadow-2xl overflow-hidden group">
                            <div class="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition duration-500"></div>
                            <img 
                                src="/images/hero1.jpg" 
                                alt="Medical transport specialist helping senior patient" 
                                class="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                            >
                        </div>

                        <div class="absolute top-[10%] right-[5%] z-10 w-56 h-56 rounded-full border-[6px] border-white shadow-xl overflow-hidden animate-[float_6s_ease-in-out_infinite]">
                            <img 
                                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400" 
                                alt="Smiling medical staff member" 
                                class="w-full h-full object-cover"
                            >
                        </div>

                        <div class="absolute bottom-[15%] left-[0%] z-30 w-48 h-48 rounded-full border-[6px] border-white shadow-xl overflow-hidden animate-[float_5s_ease-in-out_infinite_reverse]">
                            <img 
                                src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80&w=400" 
                                alt="Modern medical transport vehicle interior" 
                                class="w-full h-full object-cover"
                            >
                        </div>

                        <!-- Decorative Floating Badge -->
                        <div class="absolute bottom-[25%] -right-4 z-40 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 animate-bounce max-w-[150px]">
                            <div class="flex items-center gap-2 mb-1">
                                <div class="flex -space-x-2">
                                    <div class="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-[10px]">⭐</div>
                                    <div class="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-[10px]">⭐</div>
                                    <div class="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center text-[10px]">⭐</div>
                                </div>
                                <span class="text-xs font-bold text-slate-800">4.9/5</span>
                            </div>
                            <p class="text-[10px] text-slate-500 leading-tight">Trusted by 500+ families this month.</p>
                        </div>

                        <!-- Decorative Dots -->
                        <svg class="absolute top-10 left-10 -z-10 text-blue-200" width="100" height="100" viewBox="0 0 100 100" fill="currentColor">
                            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
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

   <style>
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
        }
    </style>
<script setup>
import { ref } from 'vue';

const formData = ref({
    pickup: '',
    dropoff: '',
    date: '',
    time: ''
});

const handleSubmit = () => {
    // In a real application, you would send this data to an API endpoint
    console.log('Booking request:', formData.value);
    alert(`Thank you for your request! We will contact you regarding your trip on ${formData.value.date} at ${formData.value.time}.`);
};

</script>

<style>
/* Ensure Tailwind is configured in your project */
</style>