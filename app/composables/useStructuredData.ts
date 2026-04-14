export const useStructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MediLyft",
    description:
      "Professional medical transportation services offering safe, reliable rides for healthcare appointments and patient transfers.",
    url: "https://www.medilyft.com",
    logo: "https://www.medilyft.com/images/MediLyft.png",
    image: "https://www.medilyft.com/images/MediLyft.png",
    telephone: "+234-XXX-XXXX-XXX",
    email: "support@medilyft.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ekiti State",
      addressLocality: "Ekiti",
      addressCountry: "NG",
    },
    sameAs: [
      "https://www.facebook.com/medilyft",
      "https://twitter.com/medilyft",
      "https://www.instagram.com/medilyft",
    ],
    priceRange: "$$",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "MediLyft Medical Transportation",
    description:
      "Professional medical transportation and ambulance coordination services",
    url: "https://www.medilyft.com",
    offers: {
      "@type": "Offer",
      name: "Medical Transportation Services",
      description:
        "Safe and reliable medical transportation for healthcare appointments and patient transfers",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What medical transportation services does MediLyft offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MediLyft provides professional medical transportation services for healthcare appointments, patient transfers, and emergency transport coordination.",
        },
      },
      {
        "@type": "Question",
        name: "Is MediLyft available 24/7?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MediLyft operates to serve your medical transportation needs. Contact us for current availability and service hours.",
        },
      },
      {
        "@type": "Question",
        name: "How do I book a medical transportation service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can book through our mobile application, website, or by calling our support team.",
        },
      },
    ],
  };

  const setStructuredData = (schema: Record<string, any>) => {
    useHead({
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify(schema),
        },
      ],
    });
  };

  return {
    organizationSchema,
    serviceSchema,
    faqSchema,
    setStructuredData,
  };
};
