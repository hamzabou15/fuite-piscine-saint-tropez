import HeroSection from '@/components/HeroSection'
import PlumbingIntro from '@/components/home/LeakPoolIntro'
import LocalBusinessSchema from '@/components/SEO/LocalBusiness'
import ContactSection from '@/components/services/ContactSection'
import ServicesSection from '@/components/services/ServicesSection'
import Testimonials from '@/components/Testimonials'
import Head from 'next/head'
import React from 'react'


export const metadata = {
  title: "Recherche de fuite piscine à Nice – Détection rapide et fiable",
  description:
    "Spécialiste en recherche de fuite piscine à Nice. Diagnostic précis, technologie non destructive, rapport détaillé et devis gratuit. Intervention sous 48h.",
  openGraph: {
    title: "Recherche de fuite piscine à Nice – Détection rapide et fiable",
    description:
      "Expert local en détection de fuites de piscine à Nice. Intervention rapide, sans casse, avec rapport complet et devis offert.",
    url: "https://fuitepiscinenice-expert.fr/services/recherche-fuite-piscine-nice",
    siteName: "Fuite Piscine Expert Nice",
    images: [
      {
        url: "https://fuitepiscinenice-expert.fr/images/fuite-piscine-nice.webp",
        width: 1200,
        height: 630,
        alt: "Détection de fuite piscine à Nice",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fuite Piscine à Nice – Détection rapide & rapport détaillé",
    description:
      "Recherche de fuite piscine à Nice par un professionnel équipé. Intervention sous 48h avec devis offert.",
    images: ["https://fuitepiscinenice-expert.fr/images/fuite-piscine-nice.webp"],
  },
};

// service page 
const page = () => {
    return (
        <>
            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "LocalBusiness",
                            name: "fuite piscine nice Expert",
                            image: "https://fuitepiscinenice-expert.fr/images/detection-fuite-piscine-nice.webp",
                            "@id": "https://fuitepiscinenice-expert.fr/",
                            url: "https://fuitepiscinenice-expert.fr/",
                            telephone: "+33647572021",
                            address: {
                                "@type": "PostalAddress",
                                streetAddress: "12 Rue de France",
                                addressLocality: "Nice",
                                postalCode: "06000",
                                addressCountry: "FR",
                            },
                            openingHoursSpecification: [
                                {
                                    "@type": "OpeningHoursSpecification",
                                    dayOfWeek: [
                                        "Monday",
                                        "Tuesday",
                                        "Wednesday",
                                        "Thursday",
                                        "Friday",
                                        "Saturday",
                                        "Sunday",
                                    ],
                                    opens: "08:00",
                                    closes: "20:00",
                                },
                            ],
                            sameAs: [],
                        }),
                    }}
                />
            </Head>
            <LocalBusinessSchema />

            <main className="bg-white text-[#222626] px-16 max-sm:px-6 ">
                <HeroSection
                    title='Nos Services'
                />
                <PlumbingIntro />
                <ServicesSection />
                <ContactSection />
                <Testimonials />
            </main>
        </>
    )
}

export default page
