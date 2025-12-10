<template>
    <section id="pricing" class="py-20 md:py-28 bg-[#F5F8FC]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div class="text-center max--3xl mx- mb-16">
               <span class="text-secondary  tracking-wider uppercase text-md">Pricing Insights</span>
     <h2 class="text-2xl md:text-3xl font-bold text-primary">Pricing &amp; Payment FAQs</h2>
               <p class="text-gray-600 text-lg">Explore the details behind our pricing structure and how each plan supports your goals.</p>
            </div>

      

            <div class="">
                <div class="bg-white rounded-2xl shadow-xl border border-gray-100 p-2 md:p-8">
                    <div class="divide-y divide-gray-100">
                        <div 
                            v-for="(item, index) in pricingFaqs" 
                            :key="'pricing-' + index"
                            class="group"
                        >
                            <button 
                                @click="togglePricing(index)"
                                class="w-full py-6 px-4 text-left flex justify-between items-start focus:outline-none transition-colors rounded-lg hover:bg-gray-50"
                            >
                                <div class="flex items-center gap-4">
                                    <div class="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                                        :class="activePricing === index ? 'bg-primary text-white' : 'bg-green- text-secondary group-hover:bg-green-10'"
                                    >
                                        <span class="font-bold text-sm">{{ index + 1 }}</span>
                                    </div>
                                    <span class="font-bold text-lg text-primary group-hover:text-secondary transition-colors">{{ item.question }}</span>
                                </div>
                                <span class="shrink-0 mt-1 ml-4">
                                    <svg 
                                        class="h-5 w-5 transform transition-transform duration-300" 
                                        :class="activePricing === index ? 'rotate-180 text-secondary' : 'text-gray-400'"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                    >
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                    </svg>
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
                                <div v-show="activePricing === index" class="pl-18 pr-6 pb-6 text-gray-600 leading-relaxed">
                                    {{ item.answer }}
                                </div>
                            </transition>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center mt-16">
                <p class="text-gray-500">Still have questions?</p>
                <a href="mailto:info@medilyfthelp.com" class="text-primary font-bold hover:text-red-600 underline mt-2 inline-block">Contact our support team</a>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue';

// --- State for Accordions ---
const activeLeft = ref(0); 
const activeRight = ref(null);
const activePricing = ref(null);

const toggleFaq = (column, index) => {
    if (column === 'left') {
        activeLeft.value = activeLeft.value === index ? null : index;
    } else {
        activeRight.value = activeRight.value === index ? null : index;
    }
};

const togglePricing = (index) => {
    activePricing.value = activePricing.value === index ? null : index;
};



// --- Pricing FAQ Data ---
const pricingFaqs = [
    {
        question: "How much does a MediLyft trip cost?",
        answer: "Pricing depends on the distance, trip type and location. We keep our rates affordable to ensure that everyone can access timely medical transport while still supporting fair earnings for our drivers."
    },
    {
        question: "Are emergency trips more expensive?",
        answer: "Emergency trips may attract slightly higher rates because they require faster response and priority dispatch. However, we always keep costs as reasonable as possible for patients."
    },
    {
        question: "Do I get to see the price before confirming a ride?",
        answer: "Yes. You will see the estimated cost on the platform before confirming your request so you can make an informed decision."
    },
    {
        question: "Are there additional or hidden charges?",
        answer: "No. MediLyft does not add hidden fees. Any extra charge, such as long waiting periods or special assistance, will be clearly stated before the trip begins."
    },
    {
        question: "Can I pay with cash or transfer?",
        answer: "While we do NOT accept cash, Payments can be made through Cards, Bank transfer or USSD depending on what is convenient for you."
    },
    {
        question: "Does MediLyft offer discounted rates for frequent users or vulnerable groups?",
        answer: "We plan to introduce special support packages and community based subsidies for pregnant women, elderly people and individuals who require frequent medical transport."
    }
];

// Split FAQs into two columns for the layout
const leftColumnFaqs = computed(() => faqs.slice(0, Math.ceil(faqs.length / 2)));
const rightColumnFaqs = computed(() => faqs.slice(Math.ceil(faqs.length / 2)));

</script>