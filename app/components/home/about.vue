<template>
    <div class="bg-gray-50 relative overflow-hidden">
        <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  ">

    <section id="about" class="py-20 md:py-28  overflow-hidden relative">

        <div class=" mx-auto px-4 sm:px-6  relative z-10">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                
                <div class="space-y-8">
                    <div>
                        <span class="inline-block py-1 px-3 rounded-full  text-secondary  text-md  tracking-widest uppercase mb-4">
                            Who We Are
                        </span>
                        <h2 class="text-3xl md:text-3xl font-bold text-[#0A2540] leading-tight">
                            Bridging the Gap Between <br>
                            <span class="relative inline-block">
                                Patients &amp; Care
                                <svg class="absolute bottom-0 left-0 w-full h-2 text-red-500 opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" stroke-width="8" fill="none" />
                                </svg>
                            </span>
                        </h2>
                    </div>
                    
                    <p class="text-md text-gray-600 leading-relaxed">
                        MediLyft isn't just a transport service; it's a lifeline. We connect individuals with trained local drivers through a smart dispatch system, ensuring that distance never prevents someone from receiving timely medical attention.
                    </p>

                    <div class="border-l-4 border-[#0A2540] pl-6 py-2">
                        <p class="italic text-gray-700 font-medium text-lg">
                            "Our approach improves emergency response, supports the health ecosystem, and offers sustainable earning opportunities for drivers."
                        </p>
                    </div>

                    <NuxtLink to="/about-us" class="group inline-flex items-center text-[#0A2540] font-bold hover:text-red-600 transition duration-300">
                        Read Our Full Story
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
                    </NuxtLink>
                </div>

                <div class="grid grid-cols-1 gap-6">
                    <div class="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300 relative overflow-hidden group">
                        <div class="absolute top-0 right-0 w-24 h-24 bg-red-50 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>
                        <div class="relative z-10 flex flex-col sm:flex-row gap-5 items-start">
                            <div class="p-3 bg-red-100 rounded-lg text-red-600 shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-[#0A2540] mb-2">Our Vision</h3>
                                <p class="text-gray-600 text-sm leading-relaxed">
                                    To ensure the well-being and good health of all by providing 24/7 access to emergency transport. We are committed to reducing preventable complications and aligning with <span class="font-semibold text-red-600">SDG 3</span>.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="bg-[#0A2540] p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 text-white relative overflow-hidden group">
                         <div class="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-5 rounded-tr-full -ml-8 -mb-8 pointer-events-none"></div>
                        <div class="relative z-10 flex flex-col sm:flex-row gap-5 items-start">
                            <div class="p-3 bg-white/10 rounded-lg text-white shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg>
                            </div>
                            <div>
                                <h3 class="text-xl font-bold text-white mb-2">Our Mission</h3>
                                <p class="text-gray-300 text-sm leading-relaxed">
                                    To connect patients, local drivers, and health facilities through a coordinated transport network that reduces delays, supports community livelihoods, and strengthens the healthcare ecosystem.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
        </main>

    </div>
</template>