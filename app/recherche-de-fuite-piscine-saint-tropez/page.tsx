// app/recherche-de-fuite-piscine-saint-tropez/page.tsx
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Head from 'next/head';
import { caseStudies } from '@/lib/s';
import Link from 'next/link';
import Image from 'next/image';

export default function RechercheFuitePiscineSaintTropez() {
  return (
    <>
      <Head>
        <title>Recherche Fuite Piscine Saint-Tropez | Détection Sans Casse</title>
        <meta name="description" content="Experts en détection de fuites de piscines à Saint-Tropez. Méthodes non destructives pour villas et hôtels de prestige. Intervention rapide 7j/7 dans toute la presqu'île." />
        <meta name="keywords" content="fuite piscine saint tropez, détection fuite piscine, réparation piscine, piscine coque saint tropez, piscine béton ramatuelle, recherche fuite eau, technicien piscine 83" />
        <link rel="canonical" href="https://www.fuitepiscinesainttropez.fr/recherche-de-fuite-piscine-saint-tropez" />

        {/* Open Graph */}
        <meta property="og:title" content="Expert Fuite Piscine Saint-Tropez | Détection Sans Casse" />
        <meta property="og:description" content="Spécialiste des fuites de piscines à Saint-Tropez. Interventions discrètes et non destructives pour propriétés haut de gamme." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.fuitepiscinesainttropez.fr/recherche-de-fuite-piscine-saint-tropez" />
        <meta property="og:image" content="https://www.fuitepiscinesainttropez.fr/images/og-fuite-piscine-saint-tropez.jpg" />
        <meta property="og:locale" content="fr_FR" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Expert Fuite Piscine Saint-Tropez" />
        <meta name="twitter:description" content="Détection précise de fuites sans dégâts pour piscines de luxe à Saint-Tropez et sa région" />
        <meta name="twitter:image" content="https://www.fuitepiscinesainttropez.fr/images/twitter-card-fuite-piscine.jpg" />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] text-white py-24 md:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <span className="inline-block px-4 py-2 bg-[#F59E0B]/20 text-[#F59E0B] rounded-full text-sm font-bold tracking-widest">
                  Spécialiste Saint-Tropez
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                  Recherche de fuite piscine <br />
                  <span className="text-[#F59E0B]">à Saint-Tropez</span>
                </h1>
                <p className="text-lg md:text-xl opacity-90 max-w-2xl">
                  Détection précise sans casse pour piscines de luxe - Interventions rapides 7j/7 sur Saint-Tropez, Ramatuelle et Gassin
                </p>

                <div className="flex flex-wrap gap-4 mt-8">
                  <Link href={"/contact"}>
                    <Button
                      size="lg"
                      className="bg-[#F59E0B] hover:bg-[#D97706] text-[#1E3A8A] text-lg font-bold py-6 px-8"
                    >
                      Diagnostic immédiat
                    </Button>
                  </Link>


                  <a
                    href="tel:+33756935200"
                    className="flex items-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition"
                  >
                    <Phone className="w-5 h-5 text-[#F59E0B]" />
                    <span className="font-bold text-lg">07 56 93 52 00</span>
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="relative aspect-video rounded-xl overflow-hidden border-4 border-white/20 shadow-2xl">
                  <Image
                    width={500}
                    height={500}
                    alt='Recherche de fuites piscine à Saint Tropez'
                    src={"/images/recherche-de-fuites-saint-tropez.webp"}
                    className='bg-gray-200 border-2 border-dashed rounded-xl w-full h-full object-cover'
                  />

                </div>

                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg text-[#0f203f]">
                  <p className="font-bold">Intervention en <span className="text-[#F59E0B]">24h</span></p>
                  <p className="text-sm">7j/7 sur Saint-Tropez</p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-[500px] -right-[300px] w-[800px] h-[800px] rounded-full bg-[#2563EB]/20"></div>
            <div className="absolute top-40 -right-20 w-[400px] h-[400px] rounded-full bg-[#F59E0B]/10"></div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f203f] mb-8">
                Expertise en détection non destructive pour villas de prestige
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-6">
                  <div className="bg-[#F59E0B]/10 p-4 rounded-full">
                    <svg className="w-8 h-8 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0f203f] mb-2">Méthodes adaptées aux propriétés haut de gamme</h3>
                    <p className="text-[#475565]">
                      Pour les villas de Saint-Tropez, nous utilisons des techniques discrètes et non invasives
                      (caméra endoscopique, électro-acoustique, gaz traceur) qui préservent vos aménagements paysagers
                      et finitions premium.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-[#1E3A8A]/10 p-4 rounded-full">
                    <svg className="w-8 h-8 text-[#1E3A8A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0f203f] mb-2">Intervention rapide 7j/7</h3>
                    <p className="text-[#475565]">
                      En saison estivale, chaque heure compte. Nos techniciens interviennent en moins de 24h sur
                      Saint-Tropez, Ramatuelle et Gassin pour minimiser l&apos;impact sur votre séjour ou votre location saisonnière.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="bg-[#2563EB]/10 p-4 rounded-full">
                    <svg className="w-8 h-8 text-[#2563EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0f203f] mb-2">Garantie premium 2 ans</h3>
                    <p className="text-[#475565]">
                      Toutes nos interventions sont couvertes par une garantie écrite de 24 mois.
                      Nous fournissons un rapport technique détaillé pour vos assurances ou le suivi de votre propriété.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 bg-[#F8FAFF] p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-[#0f203f] mb-6">Nos techniques de détection</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-lg text-[#0f203f] flex items-center gap-2 mb-2">
                    <span className="bg-[#F59E0B] text-white w-6 h-6 rounded-full flex items-center justify-center">1</span>
                    Détection électro-acoustique
                  </h4>
                  <p className="text-[#475565]">
                    Localise les fuites dans les structures béton avec une précision de ±10cm, idéal pour les piscines
                    à débordement des villas de Ramatuelle.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg text-[#0f203f] flex items-center gap-2 mb-2">
                    <span className="bg-[#1E3A8A] text-white w-6 h-6 rounded-full flex items-center justify-center">2</span>
                    Gaz traceur (Hydrogène)
                  </h4>
                  <p className="text-[#475565]">
                    Méthode ultra-précise pour les fuites complexes dans les canalisations enterrées, sans excavation
                    ni dégâts sur vos aménagements.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg text-[#0f203f] flex items-center gap-2 mb-2">
                    <span className="bg-[#2563EB] text-white w-6 h-6 rounded-full flex items-center justify-center">3</span>
                    Caméra endoscopique étanche
                  </h4>
                  <p className="text-[#475565]">
                    Inspection visuelle des pièces à sceller (skimmers, bondes) sans vidange complète, préservant
                    l&apos;eau et l&apos;équilibre chimique de votre piscine.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-lg text-[#0f203f] flex items-center gap-2 mb-2">
                    <span className="bg-[#F59E0B] text-white w-6 h-6 rounded-full flex items-center justify-center">4</span>
                    Thermographie infrarouge
                  </h4>
                  <p className="text-[#475565]">
                    Identification des variations de température révélatrices de fuites dans les liners ou coques,
                    particulièrement efficace pour les piscines chauffées.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl m-auto px-4 sm:px-6 lg:px-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="transition-transform hover:scale-[1.02]"
            >
              <Link href={`/recherche-de-fuite-piscine-saint-tropez/${study.slug}`} className="bg-white rounded-2xl overflow-hidden shadow-xl h-full flex flex-col">
                <div
                  className="h-48 w-full p-6 flex items-end bg-cover relative"
                >
                  <Image
                    src={study.img}
                    width={500}
                    height={500}
                    alt={study.title}
                    className='w-full left-0 top-0 h-[200px] absolute object-cover'
                  />
                  <h3 className="text-xl font-bold text-white">{study.title}</h3>
                </div>
                <div className="p-6 flex-grow">
                  <p className="text-[#475565] mb-4">
                    <span className="font-bold text-[#0f203f]">Problème :</span> {study.problem}
                  </p>
                  <p className="text-[#475565] mb-4">
                    <span className="font-bold text-[#0f203f]">Solution :</span> {study.solution}
                  </p>
                  <p className="text-[#475565]">
                    <span className="font-bold text-[#0f203f]">Résultat :</span> {study.result}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Service Areas */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f203f] mb-6">
                Zones d&apos;intervention à Saint-Tropez
              </h2>
              <p className="text-lg text-[#475565]">
                Nous couvrons toute la presqu&apos;île de Saint-Tropez et ses environs
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto ">
              {['Saint-Tropez', 'Ramatuelle', 'Gassin', 'Cogolin', 'Grimaud', 'Sainte-Maxime', 'La Croix-Valmer', 'Cavalaire-sur-Mer'].map((location, index) => (
                <div key={index} className="bg-[#F8FAFF] p-4 rounded-lg border border-[#E2E8F0] text-center">
                  <span className="font-medium text-[#0f203f]">{location}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Urgence fuite piscine à Saint-Tropez ?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Nos experts interviennent en moins de 24h pour préserver votre piscine et vos aménagements
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:+33756935200"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#F59E0B] text-[#1E3A8A] font-bold rounded-lg hover:bg-[#D97706] transition text-lg"
              >
                <Phone className="w-5 h-5" />
                <span>07 56 93 52 00</span>
              </a>
              <Button
                size="lg"
                className="bg-white text-[#1E3A8A] hover:bg-gray-100 text-lg font-bold py-6 px-8"
              >
                Demander un diagnostic
              </Button>
            </div>
            <p className="mt-4 text-sm opacity-80">Appel non surtaxé - Disponible 7j/7</p>
          </div>
        </section>
      </main>
    </>
  );
}