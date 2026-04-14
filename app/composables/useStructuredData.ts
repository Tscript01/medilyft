type JsonLdValue =
  | string
  | number
  | boolean
  | null
  | JsonLdObject
  | JsonLdValue[];

type JsonLdObject = {
  [key: string]: JsonLdValue;
};

export const useStructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "MediLyft",
    description:
      "Professional medical transportation services offering safe, reliable rides for healthcare appointments and patient transfers in Ekiti State, Nigeria.",
    url: "https://www.medilyfthelp.com",
    logo: "https://www.medilyfthelp.com/images/MediLyft.png",
    image: "https://www.medilyfthelp.com/images/MediLyft.png",
    telephone: "+2348160791374",
    email: "info@medilyfthelp.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ekiti State",
      addressLocality: "Ado-Ekiti",
      addressCountry: "NG",
    },
    sameAs: [
      "https://www.facebook.com/profile.php?id=61584847349030",
      "https://www.instagram.com/medilyfthelp",
      "https://www.tiktok.com/@medilyfthelp",
    ],
    priceRange: "$$",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "MediLyft Medical Transportation",
    description:
      "Professional medical transportation and ambulance coordination services",
    url: "https://www.medilyfthelp.com",
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

  const setStructuredData = (schema: JsonLdObject) => {
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
