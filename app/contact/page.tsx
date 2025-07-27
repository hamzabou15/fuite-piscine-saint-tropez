import ContactForm from '@/components/contact/Form'
import LocalBusinessSchema from '@/components/SEO/LocalBusiness';
import Head from 'next/head'
import React from 'react'

export const metadata = {
    title: "Fuite Piscine à Nice - Interventions rapides & professionnelles",
    description: "Intervention express à Nice pour dépannage, fuite, débouchage, chauffe-eau et plus. Fuite Piscine expérimenté, devis gratuit et service garanti.",
    openGraph: {
        title: "Fuite Piscine à Nice - Interventions rapides & professionnelles",
        description: "Intervention express à Nice pour dépannage, fuite, débouchage, chauffe-eau et plus.",
        url: "https://https://fuitepiscinenice-expert.fr",
        siteName: "Fuite Piscine Nice Expert",
        images: [
            {
                url: "https://https://fuitepiscinenice-expert.fr/images/fuite-piscine-beton-nice.webp",
                width: 800,
                height: 600,
                alt: "Fuite Piscine professionnel à Nice",
            },
        ],
        locale: "fr_FR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Fuite Piscine à Nice - Interventions rapides & professionnelles",
        description: "Fuite Piscine expérimenté pour dépannage, fuite, chauffe-eau, rénovation à Nice. Service rapide, devis gratuit.",
        images: ["https://https://fuitepiscinenice-expert.fr/images/fuite-piscine-beton-nice.webp"],
    },
};
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
                            name: "Fuite Piscine Expert",
                            image: "https://https://fuitepiscinenice-expert.fr/images/fuite-piscine-expert-nice-7.webp",
                            "@id": "https://https://fuitepiscinenice-expert.fr/",
                            url: "https://https://fuitepiscinenice-expert.fr/",
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
            <main className="min-h-[calc(100vh-100px)]">
                <div className="max-w-6xl mx-auto px-4 py-10">
                    {/* Contact Form Component */}
                    <ContactForm />
                </div>
            </main>
        </>
    )
}

export default page