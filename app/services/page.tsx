// D:\Plombier\plombier-nice\app\services\page.tsx
import HeroSection from '@/components/HeroSection'
import PlumbingIntro from '@/components/home/PlumberIntroSection'
import LocalBusinessSchema from '@/components/SEO/LocalBusiness'
import ContactSection from '@/components/services/ContactSection'
import ServicesSection from '@/components/services/ServicesSection'
import Testimonials from '@/components/Testimonials'
import { Metadata } from 'next'
import Head from 'next/head'
import React from 'react'


export const metadata = {
    title: "Plombier à Nice - Interventions rapides & professionnelles",
    description: "Intervention express à Nice pour dépannage, fuite, débouchage, chauffe-eau et plus. Plombier expérimenté, devis gratuit et service garanti.",
    openGraph: {
        title: "Plombier à Nice - Interventions rapides & professionnelles",
        description: "Intervention express à Nice pour dépannage, fuite, débouchage, chauffe-eau et plus.",
        url: "https://plombiernice-expert.fr",
        siteName: "Plombier Nice Expert",
        images: [
            {
                url: "https://plombiernice-expert.fr/images/plombier-nice-hero.webp",
                width: 800,
                height: 600,
                alt: "Plombier professionnel à Nice",
            },
        ],
        locale: "fr_FR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Plombier à Nice - Interventions rapides & professionnelles",
        description: "Plombier expérimenté pour dépannage, fuite, chauffe-eau, rénovation à Nice. Service rapide, devis gratuit.",
        images: ["https://plombiernice-expert.fr/images/plombier-nice-hero.webp"],
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
                            name: "PlombierNice Expert",
                            image: "https://plombiernice-expert.fr/images/plombier-nice-hero.webp",
                            "@id": "https://plombiernice-expert.fr/",
                            url: "https://plombiernice-expert.fr/",
                            telephone: "+33612345678",
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
