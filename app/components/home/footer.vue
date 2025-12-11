<template>
  <footer class="bg-gray-800 text-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-700 pb-8"
      >
        <!-- Company Info -->
        <div class="col-span-2 md:col-span-1 space-y-4">
          <div class=" w-20 sm:w-32 bg-white rounded-lg p-1">
            <!-- Placeholder for the logo in the footer (you might use a white version) -->
            <img
              class="object-contain h-full w-full"
              src="/images/MediLyft.png"
              alt="MediLyft Logo"
            />
          </div>
          <p class="text-sm text-gray-400">
            Patient-focused, reliable medical transport, committed to timely
            care and community well-being.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="space-y-3">
          <h4 class="font-semibold text-white uppercase tracking-wider mb-3">
            Quick Links
          </h4>
          <ul class="space-y-2 text-sm">
            <li>
              <NuxtLink
                to="#about"
                class="text-gray-400 hover:text-red-500 transition duration-200"
                >About Us</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="#services"
                class="text-gray-400 hover:text-red-500 transition duration-200"
                >Our Services</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="#pricing"
                class="text-gray-400 hover:text-red-500 transition duration-200"
                >Pricing</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="#faq"
                class="text-gray-400 hover:text-red-500 transition duration-200"
                >FAQ</NuxtLink
              >
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="space-y-3">
          <h4 class="font-semibold text-white uppercase tracking-wider mb-3">
            Contact
          </h4>
          <ul class="space-y-2 text-sm">
            <li>
              <p class="text-gray-400">Phone:</p>
              <a
                href="tel:08157612294"
                class="text-red-500 hover:text-red-400 transition duration-200"
                >08157612294</a
              >
            </li>
            <li class=""> 
              <p class="text-gray-400 text-wrap">Email:</p>
              <a
                href="mailto:info@medilyfthelp.com"
                class="text-red-500 hover:text-red-400 transition duration-200 break-all "
                >info@medilyfthelp.com</a
              >
            </li>
          </ul>
        </div>

        <!-- Legal -->
        <div class="space-y-3">
          <h4 class="font-semibold text-white uppercase tracking-wider mb-3">
            Legal
          </h4>
          <ul class="space-y-2 text-sm">
            <li>
              <NuxtLink
                to="/privacy-policy"
                class="text-gray-400 hover:text-red-500 transition duration-200"
                >Privacy Policy</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/terms"
                class="text-gray-400 hover:text-red-500 transition duration-200"
                >Terms & Conditions</NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-8 pt-4 text-center text-sm text-gray-500">
        &copy; {{ new Date().getFullYear() }} MediLyft. All rights reserved.
      </div>
    </div>
  </footer>
</template>
