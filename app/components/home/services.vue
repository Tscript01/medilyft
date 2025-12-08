<template>
    <div class="bg-[#0a25400c]">
           <main class=" container">
        <section id="services" class="py-20 md:py-28 ">
            <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Header -->
                <div class="max-w-3xl mx-auto text-center mb-16">
                    <span class=" text-secondary  tracking-wider uppercase text-sm sm:text-lg">Services</span>
                    <h2 class="text-3xl md:text-3xl font-extrabold text-primary mt-3 mb-4 break-all sm:break-normal">Comprehensive Care in
                        Motion</h2>
                    <p class="text-gray-500 text-lg">From emergency response to routine checkups, we offer a range of
                        transport solutions tailored to your specific health needs.</p>
                </div>

                <!-- Cards Grid -->
                <div class="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 place-items-center">
                    <div v-for="(service, index) in services" :key="index"
                        class="group relative bg-white rounded-md p-8  border border-gray-100  hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">

                        <div
                            class="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                            <span
                                class="text-primary group-hover:text-white transition-colors duration-300 [&>svg]:w-8 [&>svg]:h-8"
                                v-html="service.icon"></span>
                        </div>

                        <h3 class="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">{{
                            service.title }}</h3>
                        <p class="text-gray-600 leading-relaxed mb-6">
                            {{ service.description }}
                        </p>

                        <!-- <a href="#"
                            class="inline-flex items-center text-sm font-semibold text-[#0A2540] hover:text-red-600 transition-colors">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 5l7 7-7 7" />
                            </svg>
                        </a> -->
                    </div>
                </div>

                <!-- <div class="text-center mt-16">
                    <NuxtLink to="/services"
                        class="inline-block px-8 py-4 bg-gray-100 text-[#0A2540] font-bold rounded-lg hover:bg-[#0A2540] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg">
                        View All Services &amp; Partnerships
                    </NuxtLink>
                </div> -->
            </div>
        </section>
        </main>
    </div>
</template>

<script setup>
const services = [
    {
        title: "Emergency Medical Transport",
        description: "Provides rapid and reliable transport for urgent cases, connecting patients to the nearest available trained driver immediately.",
        bgColor: "bg-red-50", // Light Red Base
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-6.75h.008v.008H12V3.75Z" /></svg>`
    },
    {
        title: "Non-Emergency Medical Transport",
        description: "Safe and comfortable transport for routine checkups, follow-up visits, referrals, therapy, or diagnostic appointments.",
        bgColor: "bg-blue-50", // Light Blue Base
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6.75v.008v.008h-.008V6.75ZM12 6.75v.008v.008H12V6.75ZM8.25 6.75v.008v.008H8.25V6.75ZM12 18v.008v.008H12V18Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M21 12c0 2.825-1.127 5.48-3.176 7.424C15.678 21.368 12.894 22.5 10 22.5c-4.97 0-9-4.03-9-9s4.03-9 9-9c1.944 0 3.737.75 5.109 2.039l2.884 2.884c.325.325.507.76.507 1.22A3.25 3.25 0 0 1 18 12.75V12a3.25 3.25 0 0 0-3.25-3.25h-5.5a1.5 1.5 0 0 0-1.5 1.5v5.5a3.25 3.25 0 0 0 3.25 3.25h5.5c.875 0 1.69-.355 2.296-.989l2.895-3.033c.325-.325.507-.76.507-1.22a3.25 3.25 0 0 1-3.25 3.25h-5.5a1.5 1.5 0 0 0-1.5 1.5v5.5a3.25 3.25 0 0 0 3.25 3.25h5.5c.875 0 1.69-.355 2.296-.989l2.895-3.033c.325-.325.507-.76.507-1.22Z" /></svg>`
    },
    {
        title: "Dispatch and Coordination Support",
        description: "Our platform provides real-time communication and coordination between patients, drivers, and health facilities for streamlined logistics.",
        bgColor: "bg-red-100", // Slightly Darker Red Base
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5M9.75 18H14.25m-5.83-5.25v2.25m5.5-2.25v2.25M12 4.5v3.75M12 4.5h.008v.008H12V4.5Z" /></svg>`
    },
    {
        title: "Health Facility Partnership",
        description: "We partner with clinics and hospitals to support their referral and emergency logistics, offering quick patient transport on demand.",
        bgColor: "bg-blue-100", // Slightly Darker Blue Base
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 10.5h7.5m-7.5 3h7.5m-7.5 3h7.5M10.5 4.875A1.5 1.5 0 0 1 12 3.375h.001c.414 0 .75.336.75.75v.375h1.5a1.5 1.5 0 0 1 1.5 1.5v12.75a1.5 1.5 0 0 1-1.5 1.5h-5.25a1.5 1.5 0 0 1-1.5-1.5v-12.75a1.5 1.5 0 0 1 1.5-1.5h1.5v-.375c0-.414.336-.75.75-.75h.001A1.5 1.5 0 0 1 12 4.875Z" /></svg>`
    },
    {
        title: "Transport for Vulnerable Groups",
        description: "Priority support for pregnant women, the elderly, and people with disabilities, ensuring respectful and fast transport whenever needed.",
        bgColor: "bg-blue-200", // Medium Light Blue Base
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6.75c0-.828-.672-1.5-1.5-1.5H9.75c-.828 0-1.5.672-1.5 1.5v3h7.5v-3ZM6 10.5h12v4.5c0 .828-.672 1.5-1.5 1.5H7.5c-.828 0-1.5-.672-1.5-1.5v-4.5Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 21.75V16.5m0-12v-1.5" /></svg>`
    },
];
</script>