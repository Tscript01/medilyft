<template>
    <section id="faq" class="py-20 md:py-28">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div class="text-center max-w-3xl mx-auto mb-16">
                <span class="text-secondary  tracking-wider uppercase text-md">Common Questions</span>
                <h2 class="text-3xl md:text-4xl font-extrabold text-[#0A2540] mt-3 mb-4">
                    Everything You Need to Know
                </h2>
                <p class="text-gray-600 text-lg">
                    Can't find the answer you're looking for? Reach out to our support team directly.
                </p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
                
                <div class="space-y-4">
                    <div 
                        v-for="(item, index) in leftColumnFaqs" 
                        :key="'left-' + index"
                        class="bg-white rounded-xl shadow- border border-gray-100 overflow-hidden"
                    >
                        <button 
                            @click="toggleFaq('left', index)"
                            class="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none bg-gray-50   hover:bg-gray-100 transition-colors"
                        >
                            <span class="font-bold text-[#0A2540] pr-8">{{ item.question }}</span>
                            <span class="shrink-0">
                                <svg v-if="activeLeft === index" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" /></svg>
                                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                            </span>
                        </button>
                        <transition 
                            enter-active-class="transition duration-200 ease-out"
                            enter-from-class="transform scale-y-95 opacity-0"
                            enter-to-class="transform scale-y-100 opacity-100"
                            leave-active-class="transition duration-100 ease-in"
                            leave-from-class="transform scale-y-100 opacity-100"
                            leave-to-class="transform scale-y-95 opacity-0"
                        >
                            <div v-show="activeLeft === index" class="px-6 pb-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                                <div class="mt-4">{{ item.answer }}</div>
                            </div>
                        </transition>
                    </div>
                </div>

                <div class="space-y-4">
                    <div 
                        v-for="(item, index) in rightColumnFaqs" 
                        :key="'right-' + index"
                        class="bg-white rounded- shadow- border border-gray-100 overflow-hidden"
                    >
                        <button 
                            @click="toggleFaq('right', index)"
                            class="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none bg-white hover:bg-gray-50 transition-colors"
                        >
                            <span class="font-bold text-[#0A2540] pr-8">{{ item.question }}</span>
                            <span class="shrink-0">
                                <svg v-if="activeRight === index" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" /></svg>
                                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                            </span>
                        </button>
                        <transition 
                            enter-active-class="transition duration-200 ease-out"
                            enter-from-class="transform scale-y-95 opacity-0"
                            enter-to-class="transform scale-y-100 opacity-100"
                            leave-active-class="transition duration-100 ease-in"
                            leave-from-class="transform scale-y-100 opacity-100"
                            leave-to-class="transform scale-y-95 opacity-0"
                        >
                            <div v-show="activeRight === index" class="px-6 pb-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-50">
                                <div class="mt-4">{{ item.answer }}</div>
                            </div>
                        </transition>
                    </div>
                </div>

            </div>

            <div class="text-center mt-12">
                <p class="text-gray-500">Still have questions?</p>
                <a href="mailto:medilyfthelp@gmail.com" class="text-[#0A2540] font-bold hover:text-red-600 underline mt-2 inline-block">Contact our support team</a>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue';

const activeLeft = ref(0); 
const activeRight = ref(null);

const toggleFaq = (column, index) => {
    if (column === 'left') {
        activeLeft.value = activeLeft.value === index ? null : index;
    } else {
        activeRight.value = activeRight.value === index ? null : index;
    }
};

const faqs = [
    {
        question: "What is MediLyft?",
        answer: "MediLyft is a community-powered medical transport service that connects patients to trained local drivers for fast, safe, and reliable access to care."
    },
    {
        question: "When can I request a ride?",
        answer: "You can request a ride at any time. MediLyft operates 24 hours a day to ensure access to care whenever it is needed."
    },
    {
        question: "What types of trips does MediLyft support?",
        answer: "We support emergency transport, non-emergency medical visits, follow-up appointments, routine checkups, referrals, therapy sessions, and hospital discharge."
    },
    {
        question: "How do I request a MediLyft service?",
        answer: "You can request a ride through our mobile platform, our WhatsApp channel, or through partner health facilities that use MediLyft for patient transport."
    },
    {
        question: "How fast can a driver get to me?",
        answer: "Arrival time depends on your location, traffic, and driver availability, but our system connects you to the nearest trained driver for the fastest possible response."
    },
    {
        question: "Are MediLyft drivers trained?",
        answer: "Yes. All drivers receive training on patient handling, communication, and basic safety practices. They are also vetted before joining the network."
    },
    {
        question: "Is MediLyft only for emergencies?",
        answer: "No. While we focus strongly on emergencies, we also provide comfortable transport for routine and scheduled medical needs."
    },
    {
        question: "How much does MediLyft cost?",
        answer: "Pricing varies based on distance and the type of trip. However, our goal is to keep transport affordable while ensuring drivers earn sustainable income."
    },
    {
        question: "Does MediLyft partner with hospitals and clinics?",
        answer: "Yes. We work with health facilities to support referrals, emergency movement, and structured patient transport."
    },
    {
        question: "Is MediLyft safe for vulnerable groups?",
        answer: "Yes. We prioritize vulnerable groups, including elderly people, pregnant women, and people with disabilities, ensuring they receive respectful, safe, and timely transport."
    },
    {
        question: "Can I schedule a ride ahead of time?",
        answer: "Yes. You can schedule non-emergency medical transport in advance to avoid delays on appointment days."
    },
    {
        question: "How does MediLyft ensure patient privacy?",
        answer: "We protect all user information and follow strict data protection practices across our platform and communication channels."
    },
    {
        question: "Can drivers earn through MediLyft?",
        answer: "Yes. MediLyft creates steady income opportunities for local drivers while helping them serve their communities."
    },
    {
        question: "Where does MediLyft operate?",
        answer: "We currently serve multiple communities in Ekiti with plans to expand to more regions soon."
    }
];

const leftColumnFaqs = computed(() => faqs.slice(0, Math.ceil(faqs.length / 2)));
const rightColumnFaqs = computed(() => faqs.slice(Math.ceil(faqs.length / 2)));

</script>