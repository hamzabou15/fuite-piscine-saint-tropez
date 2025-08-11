import Intro from '@/components/a-propos/Intro'
import Introduction from '@/components/a-propos/introduction'
import StatsCard from '@/components/a-propos/Stats'
import HeroSection from '@/components/HeroSection'
import ProjectSection from '@/components/home/ProjectSection'
import LocalBusinessSchema from '@/components/SEO/LocalBusiness'
import Head from 'next/head'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Fuite Piscine Expert Saint-Tropez – Recherche Fuite Sans Casse</title>
        <meta
          name="description"
          content="Expert en recherche de fuite piscine à Saint-Tropez. Intervention rapide, sans vidange ni casse. Diagnostic précis et devis gratuit sous 24h."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Fuite Piscine Expert Saint-Tropez",
              image: "https://fuitepiscinesainttropez.fr/images/fuite-piscine-sur-saint-tropez.webp",
              "@id": "https://fuitepiscinesainttropez.fr/",
              url: "https://fuitepiscinesainttropez.fr/",
              telephone: "+33756935200",
              address: {
                "@type": "PostalAddress",
                streetAddress: "12 Rue de France",
                addressLocality: "Saint-Tropez",
                postalCode: "83990",
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
              sameAs: [
                "https://www.facebook.com/fuitepiscineexpert",
                "https://www.instagram.com/fuitepiscineexpert",
              ],
            }),
          }}
        />
      </Head>

      <LocalBusinessSchema />

      <main className="mx-auto relative text-[#222626] ">
        <HeroSection
          subtitle=''
          title="À propos de Fuite Piscine Expert à Saint-Tropez" />

        <section className='px-12 sm:px-6 max-w-7xl '>
          <Intro />

        </section>
        <section className='px-12 sm:px-6 max-w-7xl '>
          <Introduction />

        </section>
        <section className='px-12 sm:px-6 max-w-7xl '>
          <StatsCard />

        </section>
        <section className='px-12 sm:px-6 max-w-7xl '>

        </section>
        <div className="flex justify-center my-12">
          <Image
            src="/images/piscine-d-escalier-fuite-saint-tropez.webp"
            alt="Expert fuite piscine Saint-Tropez"
            width={1000}
            height={1000}
            className="w-full max-w-5xl h-auto object-cover rounded-lg shadow-lg"
            priority
          />
        </div>
        <section className='px-12 sm:px-6 max-w-7xl '>
          <ProjectSection />

        </section>
      </main>
    </>
  )
}
